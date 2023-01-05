import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IUserRegister {
    name: string,
    email: string,
    cpf: string,
    cellphone: string,
    birthdate: string,
    description: string,
    cep: string,
    estate: string,
    city: string,
    street: string,
    number: string,
    complement: string,
    is_seller2: string,
    is_seller:string,
    password: string,
    confirm_password: string,
}

const RegisterPage = (): JSX.Element => {

    const [colorChange, setColorChange] = useState<boolean>(false)

    const formSchema = yup.object().shape({
		name: yup.string().required("O nome é obrigatório"),
		email: yup.string().required("Email é obrigatório").email("Email Inválido"),
        cpf: yup.string().required("CPF é obrigatório").min(11).max(14),
        cellphone: yup.string().required("Celular é obrigatório"),
        birthdate: yup.string().required("Data de nascimento é obrigatório"),
        description: yup.string().required("Descrição é Obrigatório"),
        cep: yup.string().required("CEP é Obrigatório").max(8),
        estate: yup.string().required("Estado é obrigatório"),
        city: yup.string().required("Cidade é obrigatório"),
        street: yup.string().required("Nome da rua é obrigatório"),
        number: yup.string().required("Numero residencial é obrigatório"),
        complement: yup.string().required("Complemento é obrigatório"),
        is_seller2: yup.string(),
        is_seller: yup.string(),
		password: yup.string().required("Senha é obrigatório.").min(6, "Mínimo 6 caracteres."),
		confirm_password: yup.string().required("Senha é obrigatório.").oneOf([yup.ref("password")], "Senhas diferentes"),
	});

    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserRegister>({ resolver: yupResolver(formSchema) });

    const changeColor = () : void => {
        if(colorChange === false){
            setColorChange(true)
        }else{
            setColorChange(false)
        }
    }

    const submit = (data:IUserRegister) =>{
        console.log(data)
    }

    return(
        <>
        <Header user={{ name: "string", img: "" }} />

        <div className="flex flex-col items-center w-screen -bg-grey-7 ">
        <form onSubmit={handleSubmit(submit)} className="-bg-grey-10 h-auto w-4/12 flex flex-col items-center content-center my-10 rounded p-8 min-w-[320px] mb-16 md:mb-32  ">
            <div>
            <h1 className="font-bold font-lexend ml-4 my-4 text-lg">Cadastro</h1>
                <p className="font-semibold font-inter text-xs ml-4 my-6">Informações pessoais</p>
                <p className="font-semibold font-inter text-xs ml-4 my-2">Nome</p>
                <input {...register("name")} name="name" className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="text" placeholder="Ex: Diego Henrique" />
                {errors.name && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.name?.message}</span>}

                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Email</p>
                <input {...register("email")} name="email"  className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="email" placeholder="Ex: Diego@kenzie.com.br"/>
                {errors.email && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.email?.message}</span>}

                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">CPF</p>
                <input {...register("cpf")} name="cpf"  className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="number" placeholder="000.000.000-00"/>
                {errors.cpf && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.cpf?.message}</span>}

                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Celular</p>
                <input {...register("cellphone")} name="cellphone"  className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="number" placeholder="(ddd) 9000-0000"/>
                {errors.cellphone && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.cellphone?.message}</span>}

                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Data de Nascimento</p>
                <input {...register("birthdate")} name="birthdate" className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded -text-grey-4" type="date"/>
                {errors.birthdate  && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.birthdate?.message}</span>}

                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Descrição</p>
                <textarea {...register("description")} name="description" className="w-11/12 ml-4 text-sm p-2 pb-3 border-solid border-2 -border-grey-7 rounded" placeholder="Digitar descrição"></textarea>
                {errors.description && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.description?.message}</span>}

                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Informação de endereço</p>
                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">CEP</p>
                <input {...register("cep")} name="cep" className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="number" placeholder="00000.000"/>
                {errors.cep && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.cep?.message}</span>}

                <div className="flex content-between">

                <div className="flex flex-col">
                    <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Estado</p>
                    <input {...register("estate")} name="estate"  className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="text" placeholder="Digitar Estado" />
                    {errors.estate && <span className="flex font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.estate?.message}</span>}
                </div>

                <div>
                    <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Cidade</p>
                    <input {...register("city")} name="city" className="w-11/12 ml-2 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="text" placeholder="Digitar cidade"/>
                    {errors.city && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.city?.message}</span>}
                </div>
                
                </div>
            <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Rua</p>
            <input {...register("street")} name="street" className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="text" placeholder="Digitar rua"/>
            {errors.street && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.street?.message}</span>}

            <div className="flex">

            <div>
            <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Numero</p>
            <input {...register("number")} name="number" className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="number" placeholder="Digitar número"/>
            {errors.number && <span className="flex font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.number?.message}</span>}
            </div>

            <div>
                <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Complemento</p>
                <input {...register("complement")} name="complement" className="w-10/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="text" placeholder="Ex: apart 307"/>
                {errors.complement && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.complement?.message}</span>}
            </div>

            </div>

            <p className="font-semibold font-inter text-xs ml-4 my-6">Tipo de conta</p>

            <div className="flex w-12/12">
            <input onClick={changeColor} {...register("is_seller2")} name="is_seller2" type="button" value="Comprador" className={colorChange === false ? "w-6/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded -bg-brand1 font-inter text-white font-bold" : "w-6/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-4 rounded font-inter font-bold cursor-pointer"} />
            <input onClick={changeColor} {...register("is_seller")} name="is_seller" type="button" value="Anuciante" className={colorChange === false ? "w-6/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-4 rounded font-inter font-bold" : "w-6/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded -bg-brand1 font-inter text-white font-bold cursor-pointer"} />
            </div>

            <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Senha</p>
            <input {...register("password")} name="password" className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="password" placeholder="Digitar senha"/>
            {errors.password && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.password?.message}</span>}

            <p className="font-semibold font-inter text-xs ml-4 my-2 mt-5">Confirmar Senha</p>
            <input {...register("confirm_password")} name="confirm_password" className="w-11/12 ml-4 text-sm p-2 border-solid border-2 -border-grey-7 rounded" type="password" placeholder="Digitar senha" />
            {errors.confirm_password && <span className="font-semibold font-inter text-[10px] ml-4 my-2 text-red-600">{errors.confirm_password?.message}</span>}

            <button type="submit" className="-bg-brand1 -text-grey-10 w-11/12 ml-4 text-sm p-3 border-solid border-2 -border-grey-7 rounded-md mt-5 font-inter font-semibold">Finalizar cadastro</button>

            </div>
        </form>
        </div>

        <Footer />

        </>
    )
}

export default RegisterPage