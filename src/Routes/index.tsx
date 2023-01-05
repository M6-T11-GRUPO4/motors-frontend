import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard";
import { Home } from "../Pages/home";

import { ProfileViewUser } from "../Pages/profileViewUser";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<ProfileViewUser />} />
    </Routes>
  );
};
