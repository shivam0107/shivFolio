import projectImg from "../assets/apniPathShala.png";
import devImage from '../assets/DevDetective/home.png'

export const list = {
  apniPathShala: [
    "payment Imtegration",
    "backend development",
    "frontendDevelopment",
  ],

  devDetective: ["gitHub Api", "backend development"],
  weatherApp: ["weather API", "HTML CSS"],
};

export const technologies = [
  "C++",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Express",
  "Node.js",
  "GitHub",
  "MongoDb",
];

export const projects = [
  {
    position: "md:flex-row",
    title: "apniPathShala",
    date: "25 july 2024",
    desc: "apniPathShala is a fully functional ed-tech platform that enables users to create, consume, and rate educational content.",
    pointsHeading: "what i learn during this project,",
    skillsArray: [
      "Html",
      "css",
      "react",
      "javaScript",
      "nodeJs",
      "c++",
      "mongoDb",
      "C++",
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Express",
      "Node.js",
      "GitHub",
      "MongoDb",
    ],
    list: [
      "Built apniPathShala frontend using React.js from scratch.",
      "Used Postman collection to understand API requirements.",
      "Mocked backend server using Postman Mock Server for API response.",
    ],
    projectImg: `${projectImg}`,
  },
  {
    position: "md:flex-row-reverse",
    title: "devDetective",
    date: "10 sep 2023",
    desc: "Provide social media handles Switch between light and dark modes Page is responsive - using media queries.",
    pointsHeading: "what i learn during this project,",
    skillsArray: [
      "Html",
      "css",
      "javaScript",
      "gitHub API"
    ],
    list: [
      "Page that provides GitHub profile details for the user-name provided.",
      "Use gitHub for hosting the project",
    ],
    projectImg: `${devImage}`,
  },
];

export const educationTimelineElements = [
  {
    id: 1,
    title: "B Tech in Computer Science Engineering",
    location: "Indore Madhya Pradesh",
    institute: "Indore Institute of Science and Technology",
    buttonText: "Visit",
    date: "Expected: June 2024",
    details: "CGPA: 8.49",
    icon: "school",
    link: "https://indoreinstitute.com/",
  },
  {
    id: 2,
    title: "Higher secondary School",
    location: "Satna 485001 Madhya Pradesh",
    institute: "Govt. Excellence higher Secondary School Venkat No 1 satna MP",
    buttonText: "Visit",
    date: "March 2020",
    details: "Percentage: 89.20%",
    icon: "school",
    link: "http://venkat1hsschoolsatna.in/",
  },
  {
    id: 3,
    title: "High School",
    location: "Satna 485001 Madhya Pradesh",
    institute: "Govt. Excellence higher Secondary School Venkat No 1 satna MP",
    buttonText: "Visit",
    date: "March 2018",
    details: "Percentage: 94%",
    icon: "school",
    link: "http://venkat1hsschoolsatna.in/",
  },
];

export const workTimelineElements = [
  {
    id: 1,
    title: "Higher secondary School",
    location: "Satna 485001 Madhya Pradesh",
    institute: "Govt. Excellence higher Secondary School Venkat No 1 satna MP",
    buttonText: "Visit",
    date: "March 2020",
    details: "Percentage: 89.20%",
    icon: "school",
  },
  {
    id: 2,
    title: "Higher secondary School",
    location: "Satna 485001 Madhya Pradesh",
    institute: "Govt. Excellence higher Secondary School Venkat No 1 satna MP",
    buttonText: "Visit",
    date: "March 2020",
    details: "Percentage: 89.20%",
    icon: "school",
  },
];

// position={"md:flex-row"}
// title={"apniPathShala"}
// date={"01 july 2003"}
// desc={
//   "XFlix is a video sharing platform which hosts videos for the world to watch. It also features uploading new videos by using external video links (eg: Youtube) and playing these videos."
// }
// pointsHeading={"what i learn during this project,"}
// skillsArray={skills}
// list={apniPathShala}
// projectImg={projectImg}
// buttonText={"view Projects Details"}
