import React from "react";
import { Button } from "./ui/button";
import LogoPharynx from "../assets/LogoPharynx.png"
import LogoConnect from "../assets/LogoConnect.png"

const Navbar = () => {
  return (
    <div className="text-white">
      <header className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-purple-900 via-slate-900 to-fuchsia-900">
        <div >
          <a href="/"className="flex">
                      <span> <img src={LogoPharynx} alt="Logo" /></span>
            <span><img src={LogoConnect} alt="Logo" /></span>
          </a>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-8 items-center">
            <a
              className="text-white font-semibold hover:text-gray-300 transition-colors"
              href="#demo"
            >
              Demo
            </a>
            <a
              className="text-white font-semibold hover:text-gray-300 transition-colors"
              href="#plans"
            >
              Plans
            </a>
          </div>
          <Button className="bg-purple-600 text-white border py-2 px-4 rounded-xl hover:bg-purple-700 transition-colors">
            Dashboard
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;