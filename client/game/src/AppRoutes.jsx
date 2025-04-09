import { Routes, Route,} from "react-router-dom";
import App from "./App";
import LeaderBoard from "./components/LeaderBoard";
import Rules from "./pages/Rules";
import Game from "./pages/Game";
import PlayerForm from "./pages/PlayerForm";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/game" element={<Game />} />
      <Route path="/player-form" element={<PlayerForm />} />
    </Routes>
  );
}

export default AppRoutes;
