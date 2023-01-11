import React, { useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { api } from "../../services/api";

const ForgotPassword = () => {
  const [complete, setComplete] = useState(false);
  const [recoveryError, setRecoveryError] = useState(false)

  const formSchema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required('Email de cadastro no sistema é obrigatório')
  })
  
  const {register, handleSubmit, formState: {errors}, } = useForm({
    resolver: yupResolver(formSchema)
  })
  
  const onSubmit = (data: FieldValues) => {
    api.post('/users/login/forgot-password', data)
    .then((res) => {
      setComplete(true)
      setRecoveryError(false)
    })
    .catch((err) => {
      setComplete(false)
      setRecoveryError(true)
    })
  }

  return (
    <>
    <Header />
      <section className="w-4/5 pt-1 text-center m-auto h-[75.3vh]">
        <h1 className="font-lexend font-medium text-2xl text-black pt-5">
          Recupere sua senha
        </h1>
        <p>Digite o e-mail usado no cadastro de sua conta para recuperar sua senha</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-5 max-w-xl m-auto">
          <div className="flex flex-col items-stretch">
            <label className="-text-grey-1 font-medium font-inter text-sm self-start">Email</label>
            <input type="email" placeholder="Digite seu e-mail" className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3" {...register('email')}/>
            {errors.email?.message && <p className="text-red-600">Endereço de e-mail é obrigatório</p>}
          </div>
          <button type="submit" className="classLabelInputRadioButtonActivate my-5">Recuperar senha</button>
        </form>
        {complete && <p className="text-red-600">Email de recuperação enviado, por favor, verifique sua caixa de entrada</p>}
        {recoveryError && <p className="text-red-600">Email não encontrado, tente novamente</p>}
      </section>
      <Footer />
    </>
  );
};
export default ForgotPassword;
