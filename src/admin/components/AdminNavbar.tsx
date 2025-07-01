import { NavLink } from "react-router-dom";
import { useState } from "react";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-red-600 text-white shadow-sm fixed w-full ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo or Dashboard Title */}
            <div className="flex-shrink-0">
              <h1 className="text-lg font-bold">Admin Dashboard</h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex space-x-4">
                <NavLink
                  to="/admin"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Events
                </NavLink>
                <NavLink
                  to="/admin/post"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Posts
                </NavLink>
                <NavLink
                  to="/admin/activities"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Activities
                </NavLink>
                <NavLink
                  to="/admin/users"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Users List
                </NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-700 focus:outline-none"
                onClick={toggleMenu}
              >
                {isOpen ? "X" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <div className="md:hidden bg-red-600 pb-3">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <NavLink
                to="/admin"
                end
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
                    : "text-white hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/admin/post"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
                    : "text-white hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Posts
              </NavLink>
              <NavLink
                to="/admin/activities"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
                    : "text-white hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Activities
              </NavLink>
              <NavLink
                to="/admin/users"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
                    : "text-white hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Users List
              </NavLink>
            </div>
          </div>
        )}
      </nav>
      {/* Add padding to content below navbar to prevent hiding */}
      <div className="pt-16"></div>
    </div>
  );
};

export default AdminNavbar;
