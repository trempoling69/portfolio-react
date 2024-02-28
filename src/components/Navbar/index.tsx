import './index.scss';
import { motion } from 'framer-motion';
type Props = {
  isTitleSectionInView: boolean;
  isAboutSectionInView: boolean;
  isProjectSectionInView: boolean;
  isContactSectionInView: boolean;
};
const Navbar = ({
  isTitleSectionInView,
  isAboutSectionInView,
  isProjectSectionInView,
  isContactSectionInView,
}: Props) => {
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      x: -5,
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5 },
    },
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <motion.nav
      className="navbarContainer"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={defaultAnimation}
    >
      <ul className="navListe">
        <li className={isTitleSectionInView ? 'active' : ''}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('title-section');
            }}
          >
            Home
          </a>
        </li>
        <li className={isAboutSectionInView ? 'active' : ''}>
          <a
            href="#about-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about-section');
            }}
          >
            A propos
          </a>
        </li>
        <li className={isProjectSectionInView ? 'active' : ''}>
          <a
            href="#project-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('project-section');
            }}
          >
            Projets
          </a>
        </li>
        <li className={isContactSectionInView ? 'active' : ''}>
          <a
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact-section');
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
