// import React, { useEffect, useRef } from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/ui/footer";
// import LocomotiveScroll from "locomotive-scroll";

function App() {
  // const scrollRef = useRef();

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  return (
    // <div ref={scrollRef} style={{ overflow: 'hidden' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    // </div>
  );
}

export default App;