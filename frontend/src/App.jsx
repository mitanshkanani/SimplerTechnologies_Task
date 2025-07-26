import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/pages/Landing";
import About from "./pages/aboutus/About";
import ContactUs from "./pages/contactus/ContactUs";
import NavBar from "./pages/landing/components/NavBar";
import SignUp from "./pages/signup-in/SignUp";
import { ThemeProvider } from "./contexts/ThemeProvider";
import AnimatedBackground from "./components/ui/AnimatedBackground";

function App() {
  return (
    <ThemeProvider>
      <AnimatedBackground>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Add more routes as needed */}
          </Routes>
        </BrowserRouter>
      </AnimatedBackground>
    </ThemeProvider>
  );
}

export default App;
