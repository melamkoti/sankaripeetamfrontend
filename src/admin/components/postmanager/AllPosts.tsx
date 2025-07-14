import { useEffect, useState } from "react";
import axios from "axios";
import EditPostModal from "./EditPostModel";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import {toast} from "react-toastify";
type Activity = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const AllActivity = () => {
  const [events, setEvents] = useState<Activity[]>([]);
  const [editEvent, setEditEvent] = useState<Activity | null>(null);
const AllPostsService = UserModuleAPI.AllPostsGet;
const DeletePostService = UserModuleAPI.IndividualPostDelete
  const fetchEvents = async () => {
    try {
      const response = await axios.get(AllPostsService);
      setEvents(response.data);
      toast.success("Posts fetched successfully!");
      
    } catch (error) {
      toast.error("Failed to fetch posts." + error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Post?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${DeletePostService}/${id}`);
      setEvents((prev) => prev.filter((event) => event.id !== id));
      toast.success("Post deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete post." + error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white md:p-6 p-2 shadow-md rounded-md">
      <h2 className="text-lg md:text-2xl font-bold mb-4 text-center">
        All Cards
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2   gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-300 p-4 rounded-md shadow-md">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[300px] z-20"
            />
            <h3 className="font-bold my-2">{event.title}</h3>
            <p className="h-24">{event.description}</p>

            <div className="flex  justify-between items-center	mt-4 ">
              <button
                onClick={() => setEditEvent(event)}
                className="bg-yellow-500 text-white px-4 py-1 rounded-md text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(event.id)}
                className="bg-red-500 text-white px-4 py-1 rounded-md text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {editEvent && (
        <EditPostModal event={editEvent} onClose={() => setEditEvent(null)} />
      )}
    </div>
  );
};

export default AllActivity;
