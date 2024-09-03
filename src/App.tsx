// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "./components/footer/Footer";
// import Home from "./components/home/Home";
// import AboutUs from './components/about/AboutPage'
// import Header from "./components/header/Header";
// import Events from "./components/events/Events";
// import Activities from "./components/activities/Activities";
// import Products from "./components/products/Products";
// import DonateNow from "./components/donations/Donations";
// import PariharaPooja from "./components/pariharapooja/PariharaPooja";
// import Adyatmikam from "./components/adyatmikam/Adyatmikam";
// import SamaajaSeva from "./components/samajaseva/SamaajaSeva";
// import PreviousEvents from "./components/events/Events";
// import UpComingEvents from "./components/upcomingevents/UpComingEvents";
// import ContactUs from "./components/contactus/ContactUsPage";
// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path='/aboutus' element={<AboutUs/>}></Route>
//         <Route path="/events" element={<Events />}>
//           <Route path="previousevents" element={<PreviousEvents />} />
//           <Route path="upcomingevents" element={<UpComingEvents />} />
//         </Route>
//         <Route path="/activities" element={<Activities />}>
//           <Route path="parihara" element={<PariharaPooja />} />
//           <Route path="adyatmikam" element={<Adyatmikam />} />
//           <Route path="samajaseva" element={<SamaajaSeva />} />
//         </Route>
//         <Route path="/products" element={<Products />} />
//         <Route path="/contactus" element={<ContactUs />} />
//         <Route path="/donate" element={<DonateNow />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutPage";
import Header from "./components/header/Header";
// import Events from "./components/events/Events";
// import Activities from "./components/activities/Activities";
import Products from "./components/products/Products";
import DonateNow from "./components/donations/Donations";
import PariharaPooja from "./components/pariharapooja/PariharaPooja";
import Adyatmikam from "./components/adyatmikam/Adyatmikam";
import SamaajaSeva from "./components/samajaseva/SamaajaSeva";
import PreviousEvents from "./components/events/Events";
import UpComingEvents from "./components/upcomingevents/UpComingEvents";
import ContactUs from "./components/contactus/ContactUsPage";
import DonationPaymentPage from "./components/donationpayment/DonationPaymentPage";
import Poojalu from "./components/poojalu/Poojalu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
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
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/donationPayment" element={<DonationPaymentPage/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
