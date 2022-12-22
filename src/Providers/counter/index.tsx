import { createContext, ReactNode, useState } from "react";

interface IContextProps {
  Transform(string: string): Array<string>;
  setBoolMobile(boolMobile: boolean): void;
  boolMobile: Boolean;
  setBoolPerfile(boolMobile: boolean): void;
  boolPerfile: Boolean;
  logged: Boolean;
}
export const CounterContext = createContext({} as IContextProps);

export interface IProviderProps {
  children: ReactNode;
}
export const CounterProvider = ({ children }: IProviderProps) => {
  const [boolMobile, setBoolMobile] = useState(true);
  const [boolPerfile, setBoolPerfile] = useState(false);
  const logged = true;

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
    <CounterContext.Provider value={{ Transform, boolMobile, setBoolMobile, boolPerfile, setBoolPerfile, logged }}>
      {children}
    </CounterContext.Provider>
  );
};
