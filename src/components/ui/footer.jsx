import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Background from "../../assets/Background.png";
import Prize from "../../assets/Prize.png";
import EmailsOverlay from "../../assets/EmailsOverlay.png";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
// mport 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";

export default function FComponent() {
  const [value, setValue] = useState()
  return (
    <footer
      className="text-white py-12 md:py-16"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10">
        <div className="space-y-4 flex-1">
          <a href="/">
            <img
              src="https://s3-alpha-sig.figma.com/img/43c7/6d21/04469d510505e0c633896e7b785fc6e1?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CP-uC8yPKpFF2YlPbhv5UJ4kxdAJeqFrVhAihu3RaEIaIdIhH-cbEIbAmPocloEAU17yRjix6Te3NImcAVgIRQgDVHz2vosPyZU39vCjZdjIyQUMcOI596IiXrSKqYlaEK~4G5PaSHok1mIcGoctJyb5hAtyoiIHfjTyqQoBCAb2yvVrcx1Y75PV3tMARPGJxBhG2YomSvEVMSMwR2XLtEQ-8hJGq7v90BrUFwstf2uTzlY18VizzKe0as3uUhL0cgfkkGELL4~dbpvh9Lvo~gYO1MQ4sGLMKIEcgiRc9E99pEhUPgWVLDJU1dMdNf4279aJmBl2xPTv48rME~jGTQ__"
              alt="PHARYNX Logo"
              className="h-16"
            />
          </a>
          <p className="max-w-md">
            Acme Inc. is a leading provider of innovative solutions for
            businesses of all sizes. We are dedicated to helping our clients
            achieve their goals and succeed in today's competitive marketplace.
          </p>
          <div className="flex text-3xl  gap-4">
            <GrLinkedin />
            <FaFacebook />
            <FaSquareXTwitter />
            <img src={Prize} alt="Prize" className="-mt-4" />
          </div>
        </div>
        <div className="space-y-4 flex-1">
          <h3 className="text-white font-urbanist font-bold text-xl leading-7">
            Contact Us
          </h3>
          <div className="space-y-5">
            <div className="flex gap-4">
              {" "}
              <FiPhoneCall className="text-xl" />
              <span className="font-medium">Phone:</span> +1 (555) 555-5555
            </div>
            <div className="flex gap-4">
              <MdOutlineMail className="text-2xl" />
              <span className="font-medium">Email:</span> info@acmeinc.com
            </div>
            <div className="flex gap-4">
              <GrLocation className="text-7xl -mt-7" />
              <span className="font-medium">Address:</span> Tower A, Ground
              floor, Smartworks, Sector - 125, Noida, Uttar Pradesh, India.
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={EmailsOverlay} alt="EmailsOverlay" className="max-w-xs" />
        </div>
        <div className="space-y-4 flex-1">
          <h3 className="text-white font-urbanist font-bold text-xl leading-7">
            Request a Callback
          </h3>
          <form className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-none pb-2"
              />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#9E58EF] to-[#9E58EF]" />
            </div>
            <div className="relative">
              <Input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-none pb-2"
              />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#9E58EF] to-[#9E58EF]" />
            </div>
            <div className="relative">
            <PhoneInput
  placeholder="Enter phone number"
  value={value}
  onChange={setValue}
  className="w-full bg-transparent focus:outline-none border-none pb-2 "
/>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#9E58EF] to-[#9E58EF]" />
            </div>
            <div className="relative">
              <Input
                type="text"
                placeholder="Company Name"
                className="w-full bg-transparent border-none pb-2"
              />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#9E58EF] to-[#9E58EF]" />
            </div>
            <Button
              type="submit"
              className="w-28 bg-gradient-to-r from-[#9E58EF] to-[#9E58EF] text-white rounded-xl py-2 hover:opacity-90 transition-opacity"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <hr className="border border-white w-full mt-4" />
      <div className="w-full flex justify-center mt-8">
        <span>© 2020 PharynxAI. All Rights Reserved</span>
      </div>
    </footer>
  );
}
