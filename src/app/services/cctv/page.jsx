"use client";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const cctvItems = [
  {
    name: "HD CCTV Camera 2MP",
    price: "₹1,450",
    img: "/cctv/HD CCTV Camera 2MP.jpg",
    category: "Cameras",
    desc: "2MP HD CCTV camera for indoor use.",
  },
  {
    name: "Full HD CCTV Camera 5MP",
    price: "₹2,600",
    img: "/cctv/Full HD CCTV Camera 5MP.jpg",
    category: "Cameras",
    desc: "High clarity 5MP surveillance camera.",
  },
  {
    name: "Dome CCTV Camera",
    price: "₹1,800",
    img: "/cctv/Dome CCTV Camera.jpg",
    category: "Cameras",
    desc: "Dome camera suitable for offices and shops.",
  },
  {
    name: "Bullet CCTV Camera",
    price: "₹1,750",
    img: "/cctv/Bullet CCTV Camera.jpg",
    category: "Cameras",
    desc: "Weatherproof outdoor bullet camera.",
  },
  {
    name: "4 Channel DVR",
    price: "₹2,900",
    img: "/cctv/4 Channel DVR.jpg",
    category: "Recorders",
    desc: "DVR supporting up to 4 cameras.",
  },
  {
    name: "8 Channel DVR",
    price: "₹4,800",
    img: "/cctv/8 Channel DVR.jpg",
    category: "Recorders",
    desc: "DVR for medium CCTV installations.",
  },
  {
    name: "16 Channel DVR",
    price: "₹8,500",
    img: "/cctv/16 Channel DVR.jpg",
    category: "Recorders",
    desc: "Professional DVR for large setups.",
  },
  {
    name: "CCTV SMPS Power Supply",
    price: "₹1,200",
    img: "/cctv/CCTV SMPS Power Supply.jpg",
    category: "Accessories",
    desc: "Power supply for CCTV cameras.",
  },
  {
    name: "CCTV Camera Stand",
    price: "₹180",
    img: "/cctv/CCTV Camera Stand.jpg",
    category: "Accessories",
    desc: "Wall/ceiling mounting stand.",
  },
  {
    name: "BNC Connector (Pack of 10)",
    price: "₹250",
    img: "/cctv/BNC Connector (Pack of 10).jpg",
    category: "Accessories",
    desc: "Connector for CCTV video cables.",
  },
  {
    name: "CCTV Power Connector",
    price: "₹120",
    img: "/cctv/CCTV Power Connector.jpg",
    category: "Accessories",
    desc: "DC power connector for cameras.",
  },
  {
    name: "Coaxial CCTV Cable",
    price: "₹2,200 / coil",
    img: "/cctv/Coaxial.jpg",
    category: "Cables",
    desc: "Video cable for analog CCTV systems.",
  },
  {
    name: "LAN Cable Cat6",
    price: "₹3,400 / box",
    img: "/cctv/LAN Cable Cat6.jpg",
    category: "Cables",
    desc: "Cat6 cable for IP CCTV cameras.",
  },
  {
    name: "Hard Disk 1TB (Surveillance)",
    price: "₹3,600",
    img: "/cctv/Hard Disk 1TB (Surveillance).jpg",
    category: "Storage",
    desc: "24/7 surveillance-grade hard disk.",
  },
  {
    name: "Hard Disk 2TB (Surveillance)",
    price: "₹5,800",
    img: "/cctv/Hard Disk 2TB (Surveillance).jpg",
    category: "Storage",
    desc: "High-capacity CCTV storage disk.",
  },
  
];

export default function CCTVPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Cameras",
    "Recorders",
    "Cables",
    "Storage",
    "Accessories",
    "Installation",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? cctvItems
      : cctvItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        CCTV & Installation Systems
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
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
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
