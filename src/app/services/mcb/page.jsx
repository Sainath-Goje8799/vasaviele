"use client";

import { useState } from "react";

const mcbItems = [
  {
    name: "MCB 6A Single Pole",
    price: "₹180",
    img: "/mcb/mcb6a.jpg",
    category: "Single Pole",
    desc: "6A MCB suitable for lighting circuits.",
  },
  {
    name: "MCB 10A Single Pole",
    price: "₹210",
    img: "/mcb/MCB 10A Single Pole.jpg",
    category: "Single Pole",
    desc: "10A MCB for light power applications.",
  },
  {
    name: "MCB 16A Single Pole",
    price: "₹260",
    img: "/mcb/MCB 16A Single Pole.jpg",
    category: "Single Pole",
    desc: "16A MCB for sockets and appliances.",
  },
  {
    name: "MCB 32A Double Pole",
    price: "₹550",
    img: "/mcb/mcb32a.jpg",
    category: "Double Pole",
    desc: "32A DP MCB for high-load circuits.",
  },
  {
    name: "MCB 63A Double Pole",
    price: "₹950",
    img: "/mcb/MCB 63A Double Pole.jpg",
    category: "Double Pole",
    desc: "63A DP MCB for industrial use.",
  },
  {
    name: "MCB 40A Triple Pole",
    price: "₹1,450",
    img: "/mcb/MCB 40A Triple Pole.jpg",
    category: "Triple Pole",
    desc: "3-Phase MCB for industrial panels.",
  },
  {
    name: "RCCB 40A",
    price: "₹2,100",
    img: "/mcb/RCCB 40A.jpg",
    category: "RCCB",
    desc: "Residual Current Circuit Breaker.",
  },
  {
    name: "RCCB 100A",
    price: "₹4,200",
    img: "/mcb/RCCB 100A.jpg",
    category: "RCCB",
    desc: "Heavy-duty RCCB for large loads.",
  },
  {
    name: "ELCB",
    price: "₹2,200",
    img: "/mcb/ELCB.jpg",
    category: "ELCB",
    desc: "Earth Leakage Circuit Breaker.",
  },
  {
  name: "MCB 20A Single Pole",
  price: "₹290",
  img: "/mcb/MCB 20A Single Pole.jpg",
  category: "Single Pole",
  desc: "20A MCB for heavy socket loads.",
},
{
  name: "MCB 25A Single Pole",
  price: "₹320",
  img: "/mcb/MCB 25A Single Pole.jpg",
  category: "Single Pole",
  desc: "25A MCB for kitchen appliances.",
},
{
  name: "MCB 40A Double Pole",
  price: "₹720",
  img: "/mcb/MCB 40A Double Pole.jpg",
  category: "Double Pole",
  desc: "40A DP MCB for main incoming.",
},
{
  name: "MCB 63A Triple Pole",
  price: "₹2,100",
  img: "/mcb/MCB 63A Triple Pole.jpg",
  category: "Triple Pole",
  desc: "3-phase MCB for industrial panels.",
},
{
  name: "MCB 100A Triple Pole",
  price: "₹3,800",
  img: "/mcb/MCB 100A Triple Pole.jpg",
  category: "Triple Pole",
  desc: "High-capacity MCB for factories.",
},
{
  name: "RCBO 32A",
  price: "₹2,850",
  img: "/mcb/RCBO 32A.jpg",
  category: "RCBO",
  desc: "MCB + RCCB combined protection.",
},
{
  name: "RCBO 63A",
  price: "₹4,200",
  img: "/mcb/RCBO 63A.jpg",
  category: "RCBO",
  desc: "Advanced leakage & overload protection.",
},
{
  name: "Isolator Switch 63A",
  price: "₹980",
  img: "/mcb/Isolator Switch 63A.jpg",
  category: "Isolator",
  desc: "Manual isolation for maintenance.",
},
{
  name: "Isolator Switch 100A",
  price: "₹1,650",
  img: "/mcb/Isolator Switch 100A.jpg",
  category: "Isolator",
  desc: "Heavy-duty power isolation switch.",
},
{
  name: "SPD Surge Protection Device",
  price: "₹3,200",
  img: "/mcb/SPD Surge Protection Device.jpg",
  category: "Surge Protector",
  desc: "Protects against voltage surges.",
},

];

export default function MCBPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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

      {/* Category Filter */}
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

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg transition"
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
    </div>
  );
}
