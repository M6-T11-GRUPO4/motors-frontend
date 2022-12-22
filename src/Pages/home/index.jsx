import Cards from "../../components/cards/vehicles";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Mid } from "../../components/mid";

export const Home = () => {
  return (
    <>
      <Header />
      <Mid/>
      <Cards />
      <Footer/>
    </>
  );
};