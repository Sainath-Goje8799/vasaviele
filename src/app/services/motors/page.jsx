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
  },
  {
    name: "Cooler Motor",
    price: "₹1,250",
    img: "/motors/Cooler Motor.jpg",
    category: "Cooler Motors",
    desc: "Energy-efficient motor for air coolers.",
  },
  {
    name: "Washing Machine Motor",
    price: "₹3,500",
    img: "/motors/Washing Machine Motor.jpg",
    category: "Appliance Motors",
    desc: "Heavy-duty motor for semi & fully automatic machines.",
  },
  {
    name: "Water Pump Motor 0.5 HP",
    price: "₹6,800",
    img: "/motors/Water Pump Motor 0.5 HP.jpg",
    category: "Pump Motors",
    desc: "Domestic water pump motor with thermal protection.",
  },
  {
    name: "Water Pump Motor 1 HP",
    price: "₹9,200",
    img: "/motors/Water Pump Motor 1 HP.jpg",
    category: "Pump Motors",
    desc: "High-performance 1 HP motor for home & commercial use.",
  },
  {
    name: "Exhaust Fan Motor",
    price: "₹950",
    img: "/motors/Exhaust Fan Motor.jpg",
    category: "Fan Motors",
    desc: "Low-noise exhaust fan motor.",
  },
  {
    name: "Grinder Motor",
    price: "₹2,400",
    img: "/motors/Grinder Motor.jpg",
    category: "Appliance Motors",
    desc: "Powerful motor for domestic mixer grinders.",
  },
  {
    name: "Cooler Motor Double Ball Bearing",
    price: "₹2,100",
    img: "/motors/Cooler Motor Double Ball Bearing.jpg",
    category: "Cooler Motors",
    desc: "Low-noise motor with double ball bearing system.",
  },
  {
    name: "Cooler Motor Copper Winding",
    price: "₹1,750",
    img: "/motors/Cooler Motor Copper Winding.jpg",
    category: "Cooler Motors",
    desc: "100% copper winding motor for longer life.",
  },
  {
    name: "Cooler Motor Thermal Protected",
    price: "₹2,250",
    img: "/motors/Cooler Motor Thermal Protected.jpg",
    category: "Cooler Motors",
    desc: "Auto cut-off thermal protection for safety.",
  },
];


export default function MotorsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      : motorItems.filter(
          (item) => item.category === selectedCategory
        );

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
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
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
            <p className="text-green-600 font-bold">
              {item.price}
            </p>
            <p className="text-sm text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
