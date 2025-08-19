import React, { useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";
const PostEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);

  const EventPostService = UserModuleAPI.AllEventsPost;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !eventDate || !image) {
      alert("All fields are required!");
      return;
    }
    const clearForm = () => {
      setTitle("");
      setDescription("");
      setEventDate("");
      setImage(null);
      setYoutubeLink("");
      setImageError(null);
    };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("eventDate", eventDate);
    formData.append("image", image);
    formData.append("youtubeLink", youtubeLink);
    setLoading(true);

    try {
      await axios.post(EventPostService, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Event submitted successfully!");
      clearForm();
    } catch (error) {
      console.error("Error submitting event:", error);
      toast.error("Error submitting event: ");
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
    <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded-xl border-2">
      <h2 className="text-lg font-bold mb-4 text-center">Create a New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Title */}
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

        {/* Description */}
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

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="block font-medium mb-1">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Image */}
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

        {/* YouTube Link */}
        <div>
          <label htmlFor="youtubeLink" className="block font-medium mb-1">
            YouTube Link
          </label>
          <input
            type="url"
            id="youtubeLink"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter YouTube link"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Event"}
        </button>
      </form>
    </div>
  );
};

export default PostEvent;
