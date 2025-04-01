import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="fixed top-0 w-full bg-blue-400 shadow-md"
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-white text-lg font-semibold hover:text-slate-800"
        >
          Seek & Spot
        </Link>

        <ul className="hidden md:flex space-x-5 ">
          {["Home", "Leader Board"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item}`}
                className="text-white text-lg font-semibold hover:text-slate-800"
                
              > {item}</Link>
            </li>
          ))}
          
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
