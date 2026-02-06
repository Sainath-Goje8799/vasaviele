"use client";

import Image from "next/image";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const motorItems = [
  {
    name: "Ceiling Fan Motor",
    price: "₹1,800",
    img: "/motors/Ceiling Fan Motor.jpg",
    category: "Fan Motors",
    desc: "High-speed copper winding ceiling fan motor.",
    tag: "ISI Approved",
    features: [
      "High-speed copper winding",
      "Energy-efficient",
      "Low vibration & noise",
      "Durable & long-lasting",
    ],
    specs: [
      "Voltage: 220V",
      "Power: 60W",
      "RPM: 1400",
      "Warranty: 2 Years",
    ],
  },
  {
    name: "Exhaust Fan Motor",
    price: "₹950",
    img: "/motors/Exhaust Fan Motor.jpg",
    category: "Fan Motors",
    desc: "Low-noise exhaust fan motor.",
    tag: "ISI Certified",
    features: [
      "Low-noise operation",
      "High airflow efficiency",
      "Durable bearing",
      "Compact design",
    ],
    specs: [
      "Voltage: 220V",
      "Power: 40W",
      "RPM: 1200",
      "Warranty: 1 Year",
    ],
  },
  {
    name: "Cooler Motor",
    price: "₹1,250",
    img: "/motors/Cooler Motor.jpg",
    category: "Cooler Motors",
    desc: "Energy-efficient motor for air coolers.",
    tag: "ISI Approved",
    features: [
      "High efficiency",
      "Low power consumption",
      "Smooth operation",
      "Lightweight & durable",
    ],
    specs: [
      "Voltage: 220V",
      "Power: 50W",
      "RPM: 1400",
      "Warranty: 1 Year",
    ],
  },
  {
    name: "Cooler Motor Double Ball Bearing",
    price: "₹2,100",
    img: "/motors/Cooler Motor Double Ball Bearing.jpg",
    category: "Cooler Motors",
    desc: "Low-noise motor with double ball bearing system.",
    tag: "Premium",
    features: [
      "Double ball bearing",
      "Ultra-low noise",
      "Long life motor",
      "Stable cooling performance",
    ],
    specs: [
      "Voltage: 220V",
      "Power: 55W",
      "RPM: 1450",
      "Warranty: 2 Years",
    ],
  },
  {
    name: "Cooler Motor Copper Winding",
    price: "₹1,750",
    img: "/motors/Cooler Motor Copper Winding.jpg",
    category: "Cooler Motors",
    desc: "100% copper winding motor for longer life.",
    tag: "ISI Certified",
    features: [
      "Pure copper winding",
      "Efficient cooling",
      "Reduced heat generation",
      "Long-lasting performance",
    ],
    specs: [
      "Voltage: 220V",
      "Power: 50W",
      "RPM: 1400",
      "Warranty: 2 Years",
    ],
  },
  {
    name: "Cooler Motor Thermal Protected",
    price: "₹2,250",
    img: "/motors/Cooler Motor Thermal Protected.jpg",
    category: "Cooler Motors",
    desc: "Auto cut-off thermal protection for safety.",
    tag: "Safety Certified",
    features: [
      "Thermal overload protection",
      "Low-noise operation",
      "Durable construction",
      "Energy efficient",
    ],
    specs: [
      "Voltage: 220V",
      "Power: 55W",
      "RPM: 1450",
      "Warranty: 2 Years",
    ],
  },
  {
    name: "Washing Machine Motor",
    price: "₹3,500",
    img: "/motors/Washing Machine Motor.jpg",
    category: "Appliance Motors",
    desc: "Heavy-duty motor for semi & fully automatic machines.",
    tag: "Industrial Grade",
    features: [
      "Heavy-duty build",
      "High torque",
      "Smooth operation",
      "Long service life",
    ],
    specs: [
      "Voltage: 220V",
      "Power: 200W",
      "RPM: 1500",
      "Warranty: 2 Years",
    ],
  },
  {
    name: "Grinder Motor",
    price: "₹2,400",
    img: "/motors/Grinder Motor.jpg",
    category: "Appliance Motors",
    desc: "Powerful motor for domestic mixer grinders.",
    tag: "ISI Approved",
    features: [
      "High torque",
      "Durable construction",
      "Low noise operation",
      "Energy efficient",
    ],
    specs: [
      "Voltage: 220V",
      "Power: 150W",
      "RPM: 1400",
      "Warranty: 1 Year",
    ],
  },
  {
    name: "Water Pump Motor 0.5 HP",
    price: "₹6,800",
    img: "/motors/Water Pump Motor 0.5 HP.jpg",
    category: "Pump Motors",
    desc: "Domestic water pump motor with thermal protection.",
    tag: "ISI Certified",
    features: [
      "Thermal overload protection",
      "Efficient water flow",
      "Durable housing",
      "Energy efficient",
    ],
    specs: [
      "Power: 0.5 HP",
      "Voltage: 220V",
      "RPM: 1400",
      "Warranty: 2 Years",
    ],
  },
  {
    name: "Water Pump Motor 1 HP",
    price: "₹9,200",
    img: "/motors/Water Pump Motor 1 HP.jpg",
    category: "Pump Motors",
    desc: "High-performance 1 HP motor for home & commercial use.",
    tag: "Industrial Grade",
    features: [
      "High flow rate",
      "Durable construction",
      "Thermal protection",
      "Energy efficient",
    ],
    specs: [
      "Power: 1 HP",
      "Voltage: 220V",
      "RPM: 1450",
      "Warranty: 2 Years",
    ],
  },
];


