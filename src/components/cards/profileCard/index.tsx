import { IUser } from "../../../Pages/profile";


interface IUserProp {
  user: IUser;
}

export const ProfileCard = ({ user }: IUserProp) => {
  return (
    <section className="w-72 md:w-[40rem] lg:min-w-[58rem] -bg-grey-10 rounded flex flex-col gap-6 self-center py-10 px-6 mt-16">
      <div className="w-[6.5rem] h-[6.5rem] flex items-center justify-center -bg-brand1 rounded-full">
        <span className="text-white text-4xl font-medium">SL</span>
      </div>

      <div className="flex gap-2 whitespace-nowrap">
        <h1 className="-text-grey-1 text-xl font-lexend font-semibold">
          {user.name}
        </h1>

        <span className="-bg-brand4 rounded py-1 px-2 -text-brand1 text-sm font-inter font-medium">
          Anunciante
        </span>
      </div>

      <p className="-text-grey-2 font-inter ">
        {/* {user.description} */}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      {user.isSeller && (
        <button className="w-40 h-12 rounded border-2 -border-brand1 hover:-bg-brand4 -text-brand1 font-semibold font-inter">
          Criar anúncio
        </button>
      )}
    </section>
  );
};
