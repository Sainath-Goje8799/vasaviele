"use client";

import Image from "next/image";
import { useState } from "react";


const bulbs = [
  {
    name: "LED Bulb 9W",
    price: "₹120",
    img: "/bulbs/bulb9w.jpg",
    category: "Home",
    desc: "Energy efficient LED bulb suitable for home use.",
    details: [
      "Power: 9 Watt",
      "Color: Cool White",
      "Long life span",
      "Low power consumption",
    ],
  },
  {
    name: "LED Bulb 12W",
    price: "₹180",
    img: "/bulbs/bulb12w.jpg",
    category: "Home",
    desc: "Bright LED bulb ideal for halls and offices.",
    details: [
      "Power: 12 Watt",
      "Color: Warm / Cool White",
      "High brightness",
      "Eco-friendly",
    ],
  },
  {
    name: "LED Bulb 15W",
    price: "₹220",
    img: "/bulbs/bulb15w.jpg",
    category: "Commercial",
    desc: "High brightness LED bulb for large rooms.",
    details: [
      "Power: 15 Watt",
      "Color: Cool White",
      "Wide light spread",
      "Energy saving",
    ],
  },
  {
    name: "LED Bulb 18W",
    price: "₹260",
    img: "/bulbs/bulb18w.jpg",
    category: "Commercial",
    desc: "Powerful LED bulb for commercial spaces.",
    details: [
      "Power: 18 Watt",
      "Color: White",
      "High lumen output",
      "Durable body",
    ],
  },
  {
    name: "LED Bulb 20W",
    price: "₹300",
    img: "/bulbs/bulb20w.jpg",
    category: "Industrial",
    desc: "Ultra bright LED bulb for warehouses.",
    details: [
      "Power: 20 Watt",
      "Color: Cool White",
      "High efficiency",
      "Shock resistant",
    ],
  },
  {
    name: "Smart LED Bulb",
    price: "₹650",
    img: "/bulbs/smartbulb.jpg",
    category: "Smart",
    desc: "WiFi enabled smart LED bulb.",
    details: [
      "App controlled",
      "Color changing",
      "Voice assistant support",
      "Energy efficient",
    ],
  },
  {
    name: "Emergency LED Bulb",
    price: "₹480",
    img: "/bulbs/emergencybulb.jpg",
    category: "Emergency",
    desc: "LED bulb with inbuilt battery backup.",
    details: [
      "Auto backup",
      "Rechargeable battery",
      "Power cut support",
      "Long backup time",
    ],
  },
  {
    name: "LED Candle Bulb",
    price: "₹160",
    img: "/bulbs/candlebulb.jpg",
    category: "Decorative",
    desc: "Decorative candle shaped LED bulb.",
    details: [
      "Elegant design",
      "Warm light",
      "Low heat",
      "Energy saving",
    ],
  },
  {
    name: "LED Filament Bulb",
    price: "₹200",
    img: "/bulbs/filamentbulb.jpg",
    category: "Decorative",
    desc: "Vintage style filament LED bulb.",
    details: [
      "Retro look",
      "Warm glow",
      "Low power usage",
      "Long life",
    ],
  },
  {
    name: "LED Globe Bulb",
    price: "₹240",
    img: "/bulbs/globebulb.jpg",
    category: "Decorative",
    desc: "Globe-shaped LED bulb for décor lighting.",
    details: [
      "Stylish design",
      "Uniform lighting",
      "Low energy",
      "Durable glass",
    ],
  },
  {
    name: "LED Night Bulb",
    price: "₹90",
    img: "/bulbs/nightbulb.jpg",
    category: "Home",
    desc: "Soft night lamp for bedrooms.",
    details: [
      "Low brightness",
      "Soft warm light",
      "Very low power",
      "Safe for kids",
    ],
  },
  {
    name: "LED Panel Bulb",
    price: "₹420",
    img: "/bulbs/panelbulb.jpg",
    category: "Commercial",
    desc: "Ceiling panel style LED bulb.",
    details: [
      "Slim design",
      "Uniform light",
      "Office friendly",
      "Long lifespan",
    ],
  },
  {
    name: "Tube Light LED",
    price: "₹350",
    img: "/bulbs/tubelightbulb.jpg",
    category: "Commercial",
    desc: "Modern LED tube light for homes and shops.",
    details: [
      "Length: 4 feet",
      "Instant start",
      "No flickering",
      "Low maintenance",
    ],
  },
  {
    name: "LED Batten Light",
    price: "₹290",
    img: "/bulbs/battenlight.jpg",
    category: "Commercial",
    desc: "Linear LED batten for kitchens and offices.",
    details: [
      "Slim body",
      "Bright illumination",
      "Easy installation",
      "Energy efficient",
    ],
  },
  {
    name: "LED Flood Light 30W",
    price: "₹950",
    img: "/bulbs/floodlightbulb.jpg",
    category: "Outdoor",
    desc: "Outdoor LED flood light.",
    details: [
      "Power: 30 Watt",
      "Weather resistant",
      "High brightness",
      "Outdoor use",
    ],
  },
  {
    name: "LED Flood Light 50W",
    price: "₹1450",
    img: "/bulbs/floodlight50w.jpg",
    category: "Outdoor",
    desc: "High power LED flood light for outdoor areas.",
    details: [
      "Power: 50 Watt",
      "Strong body",
      "Wide coverage",
      "Waterproof",
    ],
  },
  {
    name: "LED Street Light",
    price: "₹2200",
    img: "/bulbs/streetlightbulb.jpg",
    category: "Outdoor",
    desc: "LED street light for roads and parking areas.",
    details: [
      "High lumen",
      "Long life",
      "Weatherproof",
      "Low maintenance",
    ],
  },
  {
    name: "LED High Bay Light",
    price: "₹3200",
    img: "/bulbs/highbaylight.jpg",
    category: "Industrial",
    desc: "Industrial LED high bay light.",
    details: [
      "High brightness",
      "Factory use",
      "Energy saving",
      "Long durability",
    ],
  },
  {
    name: "Rechargeable LED Bulb",
    price: "₹520",
    img: "/bulbs/rechargablebulb.jpg",
    category: "Emergency",
    desc: "Portable rechargeable LED bulb.",
    details: [
      "USB charging",
      "Portable",
      "Emergency use",
      "Long backup",
    ],
  },
  {
    name: "Solar LED Bulb",
    price: "₹780",
    img: "/bulbs/solarledbulb.jpg",
    category: "Outdoor",
    desc: "Solar powered LED bulb.",
    details: [
      "Solar charging",
      "Eco friendly",
      "No electricity needed",
      "Outdoor use",
    ],
  },
];

