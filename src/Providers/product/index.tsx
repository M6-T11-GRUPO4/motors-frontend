import { createContext, ReactNode, useEffect, useState } from "react";
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
  response: any;
}
export const ProductContext = createContext({} as IContextProps);

export interface IProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: IProviderProps) => {
  const [boolMobile, setBoolMobile] = useState(true);
  const [boolPerfile, setBoolPerfile] = useState(false);
  const [response, setResponse] = useState<IProducts[]>(
    JSON.parse(sessionStorage.getItem("@Response") as string) as IProducts[]
  );
  const [product, setProduct] = useState<IProducts>(
    JSON.parse(sessionStorage.getItem("@Vitrine") as string) as IProducts
  );

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
  useEffect(() => {
    api
      .get("vehicles")
      .then((res) => {
        sessionStorage.setItem("@Response", JSON.stringify(res.data));
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product]);
  return (
    <ProductContext.Provider
      value={{
        Transform,
        boolMobile,
        setBoolMobile,
        boolPerfile,
        setBoolPerfile,
        response,
        setProduct,
        product,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
