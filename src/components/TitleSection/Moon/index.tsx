import { motion } from 'framer-motion';
import './index.scss';
import moonSvg from './lune.svg';

const Moon = () => {
  return <motion.img src={moonSvg} alt="" className="moon-svg" />;
};
export default Moon;
