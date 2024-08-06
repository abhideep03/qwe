import React from "react";
import "./hero.css";
import "../App.css";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h1>Speech To Text</h1>
          <p>
            Take notes with your voice for free, or automatically transcribe
            audio & video recordings. Amazingly accurate, secure & blazing fast.
          </p>
          <a href="">Convert</a>
        </div>
        <div className="hero-right">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </>
  );
}

export default Hero;
