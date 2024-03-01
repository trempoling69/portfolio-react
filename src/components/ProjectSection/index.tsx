import { forwardRef, useEffect, useRef, useState } from 'react';
import './index.scss';
import { projects } from '../../Data/project';
import { animate, motion, useMotionValue } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectSection = forwardRef<HTMLElement, object>((_, ref) => {
  const [sliderContraints, setSliderContraints] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const getSliderContraits = () => {
      const sliderTotalWidth = sliderRef.current?.scrollWidth || 0;
      const slidesScreenWidth = sliderRef.current?.offsetWidth || 0;
      setSliderContraints(sliderTotalWidth - slidesScreenWidth);
    };
    getSliderContraits();
    window.addEventListener('resize', getSliderContraits);
    return () => {
      window.removeEventListener('resize', getSliderContraits);
    };
  }, []);

  useEffect(() => {
    const sliderTotalWidth = sliderRef.current?.scrollWidth || 0;
    const controls = animate(x, [0, -sliderTotalWidth], {
      ease: 'linear',
      duration: 100,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });
    return controls.cancel;
  }, [x]);

  return (
    <section className="project-section_container" ref={ref} id="project-section">
      <h1 className="project-section_title">Mes projets</h1>
      <span className="project-section_subtitle">
        Envie d'en savoir plus sur mes projets ? Je serai ravis de vous en présenter plus en détail !
      </span>
      <motion.div
        className="projects"
        drag="x"
        style={{ x }}
        dragConstraints={{ right: 0, left: -sliderContraints }}
        ref={sliderRef}
      >
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </motion.div>
    </section>
  );
});

export default ProjectSection;
