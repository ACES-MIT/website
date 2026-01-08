import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import "./App.css";
import Home from "./components/Home/home";
import About from "./components/About/About";
import OurTeam from "./components/OurTeam/OurTeam";
import ContactPage from "./components/ContactUs/contact";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Community from "./components/JoinCommunity";
import { PageNotFound } from "./components/404";
import Login from "./components/Login/Login";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import PaymentTerms from "./components/PaymentTerms/PaymentTerms";
import RazorpayRequirements from "./components/RazorpayRequirements/RazorpayRequirements";
import ScrollToTop from "./components/ScrollToTop";
import PastEvents from "./components/PastEvents/PastEvents";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <Router>
      <div>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-Team" element={<OurTeam />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/payment-terms" element={<PaymentTerms />} />
          <Route
            path="/razorpay-requirements"
            element={<RazorpayRequirements />}
          />
          <Route path="/error" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
        {window.location.pathname !== "/error" &&
          window.location.pathname !== "/login" && (
            <>
              <Community />
              <Footer />
            </>
          )}
      </div>
    </Router>
  );
}

export default App;
