import { useEffect, useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../services/AppEndPoints";
interface GalleryItem {
  title: string;
  images: string[];
}

function GalleryComponent() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const GalleryGet = UserModuleAPI.AllGalleryGet;
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

  return (
    <div className="px-4 py-24 md:px-10 space-y-16 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#771700] mb-8">
        Our Events Gallery
      </h1>

      {galleryItems.map((item, index) => (
        <section key={index} className="space-y-6">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 border-b-2 border-yellow-400 inline-block pb-2">
            {item.title}
          </h2>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {item.images.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`gallery-${imgIndex}`}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                {/* Optional hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default GalleryComponent;
