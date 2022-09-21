import React, {useState, useEffect} from "react";
import {onAuthStateChanged, signInWithEmailAndPassword, AuthCheck} from 'firebase/auth';
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'

const SignInForm = () => {
  
  // const [registerEmail, setRegisterEmail] = useState('');
  // const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  
  const navigate = useNavigate();

  const {register, handleSubmit,formState:{errors}} = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  // const register = async ()=>{
  //   try {
  //     const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
  //     console.log(user)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  const signIn = () =>{
    try {
      handleSubmit()
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(()=>{
        setSuccessMessage('Successfully Log in')
        console.log(user)
        setTimeout(() => {
          setLoginEmail('')
          setLoginPassword('')
          navigate('/admin-dashboard')
          onAuthStateChanged(auth)
        }, 2000)
      }
      ).catch((error) =>{
        setErrorMessage(error.message)
      })
      
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <React.Fragment>
      <div className="bg-blue-100 grid h-screen place-items-center">
        <div className="block p-6 rounded-lg shadow-xl bg-white w-3/4">
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <div>
                  {successMessage && (
                    <div
                      class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                      role="alert"
                    >
                      <div class="flex">
                        <div class="py-1">
                          <svg
                            class="fill-current h-6 w-6 text-teal-500 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                          </svg>
                        </div>
                        <div>
                          <p class="font-bold">
                            {successMessage}
                          </p>
                          
                        </div>
                      </div>
                    </div>
                  )}

                  {errorMessage && (
                   <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                   <strong class="font-bold">{errorMessage}</strong>
                  
                   <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                     <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                   </span>
                 </div>
                  )}
                </div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <form
                className="mt-8 space-y-6"
                onSubmit={handleSubmit(signIn)}
              >
                {errors.email?.message && (
                  <div
                    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong class="font-bold">{errors.email.message}</strong>
                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        class="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                )}
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label for="email-address" className="sr-only">
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
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                      onChange={(e) => {
                        setLoginEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label for="password" className="sr-only">
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
                        <div
                          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                          role="alert"
                        >
                          <strong class="font-bold">
                            {errors.password.message}
                          </strong>
                          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg
                              class="fill-current h-6 w-6 text-red-500"
                              role="button"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <title>Close</title>
                              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                            </svg>
                          </span>
                        </div>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
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

