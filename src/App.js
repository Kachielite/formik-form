import React from 'react';

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-200 px-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-96 ">
      <h1 className="text-center text-2xl my-6 font-bold">Sign up!!</h1>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="first_name">
            First Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="Enter your first name" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="first_name">
            Last Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" placeholder="Enter your last name" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="first_name">
            Email Address
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter your email" />
        </div>
        <div className="flex items-center justify-between mt-10">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 All rights reserved.
      </p>
    </div>
  );
}

export default App;
