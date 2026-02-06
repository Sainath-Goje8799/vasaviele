"use client";

import { useState } from "react";

const mcbItems = [
  {
    name: "MCB 6A Single Pole",
    price: "₹180",
    img: "/mcb/mcb6a.jpg",
    category: "Single Pole",
    desc: "6A MCB suitable for lighting circuits.",
    details: [
      "Rated Current: 6 Amp",
      "Single Pole Protection",
      "Fast Tripping Mechanism",
      "Ideal for lighting circuits",
      "Overload & short-circuit protection",
    ],
  },
  {
    name: "MCB 10A Single Pole",
    price: "₹210",
    img: "/mcb/MCB 10A Single Pole.jpg",
    category: "Single Pole",
    desc: "10A MCB for light power applications.",
    details: [
      "Rated Current: 10 Amp",
      "Single Pole MCB",
      "For fans & lights",
      "Compact DIN rail design",
      "Long operational life",
    ],
  },
  {
    name: "MCB 16A Single Pole",
    price: "₹260",
    img: "/mcb/MCB 16A Single Pole.jpg",
    category: "Single Pole",
    desc: "16A MCB for sockets and appliances.",
    details: [
      "Rated Current: 16 Amp",
      "Ideal for power sockets",
      "Single Pole safety",
      "Thermal & magnetic protection",
      "Home & office use",
    ],
  },
  {
    name: "MCB 32A Double Pole",
    price: "₹550",
    img: "/mcb/mcb32a.jpg",
    category: "Double Pole",
    desc: "32A DP MCB for high-load circuits.",
    details: [
      "Rated Current: 32 Amp",
      "Double Pole isolation",
      "Phase + Neutral protection",
      "High load handling",
      "Main incoming circuits",
    ],
  },
  {
    name: "MCB 63A Double Pole",
    price: "₹950",
    img: "/mcb/MCB 63A Double Pole.jpg",
    category: "Double Pole",
    desc: "63A DP MCB for industrial use.",
    details: [
      "Rated Current: 63 Amp",
      "Industrial-grade DP MCB",
      "Strong breaking capacity",
      "Heavy load protection",
      "Reliable performance",
    ],
  },
  {
    name: "MCB 40A Triple Pole",
    price: "₹1,450",
    img: "/mcb/MCB 40A Triple Pole.jpg",
    category: "Triple Pole",
    desc: "3-Phase MCB for industrial panels.",
    details: [
      "Rated Current: 40 Amp",
      "Three Phase protection",
      "Industrial panel use",
      "Simultaneous tripping",
      "High durability",
    ],
  },
  {
    name: "RCCB 40A",
    price: "₹2,100",
    img: "/mcb/RCCB 40A.jpg",
    category: "RCCB",
    desc: "Residual Current Circuit Breaker.",
    details: [
      "Rated Current: 40 Amp",
      "Earth leakage protection",
      "Shock prevention",
      "Mandatory safety device",
      "Residential use",
    ],
  },
  {
    name: "RCCB 100A",
    price: "₹4,200",
    img: "/mcb/RCCB 100A.jpg",
    category: "RCCB",
    desc: "Heavy-duty RCCB for large loads.",
    details: [
      "Rated Current: 100 Amp",
      "High capacity RCCB",
      "Commercial applications",
      "Sensitive leakage detection",
      "Enhanced safety",
    ],
  },
  {
    name: "ELCB",
    price: "₹2,200",
    img: "/mcb/ELCB.jpg",
    category: "ELCB",
    desc: "Earth Leakage Circuit Breaker.",
    details: [
      "Earth leakage protection",
      "Shock prevention",
      "Automatic power cut-off",
      "Improves electrical safety",
      "Domestic & commercial use",
    ],
  },
  {
    name: "MCB 20A Single Pole",
    price: "₹290",
    img: "/mcb/MCB 20A Single Pole.jpg",
    category: "Single Pole",
    desc: "20A MCB for heavy socket loads.",
    details: [
      "Rated Current: 20 Amp",
      "High power socket use",
      "Single Pole design",
      "Stable performance",
      "Overcurrent protection",
    ],
  },
  {
    name: "MCB 25A Single Pole",
    price: "₹320",
    img: "/mcb/MCB 25A Single Pole.jpg",
    category: "Single Pole",
    desc: "25A MCB for kitchen appliances.",
    details: [
      "Rated Current: 25 Amp",
      "Kitchen & appliance circuits",
      "Single Pole MCB",
      "Heat resistant build",
      "Safe daily usage",
    ],
  },
  {
    name: "MCB 40A Double Pole",
    price: "₹720",
    img: "/mcb/MCB 40A Double Pole.jpg",
    category: "Double Pole",
    desc: "40A DP MCB for main incoming.",
    details: [
      "Rated Current: 40 Amp",
      "Main line protection",
      "Double Pole isolation",
      "Reliable switching",
      "Heavy load support",
    ],
  },
  {
    name: "MCB 63A Triple Pole",
    price: "₹2,100",
    img: "/mcb/MCB 63A Triple Pole.jpg",
    category: "Triple Pole",
    desc: "3-phase MCB for industrial panels.",
    details: [
      "Rated Current: 63 Amp",
      "Three Phase protection",
      "Industrial application",
      "High breaking capacity",
      "Long service life",
    ],
  },
  {
    name: "MCB 100A Triple Pole",
    price: "₹3,800",
    img: "/mcb/MCB 100A Triple Pole.jpg",
    category: "Triple Pole",
    desc: "High-capacity MCB for factories.",
    details: [
      "Rated Current: 100 Amp",
      "Factory-grade protection",
      "Three Phase MCB",
      "Extreme load handling",
      "Industrial safety standard",
    ],
  },
  {
    name: "RCBO 32A",
    price: "₹2,850",
    img: "/mcb/RCBO 32A.jpg",
    category: "RCBO",
    desc: "MCB + RCCB combined protection.",
    details: [
      "Rated Current: 32 Amp",
      "Overload + leakage protection",
      "Compact combined unit",
      "Space saving design",
      "High safety level",
    ],
  },
  {
    name: "RCBO 63A",
    price: "₹4,200",
    img: "/mcb/RCBO 63A.jpg",
    category: "RCBO",
    desc: "Advanced leakage & overload protection.",
    details: [
      "Rated Current: 63 Amp",
      "Advanced RCBO",
      "Leakage + short-circuit protection",
      "Commercial use",
      "Reliable & durable",
    ],
  },
  {
    name: "Isolator Switch 63A",
    price: "₹980",
    img: "/mcb/Isolator Switch 63A.jpg",
    category: "Isolator",
    desc: "Manual isolation for maintenance.",
    details: [
      "Rated Current: 63 Amp",
      "Manual isolation switch",
      "Safe maintenance operations",
      "Clear ON/OFF indication",
      "Durable construction",
    ],
  },
  {
    name: "Isolator Switch 100A",
    price: "₹1,650",
    img: "/mcb/Isolator Switch 100A.jpg",
    category: "Isolator",
    desc: "Heavy-duty power isolation switch.",
    details: [
      "Rated Current: 100 Amp",
      "Heavy duty isolator",
      "Industrial usage",
      "Strong mechanical life",
      "Safe power cutoff",
    ],
  },
  {
    name: "SPD Surge Protection Device",
    price: "₹3,200",
    img: "/mcb/SPD Surge Protection Device.jpg",
    category: "Surge Protector",
    desc: "Protects against voltage surges.",
    details: [
      "Surge voltage protection",
      "Lightning surge defense",
      "Protects sensitive equipment",
      "Panel mounted device",
      "Long-lasting protection",
    ],
  },
];

