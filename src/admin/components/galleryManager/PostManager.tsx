import { useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";

const UploadGallery = () => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [status, setStatus] = useState<"success" | "error" | "loading" | "">(
    ""
  );

  const GalleryPost = UserModuleAPI.AllGalleryPost;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setImages(files);
    const previewArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewUrls(previewArray);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !images || images.length === 0) {
      alert("Please provide a title and at least one image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    Array.from(images).forEach((img) => formData.append("images", img));

    try {
      setStatus("loading");
      const response = await axios.post(GalleryPost, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload successful:", response.data);
      toast.success("Upload Success");
      setStatus("success");
      setTitle("");
      setImages(null);
      setPreviewUrls([]);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("This is an error!");
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Upload Gallery
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          className="border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="border border-gray-300 p-2 rounded"
          required
        />
        {/* Preview Images */}
        {previewUrls.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mt-2">
            {previewUrls.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Preview ${idx + 1}`}
                className="w-full h-28 object-cover rounded border"
              />
            ))}
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {status === "loading" ? "Uploading..." : "Upload"}
        </button>
      </form>

      {/* Status Message */}
      {status === "success" && (
        <p className="text-green-600 text-center mt-4">Upload successful!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center mt-4">
          Upload failed. Try again.
        </p>
      )}
    </div>
  );
};

export default UploadGallery;