export default function MotorsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMotor, setSelectedMotor] = useState(null);

  const categories = [
    "All",
    "Fan Motors",
    "Cooler Motors",
    "Pump Motors",
    "Appliance Motors",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? motorItems
      : motorItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Electric Motors
      </h1>

      {/* Search */}
      <div className="mb-6">
        <SearchBar />
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition
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

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedMotor(item)}
            className="bg-white border rounded-lg p-4 shadow-md hover:shadow-xl transition cursor-pointer hover:scale-105"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={300}
              height={200}
              className="mx-auto h-40 object-contain"
            />
            <h3 className="text-lg font-semibold mt-3 text-black">
              {item.name}
            </h3>
            <p className="text-green-600 font-bold">{item.price}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {selectedMotor && (
  <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg flex items-center justify-center px-4 overflow-auto">
    <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">

      {/* CLOSE */}
      <button
        onClick={() => setSelectedMotor(null)}
        className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/80 text-white text-xl flex items-center justify-center hover:scale-110 transition"
      >
        ✕
      </button>

      {/* TOP STRIP */}
      <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black px-8 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Sri Vasavi Electricals ⚡
        </h2>
        <span className="text-sm font-semibold text-white/80">
          Electric Motors & Industrial Equipment
        </span>
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-12 p-10">

        {/* IMAGE */}
        <div className="flex items-center justify-center">
          <div className="relative bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl p-10 shadow-inner">
            <Image
              src={selectedMotor.img}
              alt={selectedMotor.name}
              width={420}
              height={420}
              className="rounded-xl hover:scale-105 transition"
            />

            {selectedMotor.tag && (
              <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                {selectedMotor.tag}
              </span>
            )}
          </div>
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {selectedMotor.name}
          </h1>

          <p className="mt-2 text-gray-500">
            Reliable & high-performance motor for your application
          </p>

          <div className="mt-5 flex items-center gap-4">
            <span className="text-4xl font-extrabold text-gray-800">
              {selectedMotor.price}
            </span>
            <span className="text-sm text-gray-500">(Inclusive of taxes)</span>
          </div>

          <p className="mt-6 text-gray-700">{selectedMotor.desc}</p>

          {/* FEATURES */}
          {selectedMotor.features && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Key Features
              </h3>

              <div className="grid grid-cols-2 gap-3 text-gray-600">
                {selectedMotor.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gray-50 border rounded-xl px-4 py-3 text-sm"
                  >
                    <span className="text-green-600">✔</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SPECIFICATIONS */}
          {selectedMotor.specs && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Specifications
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {selectedMotor.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-10 p-6 bg-gray-50 border rounded-2xl flex flex-wrap gap-4 justify-between">
            <div className="text-sm text-gray-600">
              📍 Mudhole Store  
              <br />
              ⚡ Installation guidance available
            </div>

            <div className="flex gap-3">
              <a
                href="tel:9985227139"
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919985227139"
                target="_blank"
                className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            ✔ Shock protection • ✔ Overload safety • ✔ Trusted local store
          </p>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
