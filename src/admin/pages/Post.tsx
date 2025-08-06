import { useState } from "react";
import Post from "../components/pujapostmanager/Post";
import AllPosts from "../components/pujapostmanager/AllPosts";

const ActivityManager = () => {
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
          Puja Card
        </button>
        <button
          onClick={() => setView("all")}
          className={`${baseButtonClasses} ${
            view === "all" ? activeButtonClasses : inactiveButtonClasses
          }`}
        >
          All Puja Cards
        </button>
      </div>

      {view === "post" ? <Post /> : <AllPosts />}
    </div>
  );
};

export default ActivityManager;
