import Cards from "../../components/cards/vehicles";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ProfileCard } from "../../components/profileCard";

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

  return (
    <>
      <Header user={user} />

      <main className="h-full bg-blue-white-gradient flex flex-col">
        <ProfileCard />
        <Cards />
      </main>

      <Footer />
    </>
  );
};
