import React from "react";
import { useNavigate } from "react-router-dom";
type LogoutTypes = {
  handlePopup: () => void;
};

const UserProfile: React.FC<LogoutTypes> = ({ handlePopup }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token and user info from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    // Redirect to login page
    navigate("/login", { replace: true });
    handlePopup();
  };

  const userName = localStorage.getItem("name");
  const userEmail = localStorage.getItem("email");

  return (
    <div className="max-w-md w-full">
      {userEmail && userName ? (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-amber-100 overflow-hidden relative">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-28 h-28 mb-6 bg-gradient-to-b from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-inner border-2 border-amber-300">
              {userName.charAt(0).toUpperCase()}
            </div>

            <h2 className="text-3xl font-bold text-amber-900 mb-1 text-center font-serif">
              {userName}
              <span className="block w-16 h-1 bg-red-600 mx-auto mt-2 rounded-full"></span>
            </h2>

            <p className="text-amber-800 mb-6 flex items-center font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {userEmail}
            </p>

            <button
              onClick={handleLogout}
              className="mt-4 bg-gradient-to-r from-red-700 to-amber-700 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-amber-200/50 hover:scale-105 transition-all duration-300 flex items-center border border-amber-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div
          className="inline-flex items-center px-6 py-3 my-4 bg-gradient-to-r from-red-600 to-amber-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Login
        </div>
      )}
    </div>
  );
};

export default UserProfile;
