import React, { useState } from "react";
import axios from "axios";

const PostEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !eventDate || !image || !youtubeLink) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("eventDate", eventDate);
    formData.append("image", image);
    formData.append("youtubeLink", youtubeLink);

    setLoading(true);

    try {
      await axios.post("http://localhost:3000/api/event", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Event submitted successfully!");
    } catch (error) {
      console.error("Error submitting event:", error);
      alert("Error submitting event!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md border-2">
      <h2 className="text-lg font-bold mb-4 text-center">Create a New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
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
