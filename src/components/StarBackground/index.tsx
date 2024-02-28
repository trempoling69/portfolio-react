import './index.scss';
import { motion } from 'framer-motion';
const StarBackground = () => {
  return (
    <motion.div className="sky">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="comet" style={{ animationDelay: `${Math.random() * 30}s` }}></div>
    </motion.div>
  );
};

export default StarBackground;
