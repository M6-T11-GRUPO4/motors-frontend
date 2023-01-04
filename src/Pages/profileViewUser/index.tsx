import { useContext } from "react";
import Cards from "../../components/cards/vehicles";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ProfileCard } from "../../components/profileCard";
import { ProductContext } from "../../Providers/product";
import { IProducts } from "../home";

export const ProfileViewUser = () => {
  interface IUser {
    name: string;
    img: string;
    isSeller: boolean;
  }

  const user: IUser = {
    name: "Roberto Ferreira",
    img: "www.google.com",
    isSeller: false,
  };
  const { response } = useContext(ProductContext);

  return (
    <>
      <Header user={user} />

      <main className="h-full bg-blue-white-gradient flex flex-col select-none">
        <ProfileCard />
        <div className="flex overflow-x-auto mx-4 flex-col ml-6">
          <h1 className="py-8 font-bold text-lg font-lexend ml-10">Carros</h1>
          <div className="flex mx-4" id="carro">
            {response?.map((products: IProducts) => {
              if (products.type === "Carro") {
                return <Cards products={products} />;
              }
            })}
          </div>
        </div>
        <div className="flex overflow-x-auto mx-4 flex-col ml-6">
          <h1 className="py-8 font-bold text-lg font-lexend ml-10">Motos</h1>
          <div className="flex mx-4" id="moto">
            {response?.map((products: IProducts) => {
              if (products.type === "Moto") {
                return <Cards products={products} />;
              }
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
