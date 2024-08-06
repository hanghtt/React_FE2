import { useLocalStorage } from "../../../hook/useLocalStorage";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const signinSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(3)
    .required(),
  password: Joi.string().min(6).required(),
});

const Login = () => {
  const [, setUser] = useLocalStorage("user", {});
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (formData: { email: string; password: string }) => {
      const { data } = await axios.post(
        " http://localhost:3000/login",
        formData
      );
      return data;
    },
    onSuccess: (data) => {
      setUser(data);
      toast.success("Dang nhap thanh cong!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
    onError: (error) => {
      toast.error("Dang nhap that bai!");
      console.log(error);
    },
  });

  const onSubmit = (formData: { email: string; password: string }) => {
    mutate(formData);
  };

  return (
    <div>
      <div className="bg-[#D2E8CD]">
        <h1 className="text-[#505F4E] py-14 w-[80%]  mx-auto text-3xl font-normal font-['Baloo'] leading-tight text-center">
          Đăng nhập
        </h1>
      </div>
      <div className=" flex justify-center mb-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[60%]">
          <div className="grid gap-6 mb-6 md:grid-cols-2"></div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true, minLength: 3 })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="emailcuaban@company.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600">
            Bạn chưa có tài khoản?{" "}
              <Link to="/register" className="text-blue-500 underline">
                  Đăng ký
              </Link>
            </p>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className=" bg-[#298456] text-base h-[50px] w-auto px-[45px] font-semibold rounded-full text-white inline-flex items-center relative overflow-hidden hover:bg-[#4fcd9f] transition-all ease-in-out duration-300"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
