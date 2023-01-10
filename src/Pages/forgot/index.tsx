import React, { useState } from "react";
import { Header } from "../../components/header";

const ForgotPassword = () => {
  const [complete, setComplete] = useState(true);
  const [recoveryError, setRecoveryError] = useState(false)

  const stepComplete = () => {
    setComplete(true)
  }

  const stepNotComplete = () => {
    setRecoveryError(true)
  }

  return (
    <>
    <Header user={{ name: "string", img: "" }} />
      <section className="w-4/5 pt-1 text-center m-auto">
        <h1 className="font-lexend font-medium text-2xl text-black pt-5">
          Recupere sua senha
        </h1>
        <p>Digite o e-mail usado no cadastro de sua conta para recuperar sua senha</p>
        <form className="flex flex-col pt-5 max-w-xl m-auto">
          <div className="flex flex-col items-stretch">
            <label className="-text-grey-1 font-medium font-inter text-sm self-start">Email</label>
            <input type="email" placeholder="Digite seu e-mail" className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3" />
          </div>
          <button type="submit" onClick={stepComplete} className="classLabelInputRadioButtonActivate my-5">Recuperar senha</button>
        </form>
        {complete && <p className="text-red-600">Email de recuperação enviado, por favor, verifique sua caixa de entrada</p>}
        {recoveryError && <p className="">Email não encontrado, tente novamente</p>}
      </section>
    </>
  );
};
export default ForgotPassword;
