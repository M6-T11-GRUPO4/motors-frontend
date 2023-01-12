import { useContext } from "react";
import { useForm } from "react-hook-form";
import x from "../../../image/x.png";
import { ModalContext } from "../../../Providers/modal";
import { NormalInput } from "../../inputs/normalInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";
import { UserContext } from "../../../Providers/user";
import { api } from "../../../services/api";

export interface IForm {
  name: string;
  email: string;
  cpf: string;
  birthdate: string;
  cellphone: string;
  description: string;
}
export const EditProfileModal = () => {
  const { OpenAndCloseModal } = useContext(ModalContext);
  const { user, setUser, tokenAndId } = useContext(UserContext);
  const arrPlaceholder = [
    "Samuel Leão Silva",
    "samuel@kenzie.com.br",
    "900.880.090-00",
    "(084) 90909-9092",
    "09/12/1990",
  ];
  const arrTitle = ["Nome", "Email", "CPF", "Celular", "Data de nascimento"];
  const arrResponse = ["name", "email", "cpf", "cellphone", "birthdate"];
  const arrUser = [
    user.name,
    user.email,
    user.cpf,
    user.cellphone,
    EditDateModal(user.birthdate),
  ];

  function EditDateModal(date: string) {
    return date.slice(0, 10).split("-").reverse().join("/");
  }

  const schemaForm = yup.object().shape({
    name: yup
      .string()
      .min(3, "Mínimo 3 caracteres")
      .required("Nome é um campo obrigatório"),
    email: yup
      .string()
      .email("Email inválido")
      .required("Email é um campo obrigatório"),
    cpf: yup
      .string()
      .min(11, "CPF inválido")
      .max(11, "CPF inválido")
      .required("CPF é um campo obrigatório"),
    birthdate: yup
      .string()
      .required("Data de nascimento é um campo obrigatório"),
    cellphone: yup
      .string()
      .required("Telefone é um campo obrigatório")
      .matches(/^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{7}$/, "Telefone inválido"),
    description: yup.string().required("Descrição é um campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schemaForm),
  });

  function editDateData(data: string) {
    const birthdate = data.split("/");
    return birthdate.reverse().join("-") + "T00:00:00.000Z";
  }

  function onHandleSubmit(data: FieldValues) {
    const birthdate = data.birthdate;
    delete data.birthdate;
    data = {
      ...data,
      birthdate: editDateData(birthdate),
    };

    api
      .patch(`http://localhost:4000/users/${tokenAndId.id}`, data, {
        headers: {
          Authorization: `Bearer ${tokenAndId.token}`,
        },
      })
      .then((res) => {
        sessionStorage.setItem("@Address", JSON.stringify(res.data));
        setUser(res.data);
        OpenAndCloseModal();
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
          Editar Perfil
        </p>
        <button onClick={OpenAndCloseModal} className="mb-5">
          <img src={x} alt="fechar" />
        </button>
      </div>
      <h3 className="mb-4">Infomações pessoais</h3>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        {arrTitle.map((e, i) => (
          <NormalInput
            placeholder={arrPlaceholder[i]}
            title={arrTitle[i]}
            key={arrTitle[i]}
            register={register}
            defaultValue={arrUser[i]}
            valueRegister={arrResponse[i]}
            valueErrors={arrResponse[i]}
            errors={errors}
          />
        ))}
        <div className="flex flex-col mb-[0.8rem]">
          <label className="font-inter text-[14px] leading-[17px] -text-grey-1 font-semibold">
            Descrição
          </label>
          <textarea
            rows={3}
            placeholder="Digitar descrição"
            className="textAreaDefaultModal"
            defaultValue={user.description}
            {...register("description")}
          ></textarea>
          <span className="error">{errors.description?.message as string}</span>
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
            className="classButtonCancelDefault w-28 md:w-40"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
