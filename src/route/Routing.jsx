import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { InstructorProfile } from "../pages/InstructorProfile";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Skills from "../pages/Skills";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/instructor-profile" element={<InstructorProfile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
