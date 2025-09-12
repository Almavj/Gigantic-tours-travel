import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';
import Button from './common/Button';
import Card from './common/Card';
import AITravelQuiz from './AITravelQuiz';
import DealsTicker from '../components/DealsTicker'; // Correct import path

const Hero = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      src: '/images/hero/maasai-mara-placeholder.jpg',
      title: 'Maasai Mara Safari',
      subtitle: 'Witness the Great Migration'
    },
    {
      src: '/images/hero/diani-beach-placeholder.jpg',
      title: 'Diani Beach Paradise',
      subtitle: 'Crystal Clear Waters'
    },
    {
      src: '/images/hero/santorini-placeholder.jpg',
      title: 'Santorini Sunsets',
      subtitle: 'Greek Island Magic'
    },
    {
      src: '/images/kenya/mount-kenya.webp',
      title: 'Mount Kenya Adventure',
      subtitle: 'Conquer New Heights'
    },
    {
      src: '/images/international/kyoto.webp',
      title: 'Kyoto Cultural Journey',
      subtitle: 'Ancient Traditions'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]); // Added heroImages.length to dependencies

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Deals Ticker is now correctly placed inside the Hero component */}
      <DealsTicker />

      {/* Animated Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("${heroImages[currentImageIndex].src}")`
            }}
          />
        </AnimatePresence>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-orange-400/20 to-pink-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 px-4">
        <div className="text-center text-white max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Discover Your Next
              </span>
              <br />
              <motion.span
                className="text-orange-400 block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(251, 146, 60, 0.5)",
                    "0 0 40px rgba(251, 146, 60, 0.8)",
                    "0 0 20px rgba(251, 146, 60, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Adventure
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto"
          >
            From Kenya's stunning landscapes to international destinations,
            create memories that last a lifetime with our expertly curated travel experiences
          </motion.p>

          {/* AI Travel Quiz Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <Card className="glass-strong p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mr-4"
                >
                  <Sparkles className="h-8 w-8 text-white" />
                </motion.div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">AI Travel Quiz</h3>
                  <p className="text-blue-100">Find your perfect destination in 60 seconds</p>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setShowQuiz(true)}
                  variant="primary"
                  size="lg"
                  className="w-full pulse-glow text-xl py-4"
                  icon={Play}
                >
                  Start Your Journey
                </Button>
              </motion.div>

              <p className="text-blue-100 text-sm mt-4 opacity-80">
                ✨ Powered by AI • Personalized recommendations • Instant results
              </p>
            </Card>
          </motion.div>

          {/* Image Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center space-x-3 mb-8"
          >
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>

          {/* Current Destination Info */}
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-2">{heroImages[currentImageIndex].title}</h3>
            <p className="text-blue-200 text-lg">{heroImages[currentImageIndex].subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* AI Travel Quiz Modal */}
      <AITravelQuiz isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
    </div>
  );
};

export default Hero;
