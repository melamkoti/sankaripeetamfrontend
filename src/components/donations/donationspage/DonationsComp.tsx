import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import DonationsBannerImg from "../../../assets/images/donations-banner.png";
import { DonationsCardData } from "./DonationsData";
export default function DonationsComp() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDonateNowClick = () => {
    if (authContext?.isAuthenticated) {
      navigate("/donationpayment");
      console.log("Navigating to /donationpayment");
    } else {
      navigate("/login ");
      console.log("Navigating to /login");
    }
  };
  return (
    <div className="flex flex-col gap-6 ">
      <div className="">
        <img className="h-[80vh] w-screen" src={DonationsBannerImg} alt="" />
      </div>
      <div className="mx-auto text-center p-12 ">
        <p className="text-[12px] font-bold tracking-wider text-[#DB4242]">
          MAKE A DONATION
        </p>
        <h1 className="text-3xl font-bold">DONATE US TO HELP</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  pb-8 mx-auto w-[80vw]">
        {DonationsCardData.map((item, index) => {
          return (
            <div
              className=" rounded-lg md:max-w-[300px] flex flex-col "
              key={index}
            >
              <img
                className="max-h-[280px] w-full rounded-lg"
                src={item.img}
                alt=""
              />
              <div className="flex flex-col gap-5 p-4 overflow-hidden">
                <h1 className="text-xl font-semibold text-center">
                  {item.title}
                </h1>
                <p className="text-sm leading-6 tracking-wide overflow-auto max-h-[120px] ">
                  {item.content}
                </p>
                <div className="m-auto">
                  <button
                    onClick={handleDonateNowClick}
                    className="bg-[#F26F29] px-6 py-3 rounded-full text-white text-[10px] tracking-wide"
                  >
                    DONATE NOW
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
