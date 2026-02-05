"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-amber-50">

      {/* LEFT SIDE – BRAND */}
      <div className="hidden md:flex items-center px-16 bg-gradient-to-br from-pink-600 to-rose-500 text-white">
        <div className="max-w-md">

          {/* Logo */}
          <Image
            src="/logo/logo.png"
            alt="Sri Vasavi Electricals Logo"
            width={500}
            height={500}
            priority
            className="mb-6"
          />

          {/* Brand Name */}
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Sri Vasavi Electricals ⚡
          </h1>

          {/* Message */}
          <p className="text-pink-100 text-lg leading-relaxed honoring-6">
            Trusted electrical services for your home and business.
            <br />
            Log in to manage your requests and stay connected with us.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE – LOGIN FORM */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Welcome👋
          </h2>
          <p className="text-slate-500 mb-8">
            Enter your credentials to continue
          </p>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-200">
            Login
          </button>

          {/* Footer */}
          <p className="text-sm text-slate-500 mt-6 text-center">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-pink-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
