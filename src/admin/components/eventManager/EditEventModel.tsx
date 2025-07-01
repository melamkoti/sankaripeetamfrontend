import React, { useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";
type Event = {
  id: number;
  title: string;
  description: string;
  image: string;
  eventDate: string;
  youtubeLink: string;
};

const EditEventModal = ({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState({
    title: event.title,
    description: event.description,
    eventDate: event.eventDate.split("T")[0],
    image: event.image,
    youtubeLink: event.youtubeLink,
  });
const EventUpdateService = UserModuleAPI.IndividualEventPut;
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${EventUpdateService}/${event.id}`, formData);
      toast.success("Event updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Error updating event: " + error);
    }
  };

  return (
    <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-2/6 w-5/6">
        <h2 className="text-lg font-bold mb-4 text-center">Edit Event</h2>
        <form onSubmit={handleUpdate} className="space-y-1">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={formData.eventDate}
              onChange={(e) =>
                setFormData({ ...formData, eventDate: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* Image */}
          <div>
            <label htmlFor="image" className="block font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="youtube" className="block font-medium mb-1">
              Youtube URL
            </label>
            <input
              type="text"
              id="youtube"
              value={formData.youtubeLink}
              onChange={(e) =>
                setFormData({ ...formData, youtubeLink: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-between iteams-center pt-6">
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-500 text-white px-4 py-2  rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Update Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventModal;
