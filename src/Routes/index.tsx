import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard";
import ForgotPassword from "../Pages/forgot";
import { Home } from "../Pages/home";
import { Login } from "../Pages/login";
import { ProfileView } from "../Pages/profile";
import RecoveryPassword from "../Pages/recovery";
import Modal from "react-modal";
import { ModalContext } from "../Providers/modal";
import { useContext } from "react";
import { EditProfileModal } from "../components/modais/editProfileModal";
import { AddressProfileModal } from "../components/modais/addressProfileModal";
import { ImageVehicleModal } from "../components/modais/imageVehicleModal";
import EditVehicle from "../components/modais/editVehicle";

import { SuccessProfileModal } from "../components/modais/successProfileModal";
import { ErrorProfileModal } from "../components/modais/errorProfileModal";
import RegisterPage from "../Pages/register";
import CreateVehicle from "../components/modais/createVehicle";
import { SuccessModal } from "../components/modais/successModal";
import { DeleteVehicle } from "../components/modais/deleteVehicleModal";
import { EditComment } from "../components/modais/editComment";


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
        ) : typeObject.type === "EditVehicle" ? (
          <EditVehicle id={typeObject.obj.any}/>
        ) : typeObject.type === "CreateVehicle" ? (
          <CreateVehicle />
        ) : typeObject.type === "CreateSuccess" ? (
          <SuccessModal />
        ) : typeObject.type === "DeleteVehicle" ? (
          <DeleteVehicle id={typeObject.obj.any}/>
        ) : typeObject.type === "EditComment" ? (
          <EditComment comment={typeObject.obj.any} />
        ) : typeObject.type === "Success" ? (
          <SuccessProfileModal isSeller={typeObject.obj.any} />
        ) : typeObject.type === "Error" ? (
          <ErrorProfileModal error={typeObject.obj.any} />
        ) : null}
      </Modal>
    </>
  );
};
