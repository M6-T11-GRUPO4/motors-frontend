import { useContext, useState } from "react";
import x from "../../../image/x.png";
import * as yup from "yup";
import { ModalContext } from "../../../Providers/modal";
import { AddInput } from "../../inputs/addInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../services/api";
import { FieldValues } from "react-hook-form/dist/types";

import { UserContext } from "../../../Providers/user";
import { ProductContext } from "../../../Providers/product";

export interface IVehiclePatchRequest {
  name: string;
  description: string;
  price: number;
  year: number;
  km: number;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}
export interface IId {
  id:string
}

export default function EditVehicle({id}:IId) {
  const [isAuction, setIsAuction] = useState(false);
  const [isCar, setIsCar] = useState(true);
  const [isPublic, setIsPublic] = useState(true);
  const { OpenAndCloseModal, setTypeObject } = useContext(ModalContext);
  const { tokenAndId } = useContext(UserContext);
  const { product, setProduct } = useContext(ProductContext);

  const [numberImput, setNumberImput] = useState([1] as number[]);
  const [number, setNumber] = useState(0);
  let arr = [0, 1, 2, 3, 4];
  let valueRegister = ["image2", "image3", "image4", "image5", "image6"];

  const schemaForm = yup.object().shape({
    name: yup.string(),
    description: yup.string(),
    price: yup.number(),
    year: yup.number(),
    km: yup.number(),
    image1: yup.string().notRequired(),
    image2: yup.string().notRequired(),
    image3: yup.string().notRequired(),
    image4: yup.string().notRequired(),
    image5: yup.string().notRequired(),
    image6: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForm),
  });

  function onHandleSubmit(data: FieldValues) {
    data = {
      ...data,
      image: [
        data?.image1 !== undefined ? data?.image1 : "",
        data?.image2 !== undefined ? data?.image2 : "",
        data?.image3 !== undefined ? data?.image3 : "",
        data?.image4 !== undefined ? data?.image4 : "",
        data?.image5 !== undefined ? data?.image5 : "",
        data?.image6 !== undefined ? data?.image6 : "",
      ],
      type: `${isCar ? "Carro" : "Moto"}`,
      is_active: isPublic ? true : false,
    };
    delete data.image1;
    delete data.image2;
    delete data.image3;
    delete data.image4;
    delete data.image5;
    delete data.image6;

    api
      .patch(`http://localhost:4000/vehicles/${id}`, data, {
        headers: {
          Authorization: `Bearer ${tokenAndId.token}`,
        },
      })
      .then((res) => {

        setProduct(res.data)
        sessionStorage.setItem("@Vitrine", JSON.stringify(res.data));
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="">
      <div className="flex flex-row justify-between mb-[0.8rem]">
        <p className="font-lexend text-base font-medium leading-5 text-[#000000]">
          Editar anuncio
        </p>
        <button onClick={OpenAndCloseModal}>
          <img src={x} alt="fechar" />
        </button>
      </div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <p className="mb-[0.8rem] font-inter text-base text-[14px] font-medium leading-5 text-[#000000]">
          Tipo de anuncio
        </p>
        <div className="flex flex-row w-80 md:w-[28rem] justify-between ">
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
            defaultValue={product.name}
            placeholder="Digitar título"
            className="inputDefaultModal"
            {...register("name")}
          />
        </div>
        <div className="flex justify-between flex-col md:flex-row mb-[0.8rem] ">
          <section className="flex  md:justify-between md:space-x-2 mb-4 md:mb-0">
            <div className="flex flex-col ">
              <label className="w-24 font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
                Ano
              </label>
              <input
                type="text"
                defaultValue={product.year}
                placeholder="Digitar ano"
                className="inputDefaultModal w-36 mr-3 md:mr-0"
                {...register("year")}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
                Quilometragem
              </label>
              <input
                type="text"
                defaultValue={product.km}
                placeholder="0"
                className="inputDefaultModal w-40 md:w-36"
                {...register("km")}
              />
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
                defaultValue={product.price}
                placeholder="Digitar preço"
                className="inputDefaultModal w-full md:w-[9rem]"
                {...register("price")}
              />
            ) : (
              <input
                type="text"
                defaultValue={product.price}
                placeholder="Digitar lance"
                className="inputDefaultModal w-full md:w-[9rem]"
                {...register("price")}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col mb-[0.8rem]">
          <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
            Descrição
          </label>
          <textarea
            rows={3}
            defaultValue={product.description}
            placeholder="Digitar descrição"
            className="textAreaDefaultModal"
            {...register("description")}
          ></textarea>
        </div>
        <p className="mb-[0.8rem] font-inter text-base text-[14px] font-medium leading-5 text-[#000000]">
          Tipo de veículo
        </p>
        <div className="flex flex-row w-80 md:w-[28rem] justify-between mb-[0.8rem]">
          <input
            type="radio"
            id="carros"
            value="carro"
            defaultValue={product.type}


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
            value="moto"
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
        <p className="mb-[0.8rem] font-inter text-base text-[14px] font-medium leading-5 text-[#000000]">
          Publicado
        </p>
        <div className="flex flex-row w-80 md:w-[28rem] justify-between mb-[0.8rem]">
          <input
            // defaultValue={product.is_active && "Sim" }
            type="radio"
            id="sim"
            value="sim"
            onClick={() => setIsPublic(true)}
            className="classInputRadio"
          />
          {isPublic ? (
            <label
              htmlFor="sim"
              className="classLabelInputRadioButtonActivate w-[9.5rem] md:w-[13.7rem]"
            >
              Sim
            </label>
          ) : (
            <label
              htmlFor="sim"
              className="classLabelInputRadioButtonDesactivate w-[9.5rem] md:w-[13.7rem]"
            >
              Sim
            </label>
          )}
          <input
            type="radio"
            id="não"
            value="não"
            onClick={() => setIsPublic(false)}
            className="classInputRadio"
          />
          {isPublic ? (
            <label
              htmlFor="não"
              className="classLabelInputRadioButtonDesactivate w-[9.5rem] md:w-[13.7rem]"
            >
              Não
            </label>
          ) : (
            <label
              htmlFor="não"
              className="classLabelInputRadioButtonActivate w-[9.5rem] md:w-[13.7rem]"
            >
              Não
            </label>
          )}
        </div>
        <div className="flex flex-col mb-[0.8rem]">
          <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
            Imagem da capa
          </label>
          <input
            type="url"
            defaultValue={product.image[0].url}
            placeholder="Inserir URL da imagem"
            className="inputDefaultModal"
            {...register("image1")}
          />
        </div>
        {numberImput?.map((e, i) => (
          <AddInput
            errors={errors}
            valueErrors={valueRegister[i]}
            register={register}
            defaultValue={product.image[i+1].url}
            valueRegister={valueRegister[i]}
            number={numberImput[arr[i]]}
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
            Editar anúncio
          </button>
          <button
            onClick={()=> setTypeObject({type:"DeleteVehicle", obj:{any:id}})}
            className="classButtonCancelDefault w-28 md:w-40"
          >
            Excluir Anúncio
          </button>
        </div>
      </form>
    </section>
  );
}
