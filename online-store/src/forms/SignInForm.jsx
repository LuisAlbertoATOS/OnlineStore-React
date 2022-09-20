import React, {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { auth } from "../firebase/Firebase";
import { useFormAction, useNavigate } from "react-router-dom";


const SignInForm = () => {
  
  // const [registerEmail, setRegisterEmail] = useState('');
  // const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
  })


  // const register = async ()=>{
  //   try {
  //     const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
  //     console.log(user)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  const handleSubmit = (e) =>{
    try {
      e.preventDefault();
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(()=>{
        setSuccessMessage('Successfully Log in')
        console.log(user)
        setTimeout(() => {
          setLoginEmail('')
          setLoginPassword('')
          navigate('/home')
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
                {successMessage&&
                <>
                  <div className=''>
                    {successMessage}
                  </div>
                </>}

                {errorMessage&&
                <>
                  <div className=''>
                    {errorMessage}
                  </div>
                </>
                }
                </div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" value="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label for="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
             
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                      onChange={(e)=>{setLoginEmail(e.target.value)}}

                    />
                  </div>
                  <div>
                    <label for="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                 
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                      onChange={(e)=>{setLoginPassword(e.target.value)}}
                    />
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
