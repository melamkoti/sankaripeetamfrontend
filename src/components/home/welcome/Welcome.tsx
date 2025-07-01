import { useLayoutEffect, useState } from "react";
import {
  useSpringRef,
  animated,
  useTransition,
  useSpring,
} from "@react-spring/web";
import welcomemain from "../../../assets/images/welcomemainimg.png";
import welcomeTwo from "../../../assets/images/welocome2.jpg";
import welcomeThree from "../../../assets/images/welcome3.jpg";

const IMAGES = [welcomemain, welcomeTwo, welcomeThree];

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

  const springs = useSpring({
    from: {
      strokeDashoffset: 120,
    },
    to: {
      strokeDashoffset: 0,
    },
    config: {
      duration: 11000,
    },
    loop: true,
    ref: springApi,
  });

  useLayoutEffect(() => {
    springApi.start();
  }, [activeIndex]);

  return (
    <div className="h-screen">
      {" "}
      {/* Parent with defined height (viewport height) */}
      <div className="flex justify-center items-center w-full h-[90%] ">
        <div className="overflow-hidden relative w-full h-[90%]">
          {/* Aspect ratio container */}
          <div className="pb-[56.25%]"></div>

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

          {/* Ticker */}
          <div className="absolute max-h-16 max-w-16 w-[3.5vw] h-[3.5vw] bottom-8 left-8">
            <div className="w-full h-full rounded-full absolute top-0 left-0 opacity-20 border-3 border-black"></div>
            <animated.svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="w-full h-full absolute top-0 left-0 fill-none stroke-black stroke-[3px]"
              style={{
                strokeDasharray: 120,
                ...springs,
              }}
            >
              <path d="M19.9999 38.5001C17.5704 38.5001 15.1648 38.0216 12.9203 37.0919C10.6758 36.1622 8.63633 34.7995 6.91845 33.0816C5.20058 31.3638 3.83788 29.3243 2.90817 27.0798C1.97846 24.8353 1.49995 22.4296 1.49995 20.0002C1.49995 17.5707 1.97846 15.1651 2.90817 12.9206C3.83788 10.6761 5.20058 8.63663 6.91846 6.91875C8.63634 5.20087 10.6758 3.83818 12.9203 2.90847C15.1648 1.97876 17.5705 1.50024 19.9999 1.50024C22.4293 1.50024 24.835 1.97876 27.0795 2.90847C29.324 3.83818 31.3635 5.20088 33.0813 6.91876C34.7992 8.63663 36.1619 10.6761 37.0916 12.9206C38.0213 15.1651 38.4998 17.5707 38.4998 20.0002C38.4998 22.4296 38.0213 24.8353 37.0916 27.0798C36.1619 29.3243 34.7992 31.3638 33.0813 33.0816C31.3635 34.7995 29.324 36.1622 27.0795 37.0919C24.835 38.0216 22.4293 38.5001 19.9999 38.5001L19.9999 38.5001Z" />
            </animated.svg>
          </div>
        </div>
      </div>
    </div>
  );
}
