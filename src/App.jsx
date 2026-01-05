import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import About from "./components/About/About";
import OurTeam from "./components/OurTeam/OurTeam";
import ContactPage from "./components/ContactUs/contact";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import EventRegistrationForm from "./components/form";
import Community from "./components/JoinCommunity";
import { PageNotFound } from "./components/404";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/our-Team" element={<OurTeam />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<EventRegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
        {window.location.pathname !== "/error" && window.location.pathname !== "/login" && (
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
