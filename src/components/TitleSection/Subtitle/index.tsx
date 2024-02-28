import { motion } from 'framer-motion';
import './index.scss';

const Subtitle = ({ text }: { text: string }) => {
  const container = {
    hidden: {
      y: 2,
      transition: {
        staggerChildren: 0.1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.1,
      },
    },
  };
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 3,
      x: 3,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };
  return (
    <motion.span className="title-section_subtitle" key={text}>
      <span className="sr-only">{text}</span>
      <motion.span aria-hidden initial="hidden" animate="visible" exit="hidden" variants={container}>
        {text.split('').map((letter, index) => (
          <motion.span variants={defaultAnimation} key={index} style={{ display: 'inline-block' }}>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </motion.span>
  );
};

export default Subtitle;
