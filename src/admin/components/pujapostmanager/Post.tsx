import React, { useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";
const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const [imageError, setImageError] = useState<string | null>(null);

  const PostService = UserModuleAPI.AllPostsPost;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !date || !image) {
      alert("All fields are required!");
      return;
    }
    const clearForm = () => {
      setTitle("");
      setDescription("");
      setDate("");
      setImage(null);
      setImageError(null);
    };
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("image", image);

    setLoading(true);
    try {
      await axios.post(PostService, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Post submitted successfully!");
      clearForm();
    } catch (error) {
      console.error("Error submitting post:", error);
      toast.error("Error submitting post ");
    } finally {
      setLoading(false);
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      const minWidth = 300; // set your desired min width
      const minHeight = 300; // set your desired min height

      if (img.width < minWidth || img.height < minHeight) {
        setImage(null);
        setImageError(`Image must be at least ${minWidth}px by ${minHeight}px`);
      } else {
        setImage(file);
        setImageError(null);
      }

      URL.revokeObjectURL(objectUrl); // clean up memory
    };

    img.onerror = () => {
      setImage(null);
      setImageError("Invalid image file.");
      URL.revokeObjectURL(objectUrl);
    };

    img.src = objectUrl;
  };
  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-xl border-2">
      <h2 className="text-lg font-bold mb-4 text-center">Create Puja Card</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter title"
          />
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter description"
          />
        </div>

        {/* Date Upload Field */}
        <div>
          <label htmlFor="image" className="block font-medium mb-1">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            // onChange={(e) => setImage(e.target.files?.[0] || null)}
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {imageError && (
            <p className="text-red-500 text-sm mt-1">{imageError}</p>
          )}
        </div>
        <div>
          <label htmlFor="date" className="block font-medium mb-1">
            Post Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Post"}
        </button>
      </form>
    </div>
  );
};

export default Post;
