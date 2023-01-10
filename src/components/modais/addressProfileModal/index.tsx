import { useContext } from "react";
import { useForm } from "react-hook-form";
import x from "../../../image/x.png";
import { ModalContext } from "../../../Providers/modal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";
import { api } from "../../../services/api";

export interface IForm {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}
export const AddressProfileModal = () => {
  const { OpenAndCloseModal } = useContext(ModalContext);

  const schemaForm = yup.object().shape({
    cep: yup
      .string()
      .required("CEP é um campo obrigatório")
      .min(8, "CEP inválido")
      .max(8, "CEP inválido"),
    state: yup.string().required("Estado é um campo obrigatório"),
    city: yup.string().required("Cidade é um campo obrigatório"),
    street: yup.string().required("Rua é um campo obrigatório"),
    number: yup.string().required("Número é um campo obrigatório"),
    complement: yup.string().max(35),
  });

  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schemaForm),
  });

  function onHandleSubmit(data: FieldValues) {
    console.log(data);
    // return data;
    // OpenAndCloseModal()

    api
      .patch("/users/login", data)
      .then(() => {

      })
      .catch((err) => err);

    // if (response !== undefined || typeof response !== "string") {
    //   OpenAndCloseModal();
    // }
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="mb-5 font-lexend text-lg font-bold leading-5 text-[#000000]">
          Editar endereço
        </p>
        <button onClick={OpenAndCloseModal} className="mb-5">
          <img src={x} alt="fechar" />
        </button>
      </div>
      <h3 className="mb-4">Infomações de endereço</h3>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex flex-col mb-6">
          <label className="font-semibold">CEP</label>
          <input
            type="text"
            placeholder="89888.888"
            className="w-full pl-2 h-10"
            {...register("cep")}
          />
          <span className="error">{errors.cep?.message as string}</span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col mb-6">
            <label className="font-semibold">Estado</label>
            <input
              type="text"
              placeholder="Paraná"
              className="w-40 md:w-56 pl-2 h-10"
              {...register("state")}
            />
            <span className="error">{errors.state?.message as string}</span>
          </div>
          <div className="flex flex-col mb-6">
            <label className="font-semibold">Cidade</label>
            <input
              type="text"
              placeholder="Curitiba"
              className="w-40 md:w-56 pl-2 h-10"
              {...register("city")}
            />
            <span className="error">{errors.city?.message as string}</span>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className="font-semibold">Rua</label>
          <input
            type="text"
            placeholder="Rua do paraná"
            className="w-full pl-2 h-10"
            {...register("street")}
          />
          <span className="error">{errors.street?.message as string}</span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col mb-6">
            <label className="font-semibold">Número</label>
            <input
              type="text"
              placeholder="1029"
              className="w-40 md:w-56 pl-2 h-10"
              {...register("number")}
            />
            <span className="error">{errors.number?.message as string}</span>
          </div>
          <div className="flex flex-col mb-6">
            <label className="font-semibold">Complemento</label>
            <input
              type="text"
              placeholder="Apart 12"
              className="w-40 md:w-56 pl-2 h-10"
              {...register("complement")}
            />
            <span className="error">
              {errors.complement?.message as string}
            </span>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-center md:justify-start space-x-4 space-x-reverse">
          <button
            type="submit"
            className="classLabelInputRadioButtonActivate w-40 md:w-64"
          >
            Salvar Alterações
          </button>
          <button
            onClick={OpenAndCloseModal}
            className="classButtonCancelDefault w-28 md:w-56"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
