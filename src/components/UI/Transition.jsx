import { motion } from 'framer-motion';

export const Transition = ({ children }) => {
    console.log('asldknsalkdn')
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};