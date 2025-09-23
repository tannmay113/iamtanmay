import suprams from "./companyLogos/supramsLogo.png";
import pwskill from "./companyLogos/PWSkillsLogo.png"
import anterisLogo from "./companyLogos/AnterisLogo.png"

const PortfolioExperiences = [
  {
    date: "Jan 2024 - Present",
    company: "Anteris Software Solutions",
    logo: anterisLogo,
    role: "Software Development Engineer",
    description: [
      "Developed and optimized internal web applications using Java, Spring Boot, React.js, and MySQL, enhancing productivity and business workflows.",
      "Designed and implemented RESTful APIs with Spring Boot and integrated them seamlessly with React frontends for efficient data exchange.",
      "Optimized database queries using Spring Data JPA, Hibernate and SQL, improving system performance and response times for large datasets.",
      "Resolved frontend and backend bugs, applying strong debugging and problem-solving skills to deliver scalable and stable applications.",
      "Collaborated with cross-functional teams to deliver responsive, user friendly UIs with React, JavaScript, HTML5/CSS3.",
      "Applied best practices in code optimization, testing (JUnit, Postman), and MVC architecture, ensuring maintainability and high quality software delivery."
    ],
    companyUrl: "",
    technology: ["Java", "JavaScript", , "React.js", "Spring Boot" , "Hibernate","MySQL"]
  },
  {
    date: "Jul 2023 - Dec-2023",
    company: "Suprams Info Solutions",
    logo: suprams,
    role: "Full-Stack Developer Intern",
    description: [
      "Designed and developed a full-stack web application with a Spring Boot + Hibernate back-end and a responsive front-end using Thymeleaf, HTML/CSS, and Bootstrap.",
      "Implemented role-based login and access control, allowing users to view, update, or delete employee records based on assigned roles.",
      "Integrated MySQL database for dynamic data operations and added search functionality to filter employees by email.",
      "Generated dynamic QR codes linked to a public form; enabled users to download, print, and distribute QR codes for easy access.",
      "Added automated email sending functionality for notifications and form submissions.",
    ],
    companyUrl: "https://www.suprams.net/about-us.php",
    technology: ["Java", "Spring Boot" , "Hibernate","MySQL", "Thymeleaf"]
  },
  {
    date: "Jul 2022 - Sep-2022",
    company: "PW Skills",
    logo: pwskill,
    role: "Java Developer Intern",
    description: [
      "Designed & Developed a web E-commerce application from scratch with back-end on Spring boot, Hibernate, MySQL & front-end on Thymeleaf, HTML, CSS & Bootstrap.",
      "Also created Solution Design documents of this project.",
      "Added some features like The reader will have to register application first, Book tracking for users, history tracking for the user.",
    ],
    companyUrl: "https://pwskills.com/",
    technology: ["Java", "Spring Boot" , "Hibernate","MySQL", "Thymeleaf", "Bootstrap"]
  },
];

export default PortfolioExperiences;
