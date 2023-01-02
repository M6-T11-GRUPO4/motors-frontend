import Timer from "../../../image/time.png";
import Seta from "../../../image/seta.png";

const Auction = (): JSX.Element => {

  return (

    <div className="flex flex-col">
      <h1 className="py-8 font-bold text-lg font-lexend ml-16">Leilão</h1>
      <div className="bg-gradient-to-r -from-random13 -to-random14 w-3/6 p-7 ml-16">
        <div className="flex w-28 justify-between items-center rounded-3xl -bg-white-fixed font-lexend text-xs font-bold">
          <img className="w-7 mb-1" src={Timer} alt="relógio" />
          <p className="mr-5 text-sm">01:58:00</p>
        </div>

        <p className="font-lexend -text-grey-10 font-semibold text-base mt-10">Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</p>

        <p className="font-inter -text-grey-5 text-xs my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>

        <div className="flex my-6 items-center">
          <div className="w-6 h-6  -bg-brand3 rounded-xl justify-center -text-white-fixed font-inter text-xs items-center mr-2 flex">D</div>
          <p className="-text-white-fixed text-xs items-center">Diego Henrique</p>
        </div>

        <div className="flex justify-between">
          <div className="flex justify-between w-24">
            <p className="-bg-brand4 text-xs w-10 -text-brand1 rounded-sm flex items-center justify-center">2013</p>
            <p className="-bg-brand4 text-xs w-10 -text-brand1 rounded-sm flex items-center justify-center">0 km</p>
          </div>
          <p className="-text-white-fixed text-sm font-semibold font-lexend">R$ 00.000,00</p>
        </div>
      </div>

      <div className="-bg-brand1 flex w-3/6 justify-between items-center pl-5 p-2 cursor-pointer ml-16">
        <p className="-text-white-fixed">Acessar página do leilão</p>
        <img className="w-12" src={Seta} alt="leilão" />
      </div>

    </div>

    
  );
};

export default Auction;
