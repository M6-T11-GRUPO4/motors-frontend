import { createContext, ReactNode, useState } from "react";
import { Styles } from "react-modal";


interface IContextProps {
  setModal(modal: boolean): void;
  modal: boolean;
  OpenAndCloseModal(): void;
  customStyles: Styles;
}

export interface IProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as IContextProps);

export const ModalProvider = ({ children }: IProviderProps) => {
  const [modal, setModal] = useState(true);

  const customStyles: Styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      height: "100%",
    },
    content: {
      position: "absolute",
      top: "56%",
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

  // const customStyles: Styles = {
  //   overlay: {
  //     position: "fixed",
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     backgroundColor: "rgba(0, 0, 0, 0.75)",
  //   },
  //   content: {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     background: "#fff",
  //     overflow: "auto",
  //     WebkitOverflowScrolling: "touch",
  //     borderRadius: "15px",
  //     outline: "none",
  //     padding: "20px",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //     maxHeight: "1036px",
  //     maxWidth: "520px",
  //     minWidth: "346px",
  //   },
  // };

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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
