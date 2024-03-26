// Navbar.js
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" bg-bluegray-800 border-b-[0.5px] border-bluegray-500 p-4  ">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div onClick={() => {
            navigate("/");
          }} className="text-bluegray-100 cursor-pointer text-2xl font-bold ">ShivFolio</div>
          <div className="hidden md:flex space-x-6 text-xl">
            <NavLink
              to="/"
              className={(navClass) =>
                navClass.isActive
                  ? "text-yellow-100"
                  : " text-bluegray-100 hover:text-yellow-100"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={(navClass) =>
                navClass.isActive
                  ? "text-yellow-100"
                  : " text-bluegray-100 hover:text-yellow-100"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={(navClass) =>
                navClass.isActive
                  ? "text-yellow-100"
                  : " text-bluegray-100 hover:text-yellow-100"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              className={(navClass) =>
                navClass.isActive
                  ? "text-yellow-100"
                  : " text-bluegray-100 hover:text-yellow-100"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className={(navClass) =>
                navClass.isActive
                  ? "text-yellow-100"
                  : " text-bluegray-100 hover:text-yellow-100"
              }
            >
              Contact
            </NavLink>
          </div>
          {/* Responsive menu button for smaller screens */}
          <div className="md:hidden">
            <button
              className="text-bluegray-100"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 ">
            <NavLink
              to="/"
              className={(navClass) =>
                navClass.isActive
                  ? "text-yellow-100 block py-2"
                  : " text-bluegray-100 hover:text-yellow-100 block py-2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={(navClass) =>
                navClass.isActive
                  ? "text-yellow-100 block py-2"
                  : " text-bluegray-100 hover:text-yellow-100 block py-2"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={(navClass) =>
                navClass.isActive
                  ? "text-yellow-100 block py-2"
                  : " text-bluegray-100 hover:text-yellow-100 block py-2"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              className={(navClass) =>
                navClass.isActive
                  ? "text-yellow-100 block py-2"
                  : " text-bluegray-100 hover:text-yellow-100 block py-2"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className={(navClass) =>
                navClass.isActive
                  ? "text-yellow-100 block py-2"
                  : " text-bluegray-100 hover:text-yellow-100 block py-2"
              }
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
