import projectImg from "../assets/apniPathShala/apniPathShala.png";
import devImage from '../assets/DevDetective/home.png'
import tictac from '../assets/Tic-tact-toe/tic-tac-toe.png'
import weather from '../assets/Weather app/weather.png'

export const list = {
  apniPathShala: [
    "payment Imtegration",
    "backend development",
    "frontendDevelopment",
  ],

  devDetective: ["gitHub Api", "backend development"],
  weatherApp: ["weather API", "HTML CSS"],
};



//tech stack 
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



//projects
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
    title: "WeatherApp",
    date: "2 july 2023",
    desc: `Developed a user-friendly weather web application that provides
    real-time weatherinformation, including temperature, humidity, and
    wind speed`,
    pointsHeading: "what i learn during this project,",
    skillsArray: [
      "Html",
      "css",
      "javaScript",
      "Openweathermaps API",
      "GitHub",
      "VsCode" 
    ],
    list: [
      "Learn How to Make http request using fetch api",
      "Parsing all the data fetched from  openWeathermap API",
      "Some conditional rendering in UI",
    ],
    projectImg: `${weather}`,
  },
  {
    position: "md:flex-row",
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
  {
    position: "md:flex-row-reverse",
    title: "TicTacToe",
    date: "12 july 2023",
    desc: `
    Tic-tac-toe is a classic two-player strategy game played on a 3x3 grid. Players take turns marking spaces with their respective symbols, typically "X" and "O," aiming to form a horizontal, vertical, or diagonal line of their symbol. `,
    pointsHeading: "what i learn during this project,",
    skillsArray: [
      "Html",
      "css",
      "javaScript",
      "gitHub"
    ],
    list: [
      "Learn HTMl css and  javascript",
      "Use gitHub for hosting the project",
    ],
    projectImg: `${tictac}`,
  },
];



//education and timeline


export const educationTimelineElements = [
  {
    id: 1,
    title: "B Tech in Computer Science Engineering",
    location: "Indore Madhya Pradesh",
    institute: "Indore Institute of Science and Technology",
    buttonText: "Visit",
    date: "July-2020 - June-2024",
    details: "CGPA: 8.49",
    icon: "school",
    link: "https://indoreinstitute.com/",
  },
  {
    id: 2,
    title: "Higher secondary School - PCM",
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


//work timeline
export const workExperience = [
  {
    id: 1,
    role: "System Engineer",
    companyName: "Tata Consultancy Services",
    location: "Indore, Madhya Pradesh, India",
    institute: "Software Company",
    buttonText: "Visit",
    companyUrl: "https://www.tcs.com/",
    date: "April 2025 – Present",
    details: [
      "Working on react"
    ],
    skills: ["React", "Node.js", "JavaScript", "SQL", "Python" , "Unix" , "IOS"],
    icon: "work",
  },
  {
   id: 2,
  role: "React Native Developer",
  companyName: "SOFMEN TECHNOLOGIES PVT LTD",
  location: "Indore, India",
  institute: "Software Company",
  buttonText: "Visit",
  companyUrl: "https://sofmen.com/", // replace with actual URL if available
  date: "May 2024 – April 2025",
  details: [
    "Developed and maintained cross-platform mobile applications using React Native.",
    "Integrated Stripe, Google Wallet, and Apple Wallet for secure payment solutions.",
    "Implemented real-time location and routing features using Google Maps Directions API and Places API.",
    "Used Context API for efficient state management and React Navigation for routing.",
    "Deployed Android and iOS versions of the app on the Play Store and App Store."
  ],
  skills: ["React Native", "Stripe", "Google Wallet", "Apple Wallet", "Google Maps API", "Context API", "React Navigation" , 
    "IOS" , "Typescript"
  ],
  icon: "work",
  },
]
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
