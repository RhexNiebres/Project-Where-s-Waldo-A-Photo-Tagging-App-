import { Routes, Route,} from "react-router-dom";
import App from "./App";
import LeaderBoard from "./components/LeaderBoard";
import Rules from "./pages/Rules";
import Game from "./pages/Game";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default AppRoutes;
