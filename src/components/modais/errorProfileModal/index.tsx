import { useContext } from "react";
import x from "../../../image/x.png";
import { ModalContext } from "../../../Providers/modal";
import { useNavigate } from "react-router-dom";

interface IUniqueError {
  error:string
}

export const ErrorProfileModal = ({error}:IUniqueError) => {
  const { OpenAndCloseModal } = useContext(ModalContext);
  const navidate = useNavigate()
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
      <button className="classLabelInputRadioButtonActivate w-[9.5rem] md:w-[11.7rem]" onClick={()=>navidate("/login")}>Ir para o login</button>
    </div>
  );
};
