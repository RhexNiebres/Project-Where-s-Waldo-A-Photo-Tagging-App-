import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className=" bg-slate-100 min-h-screen flex-col flex items-center">
      <NavBar />

      <section className="bg-blue-500 flex flex-col items-center justify-center max-w-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-lg rounded-3xl p-4 text-white text-center font-bold mx-auto mt-24">
        <h1 className="text-4xl md:text-4xl font-extrabold py-4 text-yellow-300">
          Welcome to Seek & Spot
        </h1>
        <div className="bg-slate-100 p-2 text-blue-500 rounded-2xl">
          <p className="max-w-xl p-4 text-lg md:text-xl">
            Hey there, Explorer!🕵️‍♀️ Ready to test your eyes and speed? they are
            hiding somewhere in this chaotic world, and its up to YOU to find
            them!
          </p>
          <ul className="items-start space-y-2 text-lg">
            <li>Search carefully👀 - they could be hiding anywhere.</li>
            <li>Time is gold!⏳ - how fast can you spot them?</li>
            <li>
              The quicker you act, the further you go up in the leader boards!🏆
            </li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-500 flex flex-col items-center justify-center max-w-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-lg rounded-3xl p-4 text-white text-center font-bold mx-auto mt-10 mb-5">
        <p className="">
          Ready to prove your skills? Let the hunt begin!🔍 <br />
          Good luck!
        </p>
        <Link
          to="/rules"
          className="text-2 xl bg-white text-blue-500 rounded-2xl p-3 m-2 hover:bg-yellow-300 transition duration-300 shadow-md hover:shadow-xl hover:scale-110 active:scale-95"
        >
          Start Game 🎮
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
