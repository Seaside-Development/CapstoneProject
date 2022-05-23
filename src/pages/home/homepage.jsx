/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div class="flex items-center w-full h-screen  bg-white">
        <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block pt-10">Barbados Connected...</span>
            <span class="block text-lg">
              Find anything you need from handyman to plumber, to auto mechanic{" "}
            </span>
          </h2>
          <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {" "}
                Hire a Pro{" "}
              </a>
            </div>
            <div class="ml-3 inline-flex">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                {" "}
                Join as a Pro{" "}
              </a>
            </div>
          </div>
          <div class="flex-1 px-2 flex justify-center pt-6">
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">
                Search
              </label>
              <div class="relative text-gray-400 focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  {/* <!-- Heroicon name: solid/search --> */}
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  class="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
