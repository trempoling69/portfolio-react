import { forwardRef } from 'react';
import './index.scss';
const ProjectSection = forwardRef<HTMLElement, object>((_, ref) => {
  return (
    <section className="project-section_container" ref={ref} id="project-section">
      <h1 className="project-section_title">Mes projets</h1>
    </section>
  );
});

export default ProjectSection;
