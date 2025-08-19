import footerCallImg from "../../../assets/images/footer-phone.svg";
import footerMailImg from "../../../assets/images/footer-mail.svg";
import footerLocationImg from "../../../assets/images/footer-location.svg";
import footerOmImg from "../../../assets/images/footer-om.svg";
import footerInsta from "../../../assets/svg/footer-insta.svg";
import footerWhatsApp from "../../../assets/svg/footer-whatsapp.svg";
import footerYouTube from "../../../assets/svg/footer-youtube.svg";
import footerTelegram from "../../../assets/svg/footer-telegram.svg";

import { FooterInfoData, FooterOthersData } from "./FooterPostsData";
import { Link, NavLink } from "react-router-dom";

export default function FooterComp() {
  return (

<div className="flex flex-col text-[#E9E5DF] bg-[#2E2119] md:pt-24 md:px-12 pt-12 px-6 ">
  {/* Footer Top Section */}
  <div className="flex flex-col lg:flex-row gap-8 justify-between ">
    
    {/* Quick Links & Information */}
    <div className="flex flex-col sm:flex-row gap-8 lg:gap-24 lg:w-1/3">
      {/* Quick Links */}
      <ul className="flex flex-col gap-4">
        <li className="text-xl font-semibold">Quick Links</li>
        <div className="flex flex-col gap-3">
          {FooterInfoData.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {/* <img src={footerOmImg} alt="" className="w-4" /> */}
              <Link to={item.path} className="hover:text-[#ffb600]">{item.name}</Link>
            </li>
          ))}
        </div>
      </ul>

      {/* Information */}
      <ul className="flex flex-col gap-4">
        <li className="text-xl font-semibold">Information</li>
        <div className="flex flex-col gap-3">
          {FooterOthersData.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {/* <img src={footerOmImg} alt="foo" className="w-4" /> */}
              <Link to={item.path} className="hover:text-[#ffb600]">{item.name}</Link>
            </li>
          ))}
        </div>
      </ul>
    </div>

    {/* Address Section */}
    <div className="flex flex-col gap-4 lg:w-1/3">
      <h2 className="text-xl font-semibold">Address</h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          {/* <img src={footerLocationImg} className="w-5 mt-1" alt="Location Icon" /> */}
          <p>
            Advytha Ashram, Kamakshi Lakeview, <br />
            opp to Nayara petrol bunk, Kurnool Road, <br />
            Santha Nuthala Padu, Prakasam dist, Andhra Pradesh.
          </p>
        </div>
        <div className="flex items-start gap-3">
          {/* <img src={footerLocationImg} className="w-5 mt-1" alt="Location Icon" /> */}
          <p>
            Sundar Nagar, Mangamur Road, Ongole, <br />
            Prakasam District, Andhra Pradesh - 523002.
          </p>
        </div>
      </div>
    </div>

    {/* Contact & Socials */}
    <div className="flex flex-col  lg:w-1/3">
      <p className="text-xl font-semibold">Phone</p>
      <div className="flex items-center gap-2">
        {/* <img src={footerCallImg} className="w-5" alt="" /> */}
        <div>
          <p>+91 9989492655</p>
          <p>+91 9985164455</p>
        </div>
      </div>

      <p className="text-xl font-semibold mt-2">Email</p>
      <div className="flex items-center gap-2">
        {/* <img src={footerMailImg} className="w-5" alt="" /> */}
        <div>
          <p>sankaripeetam@gmail.com</p>
          <p>turst.sspc@gmail.com</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-2">
        <NavLink to="https://www.instagram.com/narasaiah_acharya?igsh=aThtbzIxeTIxYjZu&utm_source=qr" target="_blank"
          className="p-2 bg-[#D9D9D9] rounded-full cursor-pointer hover:scale-110 transition">
          <img className="w-6" src={footerInsta} alt="Instagram" />
        </NavLink>
        <NavLink to="https://www.facebook.com/share/1AzuTz8VTm/?mibextid=wwXIfr" target="_blank"
          className="p-2 bg-[#D9D9D9] rounded-full cursor-pointer hover:scale-110 transition">
          <img className="w-6" src={footerWhatsApp} alt="Facebook" />
        </NavLink>
        <NavLink to="https://www.youtube.com/@SankariPeetam" target="_blank"
          className="p-2 bg-[#D9D9D9]  rounded-full cursor-pointer hover:scale-110 transition">
          <img className="w-6" src={footerYouTube} alt="YouTube" />
        </NavLink>
        <NavLink to="https://t.me/Sankaripeetam" target="_blank"
          className="p-2 bg-[#D9D9D9]  rounded-full cursor-pointer hover:scale-110 transition">
          <img className="w-6" src={footerTelegram} alt="Telegram" />
        </NavLink>
      </div>
    </div>
  </div>

  {/* Footer Bottom Section */}
  <div className="py-8 flex flex-col-reverse md:flex-row gap-4 justify-between items-center border-t border-gray-600 mt-8">
    <p className="text-center text-sm text-gray-400">
      © www.sankaripeetam.org 2024 | All Rights Reserved | Designed by{" "}
      <a href="https://www.vlacksolutions.com/" target="_blank" rel="noopener noreferrer"
        className="text-[#ffb600] hover:underline font-medium">
        Vlack Solutions Pvt Ltd
      </a>{" "}
      | <em className="text-white">Melam Koti</em>
    </p>
  </div>
</div>

  );
}
