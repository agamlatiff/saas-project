// File: app/register/page.tsx or pages/register.tsx

import type { FC } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGift, FiZap, FiCheckCircle } from 'react-icons/fi';

const RegisterPage: FC = () => {
  return (
    <div className=" w-full grid lg:grid-cols-2">
      {/* ====== Left Column: Form ====== */}
      <div className="flex items-center justify-center p-8 sm:p-12">
        <div className="mx-auto w-full max-w-md">
          <p className="font-semibold text-indigo-600">Sign Up</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-8">
            Get Started!
          </h1>
          
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
                placeholder="Create a strong password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform hover:scale-105"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Separator */}
          <div className="flex items-center my-8">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 font-medium">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

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

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-8">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-indigo-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* ====== Right Column: Visual ====== */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-indigo-50 p-12 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-indigo-200 rounded-full opacity-50"></div>
        <div className="absolute -bottom-24 -left-10 w-80 h-80 bg-indigo-200 rounded-full opacity-50"></div>
        
        <div className="relative z-10 w-full max-w-lg">
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-indigo-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-indigo-500 text-white rounded-full border-4 border-white shadow-lg">
                  <FiGift size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Your New Dashboard Awaits</h3>
                <p className="text-gray-600">Join teams around the world who use Higher to build amazing products.</p>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/80 rounded-lg border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                  <FiCheckCircle />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Powerful Features</p>
                  <p className="text-sm text-gray-500">Access a full suite of tools for success.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/80 rounded-lg border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  <FiZap />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Blazing Fast</p>
                  <p className="text-sm text-gray-500">A seamless and responsive experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;