type Projects = Project[];
type Project = {
  name: string;
  company: string;
  technology: string[];
  productDesciption: string;
  roleDescription: string;
  ability: string;
};

export const projects: Projects = [
  {
    name: 'Clique',
    company: 'Akenema',
    technology: ['ReactJS', 'Tailwind Css', 'Directus', 'Sentry', 'Yousign'],
    productDesciption:
      "Clique est une plateforme développée par AKANEMA qui permet de regrouper l'ensemble des associations d'élève au sein d'une école. Elle offre la possibilité aux établissements de définir un processus de création d'association qui leur permet de regrouper l'ensemble des documents et démarches au même endroit.",
    roleDescription:
      "Lors de mon stage, j'ai été chargé de terminer certaines parties de l'application et également de maintenir et améliorer les parties existantes de l'application. J'ai également pu prendre en main le support, de la relation client au développement de patch.",
    ability:
      "Cette expérience m'a permis d'acquérir une grande autonomie. J'ai pu faire preuve de beaucoup d'initiative afin d'améliorer le produit. J'ai pu réduire significativement le nombre d'erreurs et également ajouter une gestion bien plus clair des erreurs pour l'utilisateur.",
  },
  {
    name: 'Magneto',
    company: 'Akenama',
    technology: ['ReactJS', 'Tailwind Css', 'Redux', 'Laravel', 'TypeScript'],
    productDesciption:
      "Mangeto est le deuxième outil développé par Akanema qui permet, à l'aide d'un questionnaire, de mettre en avant les compétences extra-professionnelle d'un candidat dans une campagne de recrutement",
    roleDescription:
      "J'ai commencé ce projet au début de mon alternance, j'ai d'abord été chargé du développement de l'application côté frontend en travaillant en collaboration avec un autre développeur qui été lui sur le backend. J'ai développé l'application en suivant les directives et les maquettes figma de la cheffe de projet. Je suis ensuite passé sur le developpement de l'app en prenant en charge le frontend et le backend Laravel.",
    ability:
      "Ce projet m'a permis d'apprendre à travailler dans une équipe technique et de participer à la conception de l'application afin d'offrir une application qui répondent exactement au besoin client. J'ai également pu prendre part au développement côté frontend et backend de l'application, en devant apprendre en parallèle à utiliser Laravel que je n'avais jamais utilisé.",
  },
  {
    name: 'Gestionaire de base de données',
    company: 'Rougy Horticulture',
    technology: ['ReactJS', 'SCSS', 'NestJS', 'TypeScript', 'Docker', 'Nginx', 'MySQL'],
    productDesciption:
      "L'application permet à l'exploitation de regrouper et gérer l'ensemble de leur produits. Elle offre la possibilité de gérer les plantes en fonction de certaines caractéristiques et de gérer les prix de celle-ci",
    roleDescription:
      "J'ai réalisé ce projet seul. J'ai pu prendre en main le projet en choisissant les technologies que je souhaitais utiliser et en realisant le frontend en ReactJS et le backend en NodeJS avec le framework NestJS",
    ability:
      "Ce projet m'a permis d'acquérir beaucoup d'expérience dans la conception complète d'une application. J'ai du passer par l'écoute du besoin client, la rédaction d'un cahier des charges puis la réalisation de maquette et enfin le développement de l'application. J'ai également pu réaliser le deploiement sur un VPS avec docker et Nginx.",
  },
  {
    name: "Application mobile d'encaissement",
    company: 'Rougy Horticulture',
    technology: ['React Native', 'Expo'],
    productDesciption:
      "Application mobile qui permet de réaliser l'encaissement plus facilement en récupérant les prix de l'exploitation",
    roleDescription:
      "J'ai réalisé l'application en utilisant l'API NestJS créé pour le projet précédent afin de leur permettre de modifier au besoin leur prix sur le gestionnaire de base de données et de pouvoir les récupérer à jour sur l'application mobile. J'ai également mis en place un système de panier qui enregistre en base de données les notes des clients avec le total, le contenu et la date.",
    ability: "J'ai pu appréhender le developpement d'une application mobile avec une authentification",
  },
  {
    name: 'Projet personnel',
    company: '',
    technology: ['Laravel', 'NodeJS', 'ReactJS', 'TypeScript', 'PHP', 'VueJS'],
    productDesciption: 'petites applications web, bot discord lié à un google calendar, api, site vitrine',
    roleDescription:
      "J'ai pu réaliser de nombreux petits projets personnel qui m'ont permis d'appréhender un certain nombre de technologies et de me confronter à différentes problèmatiques",
    ability:
      'Ces projets me permettent de répondre à des petites problèmatiques que je me pose en prenant beaucoup de plaisir à chercher des solutions',
  },
];