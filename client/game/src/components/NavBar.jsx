import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-blue-500 shadow-md  h-16">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300 active:text-yellow-300"
        >
          Seek & Spot
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-white hover:text-yellow-300 transition duration-300 active:text-yellow-300"
        >
          <FontAwesomeIcon icon={isOpen ? faRectangleXmark : faBarsStaggered} />
        </button>

        <ul className="hidden md:flex space-x-5 ">
          {["Home", "Leader Board"].map((item) => (
            <li key={item}>
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300 active:text-yellow-300"
              >
                {" "}
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-blue-500 py-3 space-y-3">
          {["Home", "Leader Board"].map((item) => (
            <li key={item}>
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300 active:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
