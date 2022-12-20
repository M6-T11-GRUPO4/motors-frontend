import riscos from "../../image/risco.png";
import image from "../../image/NameShop.png";
import { useState } from "react";

interface IUser {
  name: string;
  img: string;
}

interface IUserProp {
  user: IUser;
}

export const Header = ({ user }: IUserProp) => {

  const [boolMobile, setBoolMobile] = useState(false);
  const [boolPerfile, setBoolPerfile] = useState(false);
  const logged = true;
  console.log(boolMobile);

  return (
    <header className="flex justify-between h-20">
      <div className="flex flex-row items-center space-x-1 font-bold ">
        <img src={image} alt="img" className="pl-8 h-8" />
      </div>

      <div className="flex items-center pr-4 sm:hidden">
        <div className="relative ">
          <button
            className=" px-3 py-1"
            onClick={() => setBoolMobile(!boolMobile)}
          >
            <img src={riscos} alt="img" className="w-5 h-5" />
          </button>
          <nav
            className={
              boolMobile
                ? "static hidden "
                : "absolute -right-4 top-12 h-64 w-screen space-y-6 -bg-grey-9"
            }
          >
            {/* <nav className="absoluteNave  md:flex flex-col md:flex-row -bg-grey-6"> */}
            <ul className="flex flex-col items-start px-8 space-y-8 mt-10 font-inter">
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
                className="relative flex gap-x-2 items-center justify-center pr-4"
                onClick={() => {setBoolPerfile(!boolPerfile)}}
              >
                <div className="flex items-center justify-center -bg-brand1 rounded-2xl text-white w-8 h-8 ">
                  {"GP"}
                </div>
                <p>{"Gabriel Pereira"}</p>
                <ul
                  className={
                    boolPerfile
                      ? "absolute top-14 w-44 flex flex-col space-y-4 pl-2 h-32 "
                      : "static hidden"
                  }
                >
                  <li>
                    <button className="hover:-text-brand1">Editar Perfil</button>
                  </li>
                  <li>
                    <button className="hover:-text-brand1">Editar Endereço</button>
                  </li>
                  <li>
                    <button className="hover:-text-brand1">Minha Compras</button>
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

                <ul className="absolute flex flex-col ">
                  <li>Editar Perfil</li>
                  <li>Editar Endereço</li>
                  <li>Minha Compras</li>
                  <li>Sair</li>
                </ul>
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
                  ? "absolute top-14 w-44 flex flex-col -bg-grey-9 space-y-4 pl-4 py-2 h-40"
                  : "static hidden"
              }
            >
              <li>
                <button className="hover:-text-brand1">Editar Perfil</button>
              </li>
              <li>
                <button className="hover:-text-brand1">Editar Endereço</button>
              </li>
              <li>
                <button className="hover:-text-brand1">Minha Compras</button>
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
