import React, { useEffect } from "react";
import Axios from "axios";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { login, reset } from "../../features/auth/authSlice";



const SigninPage = () => {
  
  //set the state to empty string
  const [formData, setFormData]=useState({
    email: '', password:''
  })

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user, isError, isSuccess, message}=useSelector(
    (state)=> state.auth
  )

    useEffect(()=>{
      if(isError){
        toast.error(message)
      }

      if(isSuccess){
        navigate('/dashboard')
      }

    },[user, isError,isSuccess,message, navigate])


  const {email,password}=formData
  
  const handleSubmit = async event => {
      event.preventDefault(); 
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    alert('Form Submitted')
    
    const userData={
      email,
      password
    }
    
    dispatch(login(userData))

  };

  const onChange  = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  return (
    <>
      <div className=" h-screen w-screen">
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md pb-4">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="/SignupFormPage"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow lg:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    //handleChange={handleChange}
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={onChange}
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

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
                {/* <Link to="/dashboard"> */}
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  
                    >Login
                  </button>
                {/* </Link>  */}
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SigninPage;
