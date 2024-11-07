import { NavLink } from "react-router-dom";
import signinimg from "../../assets/images/signinimg.png";
import backbtn from "../../assets/svg/backbtn.svg";

function PasswordComplete() {
  return (
    <div className=" h-screen main_head">
      <div
        className="h-screen flex justify-end items-center"
        style={{
          backgroundImage: `url(${signinimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col  lg:w-2/6 w-4/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-6 p-8 z-10 md:mr-32 m-6 rounded-xl ">
          <button type="button" className="absolute left-12 top-6">
            <img src={backbtn} alt="backbtn" className="w-6" />
          </button>
          <div className="w-full flex flex-col justify-center items-center gap-2 ">
            <p className="text-3xl font-semibold">All Done!</p>
            <p className="text-lg font-normal text-[#666]">
              Your Password has been reset.
            </p>
          </div>

          <p className="text-lg font-normal ">
            Re-Direct to{" "}
            <NavLink
              to={"/login"}
              className="font-semibold text-[#FFA12B] underline underline-offset-2 "
            >
              {" "}
              SignIn Page
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PasswordComplete;
