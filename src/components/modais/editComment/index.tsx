import { useContext } from "react";
import x from "../../../image/x.png";
import { ModalContext } from "../../../Providers/modal";
import { ProductContext } from "../../../Providers/product";
import { UserContext } from "../../../Providers/user";
import { api } from "../../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";

interface IIdEditComment {
  id: string;
}

interface IComment {
  comment: string;
}

export const EditComment = ({ id }: IIdEditComment) => {
  const { OpenAndCloseModal } = useContext(ModalContext);
  const { tokenAndId } = useContext(UserContext);
  const { product } = useContext(ProductContext);

  const schemaForm = yup.object().shape({
    comment: yup.string().required("oiiii"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IComment>({
    resolver: yupResolver(schemaForm),
  });

  function onHandleSubmit(data: FieldValues) {
    console.log(data);

    api
      .patch(`/comments/${id}`, data, {
        headers: {
          Authorization: `Bearer ${tokenAndId.token}`,
        },
      })
      .then((res) => {

        
        setTimeout(() => {
          OpenAndCloseModal();
          window.location.reload();
        }, 100);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="space-y-7">
      <div className="flex flex-row justify-between">
        <p className="font-lexend text-lg font-bold leading-5 text-[#000000]">
          Editar comentário
        </p>
        <button onClick={OpenAndCloseModal}>
          <img src={x} alt="fechar" />
        </button>
      </div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex flex-col mb-[0.8rem]">
          <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
            Descrição
          </label>
          <textarea
            rows={3}
            defaultValue={product.description}
            placeholder="Digitar descrição"
            className="textAreaDefaultModal"
            {...register("comment")}
          ></textarea>
          <span className="error">{errors.comment?.message as string}</span>
        </div>
        <div className="flex flex-row-reverse justify-center md:justify-start space-x-4 space-x-reverse">
          <button className="classDeleteVehicle bg-yellow-200 text-yellow-600 w-40 md:w-64">
            Editar comentário
          </button>
          <button
            onClick={() => OpenAndCloseModal()}
            className="classButtonCancelDefault w-28 md:w-40"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
