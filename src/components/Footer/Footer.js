import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";

import { BiLogoPinterestAlt } from "react-icons/bi";

import { Link, NavLink } from "react-router-dom";
import SocialLinks from "../common/contact/SocialLinks";

function Footer() {
  return (
    <>
      <footer className=" bg-bluegray-600 text-white  p-4 shadow-t-2xl">
        <div className="container mx-auto  py-[3rem] max-w-5xl ">
          <div className="flex flex-col md:flex-row space-y-7 md:space-y-3 justify-between items-center ">
            <div className="text-white">
              <p className="text-white text-2xl font-bold">Shivam Singh</p>
              <p>Full Stack developer</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-x-7 ">
              <NavLink
                to="/"
                className={(navClass) =>
                  navClass.isActive ? "" : " text-white hover:text-blue-600"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={(navClass) =>
                  navClass.isActive ? "" : "text-white hover:text-blue-600"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/projects"
                className={(navClass) =>
                  navClass.isActive
                    ? "text-blue-600"
                    : "text-white hover:text-blue-600"
                }
              >
                Projects
              </NavLink>

              <NavLink
                to="/skills"
                className={(navClass) =>
                  navClass.isActive ? "" : "text-white hover:text-blue-600"
                }
              >
                Skills
              </NavLink>

              <NavLink
                to="/contact"
                className={(navClass) =>
                  navClass.isActive ? "" : "text-white hover:text-blue-600"
                }
              >
                Contact
              </NavLink>
            </div>
            <div>
              <SocialLinks />
            </div>
          </div>

          <div>
            <p className="text-black p-4 flex items-center justify-center">
              &#169; Shivam singh. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
