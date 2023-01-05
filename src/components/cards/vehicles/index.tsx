
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProducts } from "../../../Pages/home";
import { CounterContext } from "../../../Providers/counter";
import "../../cards/style.css";

export interface IProps {
  products: {
    id:string
    image:IImage[]
    name:string
    description:string
    user_mokado:string
    km:number
    year:number
    price:string
  }
}
export interface IImage{
  url:string
}
const Cards = ({products}:IProps) => {
  const [active, setActive] = useState<boolean>(true);

  const {setProduct,logged} = useContext(CounterContext)

  const navigate = useNavigate();

  // const twoLetters = (): void => {
  //   let complet_name = name.replace(/\s(de|da|dos|das)\s/g, " ");
  //   let initial = complet_name.match(/\b(\w)/gi);
  //   let user_name = complet_name.split("")[0].toUpperCase();
  //   let last_name = initial!
  //     .splice(1, initial!.length - 1)
  //     .join("")
  //     .toUpperCase();
  //   setName(user_name + last_name);
  // };


  const callback = (products:IProducts): void => {
    setProduct(products)
    navigate("/dashboard");
  };
  
  return (
    
    <div
      key={products.id}
      onClick={() => callback(products)}
      className="flex flex-col m-7 relative cursor-pointer select-none"
    >

  {logged ? <div></div> : active === true ? (
        <span className="-bg-brand1 -text-white-fixed font-medium font-inter text-xs w-10 flex justify-center absolute mt-2 ml-3">
          Ativo
        </span>
      ) : (
        <span className="-bg-grey-4 -text-white-fixed font-medium font-inter text-xs w-10 flex justify-center absolute top-24 mt-2 ml-3 py-1">
          Inativo
        </span>)}
        
      <img
        className="w-64 -bg-grey-7 transition-property: hover:border-2 -border-random4 transition-duration: 150ms  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        src={products.image[0].url}
        alt="foto veiculo"
      />
       
      <p className="text-sm font-bold py-3 w- font-lexend">{products.name}</p>
      <p className="text-xs -text-grey-2 w-64 font-inter">
        {products.description}
      </p>
      
      <div className="flex w-64 items-center py-3">
        <div className="-bg-brand1 rounded-full -text-white-fixed p-1 text-sm mr-2 font-inter">
          GP
        </div>
        <p className="text-xs -text-grey-2 w-1/2 font-semibold font-inter">
          {products.user_mokado}
        </p>
      </div>
      <div className="flex w-64 p-0 space-x-10">
        <div className="flex w-30 space-x-4">
          <p className="-bg-brand4 -text-brand1 text-xs uppercase font-medium p-1 font-inter">
            {products.km} km
          </p>
          <p className="-bg-brand4 -text-brand1 text-xs uppercase font-medium p-1 font-inter">
            {products.year}
          </p>
        </div>
        <p className="font-semibold -text-grey-1 pl-5 font-lexend text-xs">
          R$ {products.price}
        </p>
      </div>
  
    </div>
   
  );
};
export default Cards;
