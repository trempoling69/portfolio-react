import { forwardRef, useEffect, useRef, useState } from 'react';
import './index.scss';
import { projects } from '../../Data/project';
import { motion, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectSection = forwardRef<HTMLElement, object>((_, ref) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [distance, setDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const setupInfiniteSlider = () => {
      if (!sliderRef.current) return;
      const sliderTotalWidth = sliderRef.current.scrollWidth || 0;
      const gap = parseFloat(window.getComputedStyle(sliderRef.current).gap) || 0;

      setDistance((sliderTotalWidth + gap) / 2);
    };

    const timeoutId = setTimeout(setupInfiniteSlider, 100);
    window.addEventListener('resize', setupInfiniteSlider);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', setupInfiniteSlider);
    };
  }, []);

  useAnimationFrame((_t, delta) => {
    if (isDragging || !distance) return;

    const velocity = (delta / 1000) * 100;
    let newX = x.get() - velocity;

    if (newX <= -distance) {
      newX += distance;
    }

    x.set(newX);
  });

  useMotionValueEvent(x, 'change', (latest) => {
    if (!distance) return;

    if (latest <= -distance) {
      x.set(latest + distance);
    } else if (latest > 0) {
      x.set(latest - distance);
    }
  });

  return (
    <section className="project-section_container" ref={ref} id="project-section">
      <h1 className="project-section_title">Mes projets</h1>
      <span className="project-section_subtitle">
        Envie d'en savoir plus sur mes projets ? Je serai ravi de vous en présenter plus en détail !
      </span>
      <motion.div
        className="projects"
        drag="x"
        style={{ x }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        ref={sliderRef}
      >
        {[...projects, ...projects].map((project, index) => (
          <ProjectCard project={project} key={`project-${index}`} />
        ))}
      </motion.div>
    </section>
  );
});

export default ProjectSection;
