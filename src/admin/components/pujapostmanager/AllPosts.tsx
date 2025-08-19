import { useEffect, useState } from "react";
import axios from "axios";
import EditPostModal from "./EditPostModel";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";
import footerClaenderImg from "../../../assets/images/footer-calender.svg";
import { format } from "date-fns";

type PujaCard = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};

const AllPujaCards = () => {
  const [events, setEvents] = useState<PujaCard[]>([]);
  const [editEvent, setEditEvent] = useState<PujaCard | null>(null);
  const AllPostsService = UserModuleAPI.AllPostsGet;
  const DeletePostService = UserModuleAPI.IndividualPostDelete;
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
          <div key={event.id} className="bg-gray-100 p-4 rounded-md shadow-md">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[300px] z-20"
            />
            <h3 className="font-semibold my-2 text-xl">{event.title}</h3>
            {/* <p className="h-24">{event.description}</p> */}
            <p className="flex gap-1">
              <img src={footerClaenderImg} alt="" />
              <p>{format(new Date(event.date), "dd/MM/yyyy")}</p>
            </p>{" "}
            <p className=" text-base  md:text-lg overflow-y-auto max-h-[6.5rem] leading-snug mt-6 thin-scrollbar">
              {event.description}
            </p>
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

export default AllPujaCards;
