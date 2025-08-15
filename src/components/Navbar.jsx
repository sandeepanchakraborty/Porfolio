import { NavLink } from "react-router-dom";
import { github, linkedin } from "../assets/icons";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center
    justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">SC</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>

      {/* Social Links */}
      <div className="flex gap-3 items-center">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300 group"
        >
          <img
            src={github}
            alt="GitHub"
            className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors duration-300 group"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
