import { useState } from "react";
import PostGallery from "../components/galleryManager/PostManager";
import AllGallerys from "../components/galleryManager/AllGallery";

const GalleryManager = () => {
  const [view, setView] = useState<"post" | "all">("post");

  return (
    <div className="">
      <div className="flex gap-4 p-4 rounded-md">
        <button
          onClick={() => setView("post")}
          className="border p-4 rounded-lg shadow-md font-bold"
        >
          Post Gallery
        </button>
        <button
          onClick={() => setView("all")}
          className="border p-4 rounded-lg shadow-md font-bold"
        >
          All Gallerys
        </button>
      </div>

      {view === "post" ? <PostGallery /> : <AllGallerys />}
    </div>
  );
};

export default GalleryManager;
