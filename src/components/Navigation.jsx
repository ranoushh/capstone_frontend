import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li className="img-container">
            Language Learning
          </li>
        </ul>
        <ul className="btns-nav">
          <li>
            <Link to="/chat">chat</Link>
          </li>
          <li>
            <Link to="/leaderboard">leaderboard</Link>
          </li>
          <li>
            <Link to="/lessons">lessons</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/quizzes">quiz</Link>
          </li>
          <li>
            <Link to="/tests">test</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
