import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard";
import ForgotPassword from "../Pages/forgot";
import { Home } from "../Pages/home";
import { Login } from "../Pages/login";
import { ProfileView } from "../Pages/profile";
import RecoveryPassword from "../Pages/recovery";
import RegisterPage from "../Pages/register";
import Modal from "react-modal";
import { ModalContext } from "../Providers/modal";
import { useContext } from "react";
import { EditProfileModal } from "../components/modais/editProfileModal";
import { AddressProfileModal } from "../components/modais/addressProfileModal";
import { ImageVehicleModal } from "../components/modais/imageVehicleModal";


export const Routers = () => {
  const { customStyles, modal, OpenAndCloseModal, typeObject } =
    useContext(ModalContext);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<RecoveryPassword />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Modal
        isOpen={modal}
        onRequestClose={OpenAndCloseModal}
        style={customStyles}
      >
        {typeObject.type === "EditProfile" ? (
          <EditProfileModal />
        ) : typeObject.type === "EditAddress" ? (
          <AddressProfileModal />
        ) : typeObject.type === "Car" ? (
          <ImageVehicleModal image={typeObject.obj.any} />
        ) : null}
      </Modal>
    </>
  );
};
