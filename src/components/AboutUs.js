import React from "react";
import "./about.css";
import "../App.css";
import mypic from "../assets/coverpic.jpg";
import about from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about">
        {/* <h1>About Us</h1> */}
        <div className="about-container">
          <div className="about-left">
            <img src={mypic} alt="about" />
            <p>
              Welcome to our Speech-to-Text Converter! As a developer passionate
              about bridging the gap between spoken language and digital text,
              I've designed this tool to help you transcribe your audio
              effortlessly. <br></br>Whether you're a student, a professional,
              or just someone who needs to convert speech into written words,
              our converter offers accuracy and convenience at your fingertips.
              <br></br>
              Simply speak or upload your audio, and let our advanced AI-powered
              system do the rest. Thank you for choosing our service, and I hope
              it enhances your productivity and communication!
            </p>
            <h1>"From the dev"</h1>
          </div>
          <div className="about-right">
            <h1>"Why Us"</h1>
            <p>
              Now a days electronic gadgets are widely used and advanced
              technology has evolved. When it comes to our interactions with
              electronic devices or machines, things have gotten a lot more
              complicated. To reduce those complications we use our speech to
              text converting website. And this is where speech to text
              conversion need raised steeply.
              <br></br>
              The main thing which motivated us to do this project is to come up
              with a solution that helps handicapped people to write just by
              speaking out. And also students like us can be able to do
              multitasking to convert our speech to text while doing any other
              work. This is much like an inspiration than a motivation.
            </p>
            <img src={about} alt="about" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
