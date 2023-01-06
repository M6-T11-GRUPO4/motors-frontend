import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard";
import { Home } from "../Pages/home";
import { Login } from "../Pages/login";
import { ProfileView } from "../Pages/profile";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<ProfileView />} />
    </Routes>
  );
};
