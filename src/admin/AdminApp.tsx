import AdminNavbar from "./components/AdminNavbar";
import { Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import Post from "./pages/Post";
import Activities from "./pages/Activities";
import Users from "./pages/Users";
import Gallery from "./pages/Gallery"
import { NotFound } from "./components/NotFound";
import { UserInquiryList } from "./pages/UserInquiry";
const AdminApp = () => {
  return (
    <>
      <AdminNavbar />
      <div className="p-2 h-screen">
        <Routes>
          <Route path="" element={<Events />} />
          <Route path="activities" element={<Activities />} />
          <Route path="post" element={<Post />} />
          <Route path="users" element={<Users />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contactdetails" element={<UserInquiryList />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default AdminApp;
