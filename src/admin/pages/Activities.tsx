import { useState } from "react";
import PostActivity from "../components/activityManager/PostActivity";
import AllActivities from "../components/activityManager/AllActivities";

const ActivityManager = () => {
  const [view, setView] = useState<"post" | "all">("post");

  return (
    <div className="">
      <div className="flex gap-4 p-4 rounded-md">
        <button
          onClick={() => setView("post")}
          className="border p-4 rounded-lg shadow-md font-bold"
        >
          Post Activity
        </button>
        <button
          onClick={() => setView("all")}
          className="border p-4 rounded-lg shadow-md font-bold"
        >
          All Activities
        </button>
      </div>

      {view === "post" ? <PostActivity /> : <AllActivities />}
    </div>
  );
};

export default ActivityManager;
