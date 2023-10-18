import React, { useEffect } from "react";
import { Logo } from "./subcomps/Logo";
import { motion } from 'framer-motion';

const WelcomeMessage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);  

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-[#dc63e6] to-[#9964ec] text-white select-none">
      <motion.div 
        initial={{ scale: 0, opacity: 0, y: 0 }}
        animate={{ scale: 1, opacity: 1, y: [-10, 10] }}
        transition={{ 
            duration: 0.5, 
            y: { yoyo: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <Logo />
      </motion.div>
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-5xl mt-5"
      >
        Welcome to
      </motion.h1>
      <motion.h2 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-6xl font-bold mb-5"
      >
        Ethereal Sky
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="text-xl text-center mx-6"
      >
        Please enter a location to get the weather information.
      </motion.p>
    </div>
  );
};

export default WelcomeMessage;