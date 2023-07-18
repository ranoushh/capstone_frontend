import React from "react";
// import Navigation from "../components/Navigation";
import '../styling/HomeStyling.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="body">
      <div className="header">
        {/* <div className="nav">
          <div className=""> */}
                <h1 className="title">Language Learning</h1> 
                  {/* <Navigation/> */}
            {/* </div>
          </div> */}

          <h4>Not a User? </h4>
          <h4>Already a User? </h4>
          <p></p>
        </div>
    </div>
  );
}

export default Home;
