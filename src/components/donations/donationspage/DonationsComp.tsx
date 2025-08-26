import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import DonationsBannerImg from "../../../assets/images/donations-banner.png";
import { DonationsCardData } from "./DonationsData";
export default function DonationsComp() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDonateNowClick = (id: number, title: string) => {
    if (authContext?.isAuthenticated) {
      navigate("/donationpayment", {
        state: {
          donationId: id,
          donationTitle: title,
        },
      });
    } else {
      navigate("/login ");
      console.log("Navigating to /login");
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-[1280px] mx-auto">
      <div className="flex justify-center items-center  p-4 md:py-4 ">
        <div
          className="w-full rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
          style={{
            backgroundImage: `url(${DonationsBannerImg})`,
          }}
        >
          {" "}
          <h1 className="md:text-6xl text-xl tracking-wider font-semibold text-white z-10 absolute bottom-4 lg:bottom-12 left-1/2 transform -translate-x-1/2">
            Donation
          </h1>
        </div>
      </div>
      <div className="mx-auto text-center p-12 ">
        <h1 className=" text-2xl md:text-3xl font-bold">DONATE US TO HELP</h1>
        <p className="text-[12px] font-bold tracking-wider text-[#DB4242]">
          Make a Donation
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 pb-8 mx-auto  px-4">
        {DonationsCardData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } bg-[#F8F8F8] rounded-lg overflow-hidden shadow-md`}
          >
            <div className="md:w-[400px] md:h-[300px] w-full">
              <img
                className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
                src={item.img}
                alt={item.title}
              />
            </div>

            <div className="flex flex-col justify-between w-full px-4 py-4 md:p-6 gap-4">
              <h1 className="text-lg font-bold text-[#d9540f]">{item.title}</h1>
              <p className="text-sm leading-6 text-[#333] tracking-wide">
                {item.content}
              </p>
              <hr className="border border-[#d9b886] rounded-md" />
              <div>
                <button
                  onClick={() => handleDonateNowClick(item.id, item.title)}
                  className="bg-[#8e512c] px-6 py-2 rounded-sm text-white text-sm hover:bg-orange-700"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
