import projectImg from "../assets/apniPathShala.png";
import buyCourse from "../assets/apniPathShala/buyCourse.png";
import courseSec from "../assets/apniPathShala/courseSec.png";
import devHome from "../assets/DevDetective/darkHome.png";
import devDarkHome from "../assets/DevDetective/home.png";


export const projectDetailsData = [
  {
    apniPathShala : [
      {
        id:1,
        title:"overview",
        name: "apniPathShala",
        desc: "A seamless and interactive learning experience for students, making education more accessible and engaging. A platform for instructors to showcase their expertise and connect with learners across the globe. ",
        list: [
          "Built apniPathShala frontend using React.js from scratch.",
          "Used Postman collection to understand API requirements.",
          "Mocked backend server using Postman Mock Server for API response."
        ],
        
        img: [`${projectImg}`],
        skills: ["React.js", "Node.js", "MongoDb" , "JWT" , "Express" , "Bcrypt" , "Tailwind" ,  "HTML", "CSS", "Redux"],
        Live:"https://apni-path-shala-client.vercel.app/",
        GitHubLink:"https://github.com/shivam0107/ApniPathShala"
      },
      {
        id:2,
        title:"Deployment",
        Scope: [`The front end will be deployed using Vercel, a
        popular hosting service for static sites built with React.` , `The back-end will be hosted on
        Render or Railway, two cloud-based hosting services for applications built with Node.js
        and MongoDB.` ,

        `Media files will be hosted on Cloudinary, a cloud-based media
        management platform.` ,
        
         `the database will be hosted on MongoDB Atlas, a fully
        managed cloud database service.
        `],
        skills: ["Render", "Node.js", "Vercel", "Cloudinary", "GitHub" , "MongoDb Atlas"],
          img: [`${projectImg}`,`${buyCourse}`,`${projectImg}`,`${courseSec}`],
      },
      {
        id:3,
        title:"Future Scope",
        Scope: [
          `Personalized learning paths: Creating personalized learning paths for each student
        based on their interests and learning style can increase student satisfaction and
        success. This would be a high-priority enhancement.` ,
        `Integration of Live class, where student can learn live by instructor`,
        `Social learning features: Adding social learning features such as group discussions,
        peer-to-peer feedback, and collaborative projects can increase student engagement
        and interaction. This would be a medium-priority enhancement.
        `

        ],
        skills: ["React.js", "Node.js", "HTML", "CSS", "Redux"],
          img: [`${courseSec}`,`${buyCourse}`,`${projectImg}`,`${buyCourse}`],
      }
    ]
    , 
    devDetective: [
      {
        title:"overview",
        name: "devDetective",
        desc: "Provide social media handles Switch between light and dark modes Page is responsive - using media queries",
        list: [
          "Built DevDetective frontend using HTML CSS JS from scratch.",
          "Used GitHub API for fetching user data",
          "show alll the data that is coming from api into UI"
        ],
        
        img: [`${devHome}`],
        skills: ["HTMl", "CSS", "javascript" , "MediaQueries"],
        Live: "https://apni-path-shala-client.vercel.app/",
        GitHubLink:"https://github.com/shivam0107/ApniPathShala"
      },
      {
        title:"Deployment",
        Scope: [`This project is hosted on GitHub` ,
         
         `It is an openSource project`],
        skills: ["git", "GitHub", "vercel", "Vscode"],
        img: [`${devHome}`],
      },
      {
        title:"Future Scope",
        Scope: [`Extended Social Media Integration: Besides providing social media handles, consider 
        integrating additional features such as displaying recent activity, repositories, or followers/following
         information directly within the application. This could provide users with more comprehensive insights into 
         the GitHub profile they are exploring.` ,
         
         `Customization Options: Introduce customization options for users to personalize their experience further.`],
        skills: ["React.js", "Node.js", "HTML", "CSS", "Redux"],
        img: [`${devHome}`,`${devDarkHome}`],
      }
    ]
  }
];
