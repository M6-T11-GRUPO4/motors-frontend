import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header user={{ name: "string", img: "" }} />
      <div className="flex flex-col justify-center items-center w-full h-[72.7vh] -bg-grey-8 ">
        <section className="w-72 h-fit md:w-[25.75rem] -bg-grey-10 rounded flex flex-col items-center py-11 mt-[1.25rem] mb-16 md:mb-2">
          <div className="flex flex-col gap-8">
            <h1 className="font-lexend font-medium text-2xl text-black">
              Login
            </h1>
            <form className="flex flex-col">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="-text-grey-1 font-medium font-inter text-sm">
                    Usuário
                  </label>
                  <input
                    type="text"
                    placeholder="Digitar usuário"
                    className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3 pl-3"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="-text-grey-1 font-medium font-inter text-sm">
                    Senha
                  </label>
                  <input
                    type="text"
                    placeholder="Digitar senha"
                    className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3 pl-3"
                  />
                </div>
              </div>
              <button className="mt-2 mb-5 self-end">
                Esqueci minha senha
              </button>
              <div className="flex flex-col gap-6">
                <button className="-bg-brand1 h-12 border-2 rounded -border-brand1 -text-white-fixed font-semibold font-inter">
                  Entrar
                </button>
                <span className="-text-grey-2 text-sm font-inter self-center">
                  Ainda não possui conta?
                </span>
                <button onClick={()=> navigate("/register")} className="h-12 border-2 rounded -border-grey-4 -text-grey-0 font-semibold font-inter">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
