import { useEffect, useState } from "react";
import axios from "axios";
import EditActivityModal from "./EditActivityModel";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";
type Activity = {
  id: number;
  title: string;
  description: string;
  color: string;
  image: string;
  isEnable: boolean;
};

const AllActivity = () => {
  const [events, setEvents] = useState<Activity[]>([]);
  const [editEvent, setEditEvent] = useState<Activity | null>(null);
const EventGetService = UserModuleAPI.AllActivityGet;
  const deleteAcitivityService = UserModuleAPI.IndividualActivityDelete;

  const fetchEvents = async () => {
    try {
      const response = await axios.get(EventGetService);
      setEvents(response.data);
      toast.success("Activities fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch activities." + error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Activity?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${deleteAcitivityService}/${id}`);
      setEvents((prev) => prev.filter((event) => event.id !== id));
      toast.success("Activity deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete activity." + error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white md:p-6 p-2 shadow-md rounded-md">
      <h2 className="text-lg md:text-2xl font-bold mb-4 text-center">
        All Activities
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2   gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-300 p-4 rounded-md shadow-md">
            <img
              src={event.image}
              alt={event.title}
              className="w-12 z-20"
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
        <EditActivityModal
          event={editEvent}
          onClose={() => setEditEvent(null)}
        />
      )}
    </div>
  );
};

export default AllActivity;
