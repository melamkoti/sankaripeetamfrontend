import { useEffect, useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../services/AppEndPoints";
import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";
import mainTempleImg from "../../assets/images/contraction.png";
import GallerySlokam from "./GallerySlokam";
import { useNavigate } from "react-router-dom";
interface GalleryItem {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
}

function GalleryComponent() {
  const [searchParams] = useSearchParams();
  const selectedDate = searchParams.get("date");

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const GalleryGet = UserModuleAPI.AllGalleryGet;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get<GalleryItem[]>(GalleryGet);
        setGalleryItems(response.data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };
    fetchGallery();
  }, []);

  const openImage = (imgUrl: string) => {
    setSelectedImage(imgUrl);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const filteredItems = selectedDate
    ? galleryItems.filter((item) => {
        const itemDate = new Date(item.date).toISOString().split("T")[0];
        const filterDate = new Date(selectedDate).toISOString().split("T")[0];
        return itemDate === filterDate;
      })
    : galleryItems;

  return (
    <div className="main_head lg:mt-[150px]">
      <div className="flex justify-center items-center p-4 md:py-4 md:px-2 lg:px-0 max-w-[1280px] mx-auto  ">
        <div
          className="w-full rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
          style={{
            backgroundImage: `url(${mainTempleImg})`,
          }}
        ></div>
      </div>
      <GallerySlokam />
      <div className="">
        {filteredItems.map((item, index) => (
          <div key={index}>
            {/* Event Title, Date, Back Button */}
            <div className=" border-t-4 border-b-2 border-[#B08552] p-6 mx-6">
              <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4">
                {/* Left section */}
                <div className="flex flex-col gap-2">
                  {/* Title */}

                  <h1 className="text-[#D9540F] font-bold text-xl md:text-2xl">
                    {item.title}
                  </h1>

                  {/* Date & Location */}
                  <div className="flex flex-wrap gap-6 items-center text-sm md:text-base text-gray-800">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-[#B84015]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v1h16V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1zM18 9H2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {format(new Date(item.date), "dd/MM/yyyy")}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-[#B84015]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9z"
                        />
                      </svg>
                      Sankari Peetam, Hyderabad
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm lg:text-base leading-relaxed text-gray-700 max-w-3xl">
                    {item.description}
                  </p>
                </div>

                {/* Right section - Button */}
                <button
                  className="bg-[#8E512C] hover:bg-[#6f3510] text-white px-12 py-2 rounded-md text-sm transition"
                  onClick={() => navigate("/gallery")}
                >
                  Back to Home Gallery
                </button>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
              {item.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="group relative overflow-hidden  shadow hover:shadow-lg cursor-pointer"
                  onClick={() => openImage(img)}
                >
                  <img
                    src={img}
                    alt={`gallery-${imgIndex}`}
                    className="w-full min-h-[270px] max-h-[270px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full max-h-screen">
              <button
                onClick={closeImage}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-yellow-400 transition-colors"
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Full screen"
                className="max-w-full max-h-[80vh] mx-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryComponent;
