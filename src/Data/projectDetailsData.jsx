import projectImg from "../assets/apniPathShala/apniPathShala.png";
import buyCourse from "../assets/apniPathShala/buyCourse.png";
import courseSec from "../assets/apniPathShala/courseSec.png";
import devHome from "../assets/DevDetective/darkHome.png";
import devDarkHome from "../assets/DevDetective/home.png";
import ticimg1 from "../assets/Tic-tact-toe/img1.png";
import ticimg2 from "../assets/Tic-tact-toe/img2.png";
import ticimg3 from "../assets/Tic-tact-toe/tic-tac-toe.png";
import weatherImg1 from "../assets/Weather app/weather.png";
import weatherImg2 from "../assets/Weather app/img1.png";
import weatherImg3 from "../assets/Weather app/img2.png";

export const projectDetailsData = [
  {
    apniPathShala: [
      {
        id: 1,
        title: "overview",
        name: "apniPathShala",
        desc: "A seamless and interactive learning experience for students, making education more accessible and engaging. A platform for instructors to showcase their expertise and connect with learners across the globe. ",
        list: [
          "Built apniPathShala frontend using React.js from scratch.",
          "Used Postman collection to understand API requirements.",
          "Mocked backend server using Postman Mock Server for API response.",
        ],

        img: [`${projectImg}`],
        skills: [
          "React.js",
          "Node.js",
          "MongoDb",
          "JWT",
          "Express",
          "Bcrypt",
          "Tailwind",
          "HTML",
          "CSS",
          "Redux",
        ],
        Live: "https://apni-path-shala-client.vercel.app/",
        GitHubLink: "https://github.com/shivam0107/ApniPathShala",
      },
      {
        id: 2,
        title: "Deployment",
        Scope: [
          `The front end will be deployed using Vercel, a
        popular hosting service for static sites built with React.`,
          `The back-end will be hosted on
        Render or Railway, two cloud-based hosting services for applications built with Node.js
        and MongoDB.`,

          `Media files will be hosted on Cloudinary, a cloud-based media
        management platform.`,

          `the database will be hosted on MongoDB Atlas, a fully
        managed cloud database service.
        `,
        ],
        skills: [
          "Render",
          "Node.js",
          "Vercel",
          "Cloudinary",
          "GitHub",
          "MongoDb Atlas",
        ],
        img: [`${projectImg}`, `${buyCourse}`, `${projectImg}`, `${courseSec}`],
      },
      {
        id: 3,
        title: "Future Scope",
        Scope: [
          `Personalized learning paths: Creating personalized learning paths for each student
        based on their interests and learning style can increase student satisfaction and
        success. This would be a high-priority enhancement.`,
          `Integration of Live class, where student can learn live by instructor`,
          `Social learning features: Adding social learning features such as group discussions,
        peer-to-peer feedback, and collaborative projects can increase student engagement
        and interaction. This would be a medium-priority enhancement.
        `,
        ],
        skills: ["React.js", "Node.js", "HTML", "CSS", "Redux"],
        img: [`${courseSec}`, `${buyCourse}`, `${projectImg}`, `${buyCourse}`],
      },
    ],
    devDetective: [
      {
        title: "overview",
        name: "devDetective",
        desc: "Provide social media handles Switch between light and dark modes Page is responsive - using media queries",
        list: [
          "Built DevDetective frontend using HTML CSS JS from scratch.",
          "Used GitHub API for fetching user data",
          "show alll the data that is coming from api into UI",
        ],

        img: [`${devHome}`],
        skills: ["HTMl", "CSS", "javascript", "MediaQueries"],
        Live: "https://shivam0107.github.io/DevDetectiv/",
        GitHubLink: "https://github.com/shivam0107/DevDetectiv",
      },
      {
        title: "Deployment",
        Scope: [
          `This project is hosted on GitHub`,

          `It is an openSource project`,
        ],
        skills: ["git", "GitHub", "vercel", "Vscode"],
        img: [`${devHome}`],
      },
      {
        title: "Future Scope",
        Scope: [
          `Extended Social Media Integration: Besides providing social media handles, consider 
        integrating additional features such as displaying recent activity, repositories, or followers/following
         information directly within the application. This could provide users with more comprehensive insights into 
         the GitHub profile they are exploring.`,

          `Customization Options: Introduce customization options for users to personalize their experience further.`,
        ],
        skills: ["React.js", "Node.js", "HTML", "CSS", "Redux"],
        img: [`${devHome}`, `${devDarkHome}`],
      },
    ],
    WeatherApp: [
      {
        title: "overview",
        name: "WeatherApp",
        desc: `Developed a user-friendly weather web application that provides
        real-time weatherinformation, including temperature, humidity, and
        wind speed`,
        list: [
          "Built Weather App frontend using HTML, CSS ,JS from scratch.",
          "Used openWeather API for fetching user data",
          "show alll the data that is coming from api into UI",
        ],

        img: [`${weatherImg1}`],
        skills: ["HTMl", "CSS", "javascript", "MediaQueries"],
        Live: "https://shivam0107.github.io/WeatherAap/",
        GitHubLink: "https://github.com/shivam0107/WeatherAap",
      },
      {
        title: "Deployment",
        Scope: [
          `This project is hosted on GitHub`,

          `It is an openSource project`,
        ],
        skills: ["git", "GitHub", "Vscode"],
        img: [`${weatherImg1}`],
      },
      {
        title: "Future Scope",
        Scope: [
          `Extended Social Media Integration: Besides providing social media handles, consider 
        integrating additional features such as displaying recent activity, repositories, or followers/following
         information directly within the application. This could provide users with more comprehensive insights into 
         the GitHub profile they are exploring.`,

          `Customization Options: Introduce customization options for users to personalize their experience further.`,
        ],
        skills: ["React.js", "Node.js", "HTML", "CSS", "Redux"],
        img: [`${weatherImg1}`, `${weatherImg2}`, `${weatherImg3}`],
      },
    ],
    TicTacToe: [
      {
        title: "overview",
        name: "TicTacToe",
        desc: `
        Tic-tac-toe is a classic two-player strategy game played on a 3x3 grid. Players take turns marking spaces with their respective symbols, typically "X" and "O," aiming to form a horizontal, vertical, or diagonal line of their symbol. `,
        list: [
          "Built Tic-Tac-Toe App frontend using HTML, CSS ,JS from scratch.",
          "Game Design: This game has Total 8 winning position -- [1,2,3] ,[4,5,6] , [7,8,1] , [1,4,7] , [2,5,8] , [3,6,9] , [1,5,9] , [3,5,7]",
        ],

        img: [`${ticimg1}`],
        skills: ["HTMl", "CSS", "javascript", "MediaQueries", "GitHub"],
        Live: "https://shivam0107.github.io/Tic-Tac-Toe/",
        GitHubLink: "https://github.com/shivam0107/Tic-Tac-Toe",
      },
      {
        title: "Deployment",
        Scope: [
          `This project is hosted on GitHub`,

          `It is an openSource project`,
        ],
        skills: ["git", "GitHub", "vercel", "Vscode"],
        img: [`${ticimg2}`],
      },
      {
        title: "Future Scope",
        Scope: [
          `Player FeedBack `,
          `Remote Playing`,
          `Customization Options: Introduce customization options for users to personalize their experience further.`,
        ],
        skills: ["React.js", "Node.js", "HTML", "CSS", "Redux"],
        img: [`${ticimg1}`, `${ticimg2}`, `${ticimg3}`],
      },
    ],
  },
];
