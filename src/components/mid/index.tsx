import carro from "../../image/carro2.png";
import { useNavigate } from "react-router-dom";
export const Mid = () => {
  const arrCarros: Array<number> = [1, 2, 3, 4, 5, 6];
  const navigate = useNavigate();
  return (
    <section className="littleBackgroundImage md:bigBackgroundImage  flex flex-col items-center justify-center pt-10 -bg-brand2 font-inter">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:w-[63rem] md:space-x-7">
        <div className="flex flex-col w-96 md:w-[36rem] space-y-3 items-center">
          <div className="-bg-grey-10 h-72 w-96 md:w-[36rem] flex items-center justify-center rounded-sm">
            <img className="h-48" src={carro} alt="corro1" />
          </div>
          <div className="-bg-grey-10 w-96 md:w-[36rem] p-8 space-y-16 rounded-sm">
            <div className="flex flex-col space-y-10 ">
              <p className="font-bold w-64 md:w-[32rem]">
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
              </p>
              <div className="flex flex-col h-16 md:flex-row justify-between  font-bold">
                <div className="flex justify-around md:justify-between text-xs w-32 -text-brand2">
                  <div>2013</div>
                  <div>{0} KM</div>
                </div>
                <div>R$ {"00.000,00"}</div>
              </div>
              <button className=" w-32 h-10 rounded-md -bg-brand2 -text-grey-10">
                Comprar
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <h3 className="font-bold text-lg">Descrição</h3>
              <span className="w-72 md:w-auto text-sm font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[24rem] space-y-5">
          <div className=" -bg-grey-10 flex flex-col justify-evenly h-[19rem] p-8 rounded-sm">
            <h4 className="font-bold text-xl">Fotos</h4>
            <div className="flex flex-row items-center justify-center flex-wrap h-56 gap-2 gap-y-7">
              {arrCarros.map((e) => (
                <div className="w-26 h-26">
                  <img className="h-14" src={carro} alt="corro1" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center -bg-grey-10 space-y-7 p-7 rounded-sm">
            <div className="flex items-center justify-center rounded-full w-20 h-20 -bg-brand2 text-3xl -text-grey-10">
              GP
            </div>
            <h4 className="font-bold text-lg">Gabriel Pereira</h4>
            <div className="flex flex-col text-center w-80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </div>
            <button
              className="-bg-grey-0 h-10 w-56 text-white rounded"
              onClick={() => navigate("/")}
            >
              Ver todos anuncios
            </button>
          </div>
        </div>
      </div>
      <div>coments</div>
    </section>
  );
};
