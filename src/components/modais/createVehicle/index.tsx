import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import x from "../../../image/x.png";
import Modal from "react-modal";
import { ModalContext } from "../../../Providers/modal";
import { AddInput } from "../../inputs/addInput";
import { apiPrivate } from "../../../services/api";

interface IVehicleRequest {
  name: string;
  description: string;
  price: number;
  year: number;
  km: number;
  type: string;
  image1: string;
  image2: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
}

export default function CreateVehicle() {
  const [isAuction, setIsAuction] = useState(false);

  const [isCar, setIsCar] = useState(true);

  const { customStyles, modal, OpenAndCloseModal, setTypeObject } =
    useContext(ModalContext);

  const [numberImput, setNumberImput] = useState([1] as number[]);

  const [number, setNumber] = useState(0);

  let arr = [0, 1, 2, 3, 4];

  const createVehicleSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    price: yup.number().required("Campo obrigatório"),
    year: yup.number().required("Campo obrigatório"),
    km: yup.number().required("Campo obrigatório"),
    image1: yup.string().required("Campo obrigatório"),
    image2: yup.string().required("Campo obrigatório"),
    image3: yup.string(),
    image4: yup.string(),
    image5: yup.string(),
    image6: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehicleRequest>({ resolver: yupResolver(createVehicleSchema) });

  const submit = (data: IVehicleRequest) => {
    const image: string[] = [
      data.image1,
      data.image2,
      data.image3 ? data.image3 : "",
      data.image4 ? data.image4 : "",
      data.image5 ? data.image5 : "",
      data.image6 ? data.image6 : "",
    ];

    const finalData = {
      name: data.name,
      description: data.description,
      price: data.price,
      year: data.year,
      km: data.km,
      type: isCar ? "Carro" : "Moto",
      image,
    };

    apiPrivate
      .post("/vehicles", finalData)
      .then((res) => {
        setTypeObject({ type: "CreateSuccess", obj: {} });

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      isOpen={modal}
      onRequestClose={OpenAndCloseModal}
      style={customStyles}
      className="relative"
    >
      <section className="">
        <div className="flex flex-row justify-between mb-[0.8rem]">
          <p className="font-lexend text-base font-medium leading-5 text-[#000000]">
            Criar anuncio
          </p>
          <button onClick={OpenAndCloseModal}>
            <img src={x} alt="fechar" />
          </button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <p className="mb-[0.8rem] font-inter text-base text-[14px] font-medium leading-5 text-[#000000]">
            Tipo de anuncio
          </p>
          <div className="flex flex-row w-80 md:w-[28rem] justify-between">
            <input
              type="radio"
              id="venda"
              name="is_auction"
              value="Venda"
              onClick={() => setIsAuction(false)}
              className="classInputRadio"
            />
            {!isAuction ? (
              <label
                htmlFor="venda"
                className="classLabelInputRadioButtonActivate w-[9.5rem] md:w-[13.7rem]"
              >
                Venda
              </label>
            ) : (
              <label
                htmlFor="venda"
                className="classLabelInputRadioButtonDesactivate w-[9.5rem] md:w-[13.7rem]"
              >
                Venda
              </label>
            )}
            <input
              type="radio"
              id="leilao"
              name="is_auction"
              value="Leilão"
              onClick={() => setIsAuction(true)}
              className="classInputRadio"
            />
            {!isAuction ? (
              <label
                htmlFor="leilao"
                className="classLabelInputRadioButtonDesactivate w-[9.5rem] md:w-[13.7rem]"
              >
                Leilão
              </label>
            ) : (
              isAuction && (
                <label
                  htmlFor="leilao"
                  className="classLabelInputRadioButtonActivate w-[9.5rem] md:w-[13.7rem]"
                >
                  Leilão
                </label>
              )
            )}
          </div>
          <p className="my-[0.8rem] font-inter text-base text-[14px] font-medium leading-5 text-[#000000]">
            Informações do veículo
          </p>
          <div className="flex flex-col mb-[0.8rem]">
            <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
              Título
            </label>
            <input
              type="text"
              placeholder="Digitar título"
              className="inputDefaultModal"
              {...register("name")}
            />
            {errors.name && (
              <span className="font-semibold font-inter text-sm text-red-600">
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className="flex justify-between flex-col md:flex-row mb-[0.8rem] ">
            <section className="flex  md:justify-between md:space-x-2 mb-4 md:mb-0">
              <div className="flex flex-col ">
                <label className="w-24 font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
                  Ano
                </label>
                <input
                  type="text"
                  placeholder="Digitar ano"
                  className="inputDefaultModal w-36 mr-3 md:mr-0"
                  {...register("year")}
                />
                {errors.year && (
                  <span className="font-semibold font-inter text-sm text-red-600">
                    {errors.year?.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
                  Quilometragem
                </label>
                <input
                  type="text"
                  placeholder="0"
                  className="inputDefaultModal w-40 md:w-36"
                  {...register("km")}
                />
                {errors.km && (
                  <span className="font-semibold font-inter text-sm text-red-600">
                    {errors.km?.message}
                  </span>
                )}
              </div>
            </section>
            <div className="flex flex-col">
              {!isAuction ? (
                <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
                  Preço
                </label>
              ) : (
                <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
                  Lance
                </label>
              )}
              {!isAuction ? (
                <input
                  type="text"
                  placeholder="Digitar preço"
                  className="inputDefaultModal w-full md:w-[9rem]"
                  {...register("price")}
                />
              ) : (
                <input
                  type="text"
                  placeholder="Digitar lance"
                  className="inputDefaultModal w-full md:w-[9rem]"
                />
              )}
              {errors.price && (
                <span className="font-semibold font-inter text-sm text-red-600">
                  {errors.price?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-[0.8rem]">
            <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
              Descrição
            </label>
            <textarea
              rows={3}
              placeholder="Digitar descrição"
              className="textAreaDefaultModal"
              {...register("description")}
            ></textarea>
            {errors.description && (
              <span className="font-semibold font-inter text-sm text-red-600">
                {errors.description?.message}
              </span>
            )}
          </div>
          <p className="mb-[0.8rem] font-inter text-base text-[14px] font-medium leading-5 text-[#000000]">
            Tipo de veículo
          </p>
          <div className="flex flex-row w-80 md:w-[28rem] justify-between mb-[0.8rem]">
            <input
              type="radio"
              id="carros"
              value="Carro"
              onClick={() => setIsCar(true)}
              className="classInputRadio"
            />
            {isCar ? (
              <label
                htmlFor="carros"
                className="classLabelInputRadioButtonActivate w-[9.5rem] md:w-[13.7rem]"
              >
                Carro
              </label>
            ) : (
              <label
                htmlFor="carros"
                className="classLabelInputRadioButtonDesactivate w-[9.5rem] md:w-[13.7rem]"
              >
                Carro
              </label>
            )}
            <input
              type="radio"
              id="motos"
              value="Moto"
              onClick={() => setIsCar(false)}
              className="classInputRadio"
            />
            {isCar ? (
              <label
                htmlFor="motos"
                className="classLabelInputRadioButtonDesactivate w-[9.5rem] md:w-[13.7rem]"
              >
                Moto
              </label>
            ) : (
              <label
                htmlFor="motos"
                className="classLabelInputRadioButtonActivate w-[9.5rem] md:w-[13.7rem]"
              >
                Moto
              </label>
            )}
          </div>
          <div className="flex flex-col mb-[0.8rem]">
            <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
              Imagem da capa
            </label>
            <input
              type="url"
              placeholder="Inserir URL da imagem"
              className="inputDefaultModal"
              {...register("image1")}
            />
            {errors.image1 && (
              <span className="font-semibold font-inter text-sm text-red-600">
                {errors.image1?.message}
              </span>
            )}
          </div>
          {numberImput?.map((e, i) => (
            <AddInput
              key={i}
              number={numberImput[arr[i]]}
              valueRegister={`image${(i += 2)}`}
              register={register}
              errors={errors}
              valueErrors={`image${(i += 2)}`}
            />
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              setNumber(number + 1);
              setNumberImput([...numberImput, number + 2]);
            }}
            className={`classButtonCancelDefault mb-14 w-[19.7rem] md:w-[24rem] h-10 -text-brand1 font-inter ${
              number === 4 ? "hidden" : "flex"
            }`}
          >
            Adicionar campo para imagem da galeria
          </button>
          <div className="flex flex-row-reverse justify-center md:justify-start space-x-4 space-x-reverse">
            <button
              type="submit"
              className="classLabelInputRadioButtonActivate w-40 md:w-64"
            >
              Criar anúncio
            </button>
            <button
              onClick={OpenAndCloseModal}
              className="classButtonCancelDefault w-28 md:w-40"
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </Modal>
  );
}
