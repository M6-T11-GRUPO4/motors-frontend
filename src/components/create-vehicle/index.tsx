import { useState } from "react";
import x from "../../image/x.png";
import Modal, { Styles } from "react-modal";



export default function CreateVehicle() {
  const [modal, setModal] = useState(true);
  const [isAuction, setIsAuction] = useState(false);
  const [isCar, setIsCar] = useState(false)
  // const [image, setImage] = useState([])

  // function addInputButton(): void {
  //   console.log("funcionou")
    
  // }

  function setAuctionTrue(): void {
    setIsAuction(true);
    console.log('Leilão')
  }

  function setAuctionFalse(): void {
    setIsAuction(false);
    console.log('Venda')
  }

  function setCarTrue(): void {
    setIsCar(true);
    console.log('Carro')
  }

  function setCarFalse(): void {
    setIsCar(false);
    console.log('Moto')
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
      background: "#fff",
      overflow: 'auto',
      WebkitOverflowScrolling: "touch",
      borderRadius: "15px",
      outline: "none",
      padding: "0px",
      marginRight: "10%",
      transform: "translate(-50%, -50%)",
      maxHeight: "1036px",
      maxWidth: "520px",
      minWidth: "346px",
    },
  };
  
  return (
    <Modal
      isOpen={modal}
      onRequestClose={OpenAndCloseModal}
      style={customStyles}
    >
      <div className="flex flex-row justify-between mx-6 mt-5 mb-[0.8rem]">
        <p className="font-lexend text-base font-medium leading-5 text-[#000000]">Criar anuncio</p>
        <button onClick={OpenAndCloseModal}>
          <img src={x} alt="fechar" />
        </button>
      </div>
      <form>
        <p className="ml-6 mb-[0.8rem] font-inter text-base text-[14px] font-medium leading-5 text-[#000000]">Tipo de anuncio</p>
        <div className="flex flex-row justify-around mx-3">
          <input type="radio" id="venda" name="is_auction" value="Venda" onClick={setAuctionFalse} className='classInputRadio'/>
          {!isAuction ? <label htmlFor="venda" className="classLabelInputRadioButtonActivate ml-2">Venda</label> : <label htmlFor="venda" className="classLabelInputRadioButtonDesactivate ml-2">Venda</label>}
          <input type="radio" id="leilao" name="is_auction" value="Leilão" onClick={setAuctionTrue} className='classInputRadio'/>
          {!isAuction ? <label htmlFor="leilao" className="classLabelInputRadioButtonDesactivate mr-3">Leilão</label> : isAuction && <label htmlFor="leilao" className="classLabelInputRadioButtonActivate mr-3">Leilão</label>}
        </div>
        <p className="ml-6 my-[0.8rem]">Informações do veículo</p>
        <div className="flex flex-col mb-[0.8rem]">
          <label className="ml-6">Título</label>
          <input type="text" placeholder="Digitar título" className="inputDefaultModal w-[91%] self-center"/>
        </div>
        <div className="flex flex-row mb-[0.8rem]">
          <div className="flex flex-col">
          <label className="ml-6">Ano</label>
          <input type="text" placeholder="Digitar ano" className="inputDefaultModal w-[75%] ml-6"/>
          </div>
          <div className="flex flex-col">
          <label>Quilometragem</label>
          <input type="text" placeholder="0" className="inputDefaultModal w-[85%]"/>
          </div>
          <div className="flex flex-col">
          {!isAuction ? <label>Preço</label> : <label>Lance</label>}
          {!isAuction ? (
            <input type="text" placeholder="Digitar preço" className="inputDefaultModal w-[85%]"/>
          ) : (
            <input type="text" placeholder="Digitar lance" className="inputDefaultModal w-[85%]"/>
          )}
          </div>
        </div>
        <div className="flex flex-col mb-[0.8rem]">
        <label className='ml-6'>Descrição</label>
        <textarea rows={3} placeholder='Digitar descrição' className='textAreaDefaultModal mx-6'></textarea>
        </div>
        <p className="ml-6 mb-[0.8rem]">Tipo de veículo</p>
        <div className="flex flex-row justify-around mb-[0.8rem] mx-3">
          <input type="radio" id="carro" name="type" value="Carro" onClick={setCarTrue} className='classInputRadio'/>
          {isCar ? <label htmlFor="carro" className="classLabelInputRadioButtonActivate ml-2">Carro</label> : <label htmlFor="carro" className="classLabelInputRadioButtonDesactivate ml-2">Carro</label>}
          <input type="radio" id="moto" name="type" value="Moto" onClick={setCarFalse} className='classInputRadio'/>
          {isCar ? <label htmlFor="moto" className="classLabelInputRadioButtonDesactivate mr-3">Moto</label> : <label htmlFor="moto" className="classLabelInputRadioButtonActivate mr-3">Moto</label>}
          </div>
          <div className="flex flex-col mb-[0.8rem]">
          <label className="ml-6">Imagem da capa</label>
          <input type="url" placeholder="Inserir URL da imagem" className="inputDefaultModal mx-6"/>
          </div>
          <div className="flex flex-col mb-6">
        <label className="ml-6">1º Imagem da galeria</label>
        <input type="url" placeholder="Inserir URL da imagem" className="inputDefaultModal mx-6"/>
          </div>
        <button  onClick={(e) => {e.preventDefault() 
          // addInputButton()        
          }} 
        className="classButtonCancelDefault mb-14 w-[22rem] h-10 -text-brand1 ml-6 font-inter">Adicionar campo para imagem da galeria</button>
        <div className="flex flex-row-reverse space-x-4 space-x-reverse mr-6 mb-[1.5rem]">
        <button type="submit" className="classLabelInputRadioButtonActivate">Criar anúncio</button>
        <button onClick={OpenAndCloseModal} className='classButtonCancelDefault'>Cancelar</button>
        </div>        
      </form>      
    </Modal>
  );
}
