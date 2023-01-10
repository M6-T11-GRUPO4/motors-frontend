import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../Providers/product";
import { ModalContext } from "../../Providers/modal";

export const Dashboard = () => {
  const arrComent: Array<number> = [1, 2, 3];
  const { product } = useContext(ProductContext);
  const { CallBack } = useContext(ModalContext);
  const navigate = useNavigate();
  window.scrollTo(0,0)

  return (
    <>
      <Header user={{ name: "string", img: "" }} />
      <section className="littleBackgroundImage md:bigBackgroundImage flex flex-col mx-auto pt-10 -bg-brand2 items-center font-inter space-y-16 select-none">
        <div className="flex flex-col w-72 lg:w-[62rem] items-start space-y-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full md:space-x-7">
            <div className="flex flex-col w-80 md:w-[36rem] space-y-3 items-center">
              <div className="-bg-grey-10 h-72 w-80 md:w-[36rem] flex items-center justify-center rounded-sm">
                <img
                  className="h-36 md:h-48"
                  src={product?.image[0].url}
                  alt="corro1"
                  draggable={false}
                />
              </div>
              <div className="-bg-grey-10 w-80 md:w-[36rem] p-8 space-y-16 rounded-sm">
                <div className="flex flex-col space-y-10 ">
                  <p className="font-bold w-64 md:w-[32rem]">{product?.name}</p>
                  <div className="flex flex-col h-16 md:flex-row justify-between  font-bold">
                    <div className="flex justify-around md:justify-between text-xs w-32 -text-brand2">
                      <div>{product?.year}</div>
                      <div>{product?.km} KM</div>
                    </div>
                    <div>R$ {product?.price}</div>
                  </div>
                  <button className=" w-32 h-10 rounded-md -bg-brand2 -text-grey-10">
                    Comprar
                  </button>
                </div>
                <div className="flex flex-col space-y-5">
                  <h3 className="font-bold text-lg">Descrição</h3>
                  <span className="w-72 md:w-auto text-sm font-sans">
                    {product?.description}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-80 md:w-96 space-y-5">
              <div className=" -bg-grey-10 flex flex-col w-80 md:w-96 justify-evenly h-[20rem] md:p-8 rounded-sm">
                <h4 className="font-bold text-xl pl-3">Fotos</h4>
                <div className="flex flex-row items-center justify-center flex-wrap h-56 gap-2 gap-y-7">
                  {product?.image.map((e) => (
                    <div
                      className="w-26 h-26"
                      onClick={() => CallBack("Car", e.url)}
                    >
                      <img
                        className="h-14"
                        src={e.url}
                        alt="carro/moto"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center -bg-grey-10 w-80 md:w-96 space-y-7 p-3 md:p-8 rounded-sm">
                <div className="flex items-center justify-center rounded-full w-20 h-20 -bg-brand2 text-3xl -text-grey-10">
                  GP
                </div>
                <h4 className="font-bold text-lg">Gabriel Pereira</h4>
                <div className="flex flex-col text-center w-80">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
                <button
                  className="-bg-grey-0 h-10 w-56 text-white rounded"
                  onClick={() => navigate("/profile")}
                >
                  Ver todos anuncios
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 font-inter w-80 lg:w-[32rem] lg:pl-8">
            <h4 className="font-bold text-lg">Comentários</h4>
            {arrComent.map((e) => (
              <div>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row space-x-2 items-center">
                    <p className="flex items-center justify-center rounded-full w-8 h-8 -bg-brand2 text-md -text-grey-10">
                      GP
                    </p>
                    <p>Gabriel Pereira</p>
                    <p className="-text-grey-3"> * há 15 dias</p>
                  </div>
                  <div className="w-[17rem]  lg:w-[39rem] text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
