import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard";
import ForgotPassword from "../Pages/forgot";
import { Home } from "../Pages/home";
import { Login } from "../Pages/login";
import { ProfileView } from "../Pages/profile";
import RecoveryPassword from "../Pages/recovery";
import RegisterPage from "../Pages/register";


export const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<ProfileView />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<RecoveryPassword />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
