import { createContext, ReactNode, useEffect, useState } from "react";
import { IProducts } from "../../Pages/home";
import { api, apiPrivate } from "../../services/api";

interface IContextProps {
  Transform(string: string): Array<string>;
  setBoolMobile(boolMobile: boolean): void;
  boolMobile: boolean;
  setBoolPerfile(boolPerfile: boolean): void;
  boolPerfile: boolean;
  setProduct(product: IProducts): void;
  product: IProducts;
  logged: boolean;
  response: any;
  setLogin(login: ILogin): void;
  login: ILogin;
}
export const ProductContext = createContext({} as IContextProps);

interface ILogin {
  id: string;
  token: string;
}

export interface IProviderProps {
  children: ReactNode;
}
export interface IAxiosRender {
  method: string;
  url: string;
  data?: object;
  addState?(res: Object): void;
}
export const ProductProvider = ({ children }: IProviderProps) => {
  const [boolMobile, setBoolMobile] = useState(true);
  const [boolPerfile, setBoolPerfile] = useState(false);
  const [response, setResponse] = useState<IProducts[]>([] as IProducts[]);
  const [product, setProduct] = useState<IProducts>({} as IProducts);
  const [login, setLogin] = useState<ILogin>({} as ILogin);
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
  },[]);

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
    <ProductContext.Provider
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
        login,
        setLogin,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
