import StarBackground from '../../components/StarBackground';
import TitleSection from '../../components/TitleSection';
import AboutSection from '../../components/AboutSection';
import './index.scss';
import Navbar from '../../components/Navbar';
import { AnimatePresence, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ProjectSection from '../../components/ProjectSection';
import ContactSection from '../../components/ContactSection';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const titleSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const isTitleSectionInView = useInView(titleSectionRef, { amount: 0.55 });
  const isAboutSectionInView = useInView(aboutSectionRef, { amount: 0.45 });
  const isProjectSectionInView = useInView(projectSectionRef, { amount: 0.55 });
  const isContactSectionInView = useInView(contactSectionRef, { amount: 0.45 });
  useEffect(() => {
    const getClientWidth = () => {
      const screenWidth = window.innerWidth || 0;
      setIsDesktop(screenWidth > 1024);
    };
    getClientWidth();
    window.addEventListener('resize', getClientWidth);
    return () => {
      window.removeEventListener('resize', getClientWidth);
    };
  }, []);
  const isNavbarDisplay = isDesktop && (isAboutSectionInView || isProjectSectionInView || isContactSectionInView);

  return (
    <div className="home-main_container">
      <StarBackground />
      <div className="groups">
        <AnimatePresence>
          {isNavbarDisplay && (
            <Navbar
              isTitleSectionInView={isTitleSectionInView}
              isAboutSectionInView={isAboutSectionInView}
              isProjectSectionInView={isProjectSectionInView}
              isContactSectionInView={isContactSectionInView}
            />
          )}
        </AnimatePresence>
        <TitleSection ref={titleSectionRef} />
        <AboutSection ref={aboutSectionRef} />
        <ProjectSection ref={projectSectionRef} />
        <ContactSection ref={contactSectionRef} />
      </div>
    </div>
  );
};

export default Home;
