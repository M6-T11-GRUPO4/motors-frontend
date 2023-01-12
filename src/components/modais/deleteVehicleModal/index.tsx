import { useContext } from "react";
import x from "../../../image/x.png";
import { ModalContext } from "../../../Providers/modal";
import { ProductContext } from "../../../Providers/product";
import { UserContext } from "../../../Providers/user";
import { api } from "../../../services/api";

export const DeleteVehicle = () => {

  const { OpenAndCloseModal, setTypeObject } = useContext(ModalContext);
  const { tokenAndId } = useContext(UserContext);
  const { product } = useContext(ProductContext);

  function deleteVehicleNow() {
    api
      .delete(`http://localhost:4000/vehicles/${product.id}`,  {
        headers: {
          Authorization: `Bearer ${tokenAndId.token}`,
        },
      })
      .then(() => {
        setTimeout(() => {
          OpenAndCloseModal()
          window.location.reload();
        }, 100);
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div className="space-y-7">
      <div className="flex flex-row justify-between">
        <p className="font-lexend text-lg font-bold leading-5 text-[#000000]">
          Excluir anúncio
        </p>
        <button onClick={OpenAndCloseModal}>
          <img src={x} alt="fechar" />
        </button>
      </div>
      <div className="flex flex-col space-y-3">
        <h3 className="font-semibold">
          Tem certeza que deseja remover este anúncio?
        </h3>
        <span>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </span>
      </div>
      <div className="flex flex-row-reverse justify-center md:justify-start space-x-4 space-x-reverse">
        <button
          className="classDeleteVehicle w-40 md:w-64"
          onClick={()=>deleteVehicleNow()}
        >
          Sim, excluir anúncio
        </button>
        <button
          onClick={() => setTypeObject({type:"EditVehicle", obj:{}})}
          className="classButtonCancelDefault w-28 md:w-40"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
