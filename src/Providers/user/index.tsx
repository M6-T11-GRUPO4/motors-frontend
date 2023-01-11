import { createContext, ReactNode, useEffect, useState } from "react";
import { object } from "yup";
import { IProducts } from "../../Pages/home";
import { api } from "../../services/api";

interface IContextProps {
  // Transform(string: string): Array<string>;
  setUser(user: IUser): void;
  user: IUser;
  twoLetters(name: string): string;
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

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  passwordResetToken?: string;
  passwordResetExpires?: string;
  cpf: string;
  birthdate: string;
  cellphone: string;
  description: string;
  is_seller: boolean;
  is_active: boolean;
  vehicles: string[];
}

export const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("@User") as string) as IUser
  );

  const twoLetters = (name: string): string => {
    let initial = name?.split(" ");
    if (initial.length < 2) {
      return initial[0][0]?.toUpperCase();
    }
    return initial[0][0]?.toUpperCase() + initial[1][0]?.toUpperCase();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        twoLetters,
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
