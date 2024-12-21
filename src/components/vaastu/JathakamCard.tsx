import jathakamBanner from "../../assets/images/jathakamm.jpeg";
import nature from "../../assets/images/fog-nature-forest-woods-india.jpg"
import React from "react";


interface JathakamCardProps {
  bhumi?: boolean; // Optional boolean prop
}

const JathakamCard: React.FC<JathakamCardProps> = ({bhumi}) => {
  return (
    <div>
      <div
        className="md:h-[90vh] h-[60vh] flex justify-center items-center "
        style={{
          backgroundImage: `url(${ bhumi ? nature : jathakamBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="md:text-6xl text-4xl tracking-wider font-semibold text-white z-10">
          {bhumi ? "భూమి సమీక్ష":"జాతక చక్రం"}
        </h1>
      </div>
    </div>
  );
};

export default JathakamCard;
