import { async } from "@firebase/util";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
interface Inputs {
  email: string;
  password: string;
}
function Login() {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { signIn, signUp } = useAuth();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };
  return (
    <div
      className="relative flex h-screen w-screen flex-col bg-black md:items-center
      md:justify-center md:bg-transparent"
    >
      {/* <Head>
        <title>Login</title>
      </Head> */}
      <Image
        alt=""
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        style={{ objectFit: "cover" }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        width={150}
        height={150}
        className="cursor-pointer object-contain absolute left-4 top-4 md:left-10 md:top-10 "
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:min-w-[400px]"
      >
        <h1 className="text-4xl font-semibold">Sign in</h1>
        <div className="space-y-4 ">
          <label className="block">
            <input
              type="text"
              placeholder="email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[15px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="block">
            <input
              type="password"
              placeholder="password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[15px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(true)}
        >
          Sign in
        </button>
        <div>
          New to netflix?
          <button
            className="text-white hover:underline ml-2"
            onClick={() => setLogin(false)}
          >
            Sign up now{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
