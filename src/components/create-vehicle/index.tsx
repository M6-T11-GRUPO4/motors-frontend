import { useContext, useState } from "react";
import x from "../../image/x.png";
import Modal from "react-modal";
import { ModalContext } from "../../Providers/modal";

export default function CreateVehicle() {
  const [isAuction, setIsAuction] = useState(false);
  const [isCar, setIsCar] = useState(true);
  const { customStyles, modal, OpenAndCloseModal } = useContext(ModalContext);

  function setAuctionTrue(): void {
    setIsAuction(true);
    console.log("Leilão");
  }

  function setAuctionFalse(): void {
    setIsAuction(false);
    console.log("Venda");
  }

  function setCarTrue(): void {
    setIsCar(true);
    console.log("Carro");
  }

  function setCarFalse(): void {
    setIsCar(false);
    console.log("Moto");
  }

  return (
    <Modal
      isOpen={modal}
      onRequestClose={OpenAndCloseModal}
      style={customStyles}
      className="relative"
    >
      <div className="flex flex-row justify-between mb-[0.8rem]">
        <p className="font-lexend text-base font-medium leading-5 text-[#000000]">
          Criar anuncio
        </p>
        <button onClick={OpenAndCloseModal}>
          <img src={x} alt="fechar" />
        </button>
      </div>
      <form>
        <p className="mb-[0.8rem] font-inter text-base text-[14px] font-medium leading-5 text-[#000000]">
          Tipo de anuncio
        </p>
        <div className="flex flex-row w-80 justify-between ">
          <input
            type="radio"
            id="venda"
            name="is_auction"
            value="Venda"
            onClick={setAuctionFalse}
            className="classInputRadio"
          />
          {!isAuction ? (
            <label
              htmlFor="venda"
              className="classLabelInputRadioButtonActivate w-32 md:w-56"
            >
              Venda
            </label>
          ) : (
            <label
              htmlFor="venda"
              className="classLabelInputRadioButtonDesactivate w-32 md:w-56"
            >
              Venda
            </label>
          )}
          <input
            type="radio"
            id="leilao"
            name="is_auction"
            value="Leilão"
            onClick={setAuctionTrue}
            className="classInputRadio"
          />
          {!isAuction ? (
            <label
              htmlFor="leilao"
              className="classLabelInputRadioButtonDesactivate w-40 md:[13rem]"
            >
              Leilão
            </label>
          ) : (
            isAuction && (
              <label
                htmlFor="leilao"
                className="classLabelInputRadioButtonActivate w-40 md:w-[13rem]"
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
        <div className="flex flex-row w-80 justify-between mb-[0.8rem]">
          <input
            type="radio"
            id="carro"
            name="type"
            value="Carro"
            onClick={setCarTrue}
            className="classInputRadio"
          />
          {isCar ? (
            <label
              htmlFor="carro"
              className="classLabelInputRadioButtonActivate w-40 md:w-56"
            >
              Carro
            </label>
          ) : (
            <label
              htmlFor="carro"
              className="classLabelInputRadioButtonDesactivate w-40 md:w-56"
            >
              Carro
            </label>
          )}
          <input
            type="radio"
            id="moto"
            name="type"
            value="Moto"
            onClick={setCarFalse}
            className="classInputRadio"
          />
          {isCar ? (
            <label
              htmlFor="moto"
              className="classLabelInputRadioButtonDesactivate w-40 md:w-56"
            >
              Moto
            </label>
          ) : (
            <label
              htmlFor="moto"
              className="classLabelInputRadioButtonActivate w-40 md:w-56"
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
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
            1º Imagem da galeria
          </label>
          <input
            type="url"
            placeholder="Inserir URL da imagem"
            className="inputDefaultModal"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            // addInputButton()
          }}
          className="classButtonCancelDefault mb-14 w-[19.7rem] md:w-[24rem] h-10 -text-brand1 font-inter"
        >
          Adicionar campo para imagem da galeria
        </button>
        <div className="flex flex-row-reverse justify-center md:justify-start space-x-4 space-x-reverse">
          <button type="submit" className="classLabelInputRadioButtonActivate w-40 md:w-64">
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
    </Modal>
  );
}
