import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  const handleToggle = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Blogs", to: "/blogs" },
    { name: "Movies", to: "/movies" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-200 to-blue-200 dark:from-[#0a3d62] dark:to-[#1e3799] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              tooltip="Non-Stop Entertainment"
              className="text-5xl font-bold font-serif italic dark:text-amber-50 text-gray-800 tracking-wider"
            >
              Filmazia
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="px-4 py-2 text-lg font-semibold dark:text-yellow-100 text-indigo-900 transition duration-300 hover:bg-[#34495e] hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 cursor-pointer dark:text-yellow-100 text-indigo-900 transition duration-300 hover:bg-[#34495e] hover:text-white rounded"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FaSun className="h-6 w-6" />
              ) : (
                <FaMoon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 cursor-pointer dark:text-yellow-100 text-indigo-900 transition duration-300 hover:bg-[#34495e] hover:text-white rounded"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FaSun className="h-6 w-6" />
              ) : (
                <FaMoon className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={handleToggle}
              type="button"
              className="text-amber-50 cursor-pointer hover:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-200 to-blue-200 dark:from-[#0a3d62] dark:to-[#1e3799] transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="block px-4 py-2 text-lg font-semibold dark:text-yellow-100 text-indigo-900 transition duration-300 hover:bg-[#34495e] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
