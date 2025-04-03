import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import LeaderBoard from "./components/LeaderBoard";

function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/leaderboard" element={<LeaderBoard />}/>
        </Routes>
    );
}

export default AppRoutes;