import React from "react";

const SigninSignupPage = () => {
  return (
    <div>
      <h1>Signin and Signup Page</h1>
      <div className="flex flex-col w-full items-center pt-10">
        <h1 className="uppercase font-bold text-4xl mb-5">create account</h1>

        {/* form  */}
        <div className="flex flex-col items- mt-5 w-full h-fit px-8 py-4 bg-lightblue-100 border rounded-3xl">
          <form className="mt-8">
            <div className="flex flex-col space-y-4 w-full">
              {/* Full name field 
                className="w-6 h-6 absolute ml-1"*/}
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 absolute ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  ></path>
                </svg>
                <input
                  className="px-10 py-4 bg-gray-100 text-gray-600 w-full truncate rounded-md"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                />
              </div>
              {/* username field */}
              <div className="flex items-center ">
                <svg
                  className="w-6 h-6 absolute ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                <input
                  className="px-10 py-4 bg-gray-100 text-gray-600 w-full truncate rounded-md"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
              </div>
              {/* email field */}
              <div className="flex items-center ">
                <svg
                  className="w-6 h-6 absolute ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <input
                  className="px-10 py-4 bg-gray-100 text-gray-600 w-full truncate rounded-md"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              {/* number field */}
              <div className="flex items-center ">
                <svg
                  className="w-6 h-6 absolute ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <input
                  className="px-10 py-4 bg-gray-100 text-gray-600 w-full truncate rounded-md"
                  type="text"
                  id="number"
                  name="number"
                  placeholder="Tele No."
                />
              </div>
              {/* password field */}
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 absolute ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
                <input
                  className="px-10 py-4 bg-gray-100 text-gray-600 w-full rounded-md truncate"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div className="flex justify-between text-sm">
                <div>
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="mr-1 text-indigo-500"
                    checked
                  />
                  <label for="remember" className="text-gray-100">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-green-400">
                  Forgot Password??
                </a>
              </div>
            </div>
            {/* sign in button */}
            <div className="flex justify-center text-white bg-green-400 w-20 py-3 mt-8 rounded-md text-sm">
              <input type="submit" value="Sign In" className=""></input>
            </div>
            {/* create using google */}
            <div className="flex flex-col space-y-8 w-full items-center">
              <p className="text-gray-100 items-center mt-20">
                Or create account using
              </p>
              <svg
                className=" text-red-600  w-14 h-14"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill=""
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z" />
              </svg>
            </div>
            {/* already have account */}
            <div className="flex flex-col w-full items-center">
              <div className="flex text-sm mt-40 mb-10">
                <p className="text-gray-100">Already have an account?</p>
                <a href="#" className="text-green-400 ml-4">
                  Sign In
                </a>
              </div>
            </div>
          </form>
          {/* <a href="#" className="mt-2 text-sm text-violet-00">
            Create account
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default SigninSignupPage;
