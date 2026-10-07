import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Lenis from "lenis";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Community from "./components/JoinCommunity";
import ScrollToTop from "./components/ScrollToTop";
// Home stays eager: it owns the landing route's LCP element, so deferring its
// chunk would delay the hero image behind an extra round-trip.
import Home from "./components/Home/home";

// Every other route is code-split so each page only downloads its own deps.
const About = lazy(() => import("./components/About/About"));
const OurTeam = lazy(() => import("./components/OurTeam/OurTeam"));
const ContactPage = lazy(() => import("./components/ContactUs/contact"));
const Login = lazy(() => import("./components/Login/Login"));
const PastEvents = lazy(() => import("./components/PastEvents/PastEvents"));
const TermsAndConditions = lazy(
  () => import("./components/TermsAndConditions/TermsAndConditions"),
);
const PageNotFound = lazy(() =>
  import("./components/404").then((m) => ({ default: m.PageNotFound })),
);

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
        <Suspense fallback={<div className="min-h-screen" />}>
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
            <Route path="/error" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/error" />} />
          </Routes>
        </Suspense>
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
