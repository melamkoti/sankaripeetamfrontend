import React from "react";
import { useNavigate } from "react-router-dom";

interface UserProfileProps {
  user: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token and user info from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    // Redirect to login page
    navigate("/login", { replace: true });
  };

  const userName = localStorage.getItem("name") || "User";
  const userEmail = localStorage.getItem("email") || "user@example.com";

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-80 mx-auto mt-10">
      {/* User Image */}
      <div className="w-24 h-24 mb-4">
        <img
          src={user}
          alt={`${userName}'s avatar`}
          className="w-full h-full rounded-full object-cover border-2 border-gray-200"
        />
      </div>

      {/* User Name */}
      <h2 className="text-2xl font-semibold text-gray-800">{userName}</h2>

      {/* User Email */}
      <p className="text-gray-600 mt-2">{userEmail}</p>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
