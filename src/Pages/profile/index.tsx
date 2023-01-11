import { useContext, useRef, useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ProfileCard } from "../../components/cards/profileCard";
import { ProductContext } from "../../Providers/product";
import { IProducts } from "../home";
import CreateVehicle from "../../components/modais/createVehicle";
import Cards from "../../components/cards/vehicles";
import { motion } from "framer-motion";
import { IUser, UserContext } from "../../Providers/user";

export const ProfileView = () => {
  const carousel: any = useRef(null);

  const [widthCar, setWidthCar] = useState<any>(0);

  const [widthMotorcycle, setWidthMotorcycle] = useState<any>(0);

  const [isAdOwner, setIsAdOwner] = useState(false);

  const seller: IUser = JSON.parse(
    sessionStorage.getItem("@ProfileUser") as string
  );

  const { user } = useContext(UserContext);

  const { response } = useContext(ProductContext);

  useEffect(() => {
    if (user) {
      setIsAdOwner(user?.cpf === seller.cpf);
    } else {
      setIsAdOwner(false);
    }
  }, [user, seller]);

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
      <Header />
      <main className="h-full bg-blue-white-gradient flex flex-col select-none">
        <ProfileCard seller={seller} isAdOwner={isAdOwner} />

        <div className="flex overflow-x-hidden mx-4 flex-col ml-6 select-none">
          <h1 className="py-8 font-bold text-lg font-lexend ml-10">Carros</h1>
          <motion.div
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -widthCar }}
            className="flex mx-4"
            id="carro"
          >
            {response?.map((products: IProducts) => {
              if (
                products.type === "Carro" &&
                products.user.cpf === seller.cpf
              ) {
                return (
                  <Cards
                    key={products.id}
                    products={products}
                    isAdOwner={isAdOwner}
                    showIsActive={true}
                  />
                );
              }
            })}
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
            {response?.map((products: IProducts) => {
              if (
                products.type === "Moto" &&
                products.user.cpf === seller.cpf
              ) {
                return (
                  <Cards
                    key={products.id}
                    products={products}
                    isAdOwner={isAdOwner}
                    showIsActive={true}
                  />
                );
              }
            })}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};
