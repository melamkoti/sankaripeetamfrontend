import React, { useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";

type Event = {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  isEnable: boolean;
};

const EditActivityModel = ({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState({
    title: event.title,
    description: event.description,
    image: event.image,
    color: event.color,
    isEnable: event.isEnable,
  });

  const ActivityUpdateService = UserModuleAPI.IndividualActivityPut;

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${ActivityUpdateService}/${event.id}`, formData)
      toast.success("Activity updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Error updating Activity: " + error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 md:w-2/5">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Edit Activity
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded-md h-24 resize-none focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Color */}
          <div>
            <label
              htmlFor="color"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Card Color (Hex Code)
            </label>
            <input
              type="text"
              id="color"
              value={formData.color}
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
              placeholder="#ffffff"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Status */}

          <div>
            <label
              htmlFor="isEnable"
              className="block font-medium mb-1 text-gray-600"
            >
              Enable Or Desable Activity
            </label>
            <select
              id="isEnable"
              value={formData.isEnable.toString()}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isEnable: e.target.value === "true",
                })
              }
              className="w-full border border-gray-300 p-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="true">Enable</option>
              <option value="false">Disable</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Update Activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditActivityModel;
