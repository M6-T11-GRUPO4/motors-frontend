import { createContext, ReactNode, useState } from "react";

interface IContextProps {
  // Transform(string: string): Array<string>;
  setUser(user: any): void;
  user: any
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
  const [user, setUser] = useState({} as any);
  
  console.log(user);

  return (
    <UserContext.Provider
      value={
        {
          user, setUser
          // Transform,
          // boolMobile,
          // setBoolMobile,
          // boolPerfile,
          // setBoolPerfile,
          // response,
          // setProduct,
          // product,
        }
      }
    >
      {children}
    </UserContext.Provider>
  );
};
