
import Auction from "./components/cards/auction";
import CreateVehicle from "./components/modais/createVehicle";
import { Home } from "./Pages/home";
import RegisterPage from "./Pages/register";
import Modal from "react-modal";
import { Routers } from "./Routes";
import { ModalContext } from "./Providers/modal";
import { useContext } from "react";
import { EditProfileModal } from "./components/modais/editProfileModal";
import { AddressProfileModal } from "./components/modais/addressProfileModal";
import { ImageVehicleModal } from "./components/modais/imageVehicleModal";

function App() {
  const { customStyles, modal, OpenAndCloseModal, typeObject } =
    useContext(ModalContext);
  console.log(typeObject.type);
  return (
    <div className="-bg-grey-8 w-full">
      <Routers />
      {typeObject?.type !== undefined ? (
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
      ) : null}
    </div>
  );
}

export default App;
