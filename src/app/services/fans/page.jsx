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
  },
  {
    name: "Ceiling Fan 56 inch",
    price: "₹2,800",
    img: "/fans/ceilingfan56.jpg",
    category: "Ceiling Fans",
    desc: "Large ceiling fan for halls and offices.",
  },
  {
    name: "BLDC Ceiling Fan",
    price: "₹3,800",
    img: "/fans/bldcfan.png",
    category: "Smart Fans",
    desc: "Energy-saving BLDC ceiling fan.",
  },
  {
    name: "Table Fan",
    price: "₹1,600",
    img: "/fans/tablefan.jpg",
    category: "Table Fans",
    desc: "Portable table fan for personal cooling.",
  },
  {
    name: "Wall Fan",
    price: "₹1,900",
    img: "/fans/wallfan.jpg",
    category: "Wall Fans",
    desc: "Wall mounted fan for shops and offices.",
  },
  {
    name: "Pedestal Fan",
    price: "₹2,300",
    img: "/fans/pedestalfan.jpg",
    category: "Pedestal Fans",
    desc: "Height adjustable pedestal fan.",
  },
  {
    name: "Exhaust Fan 8 inch",
    price: "₹1,100",
    img: "/fans/exhaustfan.jpg",
    category: "Exhaust Fans",
    desc: "Exhaust fan for kitchens and bathrooms.",
  },
  {
    name: "Exhaust Fan 12 inch",
    price: "₹1,650",
    img: "/fans/exhaustfan12.jpg",
    category: "Exhaust Fans",
    desc: "High power exhaust fan.",
  },
  {
    name: "Industrial Exhaust Fan",
    price: "₹4,500",
    img: "/fans/indexhaustfan.jpg",
    category: "Industrial Fans",
    desc: "Heavy-duty exhaust fan for factories.",
  },
  {
    name: "Tower Fan",
    price: "₹5,200",
    img: "/fans/towerfan.jpg",
    category: "Smart Fans",
    desc: "Modern tower fan with remote.",
  },
  {
    name: "Rechargeable Fan",
    price: "₹3,200",
    img: "/fans/rechargablefan.jpg",
    category: "Emergency Fans",
    desc: "Fan with battery backup.",
  },
  {
    name: "Solar Fan",
    price: "₹4,800",
    img: "/fans/solarfan.jpg",
    category: "Outdoor Fans",
    desc: "Solar powered fan.",
  },
  {
    name: "High Speed Fan",
    price: "₹2,600",
    img: "/fans/highspeedfan.jpg",
    category: "Ceiling Fans",
    desc: "High speed ceiling fan for fast cooling.",
  },
  {
    name: "Industrial Ceiling Fan",
    price: "₹6,500",
    img: "/fans/industrialceiling.jpg",
    category: "Industrial Fans",
    desc: "Large ceiling fan for factories.",
  },
  {
    name: "Mini USB Fan",
    price: "₹650",
    img: "/fans/miniusbfan.jpg",
    category: "Table Fans",
    desc: "Compact USB powered fan.",
  },
];

export default function FansPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
        {filteredFans.map((fan, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
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
    </div>
  );
}
