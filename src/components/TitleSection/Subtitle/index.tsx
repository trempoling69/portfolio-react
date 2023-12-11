import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './index.scss';

const Subtitle = ({ text }: { text: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start center', 'end center'] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div className="container" ref={targetRef}>
      <motion.span className="title-section_subtitle" style={{ opacity }}>
        {text}
      </motion.span>
    </div>
  );
};

export default Subtitle;
