"use client";

import Image from "next/image";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const earthingItems = [
  {
    name: "Copper Earthing Rod",
    price: "₹1,450",
    img: "/earthing/Copper Earthing Rod.jpg",
    category: "Earthing Rods",
    desc: "High conductivity copper earthing rod for safety.",
  },
  {
    name: "GI Earthing Rod",
    price: "₹850",
    img: "/earthing/GI Earthing Rod.jpg",
    category: "Earthing Rods",
    desc: "Galvanized iron earthing rod for long life.",
  },
  {
    name: "Copper Earthing Plate",
    price: "₹2,600",
    img: "/earthing/Copper Earthing Plate.jpg",
    category: "Earthing Plates",
    desc: "Pure copper earthing plate for residential use.",
  },
  {
    name: "GI Earthing Plate",
    price: "₹1,700",
    img: "/earthing/GI Earthing Plate.jpg",
    category: "Earthing Plates",
    desc: "GI earthing plate suitable for industrial earthing.",
  },
  {
    name: "Earthing Wire (8 SWG)",
    price: "₹120 / meter",
    img: "/earthing/Earthing Wire (8 SWG).jpg",
    category: "Earthing Wires",
    desc: "Heavy gauge earthing wire for grounding systems.",
  },
  {
    name: "Earthing Wire (10 SWG)",
    price: "₹95 / meter",
    img: "/earthing/Earthing Wire (10 SWG).jpg",
    category: "Earthing Wires",
    desc: "Copper earthing wire for domestic installations.",
  },
  {
    name: "Earthing Clamp",
    price: "₹180",
    img: "/earthing/Earthing Clamp.jpg",
    category: "Accessories",
    desc: "Strong clamp for earthing wire connections.",
  },
  {
    name: "Chemical Earthing Compound",
    price: "₹950",
    img: "/earthing/Chemical Earthing Compound.jpg",
    category: "Accessories",
    desc: "Reduces earth resistance and improves conductivity.",
  },
   {
    name: "Maintenance-Free Earthing Electrode",
    price: "₹3,800",
    img: "/earthing/Maintenance-Free Earthing Electrode.jpg",
    category: "Earthing Rods",
    desc: "Long-life maintenance-free earthing electrode.",
  },
  {
    name: "Chemical Earthing Pipe",
    price: "₹2,900",
    img: "/earthing/Chemical Earthing Pipe.jpg",
    category: "Earthing Rods",
    desc: "Perforated pipe for chemical earthing systems.",
  },
  {
    name: "Copper Bonded Earthing Rod",
    price: "₹2,200",
    img: "/earthing/Copper Bonded Earthing Rod.jpg",
    category: "Earthing Rods",
    desc: "Steel core rod with copper bonding for durability.",
  },
  {
    name: "Earth Pit Chamber (FRP)",
    price: "₹1,600",
    img: "/earthing/Earth Pit Chamber (FRP).jpg",
    category: "Accessories",
    desc: "FRP earth pit chamber with removable cover.",
  },
  {
    name: "Earth Pit Chamber (Concrete)",
    price: "₹1,200",
    img: "/earthing/Earth Pit Chamber (Concrete).jpg",
    category: "Accessories",
    desc: "Heavy-duty concrete chamber for earthing pits.",
  },
  {
    name: "Earthing Test Link",
    price: "₹320",
    img: "/earthing/Earthing Test Link.jpg",
    category: "Accessories",
    desc: "Test link for checking earth resistance.",
  },
  {
    name: "Earth Bus Bar (Copper)",
    price: "₹1,900",
    img: "/earthing/Earth Bus Bar (Copper).jpg",
    category: "Accessories",
    desc: "Copper earth bus bar for panel earthing.",
  },
  {
    name: "Lightning Arrester Spike",
    price: "₹2,750",
    img: "/earthing/Lightning Arrester Spike.jpg",
    category: "Accessories",
    desc: "Spike-type lightning arrester for buildings.",
  },
  {
    name: "Earth Enhancement Compound",
    price: "₹1,150",
    img: "/earthing/Earth Enhancement Compound.jpg",
    category: "Accessories",
    desc: "Improves soil conductivity and lowers resistance.",
  },
];

export default function EarthingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Earthing Rods",
    "Earthing Plates",
    "Earthing Wires",
    "Accessories",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? earthingItems
      : earthingItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Earthing & Grounding Solutions
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
