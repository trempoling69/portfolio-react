type Projects = Project[];
export type Project = {
  name: string;
  company: string;
  image: string;
  technologies: Technology[];
  productDesciption: string;
  roleDescription: string;
  ability: string;
};
type Technology = {
  name: string;
  image: string;
};
import akanemaLogo from './img/akanema.png';
import rougyLogo from './img/rougy-logo.png';
import reactJsLogo from './img/reactjs.svg';
import tailwindLogo from './img/tailwind.svg';
import directusLogo from './img/directus.svg';
import sentryLogo from './img/sentry.svg';
import youSignLogo from './img/yousign.svg';
import reduxLogo from './img/redux.svg';
import laravelLogo from './img/laravel.svg';
import typescriptLogo from './img/typescript.svg';
import scssLogo from './img/scss.svg';
import nestjsLogo from './img/nestjs.svg';
import dockerLogo from './img/docker.svg';
import nginxLogo from './img/nginx.png';
import mysqlLogo from './img/mysql.svg';
import reactnativeLogo from './img/reactnative.svg';
import expoLogo from './img/expo.svg';
import nodejsLogo from './img/nodejs.svg';
import phpLogo from './img/php.svg';
import vuejsLogo from './img/vuejs.svg';
import persoLogo from './img/perso.png';
import githubLogo from './img/github.svg';
import gitlabLogo from './img/gitlab.svg';
export const projects: Projects = [
  {
    name: 'Clique',
    company: 'Akanema',
    image: akanemaLogo,
    technologies: [
      { name: 'ReactJS', image: reactJsLogo },
      { name: 'Tailwind Css', image: tailwindLogo },
      { name: 'Directus', image: directusLogo },
      { name: 'Sentry', image: sentryLogo },
      { name: 'Yousign', image: youSignLogo },
      { name: 'GitHub', image: githubLogo },
    ],
    productDesciption:
      "Clique est une plateforme développée par AKANEMA qui permet de regrouper l'ensemble des associations d'élèves au sein d'une école. Elle offre la possibilité aux établissements de définir un processus de création d'associations qui leur permet de regrouper l'ensemble des documents et démarches au même endroit.",
    roleDescription:
      "Lors de mon stage, j'ai été chargé de terminer certaines parties de l'application et également de maintenir et améliorer les parties existantes de l'application. J'ai également pu prendre en main le support, de la relation client au développement de patch.",
    ability:
      "Cette expérience m'a permis d'acquérir une grande autonomie. J'ai pu faire preuve de beaucoup d'initiative afin d'améliorer le produit. J'ai pu réduire significativement le nombre d'erreurs et également ajouter une gestion bien plus claire des erreurs pour l'utilisateur.",
  },
  {
    name: 'Magneto',
    company: 'Akanama',
    image: akanemaLogo,
    technologies: [
      { name: 'ReactJS', image: reactJsLogo },
      { name: 'Tailwind Css', image: tailwindLogo },
      { name: 'Redux', image: reduxLogo },
      { name: 'Laravel', image: laravelLogo },
      { name: 'TypeScript', image: typescriptLogo },
      { name: 'GitLab', image: gitlabLogo },
    ],
    productDesciption:
      "Magneto est le deuxième outil développé par Akanema qui permet, à l'aide d'un questionnaire, de mettre en avant les compétences extra-professionnelles d'un candidat dans une campagne de recrutement.",
    roleDescription:
      "J'ai commencé ce projet au début de mon alternance, j'ai d'abord été chargé du développement de l'application côté frontend en travaillant en collaboration avec un autre développeur qui était lui sur le backend. J'ai développé l'application en suivant les directives et les maquettes figma de la cheffe de projet. Je suis ensuite passé sur le développement de l'app en prenant en charge le frontend et le backend Laravel.",
    ability:
      "Ce projet m'a permis d'apprendre à travailler dans une équipe technique et de participer à la conception de l'application afin d'offrir une application qui répond exactement au besoin client. J'ai également pu prendre part au développement côté frontend et backend de l'application, en devant apprendre en parallèle à utiliser Laravel que je n'avais jamais utilisé.",
  },
  {
    name: 'Gestionaire de base de données',
    company: 'Rougy Horticulture',
    image: rougyLogo,
    technologies: [
      { name: 'ReactJS', image: reactJsLogo },
      { name: 'SCSS', image: scssLogo },
      { name: 'NestJS', image: nestjsLogo },
      { name: 'TypeScript', image: typescriptLogo },
      { name: 'Docker', image: dockerLogo },
      { name: 'Nginx', image: nginxLogo },
      { name: 'MySQL', image: mysqlLogo },
      { name: 'GitHub', image: githubLogo },
    ],
    productDesciption:
      "L'application permet à l'exploitation de regrouper et gérer l'ensemble de leurs produits. Elle offre la possibilité de gérer les plantes en fonction de certaines caractéristiques et de gérer les prix de celle-ci. Elle permet également de générer des étiquettes produits directement en PDF.",
    roleDescription:
      "J'ai réalisé ce projet seul. J'ai pu prendre en main le projet en choisissant les technologies que je souhaitais utiliser et en réalisant le frontend en ReactJS et le backend en NodeJS avec le framework NestJS",
    ability:
      "Ce projet m'a permis d'acquérir beaucoup d'expérience dans la conception complète d'une application. J'ai dû passer par l'écoute du besoin client, la rédaction d'un cahier des charges puis la réalisation de maquette et enfin le développement de l'application. J'ai également pu réaliser le déploiement sur un VPS avec docker et Nginx.",
  },
  {
    name: "Application mobile d'encaissement",
    company: 'Rougy Horticulture',
    image: rougyLogo,
    technologies: [
      { name: 'React Native', image: reactnativeLogo },
      { name: 'Expo', image: expoLogo },
      { name: 'GitHub', image: githubLogo },
    ],
    productDesciption:
      "Application mobile qui permet de réaliser l'encaissement plus facilement en récupérant les prix de l'exploitation.",
    roleDescription:
      "J'ai réalisé l'application en utilisant l'API NestJS créée pour le projet précédent afin de leur permettre de modifier au besoin leur prix sur le gestionnaire de bases de données et de pouvoir les récupérer à jour sur l'application mobile. J'ai également mis en place un système de panier qui enregistre en base de données les notes des clients avec le total, le contenu et la date.",
    ability: "J'ai pu appréhender le développement d'une application mobile avec une authentification.",
  },
  {
    name: 'Autre',
    company: 'Projets personnels',
    image: persoLogo,
    technologies: [
      { name: 'Laravel', image: laravelLogo },
      { name: 'NodeJS', image: nodejsLogo },
      { name: 'ReactJS', image: reactJsLogo },
      { name: 'TypeScript', image: typescriptLogo },
      { name: 'PHP', image: phpLogo },
      { name: 'VueJS', image: vuejsLogo },
    ],
    productDesciption:
      'Des petites applications web, bot discord lié à un google calendar, des api ou encore des sites vitrines',
    roleDescription:
      "J'ai pu réaliser de nombreux petits projets personnels qui m'ont permis d'appréhender un certain nombre de technologies et de me confronter à différentes problèmatiques.",
    ability:
      'Ces projets me permettent de répondre à des petites problématiques que je me pose en prenant beaucoup de plaisir à chercher des solutions.',
  },
];
