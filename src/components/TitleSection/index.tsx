import { AnimatePresence } from 'framer-motion';
import './index.scss';
import Subtitle from './Subtitle';
import { forwardRef, useEffect, useState } from 'react';
import Moon from './Moon';

const TitleSection = forwardRef<HTMLDivElement, object>((_, ref) => {
  const [currentSub, setCurrentSub] = useState(0);
  const subtitleArray = ['Développeur web junior', 'Etudiant', 'Passionné'];
  const maxValue = subtitleArray.length;
  const intervalInSeconds = 6;
  useEffect(() => {
    const incrementCurrentSub = () => {
      setCurrentSub((prevSub) => (prevSub + 1) % (maxValue + 1));
    };

    const intervalId = setInterval(incrementCurrentSub, intervalInSeconds * 1000);

    if (currentSub === maxValue) {
      setCurrentSub(0);
    }

    return () => clearInterval(intervalId);
  }, [currentSub, maxValue, intervalInSeconds]);

  return (
    <>
      <section className="title-section_container" ref={ref} id="title-section">
        <div className="title-text_container">
          <span className="title-section_name">Romain Mourieras</span>
          <AnimatePresence>
            {subtitleArray.map((sub, index) => index === currentSub && <Subtitle key={index} text={sub} />)}
          </AnimatePresence>
        </div>
        <Moon />
      </section>
    </>
  );
});

export default TitleSection;
