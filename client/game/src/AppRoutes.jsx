import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import LeaderBoard from "./components/LeaderBoard";
import Rules from "./pages/Rules";
function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/leaderboard" element={<LeaderBoard />}/>
            <Route path="/Rules" element={<Rules />}/>
        </Routes>
    );
}

export default AppRoutes;