// File: app/login/page.tsx or pages/login.tsx

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Correctly using Link
// Make sure to install react-icons: npm install react-icons
import { FcGoogle } from 'react-icons/fc';
import { FaXTwitter } from 'react-icons/fa6';

const LoginPage: FC = () => {
  return (
    <div className="w-full grid lg:grid-cols-2">
      {/* ====== Left Column: Form ====== */}
      <div className="flex items-center justify-center p-8 sm:p-12">
        <div className="mx-auto w-full max-w-md">
          <p className="font-semibold text-indigo-600">Login</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-8">
            Welcome to Higher!
          </h1>
          
          {/* Social Logins */}
          <div className="space-y-4">
            <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
              <FcGoogle className="mr-3" size={20} />
              Continue with Google
            </button>
            <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
              <FaXTwitter className="mr-3" size={20} />
              Continue with Twitter
            </button>
          </div>

          {/* Separator */}
          <div className="flex items-center my-8">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 font-medium">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Email & Password Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform hover:scale-105"
              >
                Login
              </button>
            </div>
          </form>

          {/* Register Link (REPAIRED) */}
          <p className="text-center text-gray-600 mt-8">
            Don&#39;t have an account?{' '}
            <Link
              href="/register"
              className="font-semibold text-indigo-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>

      {/* ====== Right Column: Visual ====== */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-gray-50 p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/dots.svg')] bg-repeat opacity-5"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-gray-900">Login to your Account</h2>
          <p className="mt-2 text-gray-600">
            Powering teams and individuals from around the world.
          </p>
          <div className="mt-8">
            <Image
              src={"/assets/journey-2.svg"}
              alt="Dashboard preview"
              width={800}
              height={640}
              className="rounded-2xl shadow-2xl object-cover transform -rotate-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;