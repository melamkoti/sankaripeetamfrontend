import signinimg from "../../assets/images/signinimg.png";
import backbtn from "../../assets/svg/backbtn.svg"

function PasswordComplete() {
 
  return (
    <div className="flex h-screen">
      <div
        className="w-3/6 "
        style={{
          backgroundImage: `url(${signinimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="flex flex-col w-3/6  justify-center items-center gap-8 p-24 relative">
      <button type="button" className="absolute left-12 top-6"><img src={backbtn} alt="backbtn" className="w-6"/></button>
        <div className="w-full flex flex-col justify-center items-center gap-2 ">
          <p className="text-3xl font-semibold">All Done!</p>
          <p className="text-lg font-normal text-[#666]">
            Your Password has been reset.
          </p>
        </div>

        <p className="text-lg font-normal ">
            Re-Direct to{" "}
            <a href="#" className="font-semibold text-[#FFA12B] underline underline-offset-2 "> SignIn Page</a>
          </p>

        

            
      </div>
    </div>
  );
}

export default PasswordComplete;
