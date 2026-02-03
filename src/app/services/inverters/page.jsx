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

  const categories = ["All", "Home", "Commercial", "Industrial", "Solar", "UPS"];

  const filteredInverters =
    selectedCategory === "All"
      ? inverters
      : inverters.filter(
          (inv) => inv.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Our Inverter Products
      </h1>
      <p className="text-gray-600 mb-6">
        Reliable inverters for homes, offices, industries, and solar applications.
      </p>

      {/* Category Filter */}
      <div className="flex gap-3 flex-wrap mb-6">
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredInverters.map((inv, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
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
            <p className="text-sm text-gray-600 mb-2">{inv.desc}</p>
            <ul className="text-sm text-gray-500 list-disc pl-4">
              {inv.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
