import React from "react";
import "../style/LandingPage.css"
import ParticlesBg from "particles-bg";

export default function LandingPage() {
  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="circle"
          num={7}
          bg={{ zIndex: 0, position: "absolute", top: 0 }}
        />
        <div className="overlay">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1>
                Welcome to our language learning website!
                <span></span>
              </h1>
              <p>Start your language learning journey today.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
