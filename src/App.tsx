import { Route, Routes, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutPeetam";
import Aboutpeetadhipathi from "./components/about/Aboutpeetadhipathi";

import Header from "./components/header/Header";
import Vastu from "./components/vaastu/VastuPage";
import DevalayaPage from "./components/vaastu/DevalayaPage";
import DonateNow from "./components/donations/Donations";
import PariharaPooja from "./components/pariharapooja/PariharaPooja";
import Adyatmikam from "./components/adyatmikam/Adyatmikam";
import SamaajaSeva from "./components/samajaseva/SamaajaSeva";
import PreviousEvents from "./components/oldevents/Events";
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
import AdminApp from "./admin/AdminApp";
import PrivacyPolicy from "./components/razarpay/PrivacyPolicy";
import CancellationRefund from "./components/razarpay/Cancelation&Refund";
import RazarpayContact from "./components/razarpay/RazarpayContact";
import Shipping from "./components/razarpay/Shipping";
import TermsAndConditions from "./components/razarpay/Terms&condition";
import GalleryComponent from "./components/gallery/Gallery";
 import RazorpayPayment from "./components/donations/donationspayment/DonationReceipt";
function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <div
      style={{ backgroundColor: "#FFF8DC", fontFamily: "Mulish, sans-serif" }}
    >
      <AuthProvider>
        <ScrollToTop />
        {!isAdminRoute && <Header />}
        <ToastContainer />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Singin />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/setpassword" element={<SetPassword />} />
          <Route path="/complete" element={<PasswordComplete />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={""}>
            <Route path="peetam" element={<AboutUs />} />
            <Route path="peetadhipathi" element={<Aboutpeetadhipathi />} />
          </Route>
          <Route path="/events" element={""}>
            <Route path="previousevents" element={<PreviousEvents />} />
            <Route path="upcomingevents" element={<UpComingEvents />} />
          </Route>
          <Route path="/activities" element={""}>
            <Route path="parihara" element={<PariharaPooja />} />
            <Route path="adyatmikam" element={<Adyatmikam />} />
            <Route path="samajaseva" element={<SamaajaSeva />} />
            <Route path="pujalu" element={<Poojalu />} />
          </Route>
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/devalaya" element={<DevalayaPage />} />
          <Route path="/gallery" element={<GalleryComponent />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/donate" element={<DonateNow />} />
          <Route path="/donationpayment" element={<DonationPaymentPage />} />
          <Route path="/privacy&policy" element={<PrivacyPolicy />} />
          <Route path="/cancellation&refund" element={<CancellationRefund />} />
          <Route path="/contact" element={<RazarpayContact />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/razarpay" element={<RazorpayPayment />}/>
          {/* Admin panel route */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <AdminApp />
              </ProtectedRoute>
            }
          />{" "}
        </Routes>
        {!isAdminRoute && <WhatsUpComp />}
        {!isAdminRoute && <Footer />}
      </AuthProvider>
    </div>
  );
}

export default App;
