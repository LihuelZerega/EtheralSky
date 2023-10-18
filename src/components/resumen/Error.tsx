import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FcCancel } from "react-icons/fc";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { y: "-50%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 0.5 } },
  };

  const messageVariants = {
    hidden: { y: "50%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-[#dc63e6] to-[#9964ec] text-white select-none"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-2xl font-bold text-white mb-4"
        variants={titleVariants}
      >
        Oops! An error occurred.
      </motion.h1>
      <motion.p className="text-white text-center flex flex-row items-center" variants={messageVariants}>
        <FcCancel className='mx-2 text-2xl'/> <span className="text-2xl">{message}</span><FcCancel className='mx-2 text-2xl'/>
      </motion.p>
    </motion.div>
  );
};

export default Error;
