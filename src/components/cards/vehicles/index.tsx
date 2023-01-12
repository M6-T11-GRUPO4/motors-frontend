import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IProducts } from "../../../Pages/home";
import { ModalContext } from "../../../Providers/modal";
import { ProductContext } from "../../../Providers/product/index";
import { IUser, UserContext } from "../../../Providers/user";
import { api } from "../../../services/api";

export interface IProps {
  products: {
    id: string;
    image: IImage[];
    name: string;
    description: string;
    userId: string;
    km: number;
    year: number;
    price: string;
    is_active: boolean;
    user: IUser;
  };

  isAdOwner?: boolean;
  showIsActive?: boolean;
}


export interface IImage {
  url: string;
}

const Cards = ({
  products,
  isAdOwner = false,
  showIsActive = false,
}: IProps) => {
  const { setProduct } = useContext(ProductContext);
  const { CallBack } = useContext(ModalContext);

  const[response, setResponse] = useState<IUser | null>()

  const { twoLetters } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    api.get(`users/${products.userId}`).then((res) => {
      setResponse(res.data)
    }).catch((err) => console.log(err))
  })

  const callback = (products: IProducts, e:any): void => {
    sessionStorage.setItem("@Vitrine", JSON.stringify(products))
    sessionStorage.setItem("@ProductId", e.target.id)
    setProduct(products)
    navigate("/dashboard");
  };

  return (
    <div className="w-[19.5rem] h-[22.25rem] -bg-grey-8 flex flex-col gap-4 m-7 relative cursor-pointer select-none">
      {showIsActive &&
        !isAdOwner &&
        (products.is_active ? (
          <span className="-bg-brand1 -text-white-fixed font-medium font-inter text-xs w-12 h-5 flex justify-center items-center absolute mt-2 ml-6">
            Ativo
          </span>
        ) : (
          <span className="-bg-grey-4 -text-white-fixed font-medium font-inter text-xs w-14 h-5 flex justify-center items-center absolute mt-2 ml-6">
            Inativo
          </span>
        ))}
      <div className="w-full h-[15rem] -bg-grey-7 flex justify-center items-center gap-[10px]">
        <img
          id={products.id}
          className="h-[9.4rem] w-64 -bg-grey-7 transition-property: hover:border-2 -border-random4 transition-duration: 150ms  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src={products.image[0].url}
          alt="foto veiculo"
          onClick={(e) => callback(products,e)}
        />
      </div>
      <p className="flex items-center text-sm font-bold font-lexend truncate py-2">{products.name}</p>
      <p className="flex items-center text-[10px] -text-grey-2 w-72 h-12 font-inter limit-overflow py-5">
        {products.description}
      </p>
      <div className="flex w-72 items-center">
        <div className="flex items-center justify-center w-8 h-8 -bg-brand1 rounded-full -text-white-fixed text-sm mr-2 font-inter">
          {twoLetters(products?.user.name)}
        </div>
        <p className="text-xs -text-grey-2 w-1/2 font-semibold font-inter">
          {products.user.name}
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

      {isAdOwner && (
        <div className="flex gap-4 font-inter font-semibold text-sm -text-grey-1">
          <button className="h-9 border-2 rounded -border-grey-1 px-5 hover:-bg-brand1 hover:-border-brand1" onClick={()=>CallBack("EditVehicle", products.id)}>
            Editar
          </button>

          <button
            className="h-9 border-2 rounded -border-grey-1 px-5 hover:-bg-brand1 hover:-border-brand1"
            onClick={() => navigate("/dashboard")}
          >
            Ver como
          </button>
        </div>
      )}
    </div>
  );
};
export default Cards;
