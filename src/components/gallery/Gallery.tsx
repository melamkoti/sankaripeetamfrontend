import { useEffect, useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../services/AppEndPoints";
import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";

interface GalleryItem {
  id:string;
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
  const confirmed = window.confirm("Are you sure you want to delete this gallery?");
  if (!confirmed) return;

  try {
    await axios.delete(`${GalleryDelete}/${galleryId}`); // adjust URL if needed

    // Update state
    setGalleryItems((prevItems) => prevItems.filter((item) => item.id !== galleryId));
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
    <div className="px-4 py-24 md:px-10 space-y-16 bg-white relative">
      {selectedDate && (
        <button
          onClick={() => window.history.back()}
          className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
        >
          ← Back to Main
        </button>
      )}

      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#771700] mb-8">
        {selectedDate
          ? `Events on ${format(new Date(selectedDate), "MMMM d, yyyy")}`
          : "Our Events Gallery"}
      </h1>

      {filteredItems
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((item, index) => (
          <section key={index} className="space-y-6">
            <div className="flex  items-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 border-b-2 border-yellow-400 inline-block pb-2">
                {item.title}
              </h2>
              <p className="text-2xl text-blue-500 px-4">
                {format(new Date(item.date), "MMM dd, yyyy")}
              </p>
            </div>
             <button
          onClick={() => handleDelete(item.id)}
          className="text-red-600 hover:text-red-800 text-sm"
        >
          🗑 Delete
        </button>

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
