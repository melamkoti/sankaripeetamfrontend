import DonationsBannerImg from "../../../assets/images/donations-banner.png";
import { DonationsCardData } from "./DonationsData";
import { NavLink } from "react-router-dom";
export default function DonationsComp() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-24 pb-8 mx-auto">
        {DonationsCardData.map((item, index) => {
          return (
            <div
              className="border-2 border-slate-200 rounded-lg w-[60vw] md:max-w-[340px] flex flex-col "
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
                <p className="text-sm leading-6 tracking-wide overflow-auto max-h-[120px] scrollbar-hide">
                  {item.content}
                </p>
                <div className="m-auto">
                  <NavLink to="/donationpayment">
                    <button className="bg-[#F26F29] px-6 py-3 rounded-full text-white text-[10px] tracking-wide">
                      DONATE NOW
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
