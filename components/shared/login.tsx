import React from "react";
import { Input } from "../ui/input";

const Login = () => {
  return (
    <div>
      <section className="flex flex-col items-center ">
        <div className="w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" method="POST">
              <div>
                <label
                  form="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your full name
                </label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  className=" border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-white/10  dark:border-white/5 dark:placeholder-neutral-400 dark:text-neutral-300 dark:focus:ring-green-700 dark:focus:border-blue-700"
                  placeholder="Emelia Erickson"
                />
              </div>
              <div>
                <label
                  form="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  className=" border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-white/10  dark:border-white/5 dark:placeholder-neutral-400 dark:text-neutral-300 dark:focus:ring-green-700 dark:focus:border-blue-700"
                  placeholder="emelia_erickson24"
                />
              </div>
              <div>
                <label
                  form="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-white/10  dark:border-white/5 dark:placeholder-neutral-400 dark:text-neutral-300 dark:focus:ring-green-700 dark:focus:border-blue-700"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-800 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="/signin"
                >
                  Sign in here
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
