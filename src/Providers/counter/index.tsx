import { createContext, ReactNode, useEffect, useState } from "react";
import { IProducts } from "../../Pages/home";
import { api } from "../../services/api";

interface IContextProps {
  Transform(string: string): Array<string>;
  setBoolMobile(boolMobile: boolean): void;
  boolMobile: boolean;
  setBoolPerfile(boolMobile: boolean): void;
  boolPerfile: boolean;
  setProduct(product: IProducts): void;
  product: IProducts;
  logged: boolean;
  response: any;
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
  const logged = true;

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
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
