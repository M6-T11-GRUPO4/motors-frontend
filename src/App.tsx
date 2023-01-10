import Modal from "react-modal";
import { Routers } from "./Routes";
import { ModalContext } from "./Providers/modal";
import { useContext } from "react";
import { EditProfileModal } from "./components/modais/editProfileModal";
import { AddressProfileModal } from "./components/modais/addressProfileModal";
import { ImageVehicleModal } from "./components/modais/imageVehicleModal";
import { SuccessProfileModal } from "./components/modais/successProfileModal";
import { ErrorProfileModal } from "./components/modais/errorProfileModal";

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
          ) : typeObject.type === "Success" ? (
            <SuccessProfileModal/>
          ) : typeObject.type === "Error" ? (
            <ErrorProfileModal error={typeObject.obj.any}/>
          ) : null}
        </Modal>
    </div>
  );
}

export default App;
