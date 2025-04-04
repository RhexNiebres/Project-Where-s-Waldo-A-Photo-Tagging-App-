import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Rules = () => {
  const rules = [];
  return (
    <div className=" bg-slate-100 min-h-screen flex-col flex items-center  ">
      <Footer />
      <section className="bg-blue-500 flex flex-col items-center justify-items-center max-w-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-lg rounded-3xl p-4 text-white text-center font-bold mx-auto mt-24">
        <h1 className="text-blue-500 text-5xl p-3 bg-slate-100 w-full rounded-2xl font-extrabold">
          Rules
        </h1>

        <div className="grid grid-cols-2 m-4 w-full p-4 gap-4">
          <div className="bg-slate-100 min-w-fit rounded-2xl text-blue-500 ">
            <h1 className="bg-blue-500  text-2xl p-3 text-yellow-300 rounded-t-2xl border-3 border-black">
              🎮 How to Play?
            </h1>
            <ul className="space-y-4 ">
              <li>
                Start the Game - a crowded image will appear. they are somewhere
                inside!🕵️‍♀️
              </li>
              <li>Find the characters - hiding in the image! 👀</li>
              <li>Click on Them - Tap exactly where they are. 🎯</li>
              <li>Be Quick! - Your time stops when you find all three! ⏳</li>
            </ul>
          </div>

          <div className="bg-slate-100 min-w-fit rounded-2xl text-blue-500">
            <h1 className="bg-blue-500  text-2xl p-3 text-yellow-300 rounded-t-2xl border-3 border-black">
              💡 Pro Tips to Win!
            </h1>
            <ul>
              <li>
                Start by looking in crowded areas where they might blend in.👀
              </li>
              <li>
                Focus on the target images and and carefully seek.🔍
              </li>
              <li>
                Avoid clicking randomly—too many incorrect guesses might
                penalize your time.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <NavBar />
    </div>
  );
};

export default Rules;
