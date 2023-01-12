import { useContext } from "react";
import x from "../../../image/x.png";
import { ModalContext } from "../../../Providers/modal";

interface iUniqueImage {
  image: string;
}

export const ImageVehicleModal = ({ image }: iUniqueImage) => {
  const { OpenAndCloseModal } = useContext(ModalContext);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="font-lexend text-lg font-bold leading-5 text-[#000000]">
          Imagem do veículo
        </p>
        <button onClick={OpenAndCloseModal}>
          <img src={x} alt="fechar" />
        </button>
      </div>
      <div className="flex items-center justify-center h-full w-full ">
        <img className="w-80" src={image} alt="corro/moto" />
      </div>
    </div>
  );
};
