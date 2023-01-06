
import { DetailedHTMLProps, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProducts } from "../../../Pages/home";
import { ProductContext } from "../../../Providers/product/index";


export interface IProps {
  products: {
    id: string;
    image: IImage[];
    name: string;
    description: string;
    user_mokado: string;
    km: number;
    year: number;
    price: string;
    is_active?: boolean;
  };

  showIsActive?: boolean;
}

export interface IImage {
  url: string;
}

const Cards = ({ products, showIsActive = false }: IProps) => {

  const [active, setActive] = useState<boolean>(true);

  const { setProduct } = useContext(ProductContext);

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
      className="w-[19.5rem] h-[22.25rem] -bg-grey-8 flex flex-col gap-4 m-7 relative cursor-pointer select-none">
      {showIsActive &&
        (products.is_active ? (
          <span className="-bg-brand1 -text-white-fixed font-medium font-inter text-xs w-12 h-5 flex justify-center items-center absolute mt-2 ml-3">
            Ativo
          </span>
        ) : (
          <span className="-bg-grey-4 -text-white-fixed font-medium font-inter text-xs w-14 h-5 flex justify-center items-center absolute mt-2 ml-3">
            Inativo
          </span>
        ))}
      <div className="w-full h-[9.5rem] -bg-grey-7 flex justify-center items-center">
        <img
          className="h-[9.4rem] w-64 -bg-grey-7 transition-property: hover:border-2 -border-random4 transition-duration: 150ms  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src={products.image[0].url}
          alt="foto veiculo"
          onClick={() => callback(products)}
        />
      </div>
      <p className="text-sm font-bold font-lexend truncate">{products.name}</p>
      <p className="text-xs -text-grey-2 w-72 h-12 font-inter limit-overflow">
        {products.description}
      </p>
      <div className="flex w-72 items-center">
        <div className="-bg-brand1 rounded-full -text-white-fixed p-1 text-sm mr-2 font-inter">
          GP
        </div>
        <p className="text-xs -text-grey-2 w-1/2 font-semibold font-inter">
          {products.user_mokado}
        </p>
      </div>
      <div className="flex w-72 p-0 justify-between self-center">
        <div className="flex w-30 gap-3">
          <p className="-bg-brand4 -text-brand1 text-xs uppercase font-medium p-1 font-inter">
            {products.km} km
          </p>
          <p className="-bg-brand4 -text-brand1 text-xs uppercase font-medium p-1 font-inter">
            {products.year}
          </p>
        </div>
        <p className="font-semibold -text-grey-1 pl-5 font-lexend">
          {Number(products.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      {/* <div className="flex gap-4 font-inter font-semibold text-sm -text-grey-1">
        <button className="h-9 border-2 rounded -border-grey-1 px-5 hover:-bg-brand1 hover:-border-brand1">
          Editar
        </button>

        <button
          className="h-9 border-2 rounded -border-grey-1 px-5 hover:-bg-brand1 hover:-border-brand1"
          onClick={() => navigate("/dashboard")}
        >
          Ver como
        </button>
      </div> */}
    </div>
   
  )
};
export default Cards;
