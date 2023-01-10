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

  return (
    <div className="-bg-grey-8 w-full">
      <Routers />
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
    </div>
  );
}

export default App;
