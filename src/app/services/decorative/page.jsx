"use client";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const decorativeItems = [
  {
    name: "LED Decorative Bulb",
    price: "₹350",
    img: "/decorative/LED Decorative Bulb.jpg",
    category: "Lighting",
    desc: "Warm LED decorative bulb for homes.",
  },
  {
    name: "Vintage Filament Bulb",
    price: "₹450",
    img: "/decorative/Vintage Filament Bulb.jpg",
    category: "Lighting",
    desc: "Classic filament bulb for decorative use.",
  },
  {
    name: "LED Strip Light (Warm White)",
    price: "₹1,200",
    img: "/decorative/LED Strip Light (Warm White).jpg",
    category: "LED Strips",
    desc: "Flexible LED strip for false ceiling.",
  },
  {
    name: "RGB LED Strip Light",
    price: "₹1,850",
    img: "/decorative/RGB LED Strip Light.jpg",
    category: "LED Strips",
    desc: "Color-changing LED strip with controller.",
  },
  {
    name: "Wall Decorative Light",
    price: "₹2,600",
    img: "/decorative/Wall Decorative Light.jpg",
    category: "Wall Lights",
    desc: "Modern wall-mounted decorative light.",
  },
  {
    name: "Outdoor Wall Light",
    price: "₹3,200",
    img: "/decorative/Outdoor Wall Light.jpg",
    category: "Wall Lights",
    desc: "Weatherproof outdoor decorative light.",
  },
  {
    name: "Chandelier Light",
    price: "₹9,500",
    img: "/decorative/Chandelier Light.jpg",
    category: "Ceiling Lights",
    desc: "Elegant chandelier for living rooms.",
  },
  {
    name: "Pendant Ceiling Light",
    price: "₹4,200",
    img: "/decorative/Pendant Ceiling Light.jpg",
    category: "Ceiling Lights",
    desc: "Stylish hanging pendant light.",
  },
  {
    name: "LED Panel Light",
    price: "₹1,750",
    img: "/decorative/LED Panel Light.jpg",
    category: "Ceiling Lights",
    desc: "Slim LED panel for modern interiors.",
  },
  {
    name: "Mirror Decorative Light",
    price: "₹2,300",
    img: "/decorative/Mirror Decorative Light.jpg",
    category: "Bathroom Lights",
    desc: "Mirror light for bathrooms and dressing areas.",
  },
  {
    name: "Garden Spike Light",
    price: "₹1,950",
    img: "/decorative/Garden Spike Light.jpg",
    category: "Outdoor",
    desc: "Spike light for garden decoration.",
  },
  {
    name: "Decorative Rope Light",
    price: "₹650 / meter",
    img: "/decorative/Decorative Rope Light.jpg",
    category: "LED Strips",
    desc: "Flexible rope light for festivals.",
  },
  {
    name: "Festoon Light (10 Bulbs)",
    price: "₹2,800",
    img: "/decorative/Festoon Light (10 Bulbs).jpg",
    category: "Outdoor",
    desc: "Decorative festoon lighting for events.",
  },
  {
    name: "Decorative Table Lamp",
    price: "₹1,600",
    img: "/decorative/Decorative Table Lamp.jpg",
    category: "Indoor Decor",
    desc: "Stylish table lamp for bedrooms.",
  },
  {
    name: "Decorative Floor Lamp",
    price: "₹3,900",
    img: "/decorative/Decorative Floor Lamp.jpg",
    category: "Indoor Decor",
    desc: "Tall floor lamp with soft lighting.",
  },
];

export default function DecorativePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Lighting",
    "LED Strips",
    "Wall Lights",
    "Ceiling Lights",
    "Bathroom Lights",
    "Indoor Decor",
    "Outdoor",
    "Installation",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? decorativeItems
      : decorativeItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Decorative Lighting
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
