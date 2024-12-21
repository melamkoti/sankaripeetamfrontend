import { NavLink} from "react-router-dom";

const AdminNavbar = () => {
  return (
     <div>
       <nav className="bg-red-600 text-white shadow-sm fixed w-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo or Dashboard Title */}
            <div className="flex-shrink-0">
              <h1 className="text-lg font-bold">Admin Dashboard</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex space-x-4">
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Events
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
          </div>
        </div>
      </nav>
      </div>

      
  );
};

export default AdminNavbar;

  

