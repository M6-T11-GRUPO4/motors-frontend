import Cards from "../../components/cards/vehicles";
import CreateVehicle from "../../components/create-vehicle";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export const Home = () => {
  return (
    <>
      <Header user={{ name: "string", img: "" }} />
      <section className="flex flex-col items-center w-screen h-[34rem] md:h-96 text-center justify-center space-y-16 -bg-brand2 font-inter -text-grey-10 ">
        <h2 className="text-4xl w-12/12 md:w-7/12 font-bold">
          Velocidade e experiência em um lugar feito para você
        </h2>
        <h4 className="text-sm w-64 md:w-96">
          Um ambiente feito para você explorar o seu melhor
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-x-5 sm:space-y-0 w-80">
          <button className=" -border-grey-10 border w-80 sm:w-5/12 h-10 rounded">
            Carros
          </button>
          <button className=" -border-grey-10 border w-80 sm:w-5/12 h-10 rounded">
            Motos
          </button>
        </div>
      </section>
      <Cards />
      <Footer />
      <CreateVehicle />
    </>
  );
};
