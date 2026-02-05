"use client";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-600 px-6">
      <div className="w-full max-w-xl bg-white/90 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/30">

        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-3">
          Create Your Account 🚀
        </h1>
        <p className="text-center text-slate-500 text-lg mb-10">
          Get started in less than a minute
        </p>

       <input
  type="text"
  placeholder="Full Name"
  className="w-full px-6 py-4 text-lg border border-slate-300 rounded-2xl
             placeholder:text-slate-400 placeholder:font-medium
             focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
/>

<input
  type="email"
  placeholder="Email Address"
  className="w-full px-6 py-4 text-lg border border-slate-300 rounded-2xl
             placeholder:text-slate-400 placeholder:font-medium
             focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
/>

<input
  type="password"
  placeholder="Password"
  className="w-full px-6 py-4 text-lg border border-slate-300 rounded-2xl
             placeholder:text-slate-400 placeholder:font-medium
             focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
/>

                <button className="group w-full mt-10 relative overflow-hidden rounded-2xl">
            <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 transition-all duration-300 group-hover:brightness-110" />
            <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
            <span className="relative block py-4 text-xl font-extrabold text-white tracking-wide">
                Create Account
            </span>
            </button>

        {/* Footer */}
        <p className="text-center text-slate-500 mt-8 text-base">
          Already have an account?{" "}
          <a href="/login" className="text-pink-600 font-bold hover:underline">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}
