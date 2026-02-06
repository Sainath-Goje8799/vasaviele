"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

 const navLinkStyle =
  "relative px-5 py-2 rounded-full text-slate-800 font-medium transition-all duration-300 hover:bg-amber-100 hover:text-amber-700";

const fancyBtn =
  "relative px-5 py-2 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-pink-500">
          <Image
            src="/logo/logo.png"
            alt="Sri Vasavi Electricals Logo"
            width={50}
            height={50}
            quality={100}
            className="object-contain"
            priority
          />
          Sri Vasavi Electricals ⚡
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <Link href="/" className={navLinkStyle}>Home</Link>
          <Link href="/services" className={navLinkStyle}>Services</Link>
          <Link href="/about" className={navLinkStyle}>About Us</Link>
           <a
            className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-pink-100 transition"
            href="https://wa.me/919985227139"
            target="_blank"
            
          >
          Chat
          </a>

          {/* <Link href="/login" className={`${fancyBtn} text-blue-600 border border-blue-500 text-center`}>
              Login
            </Link>

            <Link href="/signup" className={`${fancyBtn} bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center`}>
              Sign Up
            </Link> */}

            <a href="tel:9985227139" className={`${fancyBtn} bg-gradient-to-r from-pink-500 to-rose-500 text-white text-center`}>
              Call Now
            </a>


        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 gap-2">

            <Link onClick={() => setOpen(false)} href="/" className={navLinkStyle}>Home</Link>
            <Link onClick={() => setOpen(false)} href="/services" className={navLinkStyle}>Services</Link>
            <Link onClick={() => setOpen(false)} href="/about" className={navLinkStyle}>About Us</Link>
          <a
            href="https://wa.me/919985227139"
            target="_blank"
            
          >
          Chat
          </a>

            {/* <Link onClick={() => setOpen(false)} href="/chatapp" className={navLinkStyle}>Chat</Link> */}
{/* 
            <Link
              onClick={() => setOpen(false)}
              href="/login"
              className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 text-center"
            >
              Login
            </Link>

            <Link
              onClick={() => setOpen(false)}
              href="/signup"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-center"
            >
              Sign Up
            </Link> */}

            <a
              href="tel:9985227139"
              className="px-4 py-2 rounded-lg border border-pink-400 text-pink-600 text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
