'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="flex flex-col items-center space-y-4"
      >
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-primary border-opacity-25"></div>
          <div className="absolute inset-0">
            <div className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-semibold text-gray-900"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
} 