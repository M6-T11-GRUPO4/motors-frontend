import Timer from "../../image/time.png";
import Seta from "../../image/seta.png";

const Auction = ():JSX.Element => {

    return(

        <div className="flex flex-col">
            <h1 className="py-8 font-bold text-lg font-lexend">Leilão</h1>
        <div>

        <div className="flex w-1/12">
        <img className="w-7" src={Timer} alt="relógio" />
        <p>01:58:00</p>
        </div>

        <p>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</p>
        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>

        <div>
            <div></div>
            <p>Diego Henrique</p>
        </div>

        <div>
            <p>2013</p>
            <p>0 km</p>
            <p>R$ 00.000,00</p>
        </div>

        </div>
        <div>
            <p>Acessar página do leilão</p>
            <img src={Seta} alt="leilão" />
        </div>

        </div>

    )
}

export default Auction