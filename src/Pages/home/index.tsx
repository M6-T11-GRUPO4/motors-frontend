import { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import Auction from "../../components/cards/auction/index";
import Cards, { IImage } from "../../components/cards/vehicles/index";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { motion } from "framer-motion";
import { ProductContext } from "../../Providers/product";
import { IUser } from "../../Providers/user";

export interface IProducts {
  id: string;
  image: IImage[];
  name: string;
  description: string;
  userId: string;
  km: number;
  year: number;
  price: string;
  type?: string;
  user: IUser;
  is_active: boolean;
}

export const Home = () => {
  const { response } = useContext(ProductContext);

  const carousel = useRef<HTMLDivElement | null>(null);

  const [widthCar, setWidthCar] = useState(0);
  const [widthMotorcycle, setWidthMotorcycle] = useState(0);

  useEffect(() => {
    setWidthCar(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  }, [widthCar]);

  useEffect(() => {
    setWidthMotorcycle(
      carousel.current!.scrollWidth - carousel.current!.offsetWidth
    );
  }, [widthMotorcycle]);


  return (
    <>
      <Header />
      <section className="flex flex-col items-center w-screen h-[34rem] md:h-96 text-center justify-center space-y-16 -bg-brand2 font-inter -text-grey-10 select-none">
        <h2 className="text-4xl w-12/12 md:w-7/12 font-bold">
          Velocidade e experiência em um lugar feito para você
        </h2>
        <h4 className="text-sm w-64 md:w-96">
          Um ambiente feito para você explorar o seu melhor
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-x-5 sm:space-y-0 w-80">
          <button className="hover:-bg-grey-10 hover:text-gray-900 -border-grey-10 border w-80 sm:w-5/12 h-10 rounded">
            <Link
              to="carro"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="flex items-center justify-center w-full h-full"
            >
              Carros
            </Link>
          </button>
          <button className="hover:-bg-grey-10 hover:text-gray-900 -border-grey-10 border w-80 sm:w-5/12 h-10 rounded">
            <Link
              to="moto"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="flex items-center justify-center w-full h-full"
            >
              Motos
            </Link>
          </button>
        </div>
      </section>
      <Auction />

      <div className="flex overflow-x-hidden flex-col select-none">
        <h1 className="py-8 font-bold text-lg font-lexend ml-10 mt-20">
          Carros
        </h1>
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: -widthCar }}
          className="flex mx-4"
          id="carro"
        >
          {response?.map((products: IProducts) => {
            if (products.type === "Carro" && products.is_active) {
              return <Cards key={products.id} products={products} />;
            }
          })}
        </motion.div>
      </div>
      {!response ? (
        <p className="flex justify-center">Ainda não há carros a exibir</p>
      ) : (
        ""
      )}
      <div className="flex overflow-x-hidden flex-col select-none">
        <h1 className="py-8 font-bold text-lg font-lexend ml-10 mt-20">
          Motos
        </h1>
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: -widthMotorcycle }}
          className="flex mx-4"
          id="moto"
        >
          {response?.map((products: IProducts) => {
            if (products.type === "Moto" && products.is_active) {
              return <Cards key={products.id} products={products} />;
            }
          })}
        </motion.div>
        {!response ? (
          <p className="flex justify-center">Ainda não há motos a exibir</p>
        ) : (
          ""
        )}
      </div>

      <Footer />
    </>
  );
};
