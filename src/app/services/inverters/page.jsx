"use client";

import Image from "next/image";
import { useState } from "react";

const inverters = [
  {
    name: "Home Inverter 1kVA",
    img: "/inverters/Home Inverter 1kVA.jpg",
    category: "Home",
    desc: "Reliable inverter for small home use.",
    details: [
      "Capacity: 1 kVA",
      "Pure sine wave output",
      "Battery backup support",
      "Energy efficient",
    ],
  },
  {
    name: "Home Inverter 2kVA",
    img: "/inverters/Home Inverter 2kVA.jpg",
    category: "Home",
    desc: "Ideal inverter for medium-sized homes.",
    details: [
      "Capacity: 2 kVA",
      "UPS and battery compatible",
      "Overload protection",
      "Low maintenance",
    ],
  },
  {
    name: "Commercial Inverter 5kVA",
    img: "/inverters/Commercial Inverter 5kVA.jpg",
    category: "Commercial",
    desc: "High-performance inverter for offices and shops.",
    details: [
      "Capacity: 5 kVA",
      "Supports multiple batteries",
      "LED display",
      "Overload & short circuit protection",
    ],
  },
  {
    name: "Industrial Inverter 10kVA",
    img: "/inverters/Industrial Inverter 10kVA.jpg",
    category: "Industrial",
    desc: "Heavy-duty inverter for factories and plants.",
    details: [
      "Capacity: 10 kVA",
      "Three-phase output",
      "High surge capacity",
      "Maintenance free",
    ],
  },
  {
    name: "Solar Hybrid Inverter 3kVA",
    img: "/inverters/Solar Hybrid Inverter 3kVA.jpg",
    category: "Solar",
    desc: "Hybrid inverter for solar-connected homes.",
    details: [
      "Capacity: 3 kVA",
      "Solar input support",
      "Battery & grid compatible",
      "Smart monitoring",
    ],
  },
  {
    name: "UPS Inverter 1kVA",
    img: "/inverters/UPS Inverter 1kVA.jpg",
    category: "UPS",
    desc: "Compact UPS inverter for essential appliances.",
    details: [
      "Capacity: 1 kVA",
      "Automatic voltage regulation",
      "Silent operation",
      "LED status indicators",
    ],
  },
  {
    name: "Industrial UPS Inverter 20kVA",
    img: "/inverters/Industrial UPS Inverter 20kVA.jpg",
    category: "Industrial",
    desc: "High-capacity UPS inverter for large industrial loads.",
    details: [
      "Capacity: 20 kVA",
      "Three-phase output",
      "Battery bank support",
      "Remote monitoring",
    ],
  },
];



export default function InvertersPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeInverter, setActiveInverter] = useState(null);

  const categories = ["All", "Home", "Commercial", "Industrial", "Solar", "UPS"];

  const filteredInverters =
    selectedCategory === "All"
      ? inverters
      : inverters.filter((inv) => inv.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        Inverters & Power Backup
      </h1>
      <p className="text-gray-600 mb-6">
        Premium inverters for uninterrupted power supply
      </p>

      {/* CATEGORY FILTER */}
      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition text-sm
              ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredInverters.map((inv, index) => (
          <div
            key={index}
            onClick={() => setActiveInverter(inv)}
            className="cursor-pointer bg-white border rounded-xl p-4 shadow-sm hover:shadow-xl transition"
          >
            <Image
              src={inv.img}
              alt={inv.name}
              width={220}
              height={160}
              className="mx-auto rounded"
            />
            <h3 className="text-lg font-semibold mt-3 text-gray-900">
              {inv.name}
            </h3>
            <p className="text-sm text-gray-600">{inv.desc}</p>
          </div>
        ))}
      </div>

      {/* 🔥 LUXURY FULL SCREEN MODAL */}
      {activeInverter && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg flex items-center justify-center px-4">
          <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setActiveInverter(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black text-white text-xl flex items-center justify-center hover:scale-110 transition"
            >
              ✕
            </button>

            {/* HEADER */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">
                Sri Vasavi Electricals ⚡
              </h2>
              <span className="text-white/90 text-sm font-semibold">
                Power Backup Solutions
              </span>
            </div>

            {/* CONTENT */}
            <div className="grid lg:grid-cols-2 gap-12 p-10">

              {/* IMAGE */}
              <div className="flex items-center justify-center">
                <div className="relative bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl p-10">
                  <Image
                    src={activeInverter.img}
                    alt={activeInverter.name}
                    width={420}
                    height={320}
                    className="rounded-xl"
                  />

                  <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Genuine Product
                  </span>
                </div>
              </div>

              {/* DETAILS */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {activeInverter.name}
                </h1>

                <p className="mt-3 text-gray-600">
                  {activeInverter.desc}
                </p>

                {/* FEATURES */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                    Key Features
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {(activeInverter.details || []).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-gray-50 border rounded-xl px-4 py-3 text-sm font-medium text-gray-800"
                      >
                        <span className="text-green-600">✔</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 p-6 bg-gray-50 border rounded-2xl flex flex-wrap gap-4 items-center justify-between">
                  <div className="text-sm text-gray-600">
                    📍 Available at Mudhole Store  
                    <br />
                    ⚡ Installation & battery support available
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="tel:9985227139"
                      className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
                    >
                      📞 Call
                    </a>

                    <a
                      href="https://wa.me/919985227139"
                      target="_blank"
                      className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

                <p className="mt-6 text-xs text-gray-500">
                  ✔ Trusted brands • ✔ Long backup • ✔ Service support
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