export default function BulbsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeBulb, setActiveBulb] = useState(null);

   const categories = [
    "All",
    "Home",
    "Commercial",
    "Industrial",
    "Outdoor",
    "Smart",
    "Emergency",
    "Decorative",
  ];

  const filteredBulbs =
    selectedCategory === "All"
      ? bulbs
      : bulbs.filter((b) => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white p-6">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Lighting Products
      </h1>
      <p className="text-gray-600 mb-6">
        Quality LED bulbs available at Sri Vasavi Electricals
      </p>

      {/* Category Filter */}
      <div className="flex gap-3 flex-wrap mb-8">
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBulbs.map((bulb, index) => (
          <div
            key={index}
            onClick={() => setActiveBulb(bulb)}
            className="cursor-pointer bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
          >
            <Image
              src={bulb.img}
              alt={bulb.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold mt-3">
              {bulb.name}
            </h3>
            <p className="text-green-600 font-bold">
              {bulb.price}
            </p>
            <p className="text-sm text-gray-600">
              {bulb.desc}
            </p>
          </div>
        ))}
      </div>

     {/* ULTRA PREMIUM PRODUCT VIEW */}
{activeBulb && (
  <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center px-4 overflow-y-auto">

    <div className="relative w-full max-w-md sm:max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setActiveBulb(null)}
        className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 text-white text-lg flex items-center justify-center hover:scale-110 transition"
      >
        ✕
      </button>

      {/* TOP BRAND STRIP */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-4 py-2 flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-bold text-gray-900">
          Sri Vasavi Electricals ⚡
        </h2>
        <span className="text-xs sm:text-sm font-semibold text-gray-800">
          Trusted Electrical Store
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 p-3 sm:p-8">

        {/* IMAGE SHOWCASE */}
        <div className="flex items-center justify-center">
          <div className="relative bg-gradient-to-br from-violet-500 to-pink-600 rounded-xl p-4 sm:p-8 shadow-inner w-full">
            <Image
              src={activeBulb.img}
              alt={activeBulb.name}
              width={300}
              height={300}
              className="rounded-lg w-full max-h-[250px] object-contain transition-transform duration-300 hover:scale-105"
            />

            {/* Badge */}
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
              Best Seller
            </span>
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            {activeBulb.name}
          </h1>

          <p className="mt-1 text-gray-500 text-xs sm:text-sm">
            High-quality lighting solution for home & commercial use
          </p>

          {/* Price */}
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-1 sm:gap-3">
            <span className="text-xl sm:text-3xl font-extrabold text-green-600">
              {activeBulb.price}
            </span>
            <span className="text-xs text-gray-500">
              (Inclusive of taxes)
            </span>
          </div>

          {/* Description */}
          <p className="mt-2 sm:mt-4 text-amber-400 leading-relaxed text-xs sm:text-sm">
            {activeBulb.desc}
          </p>

          {/* FEATURES GRID */}
          <div className="mt-3 sm:mt-6">
            <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-red-400">
              Specifications & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-green-800">
              {activeBulb.details.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 bg-gray-50 border rounded-lg px-2 py-1 text-xs sm:text-sm font-medium"
                >
                  <span className="text-green-600">✔</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA BAR */}
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 border rounded-xl flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-between">
            <div className="text-xs sm:text-sm text-pink-600 mb-2 sm:mb-0">
              📍 Available at Mudhole store <br /> ⏰ Same-day service & support
            </div>

            <div className="flex gap-2 sm:gap-3 flex-wrap">
              <a
                href="tel:9985227139"
                className="px-4 py-2 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 text-xs sm:text-sm transition"
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
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-500">
            ✔ 6+ years experience • ✔ Genuine products • ✔ Trusted local electrical store
          </p>
        </div>
      </div>
    </div>
  </div>
)}



    </div>
  );
}
