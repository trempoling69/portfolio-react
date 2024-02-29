import { Project } from '../../../Data/project';
import './index.scss';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card_container">
      <div className="project-image">
        <img src={project.image} alt="logo du projet" />
      </div>
      <div className="project-description_container">
        <span className="project-company">{project.company}</span>
        <span className="project-name">{project.name}</span>
        <div className="project-part_container">
          <span className="project-title_part">Description du projet</span>
          <p className="project-text_part">{project.productDesciption}</p>
        </div>
        <div className="project-part_container">
          <span className="project-title_part">Mon rôle</span>
          <p className="project-text_part">{project.roleDescription}</p>
        </div>
        <div className="project-part_container">
          <span className="project-title_part">Ce que ça m'a apporté</span>
          <p className="project-text_part">{project.ability}</p>
        </div>
        <div className="project-part_container">
          <span className="project-title_part">Technologies utilisées</span>
          <div className="technology-list">
            {project.technologies.map((technology, index) => (
              <div key={index} className="technology_logo-container">
                <img src={technology.image} alt="" style={{ height: '5rem' }} />
                <span className="tooltip-text">{technology.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
