import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, MapPin, Heart, Globe,
  Star, DollarSign, Calendar, ChevronRight,
  Sparkles, Target, Clock, Users
} from 'lucide-react';
import { alldestinations } from '../data/destinations'; // Changed to 'destinations' as per the TSX file

const AITravelQuiz = ({ isOpen, onClose }) => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  // Floating background elements with different animations
  const floatingElements = [
    {
      src: '/images/kenya/maasai-man.avif',
      style: {
        top: '15%',
        left: '5%',
        width: '140px',
        height: '120px',
        willChange: 'transform'
      },
      animation: {
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
        transition: { duration: 8, repeat: Infinity }
      }
    },
    {
      src: '/images/kenya/lamu.webp',
      style: {
        top: '70%',
        left: '80%',
        width: '300px',
        height: '150px',
        willChange: 'transform'
      },
      animation: {
        y: [0, 20, 0],
        x: [0, 10, 0],
        transition: { duration: 10, repeat: Infinity }
      }
    },
    {
      src: '/images/kenya/tsavo.webp',
      style: {
        top: '13%',
        right: '2%',
        width: '400px',
        height: '100px',
        willChange: 'transform'
      },
      animation: {
        y: [0, -10, 10, 0],
        transition: { duration: 12, repeat: Infinity }
      }
    },
    {
      src: '/images/international/paris.webp',
      style: {
        bottom: '10%',
        left: '20%',
        width: '120px',
        height: '80px',
        willChange: 'transform'
      },
      animation: {
        rotate: [0, 15, -15, 0],
        transition: { duration: 9, repeat: Infinity }
      }
    }
  ];

  // Parallax background layers
  const parallaxLayers = [
    {
      src: '/images/international/kyoto.webp',
      depth: 0.2,
      scale: 1.1,
      opacity: 0.7
    },
    {
      src: '/images/kenya/samburu.webp',
      depth: 0.4,
      scale: 1.1,
      opacity: 0.5
    }
  ];

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setActiveBgIndex(prev => (prev + 1) % floatingElements.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isOpen, floatingElements.length]);

  const getRecommendations = () => {
    let results = [...destinations]; // Using 'destinations' as per the TSX file

    // Filter based on quiz answers
    if (quizAnswers.type) {
      if (quizAnswers.type === 'Adventure') {
        results = results.filter(d => d.type === 'wildlife' || d.type === 'mountain' || d.type === 'bush');
      } else if (quizAnswers.type === 'Relaxation') {
        results = results.filter(d => d.type === 'coastal' || d.type === 'city');
      } else if (quizAnswers.type === 'Cultural') {
        results = results.filter(d => d.type === 'cultural' || d.category === 'kenya');
      } else if (quizAnswers.type === 'Luxury') {
        results = results.filter(d => d.price > 3000);
      }
    }

    if (quizAnswers.budget) {
      const budgetRanges = {
        '$500-$1000': [500, 1000],
        '$1000-$2000': [1000, 2000],
        '$2000-$5000': [2000, 5000],
        '$5000+': [5000, 10000]
      };

      const [min, max] = budgetRanges[quizAnswers.budget] || [0, 10000];
      results = results.filter(d => d.price >= min && d.price <= max);
    }

    // Score destinations based on interests
    if (quizAnswers.interests?.length > 0) {
      results = results.map(dest => {
        let score = 0;
        quizAnswers.interests.forEach((interest) => {
          if (dest.highlights.some(h => h.toLowerCase().includes(interest.toLowerCase()))) {
            score += 1;
          }
        });
        return { ...dest, personalizedScore: score };
      }).sort((a, b) => (b.personalizedScore || 0) - (a.personalizedScore || 0));
    }

    setRecommendations(results.slice(0, 3));
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

  const handleDestinationClick = (id) => {
    handleClose();
    window.location.href = `/destination/${id}`;
  };

  // The TSX file calls getRecommendations when moving to quizStep 4,
  // this useEffect ensures that behavior is replicated.
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
          style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)'
          }}
          onClick={handleClose}
        >
          {/* Parallax background layers */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {parallaxLayers.map((layer, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="absolute inset-0"
                style={{
                  scale: layer.scale,
                  opacity: layer.opacity,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: `url(${layer.src})`,
                  willChange: 'transform'
                }}
                animate={{
                  x: [0, 100 * Number(layer.depth), 0],
                  y: [0, 50 * Number(layer.depth), 0]
                }}
                transition={{
                  duration: 30 + (index * 10),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </React.Fragment>
          ))}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                className="absolute rounded-lg overflow-hidden shadow-lg"
                style={element.style}
                animate={element.animation}
              >
                <img
                  src={element.src}
                  alt=""
                  width={parseInt(element.style.width)}
                  height={parseInt(element.style.height)}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 20 }}
            className="glass-strong rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 border-2 border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full mr-3"
                  >
                    <Sparkles className="h-6 w-6 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">
                    {quizStep === 4 ? 'Your Perfect Matches' : 'AI Travel Quiz'}
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white/70 hover:text-white transition-colors p-1"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Progress indicator */}
              {quizStep < 4 && (
                <div className="mb-8">
                  <div className="flex items-center justify-center mb-3">
                    {[1, 2, 3, 4].map((step) => (
                      <React.Fragment key={step}>
                        <div className="relative">
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                              quizStep >= step - 1
                                ? 'bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg'
                                : 'bg-white/20 text-white/60'
                            }`}
                          >
                            {quizStep >= step - 1 ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring' }}
                              >
                                {step}
                              </motion.div>
                            ) : (
                              step
                            )}
                          </div>
                          {quizStep === step - 1 && (
                            <motion.div
                              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-orange-300"
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              Current
                            </motion.div>
                          )}
                        </div>
                        {step < 4 && (
                          <div
                            className={`flex-1 h-1 mx-2 max-w-[40px] transition-colors rounded-full ${
                              quizStep >= step ? 'bg-gradient-to-r from-orange-400 to-pink-500' : 'bg-white/20'
                            }`}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              <div className="min-h-[300px]">
                {/* Step 1: Experience Type */}
                {quizStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="mb-6 text-lg font-medium text-white text-center">
                      What kind of traveler are you?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { type: 'Adventure', icon: <Target />, color: 'from-green-400 to-emerald-600', desc: 'Hiking, wildlife, exploration' },
                        { type: 'Relaxation', icon: <Heart />, color: 'from-blue-400 to-sky-600', desc: 'Spa, beaches, peaceful' },
                        { type: 'Cultural', icon: <Globe />, color: 'from-amber-400 to-orange-500', desc: 'History, local experiences' },
                        { type: 'Luxury', icon: <Star />, color: 'from-purple-400 to-indigo-600', desc: '5-star, exclusive, premium' }
                      ].map((item) => (
                        <motion.button
                          key={item.type}
                          whileHover={{ y: -5, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setQuizAnswers({ ...quizAnswers, type: item.type });
                            setQuizStep(1);
                          }}
                          className={`p-5 rounded-xl transition-all text-left focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-xl`}
                        >
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                              {React.cloneElement(item.icon, { className: "w-6 h-6" })}
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

                {/* Step 2: Budget */}
                {quizStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="mb-6 text-lg font-medium text-white text-center">
                      What's your comfort budget range?
                    </p>
                    <div className="space-y-4">
                      {[
                        { range: '$500-$1000', level: 'Economy', width: 'w-1/4' },
                        { range: '$1000-$2000', level: 'Standard', width: 'w-1/2' },
                        { range: '$2000-$5000', level: 'Premium', width: 'w-3/4' },
                        { range: '$5000+', level: 'Luxury', width: 'w-full' }
                      ].map((item) => (
                        <motion.button
                          key={item.range}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setQuizAnswers({ ...quizAnswers, budget: item.range });
                            setQuizStep(2);
                          }}
                          className="w-full p-4 border-2 border-white/20 rounded-xl hover:border-orange-400 hover:bg-white/10 transition-all text-left focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                              <DollarSign className="text-orange-400 mr-2" />
                              <span className="font-medium">{item.range}</span>
                            </div>
                            <span className="text-sm text-white/70">{item.level}</span>
                          </div>
                          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r from-orange-400 to-pink-500 ${item.width}`}
                            />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Travel Time */}
                {quizStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="mb-6 text-lg font-medium text-white text-center">
                      When's your ideal travel time?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Within 1 month', '1-3 months', '3-6 months', '6+ months'].map((timeframe) => (
                        <motion.button
                          key={timeframe}
                          whileHover={{ y: -5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setQuizAnswers({ ...quizAnswers, timeframe });
                            setQuizStep(3);
                          }}
                          className="p-5 border-2 border-white/20 rounded-xl hover:border-orange-400 hover:bg-white/10 transition-all text-left focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        >
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center mr-4 relative">
                              <Calendar className="text-orange-400 w-5 h-5" />
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-800">
                                {timeframe === 'Within 1 month' ? '!' :
                                 timeframe === '1-3 months' ? '1' :
                                 timeframe === '3-6 months' ? '3' : '6'}
                              </div>
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

                {/* Step 4: Interests */}
                {quizStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="mb-6 text-lg font-medium text-white text-center">
                      What gets you excited about travel?
                    </p>
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
                      ].map((interest) => (
                        <motion.button
                          key={interest.name}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setQuizAnswers((prev) => ({
                              ...prev,
                              interests: prev.interests?.includes(interest.name)
                                ? prev.interests.filter((i) => i !== interest.name)
                                : [...(prev.interests || []), interest.name]
                            }));
                          }}
                          className={`px-4 py-3 rounded-xl text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 flex flex-col items-center ${
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
                  </motion.div>
                )}

                {/* Results Step */}
                {quizStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Your Perfect Matches
                      </h3>
                      <p className="text-white/80 max-w-md mx-auto">
                        Based on your preferences, we've curated these destinations that match your travel personality.
                      </p>
                    </div>

                    {recommendations.length > 0 ? (
                      recommendations.map((rec, index) => (
                        <motion.div
                          key={rec.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="glass border border-white/20 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                          onClick={() => handleDestinationClick(rec.id)}
                        >
                          <div className="flex flex-col sm:flex-row">
                            <div className="relative w-full sm:w-2/5 h-48 sm:h-auto">
                              <img
                                src={rec.image}
                                alt={rec.name}
                                className="w-full h-full group-hover:scale-105 transition-transform object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                              <div className="absolute top-3 right-3 flex items-center bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
                                <Star className="text-yellow-400 mr-1 w-3 h-3" />
                                4.8
                              </div>
                            </div>
                            <div className="p-4 sm:p-6 flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                                  {rec.name}
                                </h4>
                                <span className="text-orange-400 font-bold whitespace-nowrap">
                                  ${rec.price.toLocaleString()}
                                  <span className="text-white/70 font-normal"> / person</span>
                                </span>
                              </div>
                              <p className="text-white/80 mb-3 line-clamp-2">
                                {rec.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {rec.highlights.slice(0, 3).map((highlight) => (
                                  <span
                                    key={highlight}
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      quizAnswers.interests?.includes(highlight)
                                        ? 'bg-orange-400/20 text-orange-300 border border-orange-400/30'
                                        : 'bg-white/10 text-white/80'
                                    }`}
                                  >
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center text-sm text-white/70">
                                  <MapPin className="mr-1 w-4 h-4" />
                                  {rec.location}
                                </div>
                                <span className="inline-flex items-center text-orange-400 font-medium group-hover:underline">
                                  View details <ChevronRight className="ml-1 w-4 h-4" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-white/70 mb-4">We're showing popular destinations that might inspire you:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {destinations.slice(0, 3).map(dest => ( // Using 'destinations' as per the TSX file
                            <div
                              key={dest.id}
                              className="block group cursor-pointer"
                              onClick={() => handleDestinationClick(dest.id)}
                            >
                              <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                                <img
                                  src={dest.image}
                                  alt={dest.name}
                                  className="w-full h-full group-hover:scale-105 transition-transform object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                <div className="absolute bottom-2 left-2 flex items-center bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
                                  <Star className="text-yellow-400 mr-1 w-3 h-3" />
                                  4.8
                                </div>
                              </div>
                              <h5 className="font-medium text-white group-hover:text-orange-300 transition-colors">
                                {dest.name}
                              </h5>
                              <p className="text-sm text-white/70">${dest.price.toLocaleString()} per person</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between gap-4">
                {quizStep > 0 && quizStep < 4 && (
                  <motion.button
                    whileHover={{ x: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setQuizStep(prev => prev - 1)}
                    className="px-6 py-3 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center"
                  >
                    <ChevronRight className="transform rotate-180 mr-2 w-4 h-4" />
                    Back
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (quizStep === 3) {
                      getRecommendations();
                      setQuizStep(4);
                    } else if (quizStep < 3) {
                      setQuizStep(prev => prev + 1);
                    } else {
                      handleClose();
                    }
                  }}
                  className={`px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    quizStep === 4
                      ? 'bg-white/20 hover:bg-white/30 text-white focus:ring-white/50'
                      : 'bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white focus:ring-orange-500'
                  } ml-auto flex items-center justify-center min-w-[160px]`}
                >
                  {quizStep === 3 ? (
                    <>
                      <Sparkles className="mr-2 w-4 h-4" />
                      Find My Matches
                    </>
                  ) : quizStep === 4 ? 'Close' : (
                    <>
                      Continue
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AITravelQuiz;