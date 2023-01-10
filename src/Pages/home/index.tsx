import { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import Auction from "../../components/cards/auction/index";
import Cards, { IImage } from "../../components/cards/vehicles/index";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { motion } from "framer-motion";
import { ProductContext } from "../../Providers/product";


export interface IProducts {
  id: string;
  image: IImage[];
  name: string;
  description: string;
  user_mokado: string;
  km: number;
  year: number;
  price: string;
  type?: string;
}
export const Home = () => {
  const { response } = useContext(ProductContext);
  
  const carousel:any = useRef(null);

  const [widthCar, setWidthCar] = useState(0)
  const [widthMotorcycle, setWidthMotorcycle] = useState(0)

  useEffect(()=>{
    setWidthCar(carousel.current!.scrollWidth - carousel.current?.offsetWidth)
  },[response])

  useEffect(()=>{
    setWidthMotorcycle(carousel.current!.scrollWidth - carousel.current?.offsetWidth)
  },[response])


  

  return (
    <>
      <Header user={{ name: "string", img: "" }} />
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

      <div className="flex overflow-x-hidden mx-4 flex-col ml-6 select-none">
        <h1 className="py-8 font-bold text-lg font-lexend ml-10 mt-20">Carros</h1>
        <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{right:0, left:-widthCar}} 
        className="flex mx-4" id="carro">
          {response?.map((products: IProducts) => {
            if (products.type === "Carro") {
              return <Cards products={products} />;
            }
          })}
        </motion.div>
      </div>
      <div className="flex overflow-x-hidden mx-4 flex-col ml-6 mb-16">
        <h1 className="py-8 font-bold text-lg font-lexend ml-10 mt-20">Motos</h1>
        <motion.div

        ref={carousel}
        drag="x"
        dragConstraints={{right:0, left:-widthMotorcycle}}
        className="flex mx-4" id="moto">
          {response?.map((products: IProducts) => {
            if (products.type === "Moto") {
              return (<Cards products={products} />
              )
            }
          })}

        </motion.div>

      </div>

      <Footer />

    </>
  );
};
