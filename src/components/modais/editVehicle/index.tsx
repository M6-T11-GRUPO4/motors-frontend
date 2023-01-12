import { useContext, useState } from "react";
import x from "../../../image/x.png";
import Modal from "react-modal";
import { ModalContext } from "../../../Providers/modal";
import { AddInput } from "../../inputs/addInput";


export default function EditVehicle() {
  const [isAuction, setIsAuction] = useState(false);
  const [isCar, setIsCar] = useState(true);
  const [isPublic, setIsPublic] = useState(true);
  const { customStyles, modal, OpenAndCloseModal } = useContext(ModalContext);
  const [numberImput, setNumberImput] = useState([1] as number[]);
  const [number, setNumber] = useState(0);
  let arr = [0, 1, 2, 3, 4];

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
            Editar anuncio
          </p>
          <button onClick={OpenAndCloseModal}>
            <img src={x} alt="fechar" />
          </button>
        </div>
        <form>
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
              placeholder="Digitar título"
              className="inputDefaultModal"
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
                  placeholder="Digitar ano"
                  className="inputDefaultModal w-36 mr-3 md:mr-0"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
                  Quilometragem
                </label>
                <input
                  type="text"
                  placeholder="0"
                  className="inputDefaultModal w-40 md:w-36"
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
                  placeholder="Digitar preço"
                  className="inputDefaultModal w-full md:w-[9rem]"
                />
              ) : (
                <input
                  type="text"
                  placeholder="Digitar lance"
                  className="inputDefaultModal w-full md:w-[9rem]"
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
              placeholder="Digitar descrição"
              className="textAreaDefaultModal"
            ></textarea>
          </div>
          <p className="mb-[0.8rem] font-inter text-base text-[14px] font-medium leading-5 text-[#000000]">
            Tipo de veículo
          </p>
          <div className="flex flex-row w-80 md:w-[28rem] justify-between mb-[0.8rem]">
            <input
              type="radio"
              id="carros"
              name="type"
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
              name="type"
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
          <p className="mb-[0.8rem] font-inter text-base text-[14px] font-medium leading-5 text-[#000000]">
            Publicado
          </p>
          <div className="flex flex-row w-80 md:w-[28rem] justify-between mb-[0.8rem]">
            <input
              type="radio"
              id="sim"
              name="public"
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
              name="public"
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
              placeholder="Inserir URL da imagem"
              className="inputDefaultModal"
            />
          </div>
          {/* {numberImput?.map((e, i) => (
            <AddInput number={numberImput[arr[i]]} />
          ))} */}
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
