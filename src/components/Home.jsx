import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
import "./text.css";
import ThemeContext from "./ContextWrapper/ThemeContext";
import Header from "./Header";
import Scroll1 from "./Scroll1";
import { motion } from "framer-motion";
import Scroll from "./Scroll";
import Footer from "./Footer";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 0,
    transition: 1,
    staggerChilden: 0.1,
  },
};

const Home = () => {
  const slides = [
    {
      url: require("../assets/1.jpg"),
    },
    {
      url: require("../assets/2.jpg"),
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <>
        <div className="max-w-[1900px] h-[680px] w-full m-auto  relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full  bg-center bg-cover duration-700"
          ></div>
          <motion.h1
            className="xx"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            Welcome To COSMOS Network
          </motion.h1>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                {/* <RxDotFilled /> */}
              </div>
            ))}
          </div>
          {/* <div class="bar">
            <span class="bar_content">
              Creative Development | Branding & Marketing Communications |
              Public & Media Relations | Digital Marketing | Advertising
            </span>
          </div> */}
          {/* <div class="marquee-w">
            <div class="marquee">
              <span>
                Creative Development | Branding & Marketing Communications |
                Public & Media Relations | Digital Marketing | Advertising |
                &nbsp; &nbsp; &nbsp;
              </span>
            </div>
            <div class="marquee marquee2">
              <span>
                Creative Development | Branding & Marketing Communications |
                Public & Media Relations | Digital Marketing | Advertising |
                &nbsp; &nbsp; &nbsp;
              </span>
            </div>
          </div> */}
          {/* <motion.div
            className="slidingTextContainer"
            variants={slideVariants}
            initial="initial"
            animate="animate"
          >
            Creative Development | Branding & Marketing Communications | Public
            & Media Relations | Digital Marketing | Advertising |
          </motion.div> */}
          <Scroll1 />
          <ThemeContext>
            <Header />
          </ThemeContext>

          {/* <Gallery/> */}

          <Scroll />

          <Footer />
        </div>
      </>
    </>
  );
};

export default Home;
