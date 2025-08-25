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
import UpComingEvents from "./components/upcomingevents/UpComingEvents";
import ContactUs from "./components/contactus/ContactUsPage";
import DonationPaymentPage from "./components/donations/donationspayment/DonationPaymentPage";
import Poojalu from "./components/poojalu/Poojalu";
import ScrollToTop from "./components/ScrollToTop";
import WhatsUpComp from "./components/WhatsUpComp";
import Signup from "./components/signups/SignUpCreate";
import Singin from "./components/signups/SignIn";
import ForgotPassword from "./components/signups/ForgotPassword";
import OTPPage from "./components/signups/OTPPage";

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
import GalleryComponent from "./components/galleryMain/GalleryMainComp";
import AllGalleryImage from "./components/galleryMain/GalleryImages";
import JoinUsPage from "./components/home/joinus/JoinUsPage";
import RazorpayPayment from "./components/donations/donationspayment/DonationReceipt";
import AdythaAshram from "./components/adythaAsharam/AdythaAshram";
import AdythaAshramPage from "./components/ourbranches/AdythaAshram";
import NotFound from "./components/PageNotFound";
import AdminNav  from "./admin/components/AdminNavbar";
const authRoutes = [
  "/signup",
  "/login",
  "/forgot",
  "/setpassword",
  "/complete",
  "/donationpayment",
  "*",
];

function App() {
  const location = useLocation();
  const isAuthRoute = authRoutes.includes(location.pathname);
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div
      style={{
        backgroundColor: "#E9E5DF",
        fontFamily: "Work Sans",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: "0 auto",
        width: "100%",
        maxWidth: "1440px",
      }}
    >
      <AuthProvider>
        <ScrollToTop />
        {!isAdminRoute && <Header />}
        {isAdminRoute && <AdminNav />}

        <ToastContainer />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Singin />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTPPage />} />

          <Route path="/setpassword" element={<SetPassword />} />
          <Route path="/complete" element={<PasswordComplete />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={""}>
            <Route path="peetam" element={<AboutUs />} />
            <Route path="peetadhipathi" element={<Aboutpeetadhipathi />} />
          </Route>
          <Route path="/events" element={<UpComingEvents />} />
          <Route path="/activities" element={""}>
            <Route path="parihara" element={<PariharaPooja />} />
            <Route path="adyatmikam" element={<Adyatmikam />} />
            <Route path="samajaseva" element={<SamaajaSeva />} />
            <Route path="AshramaPuja" element={<Poojalu />} />
          </Route>
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/devalaya" element={<DevalayaPage />} />
          <Route path="/gallery" element={<GalleryComponent />} />
          <Route path="/allgalleryimages" element={<AllGalleryImage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/donate" element={<DonateNow />} />
          <Route path="/donationpayment" element={<DonationPaymentPage />} />
          <Route path="/advythaashram" element={<AdythaAshram />} />

          <Route path="/branch" element={""}>
            <Route
              path="Advytha_Ashram_Ongole"
              element={<AdythaAshramPage />}
            />
            {/* <Route path="adyatmikam" element={<Adyatmikam />} />
            <Route path="samajaseva" element={<SamaajaSeva />} />
            <Route path="AshramaPuja" element={<Poojalu />} /> */}
          </Route>

          <Route path="/privacy&policy" element={<PrivacyPolicy />} />
          <Route path="/cancellation&refund" element={<CancellationRefund />} />
          <Route path="/contact" element={<RazarpayContact />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/razarpay" element={<RazorpayPayment />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <AdminApp />
              </ProtectedRoute>
            }
          />
        </Routes>
        {!isAdminRoute && <WhatsUpComp />}
        {!isAdminRoute && !isAuthRoute && (
          <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto" }}>
            <JoinUsPage />
          </div>
        )}
        {!isAdminRoute && (
          <div style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
            <Footer />
          </div>
        )}
      </AuthProvider>
    </div>
  );
}

export default App;
