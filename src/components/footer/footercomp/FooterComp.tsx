import footerBgImg from "../../../assets/images/footerbg.png";
import footerCallImg from "../../../assets/images/footer-phone.svg";
import footerMailImg from "../../../assets/images/footer-mail.svg";
import footerLocationImg from "../../../assets/images/footer-location.svg";
import footerOmImg from "../../../assets/images/footer-om.svg";
import footerLogo from "../../../assets/images/footer-logo.svg";
import footerInsta from "../../../assets/svg/footer-insta.svg";
import footerWhatsApp from "../../../assets/svg/footer-whatsapp.svg";
import footerYouTube from "../../../assets/svg/footer-youtube.svg";
import footerTelegram from "../../../assets/svg/footer-telegram.svg";

import { FooterInfoData, FooterOthersData } from "./FooterPostsData";
import { Link, NavLink } from "react-router-dom";

export default function FooterComp() {
  
  return (
    <div
      className="flex flex-col gap-4 text-white  md:pt-24 md:px-12 pt-12 px-6"
      style={{
        backgroundImage: `url(${footerBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col  justify-around lg:flex-row gap-8">
        <div className="flex flex-col gap-4 lg:w-1/3">
          {/* <h1 className="text-xl font-semibold">About Us</h1>
          <p>
            Don't stay stuck in the past. Move forward and embrace new
            opportunities. Strive for progress, and remember to keep things
            balanced and under control.
          </p> */}
          <div className="md:pl-12">
            <img src={footerLogo} alt="" />
          </div>
          <div className="flex items-center gap-3 text-[#FFB600]">
            <div>
              <img src={footerCallImg} className="w-5" alt="" />
            </div>
            <div>
              <p>+91 9989492655</p>
              <p>+91 9985164455</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#FFB600]">
            <div>
              <img src={footerMailImg} className="w-5" alt="" />
            </div>
            <div>
              <p>sankaripeetam@gmail.com</p>
              <p>turst.sspc@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-[#FFB600]">
            {/* Location 1 */}
            <div className="flex items-start gap-3">
              <img
                src={footerLocationImg}
                className=" w-5 mt-1"
                alt="Location Icon"
              />
              <p>
                Advytha Ashram, Kamakshi Lakeview,
                <br /> opp to Nayara petrol bunk, Kurnool Road, <br /> Santha
                Nuthala Padu, Prakasam dist, Andhra Pradesh.
              </p>
            </div>

            {/* Location 2 */}
            <div className="flex items-start gap-3">
              <img
                src={footerLocationImg}
                className=" w-5 mt-1"
                alt="Location Icon"
              />
              <p>
                Sundar Nagar, Mangamur Road, Ongole, <br /> Prakasam District, Andhra
                Pradesh - 523002.
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:w-1/3 justify-around">
          <ul className="flex flex-col gap-4 text-[#FFB600] ">
            <li className="text-xl font-semibold text-white">
              <p>Quick Links</p>
            </li>
            <div className="flex flex-col gap-3">
              {FooterInfoData.map((item, index) => {
                return (
                  <li key={index} className="flex gap-2">
                    <img src={footerOmImg} alt="" />
                    <Link to={item.path}>{item.name}</Link>{" "}
                  </li>
                );
              })}
            </div>
          </ul>
          <ul className="flex flex-col gap-4 text-[#FFB600] ">
            <li className="text-xl font-semibold text-white">
              <p>Information</p>
            </li>
            <div className="flex flex-col gap-3">
              {FooterOthersData.map((item, index) => {
                return (
                  <li key={index} className="flex gap-2">
                    <img src={footerOmImg} alt="foo" />
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
        {/* <div className="flex flex-col items-start gap-4 ">
          <h1 className="text-xl font-semibold">Recent Posts</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-12 lg:gap-4 text-[#FFB600]">
            {footerEventsState.map((item, index) => {
              return (
                <div
                  className="flex gap-4 justify-start items-center"
                  key={index}
                >
                  <div className="">
                    <img
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="flex gap-1">
                      <img src={footerClaenderImg} alt="" />
                      <p>{format(new Date(item.date), "dd/MM/yyyy")}</p>
                    </p>

                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
      <div className="py-8 flex flex-col flex-col-reverse gap-4 md:flex-row justify-around items-center">
        <p className="text-center text-sm text-gray-600 py-4">
          © www.sankaripeetam.org 2024 | All Rights Reserved | Designed by{" "}
          <a
            href="https://www.vlacksolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffb600] hover:underline font-medium "
          >
            Vlack Solutions Pvt Ltd
          </a>{" "}
          | <em className="text-white"> Melam Koti</em>
        </p>
        {/* <div>
          <img src={footerLogo} alt="" />
        </div> */}
        <div className="flex gap-5 ">
          <NavLink
            to={"https://www.instagram.com/narasaiah_acharya?igsh=aThtbzIxeTIxYjZu&utm_source=qr"}
            target="blank"
            className="p-2 bg-white rounded-full m-auto cursor-pointer
"
          >
            <img className="w-6 " src={footerInsta} alt="" />
          </NavLink>
          <NavLink
            to={
              "https://www.facebook.com/share/1AzuTz8VTm/?mibextid=wwXIfr"
            }
            target="blank"
            className="p-2 bg-white rounded-full m-auto cursor-pointer
"
          >
            <img className="w-6" src={footerWhatsApp} alt="" />
          </NavLink>
          <NavLink
            to={"https://www.youtube.com/@SankariPeetam"}
            target="blank"
            className="p-2 bg-white rounded-full m-auto cursor-pointer
"
          >
            <img className="w-6" src={footerYouTube} alt="" />
          </NavLink>
          <NavLink
            to={"https://t.me/Sankaripeetam"}
            target="blank"
            className="p-2 bg-white rounded-full m-auto cursor-pointer
"
          >
            <img className="w-6" src={footerTelegram} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
