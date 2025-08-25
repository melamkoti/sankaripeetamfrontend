// import { NavLink } from "react-router-dom";
// // import signinimg from "../../assets/images/signinimg.png";
// import backbtn from "../../assets/svg/backbtn.svg";

// function PasswordComplete() {
//   return (
//       <div
//      className=" lg:mt-[110px] h-screen flex justify-center items-center bg-gradient-to-br from-[#f3d1c1] via-[#e9a17c] to-[#d6785d]"
//         // style={{
//         //   backgroundImage: `url(${signinimg})`,
//         //   backgroundPosition: "center",
//         //   backgroundSize: "cover",
//         // }}
//       >
//         <div className="flex flex-col  lg:w-2/6 w-4/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-6 p-4 z-10  mx-4 rounded-xl ">
//           <button type="button" className="absolute left-12 top-6">
//             <img src={backbtn} alt="backbtn" className="w-6" />
//           </button>
//           <div className="w-full flex flex-col justify-center items-center gap-2 ">
//             <p className="text-3xl font-semibold">All Done!</p>
//             <p className="text-lg font-normal text-[#666]">
//               Your Password has been reset.
//             </p>
//           </div>

//           <p className="text-lg font-normal ">
//             Re-Direct to{" "}
//             <NavLink
//               to={"/login"}
//               className="font-semibold text-[#FFA12B] underline underline-offset-2 "
//             >
//               {" "}
//               SignIn Page
//             </NavLink>
//           </p>
//         </div>
//       </div>
//   );
// }

// export default PasswordComplete;

import { NavLink } from "react-router-dom";
import { CheckCircle2 } from "lucide-react"; // ✅ lucide-react icon
import { motion } from "framer-motion";

function PasswordComplete() {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-[#f3d1c1] via-[#e9a17c] to-[#d6785d]">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col lg:w-2/6 md:w-3/6 w-5/6 justify-center items-center bg-white shadow-2xl gap-6 p-8 rounded-2xl"
      >
       

        {/* Success Icon */}
        <CheckCircle2 className="w-16 h-16 text-green-500" />

        {/* Title & Subtitle */}
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-800">All Done!</p>
          <p className="text-lg text-gray-600 mt-2">
            Your password has been reset successfully.
          </p>
        </div>

        {/* Redirect Text */}
        <p className="text-lg text-gray-700">
          Redirect to{" "}
          <NavLink
            to="/login"
            className="font-semibold text-[#FFA12B] underline underline-offset-2"
          >
            Sign In Page
          </NavLink>
        </p>
      </motion.div>
    </div>
  );
}

export default PasswordComplete;

