import { motion, useScroll, useTransform } from 'framer-motion';
import StarBackground from '../StarBackground';
import './index.scss';
import Subtitle from './Subtitle';
// import Moon from './Moon';
import { useRef } from 'react';
// import Moon from './Moon';

const TitleSection = () => {
  const targetRef = useRef(null);
  const subtitleArray = ['Développeur web junior', 'Etudiant', 'Passionné', ''];
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['end end', 'end start'] });
  // const scale = useTransform(scrollYProgress, [0, 0.75, 0.95], [1, 1.2, 0.01]);
  // const y = useTransform(scrollYProgress, [0, 0.75, 0.9], ['0%', '150%', '950%']);
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-400%']);

  return (
    <StarBackground>
      <motion.section
        className="title-section_container"
        initial={{ transform: 'translateY(-15px)' }}
        animate={{ transform: 'translateY(15px)' }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 4, ease: 'easeInOut' }}
        ref={targetRef}
      >
        <motion.span className="title-section_name" style={{ x }}>
          Romain Mourieras
        </motion.span>
        {subtitleArray.map((sub, index) => (
          <Subtitle text={sub} key={index} />
        ))}
      </motion.section>
      {/* <Moon targetRef={targetRef} /> */}
    </StarBackground>
  );
};

export default TitleSection;
