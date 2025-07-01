import { useEffect, useState } from "react";
import axios from "axios";
import EditEventModal from "./EditEventModel";
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

const AllEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [editEvent, setEditEvent] = useState<Event | null>(null);
const EeventsGetService = UserModuleAPI.AllEventsGet;
const EeventsDeleteService = UserModuleAPI.IndividualEventDelete;

  const fetchEvents = async () => {
    try {
      const response = await axios.get(EeventsGetService);
      setEvents(response.data);
      toast.success("Events fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch events." + error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${EeventsDeleteService}/${id}`);
      setEvents((prev) => prev.filter((event) => event.id !== id));
      toast.success("Event deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete event." + error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white md:p-6 p-2 shadow-md rounded-md">
      <h2 className="text-lg md:text-2xl font-bold mb-4 text-center">
        All Events
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2   gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="font-bold">{event.title}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.eventDate).toLocaleDateString()}</p>
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="flex  justify-between items-center	mt-4 gap-2">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm ">
                <a
                  className="underline"
                  href={event.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 YouTube
                </a>
              </button>

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
        <EditEventModal event={editEvent} onClose={() => setEditEvent(null)} />
      )}
    </div>
  );
};

export default AllEvents;
