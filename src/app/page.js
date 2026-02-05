"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="relative min-h-screen bg-rose-50 font-sans">

      
      {/* 🦸 Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Sri Vasavi Electricals ⚡
            </h1>
            <p className="mt-6 text-lg text-pink-100">
              Reliable electrical services for homes, shops, and offices in
              Mudhole & Nirmal. Safe work. Fast service. Honest pricing.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/services"
                className="bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-100 transition"
              >
                Our Services
              </Link>
              <Link
                href="/about"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-pink-600 transition"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/20 rounded-3xl p-12 text-center text-6xl backdrop-blur">
              ⚡🏠🔌
              <p className="text-lg mt-4 text-pink-100">
                Safe • Smart • Reliable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center text-slate-800">
          Why Choose Sri Vasavi Electricals?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {[
            ["⚡", "Expert Electricians"],
            ["🛡️", "Safety First Work"],
            ["⏱️", "Quick Response"],
            ["💰", "Transparent Pricing"],
          ].map(([icon, title], i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-4 font-semibold text-lg text-slate-700">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 📊 Trust Stats */}
      <section className="bg-gradient-to-r from-rose-100 to-pink-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            ["6+", "Years of Experience"],
            ["1000+", "Completed Works"],
            ["24/7", "Emergency Support"],
          ].map(([num, label], i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-4xl font-bold text-pink-600">{num}</h3>
              <p className="text-slate-600 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📍 Service Area */}
      <section className="max-w-5xl mx-auto py-24 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-slate-800">
          Service Areas
        </h2>
        <p className="text-slate-600 mt-4">
          Serving Mudhole, Nirmal, and nearby Telangana areas with dependable
          electrical solutions.
        </p>
      </section>

      {/* About Section */}
      <section className="bg-rose-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-800">
            About Sri Vasavi Electricals
          </h2>
          <p className="text-slate-600">
            Founded by <span className="font-semibold">Vinay Kumar Deshmukh</span>,
            serving for over 6 years with safe, reliable electrical solutions.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-pink-500 to-purple-600 text-white">
        <h2 className="text-3xl font-bold">Need Electrical Service?</h2>
        <p className="mt-3 mb-8 text-pink-100">
          Call or chat with Sri Vasavi Electricals for fast and trusted service.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/chatapp"
            className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-pink-100 transition"
          >
            Chat with Us
          </Link>
         <a
        href="tel:9985227139"
         className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-pink-100 transition"
      >
        Call Now
      </a>

        </div>
      </section>
    </main>
  );
}
