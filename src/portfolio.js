import p1 from "../src/assets/premier_league.png";
import p2 from "../src/assets/senvoix.jpg";
import p3 from "../src/assets/e-learning.png";
import p4 from "../src/assets/bank-app.png";

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "PREMIER LEAGUE APP",
    description:
      "The Premier League Manager is a web-based application designed for football enthusiasts to manage their own fantasy teams in the English Premier League. Users can add teams and play a match between any random two teams from the Premier League. The application also allows users to view the current points table with details.",
    stack: ["React", "Javasript", "SASS", "HTML", "CRUD"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    image: p1,
  },
  {
    name: "SENVOIX",
    description:
      "A web applcation to classify reviews of games from STEAM platform using a Hybrid BERT model. This application can retreive reviews of any game if we add the game id to the application itself and classify each review whether a possitive or negative review.",
    stack: [
      "React",
      "Javasript",
      "Python",
      "CSS",
      "BERT",
      "FLASK",
      "Machine Learning",
    ],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    image: p2,
  },
  {
    name: "E LEARNING PROJECT",
    description: "A Responsive static web application for e-learning platform.",
    stack: ["React", "Javasript", "CSS"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    image: p3,
  },
  {
    name: "CREDIFY",
    description:
      "A Banking web application which allows users to signup, login and perform basic operations like deposit, withdraw and check balance and many more..",
    stack: ["Java", "Spring Boot", "Spring Security", "SQL", "PostgreSQL"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    image: p4,
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "React",
  "Java",
  "Redux",
  "React Native",
  "Spring Boot",
  "Spring Security",
  "JavaScript",
  "TypeScript",
  "Microservices",
  "SASS",
  "Git",
];

export { projects, skills };
