import React, { useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";

const ActivitiesForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [color, setColor] = useState("#ffffff");
  const [isEnable, setIsEnable] = useState(true);
  const [loading, setLoading] = useState(false);

  const EventPostService = UserModuleAPI.AllActivityPost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !image || !color) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("color", color);
    formData.append("isEnable", isEnable.toString());

    setLoading(true);
    try {
      await axios.post(EventPostService, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Post submitted successfully!");
      setTitle("");
      setDescription("");
      setImage(null);
      setColor("#ffffff");
      setIsEnable(true);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Error submitting post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white md:p-6 p-4 shadow-md rounded-xl border-2">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
        Create a New Activity
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block font-medium mb-1 text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter title"
          />
        </div>

        {/* Description Field */}
        <div>
          <label
            htmlFor="description"
            className="block font-medium mb-1 text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter description"
            rows={4}
          />
        </div>

        {/* Image Upload Field */}
        <div>
          <label
            htmlFor="image"
            className="block font-medium mb-1 text-gray-600"
          >
            Upload Image
          </label>
          <input
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full border border-gray-300 p-2 rounded-md bg-white"
            type="file"
            required
          />
        </div>

        {/* Color Field */}
        <div>
          <label
            htmlFor="color"
            className="block font-medium mb-1 text-gray-600"
          >
            Card Color (Hex)
          </label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#ffffff"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* isEnable Select */}
        <div>
          <label
            htmlFor="isEnable"
            className="block font-medium mb-1 text-gray-600"
          >
            Enable Activity
          </label>
          <select
            id="isEnable"
            value={isEnable.toString()}
            onChange={(e) => setIsEnable(e.target.value === "true")}
            className="w-full border border-gray-300 p-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="true">Enable</option>
            <option value="false">Disable</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Activity"}
        </button>
      </form>
    </div>
  );
};

export default ActivitiesForm;
