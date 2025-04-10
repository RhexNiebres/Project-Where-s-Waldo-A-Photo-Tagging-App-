import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
  
const Footer = () => {
  const ownerName = import.meta.env.VITE_OWNER_NAME;
  return (
    <footer className="fixed bottom-0 left-0 flex flex-row justify-evenly  items-center bg-blue-500 text-white py-1 w-full">
      <p>&copy; {new Date().getFullYear()} {ownerName}</p>

      <a 
        href="https://github.com/RhexNiebres"
        target="_blank"
        rel="noopener noreferrer"
      className="hover:text-yellow-300 text-4xl">
        <FontAwesomeIcon icon={faSquareGithub} />
      </a>
      <p>All rights reserved.</p>
    </footer>
  );
};

export default Footer;
