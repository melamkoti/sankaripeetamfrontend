import { Route, Routes, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutPage";
import Header from "./components/header/Header";
import Vastu from "./components/vaastu/VastuPage";
import Boomi from "./components/vaastu/BoomiPage";
import DonateNow from "./components/donations/Donations";
import PariharaPooja from "./components/pariharapooja/PariharaPooja";
import Adyatmikam from "./components/adyatmikam/Adyatmikam";
import SamaajaSeva from "./components/samajaseva/SamaajaSeva";
import PreviousEvents from "./components/events/Events";
import UpComingEvents from "./components/upcomingevents/UpComingEvents";
import ContactUs from "./components/contactus/ContactUsPage";
import DonationPaymentPage from "./components/donations/donationspayment/DonationPaymentPage";
import Poojalu from "./components/poojalu/Poojalu";
import ScrollToTop from "./components/ScrollToTop";
import WhatsUpComp from "./components/WhatsUpComp";
import Signup from "./components/signups/SignUpCreate";
import Singin from "./components/signups/SignIn";
import ForgotPassword from "./components/signups/ForgotPassword";
import SetPassword from "./components/signups/SetPassword";
import PasswordComplete from "./components/signups/PasswordComplete";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./middleware/PrivateRoute";
import UserProfile from "./components/user/UserProfile";
import  AdminApp  from "./admin/AdminApp";

function App() {
  const location = useLocation();


  const isAdminRoute = location.pathname.startsWith('/admin')
  return (
      <AuthProvider>
        <ScrollToTop />
        {!isAdminRoute &&  <Header />
 }
        <ToastContainer />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Singin />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/setpassword" element={<SetPassword />} />
          <Route path="/complete" element={<PasswordComplete />} />

          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={""}>
            <Route path="previousevents" element={<PreviousEvents />} />
            <Route path="upcomingevents" element={<UpComingEvents />} />
          </Route>
          <Route path="/activities" element={""}>
            <Route path="parihara" element={<PariharaPooja />} />
            <Route path="adyatmikam" element={<Adyatmikam />} />
            <Route path="samajaseva" element={<SamaajaSeva />} />
            <Route path="poojalu" element={<Poojalu />} />
          </Route>
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/boomi" element={<Boomi />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/donate" element={<DonateNow />} />
          <Route
          path="/donationpayment"
          element={
            <ProtectedRoute allowedRoles={["User", "Admin"]}>
              <DonationPaymentPage />
            </ProtectedRoute>
          }
        />
          <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["User", "Admin"]}>
              <UserProfile  user="sfda"/>
            </ProtectedRoute>
          }
        />

          {/* Admin panel route */}
          <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminApp />
            </ProtectedRoute>
          }
        />        </Routes>
       {!isAdminRoute &&  <WhatsUpComp />} 
        {!isAdminRoute && <Footer />}
      </AuthProvider>
  );
}

export default App;
