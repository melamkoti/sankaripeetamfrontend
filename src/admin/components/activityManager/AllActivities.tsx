import { useEffect, useState } from "react";
import axios from "axios";
import EditActivityModal from "./EditActivityModel";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
            className={`  p-4  flex flex-col items-center rounded-md w-full p-4 shadow-md transition-all duration-300
        ${
          event.isEnable !== false
            ? "opacity-100 pointer-events-auto cursor-pointer hover:shadow-lg"
            : "opacity-30 "
        }
        ${event.color === "#ffffff" ? "text-[#44233B]" : "text-white"}
        h-[400px] /* Fixed height */
        md:h-[380px] /* Slightly smaller on desktop */
      `}
            style={{ backgroundColor: event.color }}
          >

            {/* Image */}
            <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-white shadow flex-shrink-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              
            </div>

            {/* Text Content */}
            <div className="flex flex-col text-center gap-4 w-full h-full mt-4">
              <h3 className="text-xl font-semibold text-[#D9540F]">
                {event.title}
              </h3>

              {/* Scrollable description */}
              <div className="font-medium text-sm leading-[30px] md:text-[18px] tracking-wider overflow-y-auto max-h-[120px] pr-2 scrollbar-thin scrollbar-thumb-[#D9540F] scrollbar-track-gray-100 flex-grow">
                {event.description}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between w-full mt-auto">
                <button
                  onClick={() => setEditEvent(event)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md text-sm hover:bg-yellow-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
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
