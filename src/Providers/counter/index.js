import { createContext, useEffect, useState } from "react";
import { api } from '../../services/api';

export const CounterContext = createContext([]);

export const CounterProvider = ({ children }) => {
  const [ response, setResponse ] = useState([]);
  const [ token, setToken ] = useState({});
  
  function Transform(string) {
    let arr = [];
    string
      ?.split(",")
      ?.map((e) =>
        e === "[" || e === "]" || e === " " || e === ","
          ? null
          : arr.push(e)
      );
    if (arr.length !== 2) {
      arr.push("")
    }
    return arr;
  }

  useEffect(()=>{
    api.get("vehicles").then((res)=>{
      setResponse(res.data)
    }).catch((err)=>{console.log(err)})
  })

  return (
    <CounterContext.Provider
      value={{
        response,
        setResponse,
        token,
        setToken,
        Transform,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
