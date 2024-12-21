// import React, { useState, useEffect } from "react";
// import axios from "axios";

// type Event  = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   eventDate: string;
//   youtubeLink: string;
// };

// const EventForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [eventDate, setEventDate] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [youtubeLink, setYoutubeLink] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [events, setEvents] = useState<Event[]>([]);
//   const [view, setView] = useState<"post" | "all">("post"); // View toggle

//   const [editEvent, setEditEvent] = useState(null); // State to hold the event being edited
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     eventDate: "",
//     image: "",
//   });

//   // Handle Edit Button Click
//   const handleEditClick = (event) => {
//     setEditEvent(event.id);
//     setFormData({
//       title: event.title,
//       description: event.description,
//       eventDate: event.eventDate.split("T")[0], // Format date for input type "date"
//       image: event.image,
//     });
//   };

//    // Handle Form Submission for Update
//   //  const handleUpdate = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await axios.put(`http://localhost:3000/api/event/${editEvent}`, formData);
//   //     alert("Event updated successfully!");
//   //     setEditEvent(null); // Exit edit mode
//   //     fetchEvents(); // Refresh the events list
//   //   } catch (error) {
//   //     console.error("Error updating event:", error);
//   //     alert("Error updating event!");
//   //   }
//   // };
//   const handleUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       const response = await axios.put(`http://localhost:3000/api/event/${editEvent}`, formData);
//       alert("Event updated successfully!");
//       setEvents((prev) =>
//         prev.map((event) =>
//           event.id === editEvent ? response.data : event
//         )
//       );
//       setEditEvent(null); // Exit edit mode
//     } catch (error) {
//       console.error("Error updating event:", error);
//       alert("Failed to update event.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch all events from the server
//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/event");
//       setEvents(response.data); // Assuming the response contains an array of events
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!title || !description || !eventDate || !image || !youtubeLink) {
//       alert("All fields are required!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("eventDate", eventDate);
//     formData.append("image", image);
//     formData.append("youtubeLink", youtubeLink);

//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:3000/api/event", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Event submitted successfully!");
//       setEvents((prevEvents) => [response.data, ...prevEvents]); // Add new event to list
//       setView("all"); // Switch to all events view
//     } catch (error) {
//       console.error("Error submitting event:", error);
//       alert("Error submitting event!");
//     } finally {
//       setLoading(false);
//     }
//   };

//    // Delete Event
//    const handleDelete = async (id:number) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this event?");
//     if (!confirmDelete) return;

//     try {
//       await axios.delete(`http://localhost:3000/api/event/${id}`);
//       alert("Event deleted successfully!");
//       // Update the state after deletion
//       setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
//     } catch (error) {
//       console.error("Error deleting event:", error);
//       alert("Error deleting event!");
//     }
//   };

//   useEffect(() => {
//     if (view === "all") {
//       fetchEvents();
//     }
//   }, [view]); // Fetch events whenever the view changes to "all"

//   return (
//     <div className="main_head">
//       <div className="flex gap-4 p-6 rounded-md">
//         <button
//           onClick={() => setView("post")}
//           className="border p-4 rounded-lg shadow-md font-bold"
//         >
//           Post Event
//         </button>
//         <button
//           onClick={() => setView("all")}
//           className="border p-4 rounded-lg shadow-md font-bold"
//         >
//           All Events
//         </button>
//       </div>

//       {view === "post" ? (
//         <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md border-2">
//           <h2 className="text-lg font-bold mb-4 text-center">Create a New Event</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Title */}
//             <div>
//               <label htmlFor="title" className="block font-medium mb-1">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full border border-gray-300 p-2 rounded-md"
//                 placeholder="Enter title"
//               />
//             </div>

//             {/* Description */}
//             <div>
//               <label htmlFor="description" className="block font-medium mb-1">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="w-full border border-gray-300 p-2 rounded-md"
//                 placeholder="Enter description"
//               />
//             </div>

//             {/* Event Date */}
//             <div>
//               <label htmlFor="eventDate" className="block font-medium mb-1">
//                 Event Date
//               </label>
//               <input
//                 type="date"
//                 id="eventDate"
//                 value={eventDate}
//                 onChange={(e) => setEventDate(e.target.value)}
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>

//             {/* Image */}
//             <div>
//               <label htmlFor="image" className="block font-medium mb-1">
//                 Upload Image
//               </label>
//               <input
//                 type="file"
//                 id="image"
//                 accept="image/*"
//                 onChange={(e) => setImage(e.target.files?.[0] || null)}
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>

//             {/* YouTube Link */}
//             <div>
//               <label htmlFor="youtubeLink" className="block font-medium mb-1">
//                 YouTube Link
//               </label>
//               <input
//                 type="url"
//                 id="youtubeLink"
//                 value={youtubeLink}
//                 onChange={(e) => setYoutubeLink(e.target.value)}
//                 className="w-full border border-gray-300 p-2 rounded-md"
//                 placeholder="Enter YouTube link"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//               disabled={loading}
//             >
//               {loading ? "Submitting..." : "Submit Event"}
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
//         <h2 className="text-lg md:text-2xl font-bold mb-4 text-center">All Events</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {events.map((event) => (
//             <div key={event.id} className="bg-gray-100 p-4 rounded-md shadow-md">
//               <h3 className="font-bold">{event.title}</h3>
//               <p className="text-sm text-gray-600">{event.description}</p>
//               <p className="text-sm text-gray-500">
//                 Date: {new Date(event.eventDate).toLocaleDateString()}
//               </p>
//               <img
//                 src={`http://localhost:3000${event.image}`}
//                 alt={event.title}
//                 className="w-full h-32 object-cover rounded-md my-2"
//               />
//               <div className="flex justify-between items-center border">

//               <a
//                 href={event.youtubeLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 underline"
//               >
//                 Watch on YouTube
//               </a>
//               <button
//                 onClick={() => handleEditClick(event)}
//                 className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
//               >
//                 Edit
//               </button>
//               {/* Delete Button */}
//               <button
//                 onClick={() => handleDelete(event.id)}
//                 className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//               >
//                 Delete
//               </button>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//       )}

// {editEvent && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-md shadow-md">
//             <h2 className="text-lg font-bold mb-4">Edit Event</h2>
//             <form onSubmit={handleUpdate} className="space-y-4">
//               {/* Name */}
//               <div>
//                 <label htmlFor="name" className="block font-medium mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={formData.title}
//                   onChange={(e) =>
//                     setFormData({ ...formData, title: e.target.value })
//                   }
//                   className="w-full border border-gray-300 p-2 rounded-md"
//                 />
//               </div>

//               {/* Description */}
//               <div>
//                 <label htmlFor="description" className="block font-medium mb-1">
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   value={formData.description}
//                   onChange={(e) =>
//                     setFormData({ ...formData, description: e.target.value })
//                   }
//                   className="w-full border border-gray-300 p-2 rounded-md"
//                 />
//               </div>

//               {/* Date */}
//               <div>
//                 <label htmlFor="date" className="block font-medium mb-1">
//                   Date
//                 </label>
//                 <input
//                   type="date"
//                   id="date"
//                   value={formData.eventDate}
//                   onChange={(e) =>
//                     setFormData({ ...formData, eventDate: e.target.value })
//                   }
//                   className="w-full border border-gray-300 p-2 rounded-md"
//                 />
//               </div>

//               {/* Image */}
//               <div>
//                 <label htmlFor="image" className="block font-medium mb-1">
//                   Image URL
//                 </label>
//                 <input
//                   type="text"
//                   id="image"
//                   value={formData.image}
//                   onChange={(e) =>
//                     setFormData({ ...formData, image: e.target.value })
//                   }
//                   className="w-full border border-gray-300 p-2 rounded-md"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//               >
//                 Update Event
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setEditEvent(null)}
//                 className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventForm;

import { useState } from "react";
import PostEvent from "../components/eventManager/PostEvent";
import AllEvents from "../components/eventManager/AllEvents";

const EventManager = () => {
  const [view, setView] = useState<"post" | "all">("post");

  return (
    <div className="main_head">
      <div className="flex gap-4 p-6 rounded-md">
        <button
          onClick={() => setView("post")}
          className="border p-4 rounded-lg shadow-md font-bold"
        >
          Post Event
        </button>
        <button
          onClick={() => setView("all")}
          className="border p-4 rounded-lg shadow-md font-bold"
        >
          All Events
        </button>
      </div>

      {view === "post" ? <PostEvent /> : <AllEvents />}
    </div>
  );
};

export default EventManager;
