"use client";

import Image from "next/image";
import { useState } from "react";

const fans = [
  {
    name: "Ceiling Fan 48 inch",
    price: "₹2,200",
    img: "/fans/ceilingfan48.jpg",
    category: "Ceiling Fans",
    desc: "Standard ceiling fan for home use.",
    details: [
      "48-inch sweep size",
      "High air delivery",
      "Low noise operation",
      "Durable motor",
    ],
  },
  {
    name: "Ceiling Fan 56 inch",
    price: "₹2,800",
    img: "/fans/ceilingfan56.jpg",
    category: "Ceiling Fans",
    desc: "Large ceiling fan for halls and offices.",
    details: [
      "56-inch wide coverage",
      "Ideal for large rooms",
      "Strong airflow",
      "Energy efficient motor",
    ],
  },
  {
    name: "BLDC Ceiling Fan",
    price: "₹3,800",
    img: "/fans/bldcfan.png",
    category: "Smart Fans",
    desc: "Energy-saving BLDC ceiling fan.",
    details: [
      "BLDC motor technology",
      "Up to 65% power saving",
      "Remote control support",
      "Silent performance",
    ],
  },
  {
    name: "Table Fan",
    price: "₹1,600",
    img: "/fans/tablefan.jpg",
    category: "Table Fans",
    desc: "Portable table fan for personal cooling.",
    details: [
      "Compact design",
      "Adjustable tilt",
      "Lightweight & portable",
      "Strong airflow",
    ],
  },
  {
    name: "Wall Fan",
    price: "₹1,900",
    img: "/fans/wallfan.jpg",
    category: "Wall Fans",
    desc: "Wall mounted fan for shops and offices.",
    details: [
      "Wall mounted design",
      "Oscillation feature",
      "Space saving",
      "Ideal for commercial use",
    ],
  },
  {
    name: "Pedestal Fan",
    price: "₹2,300",
    img: "/fans/pedestalfan.jpg",
    category: "Pedestal Fans",
    desc: "Height adjustable pedestal fan.",
    details: [
      "Adjustable height",
      "Wide air throw",
      "Stable base",
      "Multiple speed settings",
    ],
  },
  {
    name: "Exhaust Fan 8 inch",
    price: "₹1,100",
    img: "/fans/exhaustfan.jpg",
    category: "Exhaust Fans",
    desc: "Exhaust fan for kitchens and bathrooms.",
    details: [
      "8-inch blade size",
      "Removes heat & odor",
      "Low power consumption",
      "Easy installation",
    ],
  },
  {
    name: "Exhaust Fan 12 inch",
    price: "₹1,650",
    img: "/fans/exhaustfan12.jpg",
    category: "Exhaust Fans",
    desc: "High power exhaust fan.",
    details: [
      "12-inch large blade",
      "High suction power",
      "Durable body",
      "Continuous operation support",
    ],
  },
  {
    name: "Industrial Exhaust Fan",
    price: "₹4,500",
    img: "/fans/indexhaustfan.jpg",
    category: "Industrial Fans",
    desc: "Heavy-duty exhaust fan for factories.",
    details: [
      "Heavy-duty motor",
      "Large airflow capacity",
      "Industrial-grade build",
      "Suitable for factories",
    ],
  },
  {
    name: "Tower Fan",
    price: "₹5,200",
    img: "/fans/towerfan.jpg",
    category: "Smart Fans",
    desc: "Modern tower fan with remote.",
    details: [
      "Slim tower design",
      "Remote control",
      "Multiple modes",
      "Modern look",
    ],
  },
  {
    name: "Rechargeable Fan",
    price: "₹3,200",
    img: "/fans/rechargablefan.jpg",
    category: "Emergency Fans",
    desc: "Fan with battery backup.",
    details: [
      "Built-in rechargeable battery",
      "Power cut support",
      "LED indicator",
      "Portable usage",
    ],
  },
  {
    name: "Solar Fan",
    price: "₹4,800",
    img: "/fans/solarfan.jpg",
    category: "Outdoor Fans",
    desc: "Solar powered fan.",
    details: [
      "Solar powered operation",
      "Eco-friendly",
      "Outdoor suitable",
      "Low electricity usage",
    ],
  },
  {
    name: "High Speed Fan",
    price: "₹2,600",
    img: "/fans/highspeedfan.jpg",
    category: "Ceiling Fans",
    desc: "High speed ceiling fan for fast cooling.",
    details: [
      "High RPM motor",
      "Quick cooling",
      "Strong airflow",
      "Long-lasting performance",
    ],
  },
  {
    name: "Industrial Ceiling Fan",
    price: "₹6,500",
    img: "/fans/industrialceiling.jpg",
    category: "Industrial Fans",
    desc: "Large ceiling fan for factories.",
    details: [
      "Extra-large blade size",
      "Covers wide areas",
      "Heavy-duty motor",
      "Industrial usage",
    ],
  },
  {
    name: "Mini USB Fan",
    price: "₹650",
    img: "/fans/miniusbfan.jpg",
    category: "Table Fans",
    desc: "Compact USB powered fan.",
    details: [
      "USB powered",
      "Ultra compact size",
      "Low noise",
      "Ideal for desk use",
    ],
  },
];

