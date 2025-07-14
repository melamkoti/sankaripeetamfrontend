import { useLayoutEffect, useState } from "react";
import { useSpringRef, animated, useTransition } from "@react-spring/web";
import welcomemain from "../../../assets/images/welcomemainimg.png";
import welcomeTwo from "../../../assets/images/welcomemainimg.png";
import Founder1 from "../../../assets/images/image3.png";
import footerLogo from "../../../assets/images/footer-logo.svg";

const IMAGES = [welcomemain, welcomeTwo]; // Different images for transition

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
    config: { duration: 4000 },
    delay: 1000,
    ref: springApi,
  });

  useLayoutEffect(() => {
    springApi.start();
  }, [activeIndex]);

  return (
    <div className="h-screen sm:min-h-[90vh] relative overflow-hidden">
      {/* Founder images top-right */}
      <div className="absolute top-4 right-4 z-1 flex flex-wrap sm:flex-nowrap gap-4">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] border-2 border-white rounded-full shadow-lg p-1"
          >
            <img
              src={Founder1}
              alt={`Founder ${i + 1}`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </div>

      {/* Center logo and heading */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-1 text-center px-4">
        <img
          src={footerLogo}
          alt="Footer Logo"
          className="w-1/4 sm:w-40 md:w-1/4 h-auto"
        />
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-red-700 select-none font-ponnala mt-12">
          సనాతన శాంకరీ పీఠం
        </h1>
      </div>

      {/* Slideshow background - now at proper z-index */}
      <div className="w-full h-full z-0 absolute top-0 left-0">
        {transitions((style, item) => (
          <animated.div
            className="absolute top-0 left-0 w-full h-full"
            style={style}
          >
            <img
              src={IMAGES[item]}
              className="w-full h-full object-cover"
              alt="Slideshow"
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}
