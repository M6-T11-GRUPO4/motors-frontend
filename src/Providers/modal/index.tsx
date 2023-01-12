import { createContext, ReactNode, useState } from "react";
import { Styles } from "react-modal";

interface IContextProps {
  setModal(modal: boolean): void;
  modal: boolean;
  setTypeObject(typeCar: Itype): void;
  typeObject: Itype;
  CallBack(type: string, any?: any): void;
  OpenAndCloseModal(): void;
  customStyles: Styles;
}

export interface IProviderProps {
  children: ReactNode;
}

interface Itype {
  type: string;
  obj: any;
}

export const ModalContext = createContext({} as IContextProps);

export const ModalProvider = ({ children }: IProviderProps) => {
  const [typeObject, setTypeObject] = useState<Itype>({} as Itype);
  const [modal, setModal] = useState(false);

  function CallBack(type: string, any?: any) {
    setTypeObject({ type, obj: { any } });
    OpenAndCloseModal();
  }

  function show(data:string) {


    let dia = data.slice(8,10)
    return `${dia} * dias` 
    
  }
  console.log(show("1996-08-18T"));
  

  const customStyles: Styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      height: "100%",
      width: "100%",
    },
    content: {
      position: "absolute",
      top:
        typeObject.type === "Car" || typeObject.type === "CreateSuccess" || typeObject.type === "DeleteVehicle" || typeObject.type === "EditComment" || typeObject.type === "Success" || typeObject.type === "Error"
          ? "30%"
          : "50%",
      left: "50%",
      right: "auto",
      bottom: 0,
      height:
        typeObject.type === "Car"
          ? "250px"
          : typeObject.type === "DeleteVehicle" || typeObject.type === "EditComment"
          ? "270px"
          : typeObject.type === "EditAddress"
          ? "530px"
          : typeObject.type === "CreateSuccess"
          ? "200px"
          : typeObject.type === "Success"
          ? "250px"
          : typeObject.type === "Error"
          ? "160px"
          : "740px",
      background: "#fff",
      overflow: "auto",
      overflowX: "hidden",
      WebkitOverflowScrolling: "touch",
      borderRadius: "15px",
      outline: "none",
      padding: "20px",
      marginRight: "0%",
      transform: "translate(-50%, -50%)",
      maxHeight: "1036px",
      maxWidth: "520px",
      minWidth: "346px",
    },
  };

  function OpenAndCloseModal(): void {
    setModal(!modal);
  }

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        customStyles,
        OpenAndCloseModal,
        typeObject,
        setTypeObject,
        CallBack,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
