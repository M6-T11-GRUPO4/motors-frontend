import riscos from "../../image/risco.png";
import x from "../../image/xmark.png";
import image from "../../image/NameShop.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Providers/product";
import { ModalContext } from "../../Providers/modal";

interface IUser {
  name: string;
  img: string;
  isSeller?: boolean;
}

interface IUserProp {
  user: IUser;
}

export const Header = ({ user }: IUserProp) => {
  const { setBoolMobile, boolMobile, logged, setBoolPerfile, boolPerfile } =
    useContext(ProductContext);
  const { CallBack } = useContext(ModalContext);
  return (
    <header
      id="header"
      className="flex justify-between h-20 -bg-grey-10 select-none"
    >
      <div className="flex flex-row items-center space-x-1 font-bold ">
        <Link to={"/"}>
          <img src={image} alt="img" className="pl-8 h-8" />
        </Link>
      </div>

      <div className="flex items-center pr-4 sm:hidden">
        <div className="relative ">
          <button
            className=" px-3 py-1"
            onClick={() => setBoolMobile(!boolMobile)}
          >
            {boolMobile ? (
              <img src={riscos} alt="img" className="w-5 h-5" />
            ) : (
              <img src={x} alt="img" className="w-4 h-4" />
            )}
          </button>
          <nav
            className={
              boolMobile
                ? "static hidden"
                : "absolute -right-4 top-12 h-80 w-screen space-y-6 -bg-grey-10"
            }
          >
            <ul className="flex flex-col items-start px-8 space-y-8 mt-10 pb-6 font-inter border-b -border-grey-4">
              <li>
                <button className={"block w-full hover:-text-brand1"}>
                  Carros
                </button>
              </li>
              <li>
                <button className="block w-full hover:-text-brand1">
                  Motos
                </button>
              </li>
              <li>
                <button className="block w-full hover:-text-brand1">
                  Leilão
                </button>
              </li>
            </ul>
            {logged ? (
              <div
                className="relative flex gap-x-2 items-center justify-center pr-4 h-20"
                onClick={() => {
                  setBoolPerfile(!boolPerfile);
                }}
              >
                <div className="flex items-center justify-center -bg-brand1 rounded-2xl text-white w-8 h-8 ">
                  {"GP"}
                </div>
                <p>{"Gabriel Pereira"}</p>
                <ul
                  className={
                    boolPerfile
                      ? "absolute top-20 left-28 w-44 flex flex-col space-y-4 pl-2 pb-2 -bg-grey-10"
                      : "static hidden"
                  }
                >
                  <li>
                    <button className="hover:-text-brand1">
                      Editar Perfil
                    </button>
                  </li>
                  <li>
                    <button className="hover:-text-brand1">
                      Editar Endereço
                    </button>
                  </li>
                  <li>
                    {user.isSeller ? (
                      <button className="hover:-text-brand1">
                        Meus Anúncios
                      </button>
                    ) : (
                      <button className="hover:-text-brand1">
                        Minhas Compras
                      </button>
                    )}
                  </li>
                  <li>
                    <button onClick={() => console.log("foii")}>Sair</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="relative flex flex-col md:flex-row space-x-8 items-baseline md:items-center font-lexend pr-16 gap-y-3">
                <button className="hover:-text-brand1">Fazer Login</button>
                <button className="hover:-text-brand1 -border-grey-3 border rounded font-bold h-10 md:h-8 w-full md:w-28">
                  Cadastrar
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
      <div className="hidden sm:flex items-center space-x-10 font-inter ">
        <nav className="flex space-x-3 text-sm h-5">
          <button className=" hover:-text-brand1 ">Carros</button>
          <button className=" hover:-text-brand1 ">Motos</button>
          <button className=" hover:-text-brand1 ">Leilão</button>
        </nav>
        {logged ? (
          <div
            className="relative flex gap-x-2 items-center pr-9"
            onClick={() => setBoolMobile(!boolMobile)}
          >
            <div className="flex items-center justify-center -bg-brand1 rounded-2xl text-white w-8 h-8 ">
              {"GP"}
            </div>
            <p>{"Gabriel Pereira"}</p>
            <ul
              className={
                boolMobile
                  ? "static hidden"
                  : "absolute top-14 w-44 flex flex-col -bg-grey-9 space-y-4 pl-4 py-2 h-40"
              }
            >
              <li>
                <button
                  className="hover:-text-brand1"
                  onClick={() => CallBack("EditProfile")}
                >
                  Editar Perfil
                </button>
              </li>
              <li>
                <button
                  className="hover:-text-brand1"
                  onClick={() => CallBack("EditAddress")}
                >
                  Editar Endereço
                </button>
              </li>
              <li>
                {user.isSeller ? (
                  <button className="hover:-text-brand1">Meus Anúncios</button>
                ) : (
                  <button className="hover:-text-brand1">Minhas Compras</button>
                )}
              </li>
              <li>
                <button onClick={() => console.log("foii")}>Sair</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className=" flex space-x-8 items-center text-sm pr-16">
            <button className="hover:-text-brand1">Fazer Login</button>
            <button className="hover:-text-brand1 -border-grey-3 border rounded font-bold h-8 w-28">
              Cadastrar
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
