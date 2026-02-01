"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Sri Vasavi Electricals ⚡
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-blue-600 text-black">Home</Link>
          <Link href="/services" className="hover:text-blue-600 text-black">Services</Link>
          <Link href="/about" className="hover:text-blue-600 text-black">About Us</Link>
          <Link href="/chatapp" className="hover:text-blue-600 text-black">Chat</Link>
        </nav>

        {/* Call Button */}
        <a
          href="tel:9985227139"
          className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
