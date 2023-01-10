import { createContext, ReactNode, useEffect, useState } from "react";
import { IProducts } from "../../Pages/home";
import { api } from "../../services/api";

interface IContextProps {
  // Transform(string: string): Array<string>;
  // setBoolMobile(boolMobile: boolean): void;
  // boolMobile: boolean;
  // setBoolPerfile(boolPerfile: boolean): void;
  // boolPerfile: boolean;
  // setProduct(product: IProducts): void;
  // product: IProducts;
  // response: any;
}
export const UserContext = createContext({} as IContextProps);

export interface IProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: IProviderProps) => {
 
  return (
    <UserContext.Provider
      value={{
        // Transform,
        // boolMobile,
        // setBoolMobile,
        // boolPerfile,
        // setBoolPerfile,
        // response,
        // setProduct,
        // product,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
