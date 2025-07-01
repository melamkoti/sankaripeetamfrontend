import { useState } from "react";
import Post from "../components/postmanager/Post";
import AllPosts from "../components/postmanager/AllPosts";

const PostManager = () => {
  const [view, setView] = useState<"post" | "all">("post");

  return (
    <div className="">
      <div className="flex gap-4 p-4 rounded-md">
        <button
          onClick={() => setView("post")}
          className="border p-4 rounded-lg shadow-md font-bold"
        >
          Post Planing
        </button>
        <button
          onClick={() => setView("all")}
          className="border p-4 rounded-lg shadow-md font-bold"
        >
          All Plannings
        </button>
      </div>

      {view === "post" ? <Post /> : <AllPosts />}
    </div>
  );
};

export default PostManager;
