import { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div className="font-Whitney">
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              class="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            ></img>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="" method="">
              <div>
                <label class="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div class="mt-2">
                  <input
                    id=""
                    name=""
                    type=""
                    autocomplete="email"
                    placeholder=" "
                    required
                    onChange={(e) =>
                      setUser({
                        name: e.target.value,
                        email: "newemail@gmail.com",
                      })
                    }
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></input>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    class="block text-sm font-medium leading-6 text-gray-900 "
                    placeholder=" Password"
                  >
                    Password
                  </label>
                  <div class="text-sm">
                    <a
                      href="/#"
                      class="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></input>
                </div>
              </div>

              <div>
                <Link to="/">
                  <button
                    //   value={user.name}

                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    type="submit"
                    href="/"
                    //   onChange={(e) =>
                    //     setUser({
                    //       name: e.target.value,
                    //       email: "newemail@gmail.com",
                    //     })
                    //   }
                  >
                    Sign in
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