import Image from "next/image";

// 👉 mcbItems आधीच define केलेले असतील असे धरतो
// प्रत्येक item मध्ये: name, price, img, category, desc, details[]

export default function MCBPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeMCB, setActiveMCB] = useState(null);

  const categories = [
    "All",
    "Single Pole",
    "Double Pole",
    "Triple Pole",
    "RCCB",
    "ELCB",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? mcbItems
      : mcbItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        MCB & Circuit Protection
      </h1>
      <p className="text-gray-600 mb-6">
        High-quality Miniature Circuit Breakers & safety devices
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

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveMCB(item)}
            className="cursor-pointer bg-white border rounded-xl p-4 shadow-sm hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="mx-auto h-40 object-contain"
            />
            <h3 className="text-lg font-semibold mt-3 text-black">
              {item.name}
            </h3>
            <p className="text-green-600 font-bold">
              {item.price}
            </p>
            <p className="text-sm text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

{/* 🔥 ULTRA PREMIUM MCB FULL SCREEN VIEW */}
{activeMCB && (
  <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center px-4 overflow-y-auto">

    <div className="relative w-full max-w-md sm:max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">

      {/* CLOSE */}
      <button
        onClick={() => setActiveMCB(null)}
        className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 text-white text-lg flex items-center justify-center hover:scale-110 transition"
      >
        ✕
      </button>

      {/* TOP STRIP */}
      <div className="bg-gradient-to-r from-slate-700 via-gray-800 to-black px-4 py-2 sm:px-8 sm:py-4 flex items-center justify-between">
        <h2 className="text-base sm:text-xl font-bold text-white">
          Sri Vasavi Electricals ⚡
        </h2>
        <span className="text-xs sm:text-sm font-semibold text-white/80">
          Circuit Protection Devices
        </span>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 p-3 sm:p-10">

        {/* IMAGE */}
        <div className="flex items-center justify-center">
          <div className="relative bg-gradient-to-br from-gray-200 to-gray-400 rounded-xl p-4 sm:p-10 shadow-inner w-full">
            <Image
              src={activeMCB.img}
              alt={activeMCB.name}
              width={300}
              height={300}
              className="rounded-lg w-full max-h-[250px] sm:max-h-[420px] object-contain transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
              ISI Approved
            </span>
          </div>
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
            {activeMCB.name}
          </h1>

          <p className="mt-1 sm:mt-2 text-gray-500 text-xs sm:text-sm">
            Reliable circuit protection for homes & industries
          </p>

          {/* PRICE */}
          <div className="mt-3 sm:mt-5 flex flex-wrap items-center gap-1 sm:gap-4">
            <span className="text-xl sm:text-4xl font-extrabold text-gray-800">
              {activeMCB.price}
            </span>
            <span className="text-xs sm:text-sm text-gray-500">
              (Inclusive of taxes)
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-2 sm:mt-6 text-gray-700 text-xs sm:text-sm leading-relaxed">
            {activeMCB.desc}
          </p>

          {/* FEATURES */}
          <div className="mt-3 sm:mt-8">
            <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4 text-gray-800">
              Specifications & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-3">
              {(activeMCB.details || []).map((d, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 bg-gray-50 border rounded-lg px-2 py-1 text-xs sm:text-sm font-medium text-gray-800"
                >
                  <span className="text-green-600">✔</span>
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 sm:mt-10 p-3 sm:p-6 bg-gray-50 border rounded-xl flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-between">
            <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-0">
              📍 Mudhole Store <br /> ⚡ Installation guidance available
            </div>

            <div className="flex gap-2 sm:gap-3 flex-wrap">
              <a
                href="tel:9985227139"
                className="px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black text-xs sm:text-sm transition"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919985227139"
                target="_blank"
                className="px-4 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 text-xs sm:text-sm transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* TRUST */}
          <p className="mt-2 sm:mt-6 text-xs sm:text-sm text-gray-500">
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
