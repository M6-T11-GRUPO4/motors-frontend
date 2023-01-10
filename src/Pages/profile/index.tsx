import { useContext, useRef, useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ProfileCard } from "../../components/cards/profileCard";
import { ProductContext } from "../../Providers/product";
import { IProducts } from "../home";

import Cards from "../../components/cards/vehicles";
import { motion } from "framer-motion";

export interface IUser {
  name: string;
  img: string;
  isSeller: boolean;
}

export const ProfileView = () => {
  const carousel: any = useRef(null);
  const [widthCar, setWidthCar] = useState<any>(0);
  const [widthMotorcycle, setWidthMotorcycle] = useState<any>(0);

  const user: IUser = {
    name: "Roberto Ferreira",
    img: "www.google.com",
    isSeller: false,
  };
  const { response } = useContext(ProductContext);

  useEffect(() => {
    setWidthCar(carousel.current!.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  useEffect(() => {
    setWidthMotorcycle(
      carousel.current!.scrollWidth - carousel.current?.offsetWidth
    );
  }, []);

  return (
    <>
      <Header user={user} />
      <main className="h-full bg-blue-white-gradient flex flex-col select-none">
        <ProfileCard user={user} />

        <div className="flex overflow-x-hidden mx-4 flex-col ml-6 select-none">
          <h1 className="py-8 font-bold text-lg font-lexend ml-10">Carros</h1>
          <motion.div
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -widthCar }}
            className="flex mx-4"
            id="carro"
          >
            {response?.map(
              (products: IProducts) =>
                products.type === "Carro" && (
                  <Cards products={products} showIsActive={!user.isSeller} />
                )
            )}
          </motion.div>
        </div>
        <div className="flex overflow-x-hidden mx-4 flex-col ml-6 select-none">
          <h1 className="py-8 font-bold text-lg font-lexend ml-10">Motos</h1>
          <motion.div
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -widthMotorcycle }}
            className="flex mx-4"
            id="moto"
          >
            {response?.map(
              (products: IProducts) =>
                products.type === "Moto" && (
                  <Cards products={products} showIsActive={!user.isSeller} />
                )
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};
