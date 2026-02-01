"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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
      : bulbs.filter(
          (bulb) => bulb.category === selectedCategory
        );

  return (
    // 👇 White background only for this page
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Our Lighting Products
      </h1>

      {/* Category Buttons */}
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBulbs.map((bulb, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
          >
            <Image
              src={bulb.img}
              alt={bulb.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold mt-3 text-gray-900">
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
    </div>
  );
}
