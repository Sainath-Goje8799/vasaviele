"use client";

import Link from "next/link";

const bulbs = [
  {
    name: "LED Bulb 9W",
    price: "₹120",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    desc: "Bright LED bulb ideal for halls and offices.",
    details: [
      "Power: 12 Watt",
      "Color: Warm / Cool White",
      "High brightness",
      "Eco-friendly",
    ],
  },
  {
    name: "Tube Light LED",
    price: "₹350",
    img: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
    desc: "Modern LED tube light for homes and shops.",
    details: [
      "Length: 4 feet",
      "Instant start",
      "No flickering",
      "Low maintenance",
    ],
  },
  {
    name: "Tube Light LED",
    price: "₹550",
    img: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
    desc: "Modern LED tube light for homes and shops.",
    details: [
      "Length: 4 feet",
      "Instant start",
      "No flickering",
      "Low maintenance",
    ],
  },
  {
    name: "Tube Light LED",
    price: "₹350",
    img: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
    desc: "Modern LED tube light for homes and shops.",
    details: [
      "Length: 4 feet",
      "Instant start",
      "No flickering",
      "Low maintenance",
    ],
  },
  {
    name: "LED Bulb 12W",
    price: "₹180",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    desc: "Bright LED bulb ideal for halls and offices.",
    details: [
      "Power: 12 Watt",
      "Color: Warm / Cool White",
      "High brightness",
      "Eco-friendly",
    ],
  },
];

export default function BulbsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <Link href="/services" className="text-yellow-600 font-medium">
          ← Back to Services
        </Link>

        {/* Header */}
        <h1 className="mt-4 text-3xl font-bold text-gray-800">
          Bulb Installation & Supply 💡
        </h1>
        <p className="text-gray-600 mt-2">
          High-quality bulbs with installation support
        </p>

        {/* Bulbs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {bulbs.map((bulb, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={bulb.img}
                alt={bulb.name}
                className="w-24 h-24 mx-auto"
              />

              {/* Name */}
              <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
                {bulb.name}
              </h3>

              {/* Price */}
              <p className="mt-2 text-center text-yellow-600 font-bold text-lg">
                {bulb.price}
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm text-center">
                {bulb.desc}
              </p>

              {/* Details */}
              <ul className="mt-4 text-sm text-gray-600 space-y-1 list-disc list-inside">
                {bulb.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Actions */}
              <div className="mt-6 flex gap-3 justify-center">
                <Link
                  href="/chatapp"
                  className="px-4 py-2 rounded-lg bg-yellow-500 text-gray-900 text-sm font-medium hover:bg-yellow-600 transition"
                >
                  Chat
                </Link>
                <a
                  href="tel:9876543210"
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
