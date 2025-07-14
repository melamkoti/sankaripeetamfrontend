import { useEffect, useState } from "react";
import { UserModuleAPI } from "../../services/AppEndPoints";
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

const AdminPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const FetchAllusers = UserModuleAPI.AllUsersGet;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(FetchAllusers);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="main_head p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Admin - User List</h1>

      {/* Scrollable container */}
      <div className="overflow-y-auto max-h-[500px] border rounded-md">
        <table className="table-auto w-full bg-white text-sm">
          <thead className="sticky top-0 bg-gray-100 ">
            <tr>
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  {formatDate(user.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
