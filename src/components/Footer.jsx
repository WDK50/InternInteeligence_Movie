import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800  dark:bg-indigo-800 text-white py-4 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-transparent rounded-full hover:border-current hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-transparent rounded-full hover:border-current hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-transparent rounded-full hover:border-current hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-transparent rounded-full hover:border-current hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Filmazia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
