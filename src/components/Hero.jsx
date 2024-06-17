import React from "react";
import demoImage from "../assets/Frame 4.png";
import Notification from "../assets/Frame 6.png"; 

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-900 via-slate-900 to-fuchsia-900">
      <div className="text-center">
        <h1 className="font-urbanist font-bold text-[50px] text-white">
          <span style={{ color: "#925EF9" }}>Welcome to the new</span>
          <br />
          <span>New World of ChatBot</span>
        </h1>
        <p className="mt-4 w-[934px] mx-auto text-white">
          Introducing our GenAI Lead Generation Chat BOT, designed to boost user
          engagement and seamlessly generate leads within conversation flows.
          Crafted with LLM models, these humanoid bots adapt their communication
          style for a personalized and effective experience.
        </p>
        <div className="mt-8 items-center flex justify-center">
          <img src={demoImage} alt="Demo" className="cursor-pointer h-8 object-cover" />
        </div>
        <div className="absolute" style={{top: "640px", left: "1273px" }}>
          <img src={Notification} alt="Notify" className=" cursor-pointer h-16 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;