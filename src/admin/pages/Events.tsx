import { useState } from "react";
import PostEvent from "../components/eventManager/PostEvent";
import AllEvents from "../components/eventManager/AllEvents";

const EventManager = () => {
  const [view, setView] = useState<"post" | "all">("post");

  // Base button classes
  const baseButtonClasses =
    "border p-4 rounded-lg shadow-md font-bold transition-colors duration-200";

  // Active button classes
  const activeButtonClasses = "bg-blue-500 text-white border-blue-600";

  // Inactive button classes
  const inactiveButtonClasses = "bg-white text-gray-800 hover:bg-gray-100";

  return (
    <div className="h-screen">
      <div className="flex gap-4 p-4 rounded-md">
        <button
          onClick={() => setView("post")}
          className={`${baseButtonClasses} ${
            view === "post" ? activeButtonClasses : inactiveButtonClasses
          }`}
        >
          Post Event
        </button>
        <button
          onClick={() => setView("all")}
          className={`${baseButtonClasses} ${
            view === "all" ? activeButtonClasses : inactiveButtonClasses
          }`}
        >
          All Events
        </button>
      </div>

      {view === "post" ? <PostEvent /> : <AllEvents />}
    </div>
  );
};

export default EventManager;
