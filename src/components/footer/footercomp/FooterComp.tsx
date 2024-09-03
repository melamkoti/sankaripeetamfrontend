import footerBgImg from "../../../assets/images/footerbg.png";
import footerCallImg from "../../../assets/images/footer-phone.svg";
import footerMailImg from "../../../assets/images/footer-mail.svg";
import footerLocationImg from "../../../assets/images/footer-location.svg";
import footerClaenderImg from "../../../assets/images/footer-calender.svg";
import footerOmImg from "../../../assets/images/footer-om.svg";
import footerLogo from "../../../assets/images/footer-logo.svg";
import footerInsta from "../../../assets/images/footer-insta.svg";
import footerWhatsApp from "../../../assets/images/footer-whatsapp.svg";
import footerYouTube from "../../../assets/images/footer-youtube.svg";
import {
  FooterInfoData,
  FooterPostsData,
  FooterOthersData,
} from "./FooterPostsData";
export default function FooterComp() {
  return (
    <div
      className="flex flex-col gap-4 text-white  pt-24 px-12 "
      style={{
        backgroundImage: `url(${footerBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex  justify-around">
        <div className="flex flex-col gap-4 w-1/3">
          <h1 className="text-xl font-semibold">About Us</h1>
          <p>
            Don't stay stuck in the past. Move forward and embrace new
            opportunities. Strive for progress, and remember to keep things
            balanced and under control.
          </p>
          <div className="flex items-center gap-3 text-[#FFB600]">
            <div>
              <img src={footerCallImg} className="w-5" alt="" />
            </div>
            <div>
              <p>+91 8106442677</p>
              <p>+91 7993852677 </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#FFB600]">
            <div>
              <img src={footerMailImg} className="w-5" alt="" />
            </div>
            <div>
              <p>guruji@sankaripeetam.in</p>
              <p>turst.sspc@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#FFB600]">
            <div>
              <img src={footerLocationImg} className="w-14" alt="" />
            </div>
            <div>
              <p>
                Brahmasri Nemmikanti, Narsaiahcharya No: 8-411A, Back side,
                Anjaneya Swamy Temple, Sundar nagar, Mangamur road, Ongole,
                Prakasam District, Andhra Pradesh - 523002.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-1/3 justify-around">
          <ul className="flex flex-col gap-4 text-[#FFB600] ">
            <li className="text-xl font-semibold text-white">
              <p>Information</p>
            </li>
            <div className="flex flex-col gap-3">
              {FooterInfoData.map((item, index) => {
                return (
                  <li key={index} className="flex gap-2">
                    <img src={footerOmImg} alt="" />
                    {item}
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
                    <img src={footerOmImg} alt="" />
                    {item}
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <h1 className="text-xl font-semibold">Recent Posts</h1>

          <div className="flex flex-col   gap-4 text-[#FFB600]">
            {FooterPostsData.map((item, index) => {
              return (
                <div
                  className="flex gap-4 justify-start items-center"
                  key={index}
                >
                  <div className="">
                    <img className="w-20" src={item.img} alt="" />
                  </div>
                  <div>
                    <p className="flex gap-1">
                      <img src={footerClaenderImg} alt="" />
                      {item.date}
                    </p>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-8 flex justify-around items-center">
        <p>COPYRIGHT &copy; - 2024</p>
        <div>
          <img src={footerLogo} alt="" />
        </div>
        <div className="flex gap-5 ">
          <div>
            <img className="" src="" alt="" />
          </div>
          <div className="p-2 bg-white rounded-full m-auto">
            <img className="w-6 " src={footerInsta} alt="" />
          </div>
          <div className="p-2 bg-white rounded-full m-auto">
            <img className="w-6" src={footerWhatsApp} alt="" />
          </div>
          <div className="p-2 bg-white rounded-full m-auto">
            <img className="w-6" src={footerYouTube} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
