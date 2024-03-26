import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/common/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About"
import Project from "./pages/Project"
import ProjectDetails from "./components/Project/ProjectDetails";
import ContactUs from "./pages/ContactUs";
import SkillSection from "./pages/Skills";
function App() {
  return (
    <div className="w-screen relative min-h-screen p-0 m-0 bg-bluegray-800 flex flex-col font-inter">

    <Header />
    
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/project-details/:projectName" element={<ProjectDetails />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/skills" element={<SkillSection/>} />
        
    </Routes>
     
    </div>
  );
}

export default App;
