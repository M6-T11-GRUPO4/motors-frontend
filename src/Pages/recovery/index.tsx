import React, { useState } from "react";
import { Header } from "../../components/header";
import logo from "../../image/NameShop.png";

const RecoveryPassword = () => {
  const [confirmPassword, setConfirmPassword] = useState(false);

  return (
    <>
    <Header user={{ name: "string", img: "" }} />
      <section className="w-4/5 pt-1 text-center m-auto">
        <h1 className="font-lexend font-medium text-2xl text-black pt-5">
          Recupere sua senha
        </h1>
        <form className="flex flex-col pt-5 max-w-xl m-auto">
          <div className="flex flex-col items-stretch">
            <label className="-text-grey-1 font-medium font-inter text-sm self-start">Email</label>
            <input type="email" placeholder="Digite seu e-mail" className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3" />
          </div>
          <div className="pt-4 flex flex-col items-stretch">
            <label className="-text-grey-1 font-medium font-inter text-sm self-start">Código de recuperação</label>
            <input
              type="text"
              placeholder="Digite o código de recuperação"
              className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3"/>
          </div>
          <div className="pt-4 flex flex-col items-stretch">
            <label className="-text-grey-1 font-medium font-inter text-sm self-start">Nova senha</label>
            <input type="password" placeholder="Digite sua nova senha" className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3"/>
          </div>
          <div className="pt-4 flex flex-col items-stretch">
            <label className="-text-grey-1 font-medium font-inter text-sm self-start">Confirme a nova senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua nova senha"
              className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3"
            />
          </div>
          <button type="submit" className="classLabelInputRadioButtonActivate my-5">Alterar Senha</button>
        </form>
      </section>
    </>
  );
};
export default RecoveryPassword;
