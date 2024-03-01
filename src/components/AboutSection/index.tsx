import { forwardRef } from 'react';
import './index.scss';
import CV from '../../Data/Romain-Mourieras_CV.pdf';
import picture from '../../assets/pp_rm_recad.png';
const AboutSection = forwardRef<HTMLElement, object>((_, ref) => {
  return (
    <section className="about-section_container" ref={ref} id="about-section">
      <h1 className="about-section_title">Quelques mots ...</h1>
      <div className="about-section_content">
        <div className="about-section_text-container">
          <div className="about-section_some">
            <h1>... Sur moi</h1>
            <p>
              Étudiant de 21 ans en troisième année, en alternance, dans une école de développement web à Lyon, je
              souhaite découvrir toutes les facettes de ce milieu qui me passionne particulièrement. J'ai acquis une
              expérience certaine grâce à mes études, mes expériences professionnelles et aux différents projets
              personnels que j'ai pu réaliser. J'ai travaillé sur une variété de projets, allant de sites vitrines
              simples à des applications web plus complexes nécessitant une gestion de bases de données et une
              authentification utilisateur. Passionné et avide de toujours en apprendre plus, je suis constamment à la
              recherche de nouveaux projets et de nouvelles aventures pour apprendre et me perfectionner en tant que
              développeur web. Si vous cherchez un développeur passionné et motivé pour votre prochain projet, n'hésitez
              pas à me contacter. Je serai ravi de discuter de vos idées et de voir comment je peux vous aider à
              atteindre vos objectifs.
            </p>
          </div>
          <div className="about-section_personality">
            <h1>... Sur ma personnalité</h1>
            <p>
              Je suis une personne curieuse et déterminée qui aime aller au bout des choses et trouver des solutions
              créatives aux défis qui se posent à moi. En dehors de mon travail en tant que développeur, la photographie
              est une passion qui me tient particulièrement à cœur. J'aime capturer les moments uniques et les petits
              détails qui m'entourent. J'adore explorer de nouvelles techniques et approches en matière de photographie.
              Si vous êtes curieux de voir quelques-unes de mes photos, voici le lien vers mon{' '}
              <a href="https://www.instagram.com/r.__.photos/" target="_blank" className="link-instagram">
                Instagram dédié à ma passion :)
              </a>
            </p>
          </div>
          <div className="about-useful-link_container">
            <h1 className="useful-link_title">
              Si vous souhaitez en apprendre plus sur moi voici quelques liens utiles :{' '}
            </h1>
            <div className="useful-link_btn-container">
              <a href={CV} target="_blank" className="useful-link_button">
                Mon cv
              </a>
              <a href="https://github.com/trempoling69" target="_blank" className="useful-link_button">
                Mon github
              </a>
            </div>
          </div>
        </div>
        <img src={picture} alt="" className="picture-profil" />
      </div>
    </section>
  );
});

export default AboutSection;
