import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";


const RegisterPage = (): JSX.Element => {

    const [colorChange, setColorChange] = useState<boolean>(false)

    const changeColor = () => {
        if(colorChange === false){
            setColorChange(true)
        }else{
            setColorChange(false)
        }
    }

    return(
        <>
        <Header user={{ name: "string", img: "" }} />

        <div className="flex flex-col items-center w-screen -bg-grey-7">
        <div className="-bg-grey-10 h-auto w-4/12 flex flex-col items-center content-center my-10 rounded p-8">
            <div>
            <h1 className="font-bold font-lexend ml-4 my-4 text-lg">Cadastro</h1>
                <p className="font-semibold font-inter text-xs ml-4 my-6">Informações pessoais</p>
                <p className="font-semibold font-inter text-xs ml-4 my-2">Nome</p>
                <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="text" placeholder="Ex: Diego Henrique" />
                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Email</p>
                <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="email" placeholder="Ex: Diego@kenzie.com.br"/>
                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">CPF</p>
                <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="number" placeholder="000.000.000-00"/>
                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Celular</p>
                <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="number" placeholder="(ddd) 9000-0000"/>
                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Data de Nascimento</p>
                <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded -text-grey-4" type="date"/>

                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Descrição</p>
                <textarea className="w-11/12 ml-4 text-sm p-2 pb-3 border-solid border-2 -border-grey-7 rounded" placeholder="Digitar descrição"></textarea>

                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Informação de endereço</p>
                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">CEP</p>
                <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="number" placeholder="00000.000"/>

                <div className="flex content-between">

                <div className="flex flex-col">
                    <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Estado</p>
                    <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="text" placeholder="Digitar Estado" />
                </div>

                <div>
                    <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Cidade</p>
                    <input className="w-11/12 ml-2 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="text" placeholder="Digitar cidade"/>
                </div>
                
                </div>
            <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Rua</p>
            <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="text" placeholder="Digitar rua"/>

            <div className="flex">

            <div>
            <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Numero</p>
            <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="number" placeholder="Digitar número"/>
            </div>

            <div>
                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Complemento</p>
                <input className="w-10/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="text" placeholder="Ex: apart 307"/>
            </div>

            </div>

            <p className="font-semibold font-inter text-xs ml-4 my-6">Tipo de conta</p>

            <div className="flex w-12/12">
            <button onClick={changeColor} className={colorChange === false ? "w-6/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded -bg-brand1 font-inter text-white font-bold" : "w-6/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-4 rounded font-inter font-bold"}>Comprador</button>
            <button onClick={changeColor} className={colorChange === false ? "w-6/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-4 rounded font-inter font-bold" : "w-6/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded -bg-brand1 font-inter text-white font-bold"}>Anuciante</button>
            </div>

            <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Senha</p>
            <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="password" placeholder="Digitar senha"/>

            <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Confirmar Senha</p>
            <input className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="password" placeholder="Digitar senha" />

            <button type="submit" className="-bg-brand1 -text-grey-10 w-11/12 ml-4 text-sm p-3 border-solid border-2 -border-grey-7 rounded-md mt-5 font-inter font-semibold">Finalizar cadastro</button>

            </div>
        </div>
        </div>

        <Footer />

        </>
    )
}

export default RegisterPage