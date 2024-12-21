import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Boomi = () => {
  const [feet, setFeet] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");

  // Function to calculate dimensions based on the entered values
  const calculateDimensions = () => {
    const feetValue = Number(feet);
    const widthValue = Number(width);
    const heightValue = Number(height);

    // If both feet and width are provided, calculate height
    if (feet && width) {
      setHeight(feetValue * 0.5 + widthValue * 0.5); // Example logic for height
    }
    // If both feet and height are provided, calculate width
    else if (feet && height) {
      setWidth((heightValue - feetValue * 0.5) * 2); // Example logic for width
    }
    // If both width and height are provided, calculate feet
    else if (width && height) {
      setFeet((heightValue - widthValue * 0.5) * 2); // Example logic for feet
    }
  };

  // Use useEffect to call calculateDimensions whenever any dimension changes
  useEffect(() => {
    calculateDimensions();
  }, []);

  return (
    <div className=" my-24 max-w-2xl mx-auto border-2 rounded-md ">
      <div className=" flex justify-end  p-4  ">
        <div className="flex justify-end border border-[#10356A] rounded-md">
          <NavLink
            to="/vastu"
            className={({ isActive }) =>
              isActive
                ? "bg-[#10356A] p-3 text-white rounded-l-md"
                : "bg-white text-black p-3 rounded-md"
            }
          >
            <p>జాతక చక్రం</p>
          </NavLink>
          <NavLink
            to="/boomi"
            className={({ isActive }) =>
              isActive
                ? "bg-[#10356A] p-3 text-white  rounded-r-md"
                : "bg-white text-black p-3 rounded-md"
            }
          >
            <p>భూమి సమీక్ష</p>
          </NavLink>
        </div>
      </div>
      <div className="flex items-center mb-6 text-center mt-8">
        <label className="w-1/4 text-gray-700 font-medium">పాదం :</label>
        <input
          type="text"
          placeholder="Feet"
          value={feet}
          onChange={(e) => setWidth(e.target.value === "" ? "" : Number(e.target.value))}
          className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex items-center mb-6 text-center">
        <label className="w-1/4 text-gray-700 font-medium">వెడల్పు :</label>
        <input
          type="text"
          placeholder="Width"
          value={width}
          onChange={(e) => setWidth(e.target.value === "" ? "" : Number(e.target.value))}
          className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex items-center mb-6 text-center">
        <label className="w-1/4 text-gray-700 font-medium">పొడవు :</label>
        <input
          type="text"
          placeholder="Height"
          value={height}
          onChange={(e) => setWidth(e.target.value === "" ? "" : Number(e.target.value))}
          className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default Boomi;
