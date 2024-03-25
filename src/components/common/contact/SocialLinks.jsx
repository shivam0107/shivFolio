import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
    <NavLink
      to="https://www.linkedin.com/in/shivamsingh13/"
      className={(navClass) =>
        navClass.isActive ? "" : "text-white hover:text-blue-600"
      }
    >
      <FaLinkedin className="text-3xl" />
    </NavLink>

    <NavLink
      to="https://www.linkedin.com/in/shivamsingh13/"
      className={(navClass) =>
        navClass.isActive ? "" : "text-white hover:text-blue-600"
      }
    >
      <SiLeetcode className="text-3xl" />
    </NavLink>

    <NavLink
      to="https://www.linkedin.com/in/shivamsingh13/"
      className={(navClass) =>
        navClass.isActive ? "" : "text-white hover:text-blue-600"
      }
    >
      <FaGithub className="text-3xl" />
    </NavLink>

    <NavLink
      to="https://www.linkedin.com/in/shivamsingh13/"
      className={(navClass) =>
        navClass.isActive ? "" : "text-white hover:text-indigo-600"
      }
    >
      <FaTwitter className="text-3xl" />
    </NavLink>
  </div>
  )
}

export default SocialLinks