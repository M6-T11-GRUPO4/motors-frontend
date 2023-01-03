import { createContext, ReactNode, useEffect, useState } from "react";
import { Styles } from "react-modal";
import { IProducts } from "../../Pages/home";
import { api } from "../../services/api";

interface IContextProps {
  Transform(string: string): Array<string>;
  setBoolMobile(boolMobile: boolean): void;
  boolMobile: boolean;
  setBoolPerfile(boolPerfile: boolean): void;
  boolPerfile: boolean;
  setProduct(product: IProducts): void;
  product: IProducts;
  setModal(modal: boolean): void;
  modal: boolean;
  OpenAndCloseModal(): void;
  logged: boolean;
  response: any;
  customStyles: Styles;
}
export const CounterContext = createContext({} as IContextProps);

export interface IProviderProps {
  children: ReactNode;
}
export const CounterProvider = ({ children }: IProviderProps) => {
  const [boolMobile, setBoolMobile] = useState(true);
  const [boolPerfile, setBoolPerfile] = useState(false);
  const [response, setResponse] = useState<IProducts[]>([] as IProducts[]);
  const [product, setProduct] = useState<IProducts>({} as IProducts);
  const [modal, setModal] = useState(true);
  const logged = true;

  console.log(product);

  useEffect(() => {
    api
      .get("vehicles")
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function Transform(string: string): string[] {
    let arr: string[] = [];
    string
      ?.split(",")
      ?.map((e: string) =>
        e === "[" || e === "]" || e === " " || e === "," ? null : arr.push(e)
      );
    if (arr.length !== 2) {
      arr.push("");
    }
    return arr;
  }

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
  //     padding: "0px",
  //     marginRight: "10%",
  //     transform: "translate(-50%, -50%)",
  //     maxHeight: "1036px",
  //     maxWidth: "520px",
  //     minWidth: "346px",
  //   },
  // };

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
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "15px",
      outline: "none",
      padding: "20px",
      marginRight: "-50%",
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
    <CounterContext.Provider
      value={{
        Transform,
        boolMobile,
        setBoolMobile,
        boolPerfile,
        setBoolPerfile,
        logged,
        response,
        setProduct,
        product,
        modal,
        setModal,
        customStyles,
        OpenAndCloseModal
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
