import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { projectDetailsData } from "../../Data/projectDetailsData";
import Overview from "./Features/Overview";
import OtherSection from "./Features/otherSection";
import Footer from "../Footer/Footer";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { List, ListItem, ListItemText, ListItemIcon, Paper, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProjectDetails = () => {
  const { projectName } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  // Simpler ref approach
  const sectionRefs = useRef([]);
  
  // Process project data
  const projectData = [];
  projectDetailsData.forEach((item) => {
    if (item.hasOwnProperty(projectName)) {
      projectData.push(item[projectName]);
    }
  });

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll to section - simplified
  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ 
        behavior: "smooth",
        block: "start" 
      });
      setActiveSection(index);
    }
    
    setIsMobileMenuOpen(false);
  };

  // Initialize refs - simpler approach
  useEffect(() => {
    // Initialize the refs array with the correct length
    sectionRefs.current = sectionRefs.current.slice(0, projectData[0]?.length || 0);
  }, [projectData]);

  // Scroll and section detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
      // Simpler section detection
      if (sectionRefs.current.length > 0) {
        for (let i = 0; i < sectionRefs.current.length; i++) {
          if (sectionRefs.current[i]) {
            const rect = sectionRefs.current[i].getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(i);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate sidebar width based on screen size
  const getSidebarWidth = () => {
    if (isLarge) return '280px';
    if (isTablet) return '240px';
    return '220px';
  };

  if (!projectData.length || !projectData[0]) {
    return <div className="w-11/12 mx-auto mt-10">No project data found</div>;
  }

  return (
    <>
    
      <div className="w-11/12 mx-auto  mt-6 md:mt-10 pb-12 ">
        {/* Mobile Menu Button */}
        <div className="md:hidden w-full mb-6  flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">{projectName}</h1>
          <button 
            onClick={toggleMobileMenu} 
            className="p-2 rounded-lg bg-blue-50 text-gray-800 hover:bg-blue-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <MdMenu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu}>
            <Paper 
              elevation={3} 
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm rounded-l-xl z-50"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 flex justify-between items-center">
                  <h2 className="text-white text-xl font-semibold">Project Sections</h2>
                  <button 
                    onClick={toggleMobileMenu}
                    className="text-white hover:bg-blue-500 p-1 rounded-full"
                  >
                    <IoClose size={24} />
                  </button>
                </div>
                
                <div className="overflow-y-auto flex-grow">
                  <List className="w-full py-2">
                    {projectData[0].map((data, index) => (
                      <ListItem
                        key={index}
                        button
                        selected={activeSection === index}
                        onClick={() => scrollToSection(index)}
                        sx={{
                          borderLeft: '3px solid',
                          borderLeftColor: activeSection === index ? '#3b82f6' : 'transparent',
                          backgroundColor: activeSection === index ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'rgba(59, 130, 246, 0.08)',
                            transform: 'translateX(4px)',
                            transition: 'all 0.2s'
                          }
                        }}
                      >
                        <ListItemIcon>
                          <ArrowForwardIosIcon sx={{ 
                            color: activeSection === index ? '#3b82f6' : '#64748b',
                            fontSize: '1rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={data.title}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontWeight: activeSection === index ? '600' : '500',
                              fontSize: '1rem',
                              color: activeSection === index ? '#3b82f6' : '#1f2937'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </div>
            </Paper>
          </div>
        )}

        {/* Desktop Header (Hidden on Mobile) */}
        <div className="hidden md:block mb-8 ">
          <h1 className="text-3xl font-bold text-white">{projectName}</h1>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar - Fixed Position (No Internal Scroll) */}
          <div className="hidden  md:block" style={{ width: getSidebarWidth(), flexShrink: 0 }}>
            <div className="sticky top-4 z-20">
              <Paper 
                elevation={2} 
                className="rounded-xl overflow-hidden shadow-lg"
                sx={{ width: getSidebarWidth() }}
              >
                {/* Header */}
                <div className="bg-[#B2B0E8] p-4">
                  <h2 className="text-black text-lg  font-semibold">Project Sections</h2>
                </div>
                
                {/* Non-scrollable sidebar content */}
                <div className="py-2">
                  <List className="w-full">
                    {projectData[0].slice(0, 8).map((data, index) => (
                      <ListItem
                        key={index}
                        button
                        selected={activeSection === index}
                        onClick={() => scrollToSection(index)}
                        sx={{
                          borderLeft: '3px solid',
                          borderLeftColor: activeSection === index ? '#3b82f6' : 'transparent',
                          backgroundColor: activeSection === index ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'rgba(59, 130, 246, 0.08)',
                            transition: 'all 0.2s'
                          }
                        }}
                      >
                        <ListItemIcon>
                          <ArrowForwardIosIcon sx={{ 
                            color: activeSection === index ? '#3b82f6' : '#64748b',
                            fontSize: '0.9rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={data.title}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontWeight: activeSection === index ? '600' : '400',
                              fontSize: '0.95rem',
                              color: activeSection === index ? '#3b82f6' : '#1f2937'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Paper>
            </div>
          </div>

          {/* Main Content - Scrollable Area */}
          <div className="flex-grow relative">
            {/* Scroll shadow indicators */}
            <div className="hidden md:block absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
            <div className="hidden md:block absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Main scrollable content */}
            <div className="space-y-6 md:h-[calc(100vh-8rem)] md:overflow-y-auto md:pr-2 custom-scrollbar">
              {projectData[0].map((data, index) => (
                <div 
                  key={index} 
                  ref={el => sectionRefs.current[index] = el}
                  className="scroll-mt-4"
                >
                  {index === 0 ? (
                    <Overview data={data} />
                  ) : (
                    <OtherSection data={data} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
      
      <Footer />
    </>
  );
};

export default ProjectDetails;
