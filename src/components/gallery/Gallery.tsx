import { useEffect, useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../services/AppEndPoints";
import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";

interface GalleryItem {
  id: string;
  title: string;
  date: string;
  images: string[];
}

function GalleryComponent() {
  const [searchParams] = useSearchParams();
  const selectedDate = searchParams.get("date");

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const GalleryGet = UserModuleAPI.AllGalleryGet;
  const GalleryDelete = UserModuleAPI.AllGalleryDelete;

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

  const handleDelete = async (galleryId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this gallery?"
    );
    if (!confirmed) return;

    try {
      await axios.delete(`${GalleryDelete}/${galleryId}`); // adjust URL if needed

      // Update state
      setGalleryItems((prevItems) =>
        prevItems.filter((item) => item.id !== galleryId)
      );
    } catch (error) {
      console.error("Failed to delete gallery:", error);
      alert("Something went wrong while deleting.");
    }
  };

  const openImage = (imgUrl: string) => {
    setSelectedImage(imgUrl);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Filter gallery items by selected date if present
  const filteredItems = selectedDate
    ? galleryItems.filter((item) => {
        const itemDate = new Date(item.date).toISOString().split("T")[0];
        const filterDate = new Date(selectedDate).toISOString().split("T")[0];
        return itemDate === filterDate;
      })
    : galleryItems;

  return (
    <div className="px-4 py-24 md:px-10  bg-white relative lg:mt-[110px]">
      {selectedDate && (
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
        >
          ← Back to Main
        </button>
      )}

      <h1 className="text-3xl md:text-4xl font-bold text-center  mb-4">
        {selectedDate
          ? `Events on ${format(new Date(selectedDate), "MMMM d, yyyy")}`
          : "Our Events Gallery"}
      </h1>

      {filteredItems
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((item, index) => (
          <section key={index} className="space-y-6 border-b border-gray-400 py-2 my-2">
            <div className="flex flex-col md:flex-row  md:items-center gap-6 ">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-semibold text-[#D9540F] border-b-2 border-[#D9540F] inline-block pb-2 text-center md:text-left">
                {item.title}
              </h2>

              {/* Date + Icon */}
              <div className="flex items-center gap-2 text-[#D14747] mt-2 md:mt-0">
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
                <p className="text-lg font-medium text-black">
                  {format(new Date(item.date), "dd/MM/yyyy")}
                </p>
              </div>
               <button
              onClick={() => handleDelete(item.id)}
              className="text-red-600 hover:text-red-800 text-xl bg-red-200 px-6 py-1 rounded-md"
            >
              🗑 Delete
            </button>
            </div>

            {/* <button
              onClick={() => handleDelete(item.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              🗑 Delete
            </button> */}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {item.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => openImage(img)}
                >
                  <img
                    src={img}
                    alt={`gallery-${imgIndex}`}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </section>
        ))}

      {/* Full-screen image modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-screen">
            <button
              onClick={closeImage}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-yellow-400 transition-colors"
              aria-label="Close image"
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
  );
}

export default GalleryComponent;
