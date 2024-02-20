import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";

import Lazy from "./Lazy";

const slides = [
  {
    imageUrl: "/images/s3.jpg",
    title: "Beautiful Sunset",
    description: "Experience the magic of ",
  },
  {
    imageUrl: "./images/1.jpg",
    title: "Serenity of Nature",
    description: "Discover the tranquility ",
  },
  // Add more slides as needed
];

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="w-full md:mt-[100px] h-[100vh] md:h-[86vh] relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 transform ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex items-center justify-start  relative">
            <div className="overlay w-full h-full absolute top-0 left-0 bg-[#242c2ea6] z-10">
              <div className="text-left md:mt-[15%] mt-[70%]  flex flex-col w-[100%] items-center justify-center md:justify-start md:items-start text-white absolute  md:ml-[150px]">
                <p className="text-[12px] md:text-[20px] uppercase animateDis">
                  {slide.description}
                </p>
                <h2 className="text-[35px] text-nowrap md:text-[70px] font-[200] mb-4 transition-transform transform  animateHeading flex gap-[20px] capitalize">
                  {/* {slide.title} */}
                  <p>aniket</p>
                  <div className="text-[#FAB207]">
                    <Typewriter
                      options={{
                        strings: ["World Best", "best gym", "web site"],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                      }}
                    />
                  </div>
                </h2>
                <button className="text-[12px] md:text-sm transition-transform transform border-2 font-semibold px-[39px] md:px-[46px] py-2 z-[20px] animatebtm">
                  Book A demo
                </button>
              </div>
            </div>
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="object-cover h-[100vh] w-[100vw]"
            />
          </div>
        </div>
      ))}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hidden md:flex">
        <FaChevronLeft size={24} onClick={prevSlide} />
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hidden md:flex">
        <FaChevronRight size={24} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default MainPage;
