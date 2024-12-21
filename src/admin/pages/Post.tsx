import { useState } from "react";
import Post from "../components/postmanager/Post";
import AllPosts from "../components/postmanager/AllPosts";

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

      {view === "post" ? <Post /> : <AllPosts />}
    </div>
  );
};

export default EventManager;
