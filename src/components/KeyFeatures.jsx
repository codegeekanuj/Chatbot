import React from "react";
import BotImage from "../assets/BotImage.png";
import Bgpurple from "../assets/bgpurple.png";
import PlayButton from "../assets/PlayButton.png";
import Pen from "../assets/Pen.png";
import Person from "../assets/Person.png";
import Bot from "../assets/Bot.png";



const KeyFeatures = () => {
  return (
    <div
      className="w-screen gap-12 bg-gradient-to-r from-purple-900 via-slate-900 overflow-hidden"
      style={{ height: "200vh" }}
    >
      <div
        className="pt-16 w-full flex flex-col gap-14 bg-gradient-to-r from-purple-900 via-slate-900 to-fuchsia-900"
        style={{ height: "120vh" }}
      >
        <div className="flex w-full g-4 justify-center items-center">
          <h1 className="font-urbanist font-bold text-[35px] leading-[64.8px] text-white">
            Key Features
          </h1>
        </div>
        <div className="flex justify-between items-center gap-36  ">
          <div className="flex flex-col gap-4  m-14">
            <div className="font-urbanist flex gap-3">
              <div>
                <img src={Pen} alt="Pen" style={{ height: "4rem" }} />
              </div>
              <div>
                <h2
                  style={{ color: "#925EF9" }}
                  className="font-bold text-[25px] leading-[31.1px] text-white"
                >
                  Hot Leads
                </h2>
                <p className="text-white">
                  Generate Leads seamlessly within the conversation flow.
                </p>
              </div>
            </div>
            <div className="flex  gap-3">
              <div>
                <img src={Bot} alt="Bot" style={{ height: "4rem" }} />
              </div>
              <div>
                <h2
                  style={{ color: "#925EF9" }}
                  className="font-bold text-[25px] leading-[31.1px] text-white"
                >
                  Chatbot Avatars
                </h2>
                <p className="text-white">
                  Humanoid bots Crafted with LLM model
                </p>
              </div>
            </div>

            <div className="flex  gap-3">
              <div>
                <img src={Person} alt="Person" style={{ height: "4rem" }} />
              </div>
              <div>
                <h2
                  style={{ color: "#925EF9" }}
                  className="font-bold text-[25px] leading-[31.1px] text-white"
                >
                  Conversational AI
                </h2>
                <p className="text-white">Adaptive Communication Style</p>
              </div>
            </div>
          </div>
          <div className="relative w-1/2 ">
            <div
              className="absolute -top-28 right-[-80px] w-[830px] h-[237px] border-2 rounded-tl-[36px] rounded-tr-none rounded-br-none rounded-bl-[118px] "
              id="check"
              style={{
                zIndex: "0",
                background:
                  "radial-gradient(circle, rgba(216, 216, 216, 0.2) 0%, rgba(216, 216, 216, 0.2) 100%), linear-gradient(90deg, rgba(230, 204, 200, 0) 90%, rgba(230, 204, 255, 0) 0%)",
              }}
            ></div>

              <img className="absolute -top-44 " src={BotImage} alt="Bot Image" style={{ zIndex: "9999" }} />
           
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Bgpurple})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "70%",
        }}
        className="relative "
      >
        <div
          className="absolute left-1/2 top-[-13rem] -translate-x-1/2 border items-center justify-center gap-6 flex flex-col bg-black rounded-3xl text-white border-black"
          style={{ width: "60vw", height: "60vh" }}
        >
          <div>
            <h1 className="font-urbanist font-bold text-[53.94px] leading-[88.73px]">
              PHARYNX
              <span style={{ color: "#4916AC" }} className="whitespace-nowrap">
                CONNECT
              </span>
            </h1>
          </div>
          <div>
            <a className="cursor-pointer">
              <img src={PlayButton} alt="Play Button" />
            </a>
          </div>
          <div className="w-[262px] font-urbanist font-normal text-[44px] leading-[64.8px]">
            Introduction
          </div>
        </div>
        <div
          className="absolute top-1/3 left-1/2  -translate-x-1/2 "
          style={{ width: "17rem", height: "3rem" }}
        >
          <button
            className="bg-white h-full w-full rounded-xl font-urbanist font-bold"
            style={{ color: " #4916AC" }}
          >
            Get Demo
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
