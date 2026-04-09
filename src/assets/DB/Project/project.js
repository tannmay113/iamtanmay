import comingSoon from "./projectImages/coming_soon.jpg";
import defaultImage from "./projectImages/DefultImg.jpg";
import MedicioWeb from "./projectImages/MedicioWeb.png";
import portfolioDemoWeb from "./projectImages/portfolioDemoWeb.png";
import bookMyShowWeb from "./projectImages/bookMyShowWeb.png";
import currencyConverterWeb from "./projectImages/currencyConverterWeb.png";
import microsoftWeb from "./projectImages/microsoftWeb.png";
import netflixWeb from "./projectImages/netflixWeb.png";
import reactRouterMasterWeb from "./projectImages/reactRouterMasterWeb.png";
import shipNowWeb from "./projectImages/shipNowWeb.png";
import starBucksWeb from "./projectImages/starBucksWeb.png";
import urbanCompanyWeb from "./projectImages/urbanCompanyWeb.png";
import Ecommerce from './projectImages/E-commerce.png';
import QuantFox from './projectImages/quantFox.png';
import metroWebApp from './projectImages/metroWebApp.png';

import { gitHubLink } from '../Links';

// Sample data
const allProjects = [
  {
    title: "Metro Web App",
    type: "web",
    description:
      "This project is a Metro Web App, demonstrating the implementation of client-side routing in React using React Router DOM.",
    githubLink: `${gitHubLink}/metro-front-end`,
    image: metroWebApp,
  },
  {
    title: "QuantFox",
    type: "web",
    description:
      "This project is a QuantFox Project, demonstrating the implementation of client-side routing in React using React Router DOM.",
    githubLink: `${gitHubLink}/QuantFox`,
    image: QuantFox,
  },
  {
    title: "E-commerce",
    type: "web",
    description:
      "This project is a E-commerce Project, demonstrating the implementation of client-side routing in React using React Router DOM.",
    githubLink: `${gitHubLink}/E-commerce`,
    image: Ecommerce,
  },
  {
    title: "Currency Converter",
    type: "web",
    description:
      "This is a currency-converter web application you can converter any currency to other currencies",
    githubLink: `${gitHubLink}/Currency-Converter`,
    image: currencyConverterWeb,
  },
  {
    title: "React Router Master",
    type: "web",
    description:
      "This is a React-Router-Master web application.This application was developed to gain hands-on experience with React Router and client-side routing in React.",
    githubLink: `${gitHubLink}/React-Router-Master`,
    image: reactRouterMasterWeb,
  },
  {
    title: "ship Now",
    type: "web",
    description:
      "This is a Food ordering website. This application was developed to gain hands-on experience in HTML/CSS and JavaScript",
    githubLink: `${gitHubLink}/Ship-Now`,
    image: shipNowWeb,
  },
  {
    title: "Portfolio",
    type: "web",
    description: "A portfolio demo website",
    githubLink: `${gitHubLink}/iamtanmay-Demo`,
    image: portfolioDemoWeb,
  },
  {
    title: "Netflix",
    type: "web",
    description: "A Clone website of Netflix",
    githubLink: `${gitHubLink}/NetflixClone-`,
    image: netflixWeb,
  },
  {
    title: "urban Company",
    type: "web",
    description: "A Clone website of urban Company",
    githubLink: `${gitHubLink}/urbanCompany`,
    image: urbanCompanyWeb,
  },
  {
    title: "star Bucks",
    type: "web",
    description: "A Clone website of star Bucks",
    githubLink: `${gitHubLink}/starBucks`,
    image: starBucksWeb,
  },
  {
    title: "Microsoft",
    type: "web",
    description: "A Clone website of Microsoft",
    githubLink: `${gitHubLink}/Microsoft`,
    image: microsoftWeb,
  },
  {
    title: "BookMyShow",
    type: "web",
    description: "A Clone website of bookMyShow",
    githubLink: `${gitHubLink}/Bookmyshow`,
    image: bookMyShowWeb,
  },
  {
    title: "Medicio_frontend",
    type: "web",
    description: "A Hospital management frontend UI made in HTML/CSS and JS",
    githubLink: `${gitHubLink}/Medicio_frontend`,
    image: MedicioWeb,
  },
  {
    title: "Mail Sender",
    type: "web",
    description: "A real-time Mail sender Web application built using Spring",
    githubLink: `${gitHubLink}/MailSender`,
    image: defaultImage,
  },
  {
    title: "Coming Soon",
    type: "mobile",
    description: "Mobile Application is in learing phase",
    githubLink: "",
    image: comingSoon,
  },
];

export default allProjects;
