import React, { useState } from "react";
import { FaMoon, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    // Theme toggle logic will go here
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-base-100">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h3>
          <a href="/" className="text-2xl font-bold text-[#2978b5] hover:text-[#2978b5] relative after:bg-[#2978b5] after:absolute after:h-1 after:w-0 after:bottom-[-10px] after:left-0 after:transition-all after:duration-500 after:delay-100 hover:after:w-full cursor-pointer">
            AP.
          </a>
        </h3>

        <nav className="flex items-center gap-6">
          <ul className={`flex gap-6 items-center ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
            <li>
              <a href="#projects" className="font-medium text-[#444444] hover:text-[#2978b5] relative after:bg-[#2978b5] after:absolute after:h-1 after:w-0 after:bottom-[-10px] after:left-0 after:transition-all after:duration-500 after:delay-100 hover:after:w-full cursor-pointer">projects</a>
            </li>
            <li>
              <a href="#skills" className="font-medium text-[#444444] hover:text-[#2978b5] relative after:bg-[#2978b5] after:absolute after:h-1 after:w-0 after:bottom-[-10px] after:left-0 after:transition-all after:duration-500 after:delay-100 hover:after:w-full cursor-pointer">skills</a>
            </li>
            <li>
              <a href="#contact" className="font-medium text-[#444444] hover:text-[#2978b5] relative after:bg-[#2978b5] after:absolute after:h-1 after:w-0 after:bottom-[-10px] after:left-0 after:transition-all after:duration-500 after:delay-100 hover:after:w-full cursor-pointer">contact</a>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="toggle theme"
          >
            <FaMoon className="text-xl" />
          </button>

          <button
            onClick={toggleMenu}
            className="btn btn-ghost btn-circle md:hidden"
            aria-label="toggle navigation"
          >
            <FaBars className="text-xl" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
