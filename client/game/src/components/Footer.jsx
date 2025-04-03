import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} Rhex R. Niebres</p>
      </div>

      <div>
        <a
          href="https://github.com/RhexNiebres"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
