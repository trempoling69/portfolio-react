import { motion, useScroll, useTransform } from 'framer-motion';
import './index.scss';
import moonSvg from './lune.svg';

const Moon = ({ targetRef }) => {
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['end end', 'end start'] });
  const x = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    ['-25%', '0%', '10%', '20%', '40%', '60%', '70%', '100%', '120%', '110%', '110%']
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    ['10%', '-20%', '-40%', '-60%', '-70%', '-70%', '-50%', '-10%', '30%', '50%', '50%']
  );
  const scale = useTransform(scrollYProgress, [0, 0.75, 0.95], [1, 1.2, 0.01]);
  return <motion.img src={moonSvg} alt="" className="moon-svg" style={{ x, y, scale }} />;
};
export default Moon;
