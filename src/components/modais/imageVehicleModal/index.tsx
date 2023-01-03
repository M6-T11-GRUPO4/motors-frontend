import { useContext } from "react";
import { CounterContext } from "../../../Providers/counter";
import x from "../../../image/x.png";

interface iUniqueImage {
  image: string;
}

export const ImageVehicleModal = ({ image }: iUniqueImage) => {
  const { OpenAndCloseModal } = useContext(CounterContext);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="font-lexend text-lg font-bold leading-5 text-[#000000]">
          Imagen do veículo
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
