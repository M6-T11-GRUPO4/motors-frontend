import { useState } from "react";
import x from "../../image/x.png";
import Modal, { Styles } from "react-modal";

export default function CreateVehicle() {
  const [modal, setModal] = useState(true);
  const [isAuction, setIsAuction] = useState(false);

  function setAuctionTrue(): void {
    setIsAuction(true);
    console.log(isAuction);
  }

  function setAuctionFalse(): void {
    setIsAuction(false);
    console.log(isAuction);
  }

  function OpenAndCloseModal(): void {
    setModal(!modal);
  }

  const customStyles: Styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "2px solid #000000",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "15px",
      outline: "none",
      padding: "0px",
      marginRight: "10%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={modal}
      onRequestClose={OpenAndCloseModal}
      style={customStyles}
    >
      <div className="flex flex-row justify-between mx-6 mt-5 mb-[2.375rem]">
        <p>Criar anuncio</p>
        <button onClick={OpenAndCloseModal}>
          <img src={x} alt="fechar" />
        </button>
      </div>
      <form>
        <p className="ml-6">Tipo de anuncio</p>
        <div>
          <input
            type="radio"
            id="venda"
            name="is_auction"
            value="Venda"
            onClick={setAuctionFalse}
          />
          <label htmlFor="venda">Venda</label>
          <input
            type="radio"
            id="leilao"
            name="is_auction"
            value="Leilão"
            onClick={setAuctionTrue}
          />
          <label htmlFor="leilao">Leilão</label>
        </div>
        <p>Informações do veículo</p>
        <label>Título</label>
        <input type="text" placeholder="Digitar título" />
        <div>
          <label>Ano</label>
          <input type="number" placeholder="Digitar ano" />
          <label>Quilometragem</label>
          <input type="number" placeholder="0" />
          {!isAuction ? <label>Preço</label> : <label>Lance</label>}
          {!isAuction ? (
            <input type="number" placeholder="Digitar preço" />
          ) : (
            <input type="number" placeholder="Digitar lance" />
          )}
        </div>
        <label>Descrição</label>
        <textarea rows={10} cols={40}></textarea>
        <p>Tipo de veículo</p>
        <div>
          <input type="radio" id="venda" name="type" value="Venda" />
          <label htmlFor="venda">Venda</label>
          <input type="radio" id="leilao" name="type" value="Leilão" />
          <label htmlFor="leilao">Leilão</label>
        </div>
        <label>Imagem da capa</label>
        <input type="url" placeholder="Inserir URL da imagem" />
        <label>1º Imagem da galeria</label>
        <input type="url" placeholder="Inserir URL da imagem" />
        <p>Adicionar campo para imagem da galeria</p>
        <button onClick={OpenAndCloseModal}>Cancelar</button>
        <button type="submit">Criar anúncio</button>
      </form>
    </Modal>
  );
}
