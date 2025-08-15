import React from "react";
import { Link } from "react-router-dom";
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
   <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to ={link} className="neo-brutalism-white neo-btn">
    {btnText}
    <img src={arrow} className="w-4 h-4 object-contain"/> 
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hi, I am <span className="font-semibold">Sandeepan</span>👋
      <br />
       An aspiring engineer passionate about innovation, based in India.
    </h1>
  ),
  2: (
    <InfoBox
      text="I am passionate about building web applications and exploring new technologies."
      link="/about"
      btnText="Learn More"
    />
  ),
  3:(  <InfoBox
      text="Accomplished numerous projects and mastered a diverse set of skills along the journey."
      link="/projects"
      btnText="Visit my portfolio"
    />
),
  4: (  <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Lets's talk"
    />
  ),
};


const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
