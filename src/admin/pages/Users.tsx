import { useEffect, useState } from "react";
import { UserModuleAPI } from "../../services/AppEndPoints";
import axios from "axios";
import DonationReceipt from "../../components/donations/donationspayment/DonationReceipt";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

type Donation = {
  id: number;
  userId: number;
  message: string;
  donorPhone: string;
  category: string;
  amount: number;
  createdAt: string;
};

const AdminPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [receiptData, setReceiptData] = useState<any | null>(null);

  const [selectedUserDonations, setSelectedUserDonations] = useState<
    Donation[] | null
  >(null);

  const FetchAllusers = UserModuleAPI.AllUsersGet;
  const UserDonations = UserModuleAPI.AllDonationGet;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(FetchAllusers);
        setUsers(response.data);
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

  const handleViewDonations = async (userId: number) => {
    try {
      const response = await axios.post(UserDonations, { userId }); // <-- pass userId
      setSelectedUserDonations(response.data);
    } catch (error) {
      console.error("Error fetching user donations:", error);
    }
  };

  if (receiptData) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <DonationReceipt
            donationData={{
              donationId: receiptData.donation.id,
              amount: receiptData.donation.amount,
              currency: "INR",
              donationDetails: {
                category: receiptData.donation.category,
                name: receiptData.donation.donorName,
                email: receiptData.donation.donorEmail,
                phone: receiptData.donation.donorPhone,
                message: receiptData.donation.message,
                pancard: receiptData.donation.pancard,
              },
            }}
            paymentData={{
              razorpay_payment_id: receiptData.donation.razorpayPaymentId || "Cash Payment",
              razorpay_order_id: receiptData.donation.razorpayOrderId || "manual",
              razorpay_signature: receiptData.donation.razorpay_signature || "manual",
              date:
                receiptData.donation?.createdAt ||
                receiptData.createdAt ||
                new Date().toISOString(),
            }}
            onClose={() => setReceiptData(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="my-4 ">
      <h1 className="lg:text-center text-lg px-4 pb-2 font-semibold">
        Admin - User List
      </h1>
      {/* Scrollable container */}
      <div className="overflow-y-auto  max-h-[500px] md:max-h-[600px] border rounded-md mb-6">
        <table className="table-auto w-full bg-white text-sm">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Register</th>
              <th className="border px-4 py-2">Payments</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <>
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2">
                    {formatDate(user.createdAt)}
                  </td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => handleViewDonations(user.id)}
                      className={`${
                        selectedUserDonations &&
                        selectedUserDonations[0]?.userId === user.id
                          ? "bg-yellow-500 hover:bg-yellow-600"
                          : "bg-blue-500 hover:bg-blue-600"
                      } text-white py-1 px-4 rounded-md transition`}
                    >
                      {selectedUserDonations &&
                      selectedUserDonations[0]?.userId === user.id
                        ? "Viewing"
                        : "View"}
                    </button>
                  </td>
                </tr>

                {/* Expanded donations row */}
                {selectedUserDonations &&
                  selectedUserDonations[0]?.userId === user.id && (
                    <tr>
                      <td colSpan={6} className="bg-gray-50">
                        <div className="bg-white border-none ">
                          {selectedUserDonations.length > 0 ? (
                            <table className="w-full border-collapse border border-gray-300">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border p-2">Donation ID</th>
                                  <th className="border p-2">Amount</th>
                                  <th className="border p-2">Category</th>
                                  <th className="border p-2">Message</th>
                                  <th className="border p-2">Phone</th>
                                  <th className="border p-2">Date</th>
                                  <th className="border p-2">Receipt</th>
                                </tr>
                              </thead>
                              <tbody>
                                {selectedUserDonations.map((donation) => (
                                  <tr
                                    key={donation.id}
                                    className="hover:bg-gray-50"
                                  >
                                    <td className="border p-2 font-medium">
                                      {donation.id}
                                    </td>
                                    <td className="border p-2">
                                      {donation.amount} 
                                    </td>
                                    <td className="border p-2">
                                      {donation.category}
                                    </td>
                                    <td className="border p-2">
                                      {donation.message}
                                    </td>
                                    <td className="border p-2">
                                      {donation.donorPhone}
                                    </td>
                                    <td className="border p-2 text-gray-500">
                                      {formatDate(donation.createdAt)}
                                    </td>
                                    <td className="border p-2 flex justify-center items-center">
                                      <button
                                        className="text-white py-1 px-4 rounded-md transition bg-pink-600 hover:bg-pink-700"
                                        onClick={() =>
                                          setReceiptData({ donation })
                                        }
                                      >
                                        Generate
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p className="text-gray-600">No donations found.</p>
                          )}
                          <button
                            onClick={() => setSelectedUserDonations(null)}
                            className=" mx-2 my-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                          >
                            Close
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
