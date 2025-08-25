
import { useEffect, useState } from "react";
import { UserModuleAPI } from "../../services/AppEndPoints";
import mainTempleImg from "../../assets/images/contraction.png";
// import locationIcon from "../../assets/images/location.svg"; // Replace with your actual location icon
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Location from "../../assets/svg/location-pin-svgrepo-com.svg";

type FooterEventsType = {
  image: string;
  date: Date;
  title: string;
  description: string;
};

const GalleryMain = () => {
  const [footerEventsState, setFooterPostsState] = useState<FooterEventsType[]>(
    []
  );
  const navigate = useNavigate();

  useEffect(() => {
    fetch(UserModuleAPI.AllPostsGet)
      .then((response) => response.json())
      .then((data) => {
        const parsedData = data.map((event: FooterEventsType) => ({
          ...event,
          date: new Date(event.date),
        }));
        setFooterPostsState(parsedData);
      })
      .catch((error) => console.error("Error fetching events data: ", error));
  }, []);

  const handleCardClick = (date: Date) => {
    navigate(`/allgalleryimages?date=${date.toISOString()}`);
  };

  return (
    <div className="main_head lg:mt-[140px]">
      <div className="flex justify-center items-center  p-4 md:py-4 md:px-2 lg:px-0 max-w-[1280px] mx-auto ">
        <div
          className="w-full rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
          style={{
            backgroundImage: `url(${mainTempleImg})`,
          }}
        ></div>
      </div>
      <div className="w-full h-full px-6 py-20 md:px-12 md:py-32 flex flex-col md:flex-row justify-center items-center gap-16 bg-[#E9E5DF] relative overflow-hidden">
        {/* Optional Quote/Poem Section (you had commented out) */}

        <div className="md:w-1/2 flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="text-[12px] md:text-[20px] font-semibold md:font-bold lg:w-4/6 mx-auto font-anek tracking-wider">
              కామః క్రోధశ్చ, లోభశ్చ దేహే తిష్ఠతి తస్కరాః || జ్ఞాన రత్నాపహారాయ |
              తస్మాత్ జాగ్రత జాగ్రత ||
            </p>
          </div>
          <p className="text-base md:text-xl font-medium text-center  mx-auto ">
            Kamah Krodascha Lobhascha Dehae Thishtathi Thaskaraah | <br /> Gnana
            Ratnapahaaraaya Tasmath Jagratha Jagratha ||{" "}
          </p>
        </div>
      </div>{" "}
      <div className="bg-[#E9E5DF] md:p-12 p-6 lg:mx-8">
        <h1 className="pb-6 md:text-4xl text-2xl font-semibold text-center font-mukta drop-shadow-md">
          Gallery
        </h1>

        <div className="flex flex-col gap-4 ">
          {footerEventsState
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden cursor-pointer lg:min-h-[292px] lg:max-h-[292px]"
                onClick={() => handleCardClick(item.date)}
              >
                {/* Left Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="md:w-2/4 w-full h-[292px] object-cover"
                />

                {/* Right Content */}
                <div className="px-4 flex flex-col justify-between py-6">
                  <div className="flex flex-col gap-2 lg:gap-4 border-b-[1px] border-[#D9B886] py-4">
                    <h2 className="text-lg lg:text-[24px] font-semibold text-[#BB4F27]">
                      {item.title}
                    </h2>
                    <p
                      className="text-sm md:text-base mt-2 leading-snug text-[18px] font-normal max-h-30   
              line-clamp-3 overflow-hidden text-ellipsis"
                    >
                      {item.description}
                    </p>

                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 text-sm md:text-base mt-4">
                      <div className="flex items-center gap-2 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="24"
                          viewBox="0 0 21 24"
                          fill="none"
                        >
                          <path
                            d="M0 21.75C0 22.9922 1.00781 24 2.25 24H18.75C19.9922 24 21 22.9922 21 21.75V9H0V21.75ZM15 12.5625C15 12.2531 15.2531 12 15.5625 12H17.4375C17.7469 12 18 12.2531 18 12.5625V14.4375C18 14.7469 17.7469 15 17.4375 15H15.5625C15.2531 15 15 14.7469 15 14.4375V12.5625ZM15 18.5625C15 18.2531 15.2531 18 15.5625 18H17.4375C17.7469 18 18 18.2531 18 18.5625V20.4375C18 20.7469 17.7469 21 17.4375 21H15.5625C15.2531 21 15 20.7469 15 20.4375V18.5625ZM9 12.5625C9 12.2531 9.25313 12 9.5625 12H11.4375C11.7469 12 12 12.2531 12 12.5625V14.4375C12 14.7469 11.7469 15 11.4375 15H9.5625C9.25313 15 9 14.7469 9 14.4375V12.5625ZM9 18.5625C9 18.2531 9.25313 18 9.5625 18H11.4375C11.7469 18 12 18.2531 12 18.5625V20.4375C12 20.7469 11.7469 21 11.4375 21H9.5625C9.25313 21 9 20.7469 9 20.4375V18.5625ZM3 12.5625C3 12.2531 3.25312 12 3.5625 12H5.4375C5.74687 12 6 12.2531 6 12.5625V14.4375C6 14.7469 5.74687 15 5.4375 15H3.5625C3.25312 15 3 14.7469 3 14.4375V12.5625ZM3 18.5625C3 18.2531 3.25312 18 3.5625 18H5.4375C5.74687 18 6 18.2531 6 18.5625V20.4375C6 20.7469 5.74687 21 5.4375 21H3.5625C3.25312 21 3 20.7469 3 20.4375V18.5625ZM18.75 3H16.5V0.75C16.5 0.3375 16.1625 0 15.75 0H14.25C13.8375 0 13.5 0.3375 13.5 0.75V3H7.5V0.75C7.5 0.3375 7.1625 0 6.75 0H5.25C4.8375 0 4.5 0.3375 4.5 0.75V3H2.25C1.00781 3 0 4.00781 0 5.25V7.5H21V5.25C21 4.00781 19.9922 3 18.75 3Z"
                            fill="#D14747"
                          />
                        </svg>
                        <span className=" font-normal lg:font-medium text-[16px] md:text-[18px]">
                          {format(new Date(item.date), "dd/MM/yyyy")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 md:text-[18px]">
                        <img src={Location} />
                        <span className=" font-normal lg:font-medium  text-[16px] md:text-[18px] ">
                          Sankari Peetam, Hyderabad
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="mt-4 inline-flex h-[40px] px-8 py-[12px] justify-center items-center gap-2 flex-shrink-0 bg-[#8E512C] text-white rounded-md text-sm hover:bg-orange-800 transition md:text-[16px]"
                      onClick={() => handleCardClick(item.date)}
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryMain;
