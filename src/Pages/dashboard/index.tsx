import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Providers/product";
import { ModalContext } from "../../Providers/modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api, apiPrivate } from "../../services/api";
import { UserContext } from "../../Providers/user";

interface IComment {
  comment: string;
}

export const Dashboard = () => {
  const [cellphone, setCellphone] = useState("");

  const formSchema = yup.object().shape({
    comment: yup.string().max(300),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const arrComent: Array<number> = [1, 2, 3];
  const [resComment, setResComment] = useState<IComment>();
  const { product } = useContext(ProductContext);
  const { CallBack } = useContext(ModalContext);
  const { twoLetters } = useContext(UserContext);
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  useEffect(() => {
    api
      .get("comments")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });

  const buttonclick = (data: object) => {
    apiPrivate
      .post("comments", data, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("@UserId")}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const getSeller = () => {
    api
      .get(`/users/${product?.userId}`)
      .then((res) => {
        sessionStorage.setItem("@ProfileUser", JSON.stringify(res.data));
      })
      .catch((err) => err);
    setTimeout(() => {
      navigate("/profile");
    }, 500);
  };

  api
    .get(`/vehicles/${product.id}`)
    .then((res) => {
      setCellphone(res.data.user.cellphone);
    })
    .catch((err) => console.error(err));

  return (
    <>
      <Header />
      <section className="littleBackgroundImage md:bigBackgroundImage flex flex-col mx-auto pt-10 -bg-brand2 items-center font-inter space-y-16 select-none">
        <div className="flex flex-col w-[22rem] lg:w-[62rem] items-start space-y-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full md:space-x-7">
            <div className="flex flex-col w-[22rem] md:w-[36rem] space-y-3 items-center">
              <div className="-bg-grey-10 h-[19rem] w-[22rem] md:w-[36rem] flex items-center justify-center rounded-sm">
                <img
                  className="h-36 md:h-48"
                  src={product?.image[0].url}
                  alt="corro1"
                  draggable={false}
                />
              </div>

              <div>
                <div className="-bg-grey-10 w-80 md:w-[36rem] p-8 rounded-sm">
                  <div className="flex flex-col">
                    <p className="font-bold w-64 md:w-[32rem]">
                      {product?.name}
                    </p>
                    <div className="flex flex-col h-16 items-baseline md:flex-row justify-between space-y-3 font-bold">
                      <div className="flex text-xs  -text-brand2 mt-10">
                        <div className="-bg-brand4 h-5 flex items-center justify-center p-3">
                          {product?.year}
                        </div>
                        <div className="-bg-brand4 h-5 flex flex-row items-center justify-center p-3 ml-2">
                          {product?.km} KM
                        </div>
                      </div>
                      <div>
                        {Number(product?.price).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col mt-5 -bg-grey-10 w-[22rem] md:w-[36rem] p-8 rounded md:h-44">
                      <h3 className="font-bold text-lg">Descrição</h3>
                      <span className="w-[100%] md:w-auto text-sm font-sans">
                        {product?.description}
                      </span>
                      <a
                        href={`https://wa.me/55${cellphone}?text=Tenho%20interesse%20em%20comprar%20seu%20carro`}
                        target={"blank"}
                        className="flex items-center justify-center w-40 h-10 rounded-md -bg-brand2 -text-grey-10 mt-5"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8 -bg-grey-10 w-80 md:w-[36rem] p-8 rounded">
                    <h3 className="font-bold text-lg">Descrição</h3>
                    <span className="w-[100%] md:w-auto text-sm font-sans">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-[22rem] md:w-96 space-y-5 mt-3 md:mt-0">
                <div className=" -bg-grey-10 flex flex-col w-[22rem] md:w-96 justify-evenly h-[20rem] md:p-8 rounded-sm md:mt-[10px] lg:mt-0">
                  <h4 className="font-bold text-xl pl-8 md:pl-0">Fotos</h4>
                  <div className="flex flex-row items-center justify-center flex-wrap h-56 gap-2 gap-y-7">
                    {product?.image.map(
                      (e) =>
                        e.url !== "" && (
                          <div
                            className="flex items-center justify-center w-24 h-24"
                            onClick={() => CallBack("Car", e.url)}
                          >
                            <img
                              className="h-14 transition-property: hover:border-2 -border-random4 transition-duration: 200ms ease-in-out delay-200 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer"
                              src={e.url}
                              alt="carro/moto"
                              draggable={false}
                            />
                          </div>
                        )
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center -bg-grey-10 w-[22rem] md:w-96 space-y-7 p-3 md:p-8 rounded-sm">
                  <div className="flex items-center justify-center rounded-full w-20 h-20 -bg-brand2 text-3xl -text-grey-10">
                    {twoLetters(product?.user.name)}
                  </div>
                  <h4 className="font-bold text-lg">{product?.user.name}</h4>
                  <div className="flex flex-col text-center w-80">
                    {product?.user.description}
                  </div>
                  <button
                    className="-bg-grey-0 h-10 w-56 text-white rounded"
                    onClick={() => getSeller()}
                  >
                    Ver todos anúncios
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 font-inter w-80 lg:w-[36rem] lg:pl-8 -bg-grey-10 p-8">
            <h4 className="font-bold text-lg">Comentários</h4>
            {arrComent.map((e) => (
              <div>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row space-x-2 items-center">
                    <p className="flex items-center justify-center rounded-full w-8 h-8 -bg-brand2 text-md -text-grey-10">
                      GP
                    </p>
                    <p>Gabriel Pereira</p>
                    <p className="-text-grey-3"> * há 15 dias</p>
                  </div>
                  <div className="w-[100%] text-sm">{resComment?.comment}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center py-8 -bg-grey-10 w-80 md:w-[320] rounded p-8 lg:w-[36rem]">
            <div className="flex items-center">
              <div className="flex items-center justify-center rounded-full w-8 h-8 -bg-brand2 -text-grey-10 mr-3">
                GP
              </div>
              <span>Gabriel Pereira</span>
            </div>

            <form
              onSubmit={handleSubmit(buttonclick)}
              className=" flex flex-col mt-4"
            >
              <textarea
                {...register("comment")}
                name="comment"
                className="w-[100%] h-[80px] p-[15px] -bg-grey-7 text-xs border-solid rounded-sm"
                placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              ></textarea>
              <div className="w-[100%] flex md:flex-row-reverse relative md:right-2 my-3 md:bottom-[50px]">
                <button
                  type="submit"
                  className="-bg-brand1 -text-white-fixed rounded font-inter w-24 h-[30px] text-sm"
                >
                  Comentar
                </button>
              </div>
            </form>

            <div className="flex flex-wrap w-[80%]">
              <span className="flex items-center -bg-grey-7 p-2 text-xs font-inter rounded-2xl mr-2 -text-grey-3 h-[25px] my-2">
                gostei muito!
              </span>
              <span className="flex items-center -bg-grey-7 p-2 text-xs font-inter rounded-2xl mr-2 -text-grey-3 h-[25px] my-2">
                incrível!
              </span>
              <span className="flex items-center -bg-grey-7 p-2 text-xs font-inter rounded-2xl mr-2 -text-grey-3 h-[25px] my-2">
                Recomendaria para um amigo!
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
