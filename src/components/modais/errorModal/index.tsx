import { useContext } from "react";
import x from "../../../image/x.png";
import { ModalContext } from "../../../Providers/modal";

interface IUniqueError {
  error:string
}

export const ErrorModal = ({error}:IUniqueError) => {
  const { OpenAndCloseModal } = useContext(ModalContext);
  return (
    <div className="space-y-7">
      <div className="flex flex-row justify-between">
        <p className="font-lexend text-lg font-bold leading-5 text-[#000000]">
          Aconteceu algum erro!
        </p>
        <button onClick={OpenAndCloseModal}>
          <img src={x} alt="fechar" />
        </button>
      </div>
      <div className="flex flex-col space-y-3">
        <h3 className= "font-semibold">Seu anúncio foi criado com sucesso!</h3>
        <span>{error}</span>
      </div>
    </div>
  );
};
