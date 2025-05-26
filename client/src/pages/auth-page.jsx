import React, { useState } from 'react';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen flex font-sans">

      <div className="w-1/2 bg-gray-50 flex flex-col justify-center items-center px-10 py-10">
        
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-6 py-2 rounded ${activeTab === 'login' ? 'bg-white text-black font-semibold shadow' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`px-6 py-2 rounded ${activeTab === 'register' ? 'bg-white text-black font-semibold shadow' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          {activeTab === 'login' ? (
            <>
              <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
              <p className="text-gray-500 mb-6">Sign in to your BudgetWise account</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    placeholder="xterns"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-black transition duration-200"
                >
                  Sign In
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2">Create an account</h2>
              <p className="text-gray-500 mb-6">Get started with BudgetWise for free</p>
              <form className="space-y-4">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    placeholder="johndoe"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-black transition duration-200"
                >
                  Sign Up
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="w-1/2 bg-gray-900 text-white flex items-center justify-center px-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">BudgetWise</h1>
          <p className="text-lg text-gray-300">
            Your personal financial dashboard for smarter money management
          </p>
        </div>
      </div>
    </div>
  );
}
