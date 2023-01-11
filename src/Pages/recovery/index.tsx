import React, { useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { api } from "../../services/api";

const RecoveryPassword = () => {
  const [tokenVerify, setTokenVerify] = useState(false)
  const [tokenTime, setTokenTime] = useState(false)
  const [recoverySuccess, setRecoverySuccess] = useState(false)
  const [error, setError] = useState(false)

  const formSchema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required('Email de cadastro no sistema é obrigatório'),
    token: yup.string().required('Código de verificação é obrigatório'),
    password: yup.string().required('Nova senha é obrigatória'),
  })

  const {register, handleSubmit, formState: {errors}, } = useForm({
    resolver: yupResolver(formSchema)
  })
  
  const onSubmit = (data: FieldValues) => {
      api.post('/users/login/reset-password', data)
      .then((res) => {
        console.log(res)
        setRecoverySuccess(true)
        setTokenVerify(false)
        setTokenTime(false)
        setError(false)  
      })
      .catch((err) => {
        console.log(err)
        if(err.response.data.message === "Código de recuperação de senha é inválido, verifique seu e-mail"){
          setRecoverySuccess(false)
          setTokenVerify(true)
          setTokenTime(false)
          setError(false) 
        } else if (err.response.data.message === "Código de recuperação expirado, gere um novo código e verifique seu e-mail"){
            setRecoverySuccess(false)
            setTokenVerify(false)
            setTokenTime(true)
            setError(false)
        } else {
          setRecoverySuccess(false)
          setTokenVerify(false)
          setTokenTime(false)
          setError(true)
        } 
        }
      )
  }


  return (
    <>
    <Header />
      <section className="w-4/5 pt-1 text-center m-auto h-[75.3vh]">
        <h1 className="font-lexend font-medium text-2xl text-black pt-5">
          Recupere sua senha
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-5 max-w-xl m-auto">
          <div className="flex flex-col items-stretch">
            <label className="-text-grey-1 font-medium font-inter text-sm self-start">Email</label>
            <input type="email" placeholder="Digite seu e-mail" className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3" {...register('email')}/>
            {errors.email?.message && <p className="text-red-600">Endereço de e-mail é obrigatório</p>}
          </div>
          <div className="pt-4 flex flex-col items-stretch">
            <label className="-text-grey-1 font-medium font-inter text-sm self-start">Código de recuperação</label>
            <input
              type="text"
              placeholder="Digite o código de recuperação"
              className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3" {...register('token')}/>
              {errors.token?.message && <p className="text-red-600">Código de recuperação de e-mail é obrigatorio</p>}
          </div>
          <div className="pt-4 flex flex-col items-stretch">
            <label className="-text-grey-1 font-medium font-inter text-sm self-start">Nova senha</label>
            <input type="password" placeholder="Digite sua nova senha" className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3" {...register('password')}/>
            {errors.password?.message && <p className="text-red-600">Senha é obrigatória</p>}
          </div>
          <button type="submit" className="classLabelInputRadioButtonActivate my-5">Alterar Senha</button>
        </form>
        {tokenVerify && <p className="text-red-600">Código de recuperação de senha é inválido, verifique seu e-mail.</p>}
        {tokenTime && <p className="text-red-600">Código de recuperação expirado, gere um novo código e verifique seu e-mail.</p>}
        {recoverySuccess && <p className="text-red-600">Senha alterada com sucesso, faça o login.</p>}
        {error && <p className="text-red-600">Email não cadastrado em nossa base de dados.</p>}

      </section>
      <Footer />
    </>
  );
};

export default RecoveryPassword;
