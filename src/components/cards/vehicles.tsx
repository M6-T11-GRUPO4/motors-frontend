import Car from "../../image/carro.png";
import "./style.css"

import { useState } from "react";

const Cards = (): JSX.Element => {

const[active, setActive] = useState<boolean>(true)
const[isloggedin, setIsloggedin] = useState<boolean>(false)

return (

    <div className="flex overflow-x-auto mx-4">

    <div className="flex flex-col mx-4">
        <h1 className="py-8 font-bold text-lg font-lexend">Carros</h1>
    {
        isloggedin === true ? 
        <>
        {active === true ? <span className="-bg-brand1 -text-white-fixed font-medium font-inter text-xs w-10 flex justify-center absolute top-24 mt-2 ml-3">Ativo</span>
        : <span className="-bg-grey-4 -text-white-fixed font-medium font-inter text-xs w-10 flex justify-center absolute top-24 mt-2 ml-3 py-1">Inativo</span>}
        
        
        <img className="w-64  -bg-grey-7"  src={Car} alt="foto veiculo" />
        <p className="text-sm font-bold py-3 w- font-lexend">Product title stays here</p>
        <p className="text-xs -text-grey-2 w-64 font-inter">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>
        
        <div className="flex w-64 items-center py-3">
            <div className="-bg-brand1 rounded-full -text-white-fixed p-1 text-sm mr-2 font-inter">DH</div>
            <p className="text-xs -text-grey-2 w-1/2 font-semibold font-inter">Diego Henrique</p>
        </div>

        <div className="flex w-64 p-0 space-x-10">

            <div className="flex w-24 space-x-4">
            <p className="-bg-brand4 -text-brand1 text-sm uppercase font-medium p-1 font-inter">0 km</p>
            <p className="-bg-brand4 -text-brand1 text-sm uppercase font-medium p-1 font-inter">2019</p>
            </div>

            <p className="font-semibold -text-grey-1 pl-5 font-lexend">R$ 00.000,00</p>
        </div>
        </> : <>
        <img className="w-64  -bg-grey-7"  src={Car} alt="foto veiculo" />
        <p className="text-sm font-bold py-3 w- font-lexend">Product title stays here</p>
        <p className="text-xs -text-grey-2 w-64 font-inter">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>
        
        <div className="flex w-64 items-center py-3">
            <div className="-bg-brand1 rounded-full -text-white-fixed p-1 text-sm mr-2 font-inter">DH</div>
            <p className="text-xs -text-grey-2 w-1/2 font-semibold font-inter">Diego Henrique</p>
        </div>

        <div className="flex w-64 p-0 space-x-10">

            <div className="flex w-24 space-x-4">
            <p className="-bg-brand4 -text-brand1 text-sm uppercase font-medium p-1 font-inter">0 km</p>
            <p className="-bg-brand4 -text-brand1 text-sm uppercase font-medium p-1 font-inter">2019</p>
            </div>

            <p className="font-semibold -text-grey-1 pl-5 font-lexend">R$ 00.000,00</p>
        </div>
        </>
    }
        

        
    </div>

</div>
)

}

export default Cards