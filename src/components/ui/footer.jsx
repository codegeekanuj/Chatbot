import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function FComponent() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="space-y-4">
        <a  href="/" >
            <img
              src="https://s3-alpha-sig.figma.com/img/43c7/6d21/04469d510505e0c633896e7b785fc6e1?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CP-uC8yPKpFF2YlPbhv5UJ4kxdAJeqFrVhAihu3RaEIaIdIhH-cbEIbAmPocloEAU17yRjix6Te3NImcAVgIRQgDVHz2vosPyZU39vCjZdjIyQUMcOI596IiXrSKqYlaEK~4G5PaSHok1mIcGoctJyb5hAtyoiIHfjTyqQoBCAb2yvVrcx1Y75PV3tMARPGJxBhG2YomSvEVMSMwR2XLtEQ-8hJGq7v90BrUFwstf2uTzlY18VizzKe0as3uUhL0cgfkkGELL4~dbpvh9Lvo~gYO1MQ4sGLMKIEcgiRc9E99pEhUPgWVLDJU1dMdNf4279aJmBl2xPTv48rME~jGTQ__"
              alt="PHARYNX Logo"
              className="h-16"
            />
          </a>
          <p className="max-w-md">
            Acme Inc. is a leading provider of innovative solutions for businesses of all sizes. We are dedicated to
            helping our clients achieve their goals and succeed in today's competitive marketplace.
          </p>
        
        </div>
        <div className="space-y-4">
          <h3 className="text-white font-medium">Contact Us</h3>
          <div className="space-y-2">
            <div>
              <span className="font-medium">Address:</span> 123 Main Street, Anytown USA
            </div>
            <div>
              <span className="font-medium">Phone:</span> +1 (555) 555-5555
            </div>
            <div>
              <span className="font-medium">Email:</span>
              info@acmeinc.com
            </div>
          </div>
        </div>
     
        <div className="space-y-4">
          <h3 className="text-white font-medium">Request a Callback</h3>
          <form className=" gap-4 flex justify-center items-center flex-col">
            <div className="relative">
              <Input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-400 focus:border-white focus:outline-none pb-2"
              />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#9E58EF] to-[#9E58EF]" />
            </div>
            <div className="relative ">
              <Input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-gray-400 focus:border-white focus:outline-none pb-2"
              />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#9E58EF] to-[#9E58EF]" />
            </div>
            <div className="relative">
              <Input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-gray-400 focus:border-white focus:outline-none pb-2"
              />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#9E58EF] to-[#9E58EF]" />
            </div>
            <div className="relative">
              <Input
                type="text"
                placeholder="Company Name"
                className="w-full bg-transparent border-b border-gray-400 focus:border-white focus:outline-none pb-2"
              />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#9E58EF] to-[#9E58EF]" />
            </div>
            <Button
              type="submit"
              className="w-24 flex  bg-gradient-to-r from-[#9E58EF] to-[#9E58EF] text-white rounded-md py-2 hover:opacity-90 transition-opacity"
            >
              Submit
            </Button>
          </form>
        </div>
        <span className='border w-screen flex items-center justify-center '>© 2020 PharynxAI. All Rights Reserved.</span>
      </div>
    </footer>
  );
}