export default function FansPage() {

  // ✅ ALL HOOKS MUST BE HERE
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeFan, setActiveFan] = useState(null);

  const categories = [
    "All",
    "Ceiling Fans",
    "Table Fans",
    "Wall Fans",
    "Exhaust Fans",
    "Pedestal Fans",
    "Industrial Fans",
    "Smart Fans",
    "Emergency Fans",
    "Outdoor Fans",
  ];

  const filteredFans =
    selectedCategory === "All"
      ? fans
      : fans.filter((fan) => fan.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white p-6">

      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Our Fan Products
      </h1>

      {/* CATEGORY FILTER */}
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

      {/* FAN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredFans.map((fan, index) => (
          <div
            key={index}
            onClick={() => setActiveFan(fan)}   // ✅ OPEN MODAL
            className="cursor-pointer bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
          >
            <img
              src={fan.img}
              alt={fan.name}
              className="mx-auto h-40 object-contain"
            />
            <h3 className="text-lg font-semibold mt-3 text-black">
              {fan.name}
            </h3>
            <p className="text-green-600 font-bold">
              {fan.price}
            </p>
            <p className="text-sm text-gray-600">
              {fan.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🔥 ULTRA PREMIUM FAN VIEW */}
    {activeFan && (
  <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg flex items-center justify-center px-4">

    <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">

      {/* Close */}
      <button
        onClick={() => setActiveFan(null)}
        className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/80 text-white text-xl flex items-center justify-center hover:scale-110 transition"
      >
        ✕
      </button>

      {/* TOP BRAND STRIP */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Sri Vasavi Electricals ⚡
        </h2>
        <span className="text-sm font-semibold text-white/90">
          Premium Fan Collection
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid lg:grid-cols-2 gap-12 p-10">

        {/* IMAGE SHOWCASE */}
        <div className="flex items-center justify-center">
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-700 rounded-2xl p-10 shadow-inner">
            <Image
              src={activeFan.img}
              alt={activeFan.name}
              width={420}
              height={420}
              className="rounded-xl transition-transform duration-300 hover:scale-105"
            />

            {/* Badge */}
            <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              Energy Efficient
            </span>
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {activeFan.name}
          </h1>

          <p className="mt-2 text-gray-500">
            High-performance fan for superior air circulation
          </p>

          {/* Price */}
          <div className="mt-5 flex items-center gap-4">
            <span className="text-4xl font-extrabold text-blue-600">
              {activeFan.price}
            </span>
            <span className="text-sm text-gray-500">
              (Inclusive of taxes)
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-700 leading-relaxed">
            {activeFan.desc}
          </p>

          {/* FEATURES GRID */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-indigo-600">
              Specifications & Features
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {(activeFan.details || []).map((item, i) => (
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

          {/* CTA BAR */}
          <div className="mt-10 p-6 bg-gray-50 border rounded-2xl flex flex-wrap gap-4 items-center justify-between">
            <div className="text-sm text-gray-600">
              📍 Available at our Mudhole store  
              <br />
              ⚡ Installation & service support available
            </div>

            <div className="flex gap-3">
              <a
                href="tel:9985227139"
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                📞 Call Now
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

          {/* TRUST */}
          <p className="mt-6 text-xs text-gray-500">
            ✔ Long-lasting motors • ✔ Low noise • ✔ Trusted local electrical store
          </p>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
