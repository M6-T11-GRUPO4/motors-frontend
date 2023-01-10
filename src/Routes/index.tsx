import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard";
import ForgotPassword from "../Pages/forgot";
import { Home } from "../Pages/home";

import { ProfileView } from "../Pages/profile";
import RecoveryPassword from "../Pages/recovery";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<ProfileView />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<RecoveryPassword />} />
    </Routes>
  );
};
