import { useEffect, useState } from "react";
import { UserModuleAPI } from "../../services/AppEndPoints";

type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};
export const UserInquiryList = () => {
  const [contact, setContact] = useState<Contact[]>([]);
  const userInquirydetailsservice = UserModuleAPI.ContactDetailsGet;

  useEffect(() => {
    const GetDetails = async () => {
      try {
        const response = await fetch(userInquirydetailsservice);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    GetDetails();
  }, []);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  return (
    <div className="main_head p-4">
  <h1 className="text-2xl font-bold text-center mb-4">Users Inquiry Details</h1>

  {/* Scrollable container */}
  <div className="overflow-y-auto max-h-[500px] border rounded-md">
    <table className="table-auto w-full bg-white text-sm">
      <thead className="sticky top-0 bg-gray-100 ">
        <tr>
          <th className="border px-4 py-2">No</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Phone Number</th>
          <th className="border px-4 py-2">Message</th>
          <th className="border px-4 py-2">CreatedAt</th>
        </tr>
      </thead>
      <tbody>
        {contact.map((user, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">
              {user.firstName} {user.lastName}
            </td>
            <td className="border px-4 py-2">{user.email}</td>
            <td className="border px-4 py-2">{user.phoneNumber}</td>
            <td className="border px-4 py-2">{user.message}</td>
            <td className="border px-4 py-2">{formatDate(user.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};
