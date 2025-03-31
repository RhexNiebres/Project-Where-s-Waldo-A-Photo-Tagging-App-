import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="fixed top left-0 right-
    0 w-full bg-blue-400 shadow-md"
    >
      <div className="flex justify-between items-center px-8 py-2">
        <div>
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-slate-800"
          >
            {" "}
            Seek & Spot{" "}
          </Link>
        </div>
        <ul className="flex flex-row justify-end p-5 space-x-4 ">
          <li className="text-white text-lg font-semibold hover:text-slate-800">
            <Link to="/"> Home </Link>
          </li>
          <li className="text-white text-lg font-semibold hover:text-slate-800">
            <Link to="/LeaderBoard"> LeaderBoard </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
