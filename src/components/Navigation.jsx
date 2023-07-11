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
            <Link to="/home">HOME</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
