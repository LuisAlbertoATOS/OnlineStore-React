import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Errors from "../components/Errors";
import SuccessTemplate from "../components/SuccessTemplate";

const SignInForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signIn = () => {
    try {
      handleSubmit();
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then(() => {
          setSuccessMessage("Successfully Log in");
          setTimeout(() => {
            setLoginEmail("");
            setLoginPassword("");
            navigate("/admin-dashboard");
          }, 2000);
        })
        .catch((error) => {
          if (error.message === "Firebase: Error (auth/user-not-found).") {
            setErrorMessage("User not found");
            setTimeout(() => {
              setErrorMessage("");
            }, 2000);
          }
          if (error.message === "Firebase: Error (auth/wrong-password).") {
            setErrorMessage("Wrong password");
            setTimeout(() => {
              setErrorMessage("");
            }, 2000);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      <div className="bg-blue-100 grid h-screen place-items-center">
        <div className="block p-6 rounded-lg shadow-xl bg-white w-3/4">
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <div>
                  {successMessage && (
                    <SuccessTemplate message={successMessage} />
                  )}

                  {errorMessage && <Errors message={errorMessage} />}
                </div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit(signIn)}>
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid address",
                        },
                      })}
                      type="email"
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                      onChange={(e) => {
                        setLoginEmail(e.target.value);
                      }}
                    />
                    {errors.email?.message && (
                      <Errors message={errors.email.message} />
                    )}
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Min length is 6",
                        },
                      })}
                      type="password"
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                      onChange={(e) => {
                        setLoginPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <p>
                      {errors.password?.message && (
                        <Errors message={errors.password.message} />
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      to={'#'}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignInForm;
