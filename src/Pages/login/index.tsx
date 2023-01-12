import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import * as yup from "yup";
import { api } from "../../services/api";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { ModalContext } from "../../Providers/modal";

export const Login = () => {
  const { setUser, setAddress, setTokenAndId } = useContext(UserContext);

  const { setTypeObject, OpenAndCloseModal } = useContext(ModalContext);

  const navigate = useNavigate();

  const schemaForm = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Email é um campo obrigatório"),
    password: yup.string().required("Senha é um campo obrigatório"),
  });

  function onHandleSubmit(data: FieldValues) {
    api
      .post("/users/login", data)
      .then((res) => {
        api
          .get(`/address/${res.data.id}/`, {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          })
          .then((res) => {
            setAddress(res.data);
            sessionStorage.setItem("@Address", JSON.stringify(res.data));
          })
          .catch((err) => err);
        api
          .get(`/users/${res.data.id}/`)
          .then((res) => {
            setUser(res.data);
            sessionStorage.setItem("@User", JSON.stringify(res.data));
          })
          .catch((err) => err);
        setTimeout(() => {
          setTokenAndId({ token: res.data.token, id: res.data.id });
          sessionStorage.setItem("@UserId", res.data.id);
          sessionStorage.setItem("@Token", res.data.token);
          navigate("/");
        }, 100);
      })
      .catch((err) => {
        OpenAndCloseModal();

        setTypeObject({
          type: "Error",
          obj: { any: err.response.data.message },
        });
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaForm) });
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center w-full h-[72.7vh] -bg-grey-8 ">
        <section className="w-72 h-fit md:w-[25.75rem] -bg-grey-10 rounded flex flex-col items-center py-11 mt-[1.25rem] mb-16 md:mb-2">
          <div className="flex flex-col gap-8">
            <h1 className="font-lexend font-medium text-2xl text-black">
              Login
            </h1>
            <form
              className="flex flex-col"
              onSubmit={handleSubmit(onHandleSubmit)}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="-text-grey-1 font-medium font-inter text-sm">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Digitar email"
                    className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3 pl-3"
                    {...register("email")}
                  />
                  <span className="error">
                    {errors.email?.message as string}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="-text-grey-1 font-medium font-inter text-sm">
                    Senha
                  </label>
                  <input
                    type="password"
                    placeholder="Digitar senha"
                    className="h-12 border-2 rounded -border-grey-7 placeholder:-text-grey-3 pl-3"
                    {...register("password")}
                  />
                  <span className="error">
                    {errors.password?.message as string}
                  </span>
                </div>
              </div>
              <button
                className="mt-2 mb-5 self-end"
                onClick={() => navigate("/forgot-password")}
              >
                Esqueci minha senha
              </button>
              <div className="flex flex-col gap-6">
                <button className="-bg-brand1 h-12 border-2 rounded -border-brand1 -text-white-fixed font-semibold font-inter">
                  Entrar
                </button>
                <span className="-text-grey-2 text-sm font-inter self-center">
                  Ainda não possui conta?
                </span>
                <button
                  onClick={() => navigate("/register")}
                  className="h-12 border-2 rounded -border-grey-4 -text-grey-0 font-semibold font-inter"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
