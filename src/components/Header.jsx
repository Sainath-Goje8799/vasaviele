"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-pink-400">
        <Image
              src="/logo/logo.png"
              alt="Sri Vasavi Electricals Logo"
              width={60}
              height={60}
              quality={100}
              className="object-contain"
              priority
            />

  Sri Vasavi Electricals ⚡
</Link>


        {/* Navigation */}
        <nav className="hidden md:flex gap-6 font-medium">
        <Link
          href="/"
          className="px-4 py-2 rounded-lg text-slate-800 hover:bg-amber-100 hover:text-amber-700 transition"
        >
          Home
        </Link>

        <Link
          href="/services"
          className="px-4 py-2 rounded-lg text-slate-800 hover:bg-amber-100 hover:text-amber-700 transition"
        >
          Services
        </Link>

        <Link
          href="/about"
          className="px-4 py-2 rounded-lg text-slate-800 hover:bg-amber-100 hover:text-amber-700 transition"
        >
          About Us
        </Link>

        <Link
          href="/chatapp"
          className="px-4 py-2 rounded-lg bg-amber-400 text-white hover:bg--500 transition shadow-sm"
        >
          Chat
        </Link>
      </nav>


        {/* Call Button */}
        <a
        href="tel:9985227139"
        className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl border border-pink-300 hover:bg-pink-100 transition"
      >
        Call Now
      </a>

      </div>
    </header>
  );
}
