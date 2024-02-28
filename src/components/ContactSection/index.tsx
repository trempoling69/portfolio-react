import { forwardRef } from 'react';
import './index.scss';
import linkedin from './assets/linkedin.png';
import maps from './assets/broche-de-localisation.png';
import mail from './assets/email.png';
import phone from './assets/telephone.png';
const ContactSection = forwardRef<HTMLElement, object>((_, ref) => {
  return (
    <section className="contact-section_container" ref={ref} id="contact-section">
      <h1 className="contact-section_title">Contact</h1>
      <p>
        Une question ? Un projet ? Besoin de plus d'informations ? <br />
        N'hesitez pas à me contacter !
      </p>
      <div className="contacts">
        <a href="tel:+33671001835" className="square">
          <img src={phone} alt="" />
          <p>06.71.00.18.35</p>
        </a>
        <a href="mailto:contact@romain-mourieras.fr?subject=Nouveau projet" className="square">
          <img src={mail} alt="" />
          <p>contact@romain-mourieras.fr</p>
        </a>
        <a
          href="https://www.google.fr/maps/place/H%C3%B4tel+de+Ville+de+Lyon/@45.7675315,4.8323724,17z/data=!3m1!4b1!4m5!3m4!1s0x47f4ea473ab70d0b:0x712d7fa96d045491!8m2!3d45.7675278!4d4.8345611"
          target="_blank"
          rel="noopener noreferrer"
          className="square"
        >
          <img src={maps} alt="" />
          <p>Lyon, FR</p>
        </a>
        <a href="https://fr.linkedin.com/in/romain-mourieras" target="_blank" className="square">
          <img src={linkedin} alt="" />
          <p>Romain Mourieras</p>
        </a>
      </div>
    </section>
  );
});

export default ContactSection;
