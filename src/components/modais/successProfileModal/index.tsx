import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import x from "../../../image/x.png";
import { ModalContext } from "../../../Providers/modal";

export const SuccessProfileModal = (isSeller: any) => {
  const { OpenAndCloseModal } = useContext(ModalContext);

  const navigate = useNavigate();

  return (
    <div className="space-y-7">
      <div className="flex flex-row justify-between">
        <p className="font-lexend text-lg font-bold leading-5 text-[#000000]">
          Sucesso!
        </p>
        <button onClick={OpenAndCloseModal}>
          <img src={x} alt="fechar" />
        </button>
      </div>
      <div className="flex flex-col space-y-3">
        <h3 className="font-semibold">Sua conta foi criada com sucesso!</h3>
        <span>
          {isSeller.isSeller
            ? "Agora você poderá ver seus negócios crescendo em grande escala"
            : "Agora você poderá navegar e comentar sobre os produtos"}
        </span>
      </div>
      <button
        onClick={() => {
          navigate("/login");
          OpenAndCloseModal();
        }}
        className="classLabelInputRadioButtonActivate w-[9.5rem] md:w-[11.7rem]"
      >
        Ir para o login
      </button>
    </div>
  );
};
