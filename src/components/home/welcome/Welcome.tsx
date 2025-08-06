import Founder1 from "../../../assets/images/image3.png";
import BannerImage from "../../../assets/images/homepagebanner.png";


export default function App() {
 
  return (
  <div className="relative w-full overflow-hidden ">
  {/* Mobile-specific banner */}
  <div className="relative w-[390px] sm:w-full h-[182.813px] md:h-[80%] flex-shrink-0" style={{ aspectRatio: '32/15' }}>
    <img 
      src={BannerImage}
      alt="Banner Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    
    {/* Founder images top-right - mobile version */}
    <div className="absolute top-4 right-6 gap-2 md:top-6 md:right-12 z-10 flex md:gap-6">
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="w-[38px] h-[38px] md:w-[60px] md:h-[60px]  lg:w-[123px] lg:h-[123px]  rounded-full shadow-sm p-0.5 bg-[#F9DFC1] "
        >
          <img
            src={Founder1}
            alt={`Founder ${i + 1}`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      ))}
    </div>
    
    {/* Text content at bottom - mobile version */}
    <div className="absolute bottom-2 lg:bottom-[200px] left-0 right-0 z-10 text-center px-2">
      <h1 className="font-anek text-[15px] font-semibold md:text-[30px] select-none drop-shadow">
        సనాతన శాంకరీ పీఠం
      </h1>
      <p className="text-[10px] md:text-[20px] font-medium  mt-1 drop-shadow">
        Spiritual Enlightenment and Divine Blessings
      </p>
    </div>
  </div>
</div>
  );
}
