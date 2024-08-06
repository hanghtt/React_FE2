import { useLocalStorage } from "../../../hook/useLocalStorage";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(3)
    .required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

const Register = () => {
  const [, setUser] = useLocalStorage("user", {});
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (formData: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    }) => {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        formData
      );
      return data;
    },
    onSuccess: (data) => {
      setUser(data);
      toast.success("Đăng ký thành công!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    },
    onError: (error) => console.log(error),
  });
  const onSubmit = (formData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    mutate(formData);
  };

  return (
    <div>
      <div className="bg-[#D2E8CD]">
        <h1 className="text-[#505F4E] py-14 w-[80%]  mx-auto text-3xl font-normal font-['Baloo'] leading-tight text-center">
          Đăng ký
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
              Tên{" "}
            </label>
            <input
              type="text"
              id="email"
              {...register("name", { required: true, minLength: 3 })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tên của bạn"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}
          </div>

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

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nhập lại mật khẩu
            </label>
            <input
              type="password"
              id="password"
              {...register("confirmPassword", {
                required: true,
                minLength: 6,
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-600">
              Bạn đã có tài khoản?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Đăng nhập
              </Link>
            </p>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className=" bg-[#298456] text-base h-[50px] w-auto px-[45px] font-semibold rounded-full text-white inline-flex items-center relative overflow-hidden hover:bg-[#4fcd9f] transition-all ease-in-out duration-300"
            >
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
