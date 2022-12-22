import logo from "../../image/Motors branco.png";
import angulo from "../../image/angle.png"
export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly md:justify-between -bg-grey-0 text-white h-52 md:h-32 ">
      <img className="md:pl-8 h-8" src={logo} alt="logo" />
      <p>© 2022 - Todos os direitos reservados.</p>
      <div className="md:pr-16">
        <button className="flex items-center justify-center -bg-grey-1 h-8 w-8 rounded-md">
        <img className="h-2" src={angulo} alt="logo" />
        </button>
      </div>
    </div>
  );
};
