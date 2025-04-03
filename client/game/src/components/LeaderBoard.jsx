import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const LeaderBoard = () => {
  return (
    <div>
      <NavBar />
      <h1>Leader Board</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <Footer />
    </div>
  );
};

export default LeaderBoard;
