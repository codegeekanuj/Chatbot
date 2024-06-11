import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-gray-100 ">
      <header className="flex justify-between items-center py-4 px-8 bg-white">
        <div>
          <a  href="/" >
            <img
              src="https://s3-alpha-sig.figma.com/img/43c7/6d21/04469d510505e0c633896e7b785fc6e1?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CP-uC8yPKpFF2YlPbhv5UJ4kxdAJeqFrVhAihu3RaEIaIdIhH-cbEIbAmPocloEAU17yRjix6Te3NImcAVgIRQgDVHz2vosPyZU39vCjZdjIyQUMcOI596IiXrSKqYlaEK~4G5PaSHok1mIcGoctJyb5hAtyoiIHfjTyqQoBCAb2yvVrcx1Y75PV3tMARPGJxBhG2YomSvEVMSMwR2XLtEQ-8hJGq7v90BrUFwstf2uTzlY18VizzKe0as3uUhL0cgfkkGELL4~dbpvh9Lvo~gYO1MQ4sGLMKIEcgiRc9E99pEhUPgWVLDJU1dMdNf4279aJmBl2xPTv48rME~jGTQ__"
              alt="PHARYNX Logo"
              className="h-16"
            />
          </a>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-8 items-center">
            <a
              className="text-gray-600 font-semibold hover:text-gray-800 transition-colors"
              href="#demo"
            >
              Demo
            </a>
            <a
              className="text-gray-600 font-semibold hover:text-gray-800 transition-colors"
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