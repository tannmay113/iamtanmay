import React from 'react';
import { motion } from 'framer-motion';

export function TextAnimation() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-surface-light dark:bg-surface-dark transition-colors duration-300">
      <div className="text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-accent via-purple-500 to-pink-500
                     tracking-tight"
        >
          Tannmay Kumar
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="h-0.5 w-24 sm:w-32 mx-auto mt-4 bg-gradient-to-r from-accent to-purple-500 rounded-full"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut"
          }}
          className="mt-4 text-lg sm:text-xl md:text-2xl 
                     tracking-wide
                     font-medium"
        >
          <span className="bg-clip-text text-transparent 
                           bg-gradient-to-r from-emerald-500 to-teal-500">
            Software Engineer
          </span>
        </motion.p>
      </div>
    </div>
  );
}

export default TextAnimation;