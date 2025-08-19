import React, { useState } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";
type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
};

const EditPostModel = ({
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
    date: event.date,
  });
  const PostUpdateService = UserModuleAPI.IndividualPostPut;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("date", formData.date);

      if (selectedFile) {
        formDataToSend.append("image", selectedFile);
      } else {
        formDataToSend.append("image", formData.image);
      }

      await axios.put(`${PostUpdateService}/${event.id}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Post updated successfully!");
      console.log(formData);
      onClose();
    } catch (error) {
      toast.error("Error updating Activity:" + error);
    }
  };

  return (
    <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md md:w-2/6 w-5/6">
        <h2 className="text-lg font-bold mb-4 text-center">Edit Puja Card</h2>
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
          <div>
            <label htmlFor="date" className="block font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
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
              className="w-full h-24 border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Image
            </label>
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                className="mb-2 h-32 w-full object-cover rounded-md"
              />
            ) : (
              <img
                src={formData.image}
                alt="Current"
                className="mb-2 h-32 w-full object-cover rounded-md"
              />
            )}
            <input
              type="file"
              id="image"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-400 focus:outline-none"
            />
          </div>

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

export default EditPostModel;
