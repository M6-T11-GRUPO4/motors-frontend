import { createContext, ReactNode, useState } from "react";


interface IContextProps {
  user: IUser;
  setUser(user: IUser): void;
  address: IAddressRequest;
  setAddress(address: IAddressRequest): void;
  tokenAndId: TokenAndId;
  setTokenAndId({token,id}: TokenAndId ): void;
  twoLetters(name: string): string;
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
  passwordResetTokenAndId?: string;
  passwordResetExpires?: string;
  cpf: string;
  birthdate: string;
  cellphone: string;
  description: string;
  is_seller: boolean;
  is_active: boolean;
  vehicles: string[];
}
export interface IAddressRequest {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}
interface TokenAndId {
  token:string
  id:string
}

export const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("@User") as string) as IUser
  );
  const [address, setAddress] = useState(
    JSON.parse(sessionStorage.getItem("@Address") as string) as IAddressRequest
  );
  const [tokenAndId, setTokenAndId] = useState(
    {token:sessionStorage.getItem("@Token"), id:sessionStorage.getItem("@UserId")} as TokenAndId 
  );

  console.log(user);

  const twoLetters = (name: string): string => {
    let complet_name = name.replace(/\s(de|da|dos|das)\s/g, " ");
    let initial = complet_name.split(" ");
    return initial![0][0].toUpperCase() + initial![1][0].toUpperCase();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        twoLetters,
        address,
        setAddress,
        tokenAndId,
        setTokenAndId,
        // Transform,
        // boolMobile,
        // setBoolMobile,
        // boolPerfile,
        // setBoolPerfile,
        // response,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
