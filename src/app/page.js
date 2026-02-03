"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="relative min-h-screen bg-gray-50 font-sans">

      {/* 🔝 Sticky Search Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search site..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-black"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      {/* 🦸 Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white flex">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Sri Vasavi Electricals ⚡ Reliable Electrical Services
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Providing quality electrical solutions for homes, offices, and shops in Mudhole, Telangana.
              Installation, repairs, and maintenance done safely and efficiently.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="/services" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500">
                Our Services
              </Link>
              <Link href="/about" className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-900">
                About Us
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 rounded-3xl p-10 text-center text-6xl">
              ⚡🏠🔌
              <p className="text-lg mt-4 text-blue-100">Safe • Smart • Reliable</p>
            </div>
          </div>
        </div>
      </section>


      {/* ⭐ Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Choose Sri Vasavi Electricals?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            ["⚡", "Expert Electricians"],
            ["🛡️", "Safety First Work"],
            ["⏱️", "Quick Response"],
            ["💰", "Transparent Pricing"],
          ].map(([icon, title], i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 📊 Trust Stats */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">6+</h3>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">1000+</h3>
            <p className="text-gray-600 mt-2">Completed Works</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600 mt-2">Emergency Support</p>
          </div>
        </div>
      </section>

      {/* 📍 Service Area */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Service Areas
        </h2>
        <p className="text-gray-600 mt-4">
          We proudly serve Mudhole, Nirmal, and nearby areas across Telangana,
          delivering reliable electrical solutions for homes, shops, and offices.
        </p>
      </section>

      {/* About Section (UNCHANGED CONTENT) */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            About Sri Vasavi Electricals
          </h2>
          <p className="text-gray-600">
            Founded by <span className="font-semibold">Vinay Kumar Deshmukh</span>, Sri Vasavi Electricals has been serving Mudhole, Nirmal, Telangana for over 6 years.
            We specialize in safe and reliable electrical installations, repairs, and maintenance for homes, shops, and offices.
          </p>
          <p className="text-gray-600">
            Our team ensures high-quality workmanship, fast service, and transparent pricing.
            From bulb replacements to complete wiring solutions, we provide trusted electrical services with safety and professionalism in mind.
          </p>
          <Link
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900">
        <h2 className="text-3xl font-bold">Need Electrical Service?</h2>
        <p className="mt-2 mb-6">
          Contact Sri Vasavi Electricals today and get reliable electrical solutions for your home or business.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/chatapp"
            className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition"
          >
            Chat with Us
          </Link>
          <a
            href="tel:9985227139"
            className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition"
          >
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}
