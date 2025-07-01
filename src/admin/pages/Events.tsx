import { useState } from "react";
import PostEvent from "../components/eventManager/PostEvent";
import AllEvents from "../components/eventManager/AllEvents";

const EventManager = () => {
  const [view, setView] = useState<"post" | "all">("post");

  return (
    <div className="">
      <div className="flex gap-4 p-2 rounded-md">
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
