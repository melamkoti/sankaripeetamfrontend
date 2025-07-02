import { useLayoutEffect, useState } from "react";
import {
  useSpringRef,
  animated,
  useTransition,
  // useSpring,
} from "@react-spring/web";
import welcomemain from "../../../assets/images/welcomemainimg.png";
// import welcomeTwo from "../../../assets/images/vecteezy_beautiful-diwali-diya-on-colorful-bokeh-background_43621363.jpg";
import Founder1 from "../../../assets/images/image3.png";
import Founder2 from "../../../assets/images/image3.png";

import footerLogo from "../../../assets/images/footer-logo.svg";

const IMAGES = [welcomemain, welcomemain];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const springApi = useSpringRef();

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
    },
    enter: {
      clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
    },
    leave: {
      clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)",
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1);
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 4000,
    },
    delay: 1000,
    ref: springApi,
  });

  useLayoutEffect(() => {
    springApi.start();
  }, [activeIndex]);

  return (
    <div className="h-screen  sm:min-h-[90vh] relative">
      <div className="absolute top-4 left-4 z-10 flex flex-row gap-4 ">
        <div className="w-[108px] h-[108px] lg:w-[208px] lg:h-[208px] border-4 border-white rounded-full shadow-lg p-1">
          <img
            src={Founder1}
            alt="Founder 1"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

       <div className="w-[108px] h-[108px] lg:w-[208px] lg:h-[208px] border-4 border-white rounded-full shadow-lg p-1">
          <img
            src={Founder1}
            alt="Founder 1"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="w-[108px] h-[108px] lg:w-[208px] lg:h-[208px] border-4 border-white rounded-full shadow-lg p-1">
          <img
            src={Founder1}
            alt="Founder 1"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none px-4 text-center">
        <img
          src={footerLogo}
          alt="Footer Logo"
          className="z-[-10] w-[25%] h-[25%]"
        />
        <h1 className="text-3xl md:text-8xl font-bold text-red-700 select-none z-50 font-mukta">
          సనాతన శాంకరీ పీఠం
        </h1>
      </div>

      {/* Slideshow */}
      <div className="flex justify-center items-center w-full h-[100%]  z-10 relative">
        <div className="overflow-hidden relative w-full h-full">
          {/* Maintain aspect ratio if needed */}
          {/* <div className="pb-[56.25%]"></div> */}

          {transitions((springs, item) => (
            <animated.div
              className="overflow-hidden absolute top-0 w-full h-full"
              style={springs}
            >
              <img
                src={IMAGES[item]}
                className="min-w-full max-w-full h-full object-cover"
                alt="Slideshow image"
              />
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
}
