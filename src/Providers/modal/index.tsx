import { createContext, ReactNode, useState } from "react";
import { Styles } from "react-modal";

interface IContextProps {
  setModal(modal: boolean): void;
  modal: boolean;
  setTypeObject(typeCar: Itype): void;
  typeCar: Itype;
  CallBack(image: string): void;
  OpenAndCloseModal(): void;
  customStyles: Styles;
  customStylesModalCar: Styles;
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
  const [typeCar, setTypeObject] = useState<Itype>({} as Itype);
  const [modal, setModal] = useState(true);

  function CallBack(image: string) {
    setTypeObject({ type: "Car", obj: { image } });
    OpenAndCloseModal();
  }

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
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: 0,
      height: "850px",
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

  const customStylesModalCar: Styles = {
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
      top: "20%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      background: "#fff",
      overflow: "auto",
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
        customStylesModalCar,
        typeCar,
        setTypeObject,
        CallBack,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
