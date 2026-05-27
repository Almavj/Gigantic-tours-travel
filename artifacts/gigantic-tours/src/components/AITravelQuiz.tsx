import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Heart, Globe,
  Star, DollarSign, Calendar,
  Sparkles, Target
} from 'lucide-react';
import { allDestinations } from '../data/destinations';
import { Destination } from '../types/destination';

interface QuizAnswers {
  type?: string;
  budget?: string;
  timeframe?: string;
  interests?: string[];
}

interface AITravelQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const AITravelQuiz = ({ isOpen, onClose }: AITravelQuizProps) => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({});
  const [recommendations, setRecommendations] = useState<Destination[]>([]);

  const getRecommendations = () => {
    let results: Destination[] = [...allDestinations];

    if (quizAnswers.type) {
      if (quizAnswers.type === 'Adventure') {
        results = results.filter(d =>
          d.category?.includes('adventure') ||
          d.category?.includes('wildlife') ||
          d.category?.includes('safari') ||
          d.tags?.some(tag => ['wildlife', 'mountain', 'adventure'].includes(tag))
        );
      } else if (quizAnswers.type === 'Relaxation') {
        results = results.filter(d =>
          d.category?.includes('beach') ||
          d.category?.includes('relaxation') ||
          d.category?.includes('coastal') ||
          d.tags?.some(tag => ['beach', 'coast', 'relaxation', 'marine'].includes(tag))
        );
      } else if (quizAnswers.type === 'Cultural') {
        results = results.filter(d =>
          d.category?.includes('cultural') ||
          d.category?.includes('historical') ||
          d.tags?.some(tag => ['cultural', 'heritage', 'swahili-culture', 'historical'].includes(tag))
        );
      } else if (quizAnswers.type === 'Luxury') {
        results = results.filter(d =>
          d.price > 3000 ||
          d.tags?.includes('luxury') ||
          d.category?.includes('luxury')
        );
      }
    }

    if (quizAnswers.budget) {
      const budgetRanges: Record<string, [number, number]> = {
        '$500-$1000': [500, 1000],
        '$1000-$2000': [1000, 2000],
        '$2000-$5000': [2000, 5000],
        '$5000+': [5000, 100000]
      };
      const [min, max] = budgetRanges[quizAnswers.budget] || [0, 100000];
      results = results.filter(d => d.price >= min && d.price <= max);
    }

    const interests = quizAnswers.interests;
    if (interests && interests.length > 0) {
      type ScoredDest = Destination & { personalizedScore: number };
      results = (results.map(dest => {
        let score = 0;
        interests.forEach((interest) => {
          const interestLower = interest.toLowerCase();
          if (dest.category?.some(cat => cat.toLowerCase().includes(interestLower))) score += 3;
          if (dest.tags?.some(tag => tag.toLowerCase().includes(interestLower))) score += 3;
          if (dest.highlights?.some(h => h.toLowerCase().includes(interestLower))) score += 2;
          if (dest.description?.toLowerCase().includes(interestLower)) score += 1;
          if (dest.name?.toLowerCase().includes(interestLower)) score += 1;
          if (interestLower === 'beaches') {
            if (dest.category?.includes('beach') || dest.tags?.some(t => ['beach', 'coast', 'marine'].includes(t))) score += 5;
          }
        });
        return { ...dest, personalizedScore: score };
      }) as ScoredDest[])
        .filter(d => d.personalizedScore > 0)
        .sort((a, b) => b.personalizedScore - a.personalizedScore);
    }

    if (results.length === 0) {
      results = allDestinations.filter(d => d.rating >= 4.5).slice(0, 6);
    }

    setRecommendations(results.slice(0, 6));
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
    setRecommendations([]);
  };

  const handleClose = () => {
    resetQuiz();
    onClose();
  };

  const handleDestinationClick = (slug: string) => {
    handleClose();
    window.location.href = `/destinations/${slug}`;
  };

  useEffect(() => {
    if (quizStep === 4) {
      getRecommendations();
    }
  }, [quizStep]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)' }}
          onClick={handleClose}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { src: '/images/kenya/maasai-man.webp', style: { top: '15%', left: '5%', width: '140px', height: '120px' } },
              { src: '/images/kenya/lamu.webp', style: { top: '70%', left: '80%', width: '200px', height: '120px' } },
              { src: '/images/international/paris.webp', style: { bottom: '10%', left: '20%', width: '120px', height: '80px' } }
            ].map((el, i) => (
              <motion.div
                key={i}
                className="absolute rounded-lg overflow-hidden shadow-lg"
                style={el.style as React.CSSProperties}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8 + i * 2, repeat: Infinity }}
              >
                <img src={el.src} alt="" className="object-cover w-full h-full" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 20 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 border-2 border-white/20"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full mr-3"
                  >
                    <Sparkles className="h-6 w-6 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">
                    {quizStep === 4 ? 'Your Perfect Matches' : 'AI Travel Quiz'}
                  </h2>
                </div>
                <button onClick={handleClose} className="text-white/70 hover:text-white transition-colors p-1">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {quizStep < 4 && (
                <div className="mb-8">
                  <div className="flex items-center justify-center mb-3">
                    {[1, 2, 3, 4].map((step) => (
                      <React.Fragment key={step}>
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                            quizStep >= step - 1
                              ? 'bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg'
                              : 'bg-white/20 text-white/60'
                          }`}
                        >
                          {step}
                        </div>
                        {step < 4 && (
                          <div className={`flex-1 h-1 mx-2 max-w-[40px] rounded-full ${quizStep >= step ? 'bg-gradient-to-r from-orange-400 to-pink-500' : 'bg-white/20'}`} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              <div className="min-h-[300px]">
                {quizStep === 0 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <p className="mb-6 text-lg font-medium text-white text-center">What kind of traveler are you?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { type: 'Adventure', icon: <Target />, color: 'from-green-400 to-emerald-600', desc: 'Hiking, wildlife, exploration' },
                        { type: 'Relaxation', icon: <Heart />, color: 'from-blue-400 to-sky-600', desc: 'Spa, beaches, peaceful' },
                        { type: 'Cultural', icon: <Globe />, color: 'from-amber-400 to-orange-500', desc: 'History, local experiences' },
                        { type: 'Luxury', icon: <Star />, color: 'from-purple-400 to-indigo-600', desc: '5-star, exclusive, premium' }
                      ].map(item => (
                        <motion.button
                          key={item.type}
                          whileHover={{ y: -5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => { setQuizAnswers({ ...quizAnswers, type: item.type }); setQuizStep(1); }}
                          className={`p-5 rounded-xl text-left bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-xl`}
                        >
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                              {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                            </div>
                            <div>
                              <span className="font-bold text-lg block">{item.type}</span>
                              <span className="text-white/80 text-sm">{item.desc}</span>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {quizStep === 1 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <p className="mb-6 text-lg font-medium text-white text-center">What's your comfort budget range?</p>
                    <div className="space-y-4">
                      {[
                        { range: '$500-$1000', level: 'Economy', width: 'w-1/4' },
                        { range: '$1000-$2000', level: 'Standard', width: 'w-1/2' },
                        { range: '$2000-$5000', level: 'Premium', width: 'w-3/4' },
                        { range: '$5000+', level: 'Luxury', width: 'w-full' }
                      ].map(item => (
                        <motion.button
                          key={item.range}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => { setQuizAnswers({ ...quizAnswers, budget: item.range }); setQuizStep(2); }}
                          className="w-full p-4 border-2 border-white/20 rounded-xl hover:border-orange-400 hover:bg-white/10 transition-all text-left text-white"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                              <DollarSign className="text-orange-400 mr-2" />
                              <span className="font-medium">{item.range}</span>
                            </div>
                            <span className="text-sm text-white/70">{item.level}</span>
                          </div>
                          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r from-orange-400 to-pink-500 ${item.width}`} />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {quizStep === 2 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <p className="mb-6 text-lg font-medium text-white text-center">When's your ideal travel time?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Within 1 month', '1-3 months', '3-6 months', '6+ months'].map(timeframe => (
                        <motion.button
                          key={timeframe}
                          whileHover={{ y: -5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => { setQuizAnswers({ ...quizAnswers, timeframe }); setQuizStep(3); }}
                          className="p-5 border-2 border-white/20 rounded-xl hover:border-orange-400 hover:bg-white/10 transition-all text-left text-white"
                        >
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center mr-4">
                              <Calendar className="text-orange-400 w-5 h-5" />
                            </div>
                            <div>
                              <span className="font-medium block">{timeframe}</span>
                              <span className="text-sm text-white/70">
                                {timeframe === 'Within 1 month' ? 'Last-minute deals' :
                                  timeframe === '1-3 months' ? 'Early planning' :
                                  timeframe === '3-6 months' ? 'Flexible dates' : 'Long-term plans'}
                              </span>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {quizStep === 3 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <p className="mb-6 text-lg font-medium text-white text-center">What gets you excited about travel?</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {[
                        { name: 'Beaches', icon: '🏖️' },
                        { name: 'Wildlife', icon: '🦁' },
                        { name: 'Hiking', icon: '⛰️' },
                        { name: 'History', icon: '🏛️' },
                        { name: 'Food', icon: '🍜' },
                        { name: 'Culture', icon: '🎎' },
                        { name: 'Shopping', icon: '🛍️' },
                        { name: 'Nightlife', icon: '🍹' }
                      ].map(interest => (
                        <motion.button
                          key={interest.name}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setQuizAnswers(prev => ({
                              ...prev,
                              interests: prev.interests?.includes(interest.name)
                                ? prev.interests.filter(i => i !== interest.name)
                                : [...(prev.interests || []), interest.name]
                            }));
                          }}
                          className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex flex-col items-center ${
                            quizAnswers.interests?.includes(interest.name)
                              ? 'bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg'
                              : 'bg-white/20 hover:bg-white/30 text-white'
                          }`}
                          style={{ minWidth: '100px' }}
                        >
                          <span className="text-xl mb-1">{interest.icon}</span>
                          <span>{interest.name}</span>
                        </motion.button>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setQuizStep(4)}
                        disabled={!quizAnswers.interests?.length}
                        className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-3 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Find My Perfect Destination ✨
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {quizStep === 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {recommendations.length > 0 ? (
                      <>
                        <p className="text-white/80 text-center mb-6">Based on your preferences, we recommend:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {recommendations.map(dest => (
                            <motion.div
                              key={dest.slug}
                              whileHover={{ y: -5 }}
                              className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer border border-white/20 hover:border-white/40 transition-all"
                              onClick={() => handleDestinationClick(dest.slug)}
                            >
                              <div className="relative h-32 overflow-hidden">
                                <img
                                  src={dest.images?.[0] || '/images/hero-fallback.webp'}
                                  alt={dest.name}
                                  className="w-full h-full object-cover"
                                  onError={e => { (e.target as HTMLImageElement).src = '/images/hero-fallback.webp'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-2 left-2 right-2">
                                  <h3 className="text-white font-bold">{dest.name}</h3>
                                </div>
                              </div>
                              <div className="p-3">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="ml-1 text-white text-sm">{dest.rating}</span>
                                  </div>
                                  <span className="text-orange-300 font-bold text-sm">${dest.price?.toLocaleString()}</span>
                                </div>
                                <p className="text-white/70 text-xs mt-1 line-clamp-2">{dest.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-6 flex justify-center gap-4">
                          <button
                            onClick={resetQuiz}
                            className="px-6 py-2 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-all"
                          >
                            Retake Quiz
                          </button>
                          <button
                            onClick={() => { handleClose(); window.location.href = '/destinations'; }}
                            className="px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-xl hover:opacity-90 transition-all"
                          >
                            Browse All Destinations
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-white text-lg mb-4">No exact matches found.</p>
                        <button
                          onClick={() => { handleClose(); window.location.href = '/destinations'; }}
                          className="px-6 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30"
                        >
                          Browse All Destinations
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AITravelQuiz;
