import React, { useEffect, useRef } from "react";
import GraphRouteBg from "../assets/GraphrouteBg.png";
import ScrollReveal from "scrollreveal";
import Pencil from "../assets/Pencil.png";
import { Pen } from "lucide-react";

const Graphroute = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    // Initialize ScrollReveal
    window.sr = ScrollReveal();
    sr.reveal(".reveal", { duration: 6000 });

    const items = itemsRef.current;

    // Check if an element is in viewport
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const callbackFunc = () => {
      items.forEach((item) => {
        if (isElementInViewport(item)) {
          item.classList.add("in-view");
        }
      });
    };

    // Listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("resize", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        height: "200vh",
        backgroundImage: `url(${GraphRouteBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-16">
        <div className="items-center flex flex-col justify-center">
          <h1 className="font-urbanist font-bold text-[44px] leading-[71.09px] text-center text-black">
            Enhance User Engagement
          </h1>
          <h3
            className="font-urbanist font-medium text-[24px] leading-[40.8px] text-center"
            style={{ color: "#4916ac" }}
          >
            Gen AI Lead Generation Bot
          </h3>
        </div>
        <div>
          <section className="timeline">
            <ul>
              {[
                {
                  phase: "Choose Your Theme",
                  description:
                    "Select your theme before creating videos for a consistent and engaging visual style. Make your content stand out with a well-chosen theme.",
                },
                { phase: "Create Customize Videos", description: "Create customized videos tailored to your unique needs and preferences. Personalize your content to captivate your audience effectively." },
                { phase: "Create NLP Flows", description: "Develop NLP flows to streamline natural language processing for enhanced interactions. Simplify complex language tasks with efficient, tailored workflows." },
                { phase: "Avatar Video Generation", description: "Generate avatar videos to bring your digital persona to life. Create engaging, animated content with personalized avatars." },
                { phase: "Powered By LLM", description: "Harness the power of LLM for advanced language processing capabilities. Enhance your applications with cutting-edge large language model technology." },
                
              ].map((item, index) => (
                <li key={index} ref={(el) => (itemsRef.current[index] = el)}>
                  <div className="reveal">
                    <p>
                      <strong className="">
                        <img
                          style={{ height: "3rem" }}
                          src={Pencil}
                          alt="marker"
                        />
                        {item.phase}
                      </strong>
                    </p>
                    {item.description && (
                      <p className="text-white text-sm mt-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="items-center flex justify-center">
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
            Get Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Graphroute;
