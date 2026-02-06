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
    tag: "ISI Approved",
    features: [
      "High conductivity copper",
      "Corrosion resistant",
      "Long lifespan",
      "Easy installation",
    ],
    specs: [
      "Length: 2.5 m",
      "Diameter: 16 mm",
      "Material: Pure Copper",
      "Suitable for residential & commercial use",
    ],
  },
  {
    name: "GI Earthing Rod",
    price: "₹850",
    img: "/earthing/GI Earthing Rod.jpg",
    category: "Earthing Rods",
    desc: "Galvanized iron earthing rod for long life.",
    tag: "ISI Approved",
    features: [
      "Galvanized iron for durability",
      "Cost-effective solution",
      "Corrosion resistant",
    ],
    specs: [
      "Length: 2.5 m",
      "Diameter: 16 mm",
      "Material: Galvanized Iron",
    ],
  },
  {
    name: "Copper Earthing Plate",
    price: "₹2,600",
    img: "/earthing/Copper Earthing Plate.jpg",
    category: "Earthing Plates",
    desc: "Pure copper earthing plate for residential use.",
    tag: "ISI Approved",
    features: [
      "High conductivity copper plate",
      "Durable & corrosion resistant",
      "Easy grounding connection",
    ],
    specs: [
      "Size: 600 x 600 mm",
      "Thickness: 3 mm",
      "Material: Pure Copper",
    ],
  },
  {
    name: "GI Earthing Plate",
    price: "₹1,700",
    img: "/earthing/GI Earthing Plate.jpg",
    category: "Earthing Plates",
    desc: "GI earthing plate suitable for industrial earthing.",
    tag: "ISI Approved",
    features: [
      "Galvanized iron plate",
      "Long-lasting and sturdy",
      "Resistant to corrosion",
    ],
    specs: [
      "Size: 600 x 600 mm",
      "Thickness: 3 mm",
      "Material: GI Steel",
    ],
  },
  {
    name: "Earthing Wire (8 SWG)",
    price: "₹120 / meter",
    img: "/earthing/Earthing Wire (8 SWG).jpg",
    category: "Earthing Wires",
    desc: "Heavy gauge earthing wire for grounding systems.",
    features: [
      "8 SWG copper wire",
      "High conductivity",
      "Durable insulation",
    ],
    specs: ["Length: As per requirement", "Material: Copper", "Color: Green"],
  },
  {
    name: "Earthing Wire (10 SWG)",
    price: "₹95 / meter",
    img: "/earthing/Earthing Wire (10 SWG).jpg",
    category: "Earthing Wires",
    desc: "Copper earthing wire for domestic installations.",
    features: [
      "10 SWG copper wire",
      "Corrosion resistant",
      "Flexible for easy installation",
    ],
    specs: ["Length: As per requirement", "Material: Copper", "Color: Green"],
  },
  {
    name: "Earthing Clamp",
    price: "₹180",
    img: "/earthing/Earthing Clamp.jpg",
    category: "Accessories",
    desc: "Strong clamp for earthing wire connections.",
    features: [
      "Durable brass construction",
      "Secure wire connection",
      "Corrosion resistant",
    ],
    specs: ["Material: Brass", "Screws included", "Fits 8-10 SWG wire"],
  },
  {
    name: "Chemical Earthing Compound",
    price: "₹950",
    img: "/earthing/Chemical Earthing Compound.jpg",
    category: "Accessories",
    desc: "Reduces earth resistance and improves conductivity.",
    features: [
      "Enhances soil conductivity",
      "Reduces earth resistance",
      "Long-lasting performance",
    ],
    specs: ["Weight: 2 kg pack", "Usage: One rod/plate", "Non-toxic formula"],
  },
  {
    name: "Maintenance-Free Earthing Electrode",
    price: "₹3,800",
    img: "/earthing/Maintenance-Free Earthing Electrode.jpg",
    category: "Earthing Rods",
    desc: "Long-life maintenance-free earthing electrode.",
    tag: "Maintenance-Free",
    features: [
      "No maintenance required",
      "High conductivity copper coating",
      "Corrosion-resistant steel core",
    ],
    specs: ["Length: 2.5 m", "Diameter: 20 mm", "Material: Copper-coated steel"],
  },
  {
    name: "Chemical Earthing Pipe",
    price: "₹2,900",
    img: "/earthing/Chemical Earthing Pipe.jpg",
    category: "Earthing Rods",
    desc: "Perforated pipe for chemical earthing systems.",
    features: [
      "Perforated GI pipe",
      "Holds chemical earthing compounds",
      "Improves soil conductivity",
    ],
    specs: ["Length: 2 m", "Diameter: 50 mm", "Material: Galvanized Steel"],
  },
  {
    name: "Copper Bonded Earthing Rod",
    price: "₹2,200",
    img: "/earthing/Copper Bonded Earthing Rod.jpg",
    category: "Earthing Rods",
    desc: "Steel core rod with copper bonding for durability.",
    features: [
      "Steel core with 99.9% copper coating",
      "Long lifespan",
      "ISI certified",
    ],
    specs: ["Length: 2.5 m", "Diameter: 16 mm", "Material: Copper-bonded Steel"],
  },
  {
    name: "Earth Pit Chamber (FRP)",
    price: "₹1,600",
    img: "/earthing/Earth Pit Chamber (FRP).jpg",
    category: "Accessories",
    desc: "FRP earth pit chamber with removable cover.",
    features: [
      "Durable FRP construction",
      "Removable cover",
      "UV-resistant material",
    ],
    specs: ["Dimensions: 400x400x500 mm", "Material: FRP", "Color: Grey"],
  },
  {
    name: "Earth Pit Chamber (Concrete)",
    price: "₹1,200",
    img: "/earthing/Earth Pit Chamber (Concrete).jpg",
    category: "Accessories",
    desc: "Heavy-duty concrete chamber for earthing pits.",
    features: [
      "Concrete reinforced",
      "Strong & durable",
      "Weather resistant",
    ],
    specs: ["Dimensions: 400x400x500 mm", "Material: Concrete", "Color: Grey"],
  },
  {
    name: "Earthing Test Link",
    price: "₹320",
    img: "/earthing/Earthing Test Link.jpg",
    category: "Accessories",
    desc: "Test link for checking earth resistance.",
    features: [
      "Easy to install",
      "Reliable testing tool",
      "Durable construction",
    ],
    specs: ["Material: Brass", "Fits standard rods", "Size: 50 mm"],
  },
  {
    name: "Earth Bus Bar (Copper)",
    price: "₹1,900",
    img: "/earthing/Earth Bus Bar (Copper).jpg",
    category: "Accessories",
    desc: "Copper earth bus bar for panel earthing.",
    features: [
      "High conductivity copper",
      "Pre-drilled holes for mounting",
      "Durable & corrosion resistant",
    ],
    specs: ["Length: 1 m", "Width: 50 mm", "Thickness: 6 mm", "Material: Copper"],
  },
  {
    name: "Lightning Arrester Spike",
    price: "₹2,750",
    img: "/earthing/Lightning Arrester Spike.jpg",
    category: "Accessories",
    desc: "Spike-type lightning arrester for buildings.",
    features: [
      "Protects from lightning surges",
      "Durable stainless steel",
      "Easy installation",
    ],
    specs: ["Height: 600 mm", "Material: Stainless Steel", "Color: Silver"],
  },
  {
    name: "Earth Enhancement Compound",
    price: "₹1,150",
    img: "/earthing/Earth Enhancement Compound.jpg",
    category: "Accessories",
    desc: "Improves soil conductivity and lowers resistance.",
    features: [
      "Improves soil conductivity",
      "Reduces earth resistance",
      "Long-lasting performance",
    ],
    specs: ["Weight: 2 kg pack", "Non-toxic", "For residential & commercial use"],
  },
];


export default function EarthingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null); // modal

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
      : earthingItems.filter((item) => item.category === selectedCategory);

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
            className={`px-4 py-2 rounded-full border transition ${
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
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition cursor-pointer"
            onClick={() => setActiveItem(item)}
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
            <p className="text-green-600 font-bold">{item.price}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* FULL SCREEN MODAL */}
     {activeItem && (
  <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center">

    {/* CARD */}
    <div
      className="
        relative w-full sm:max-w-6xl bg-white
        rounded-t-3xl sm:rounded-3xl
        shadow-2xl overflow-hidden
        max-h-[92vh] sm:max-h-none
        flex flex-col
      "
    >

      {/* DRAG BAR (MOBILE ONLY) */}
      <div className="sm:hidden flex justify-center py-2">
        <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
      </div>

      {/* TOP STRIP */}
      <div className="bg-gradient-to-r from-slate-700 via-gray-800 to-black px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        <h2 className="text-sm sm:text-xl font-bold text-white">
          Sri Vasavi Electricals ⚡
        </h2>
<button
        onClick={() => setActiveItem(null)}
        className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 text-white text-lg flex items-center justify-center hover:scale-110 transition"
      >
        ✕
      </button>

        <span className="hidden sm:block text-sm font-semibold text-white/80">
          Earthing & Grounding
        </span>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-10 py-4 sm:py-10 pb-36 sm:pb-10">

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-12">

          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <div className="relative bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl p-4 sm:p-10 shadow-inner w-full">
              <Image
                src={activeItem.img}
                alt={activeItem.name}
                width={420}
                height={420}
                className="max-h-[220px] sm:max-h-none object-contain rounded-xl"
              />

              {activeItem.tag && (
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {activeItem.tag}
                </span>
              )}
            </div>
          </div>

          {/* INFO */}
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
              {activeItem.name}
            </h1>

            <p className="mt-2 text-sm sm:text-base text-gray-500">
              {activeItem.desc}
            </p>

            <div className="mt-4 sm:mt-5 flex items-center gap-3">
              <span className="text-2xl sm:text-4xl font-extrabold text-gray-800">
                {activeItem.price}
              </span>
              <span className="text-xs sm:text-sm text-gray-500">
                (Inclusive of taxes)
              </span>
            </div>

            {/* FEATURES */}
            {activeItem.features && (
              <div className="mt-6 sm:mt-8">
                <h3 className="text-sm sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">
                  Key Features
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {activeItem.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-gray-50 border rounded-xl px-4 py-3 text-sm text-gray-700"
                    >
                      <span className="text-green-600">✔</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SPECS */}
            {activeItem.specs && (
              <div className="mt-6 sm:mt-8">
                <h3 className="text-sm sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">
                  Technical Specs
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {activeItem.specs.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-6 text-xs text-gray-500">
              ✔ Trusted local store • ✔ Quality earthing solutions
            </p>
          </div>
        </div>
      </div>

      {/* STICKY CTA – MOBILE ONLY */}
      <div className="sm:hidden sticky bottom-0 bg-white border-t px-4 py-3 grid grid-cols-2 gap-3">
        <a
          href="tel:9985227139"
          className="py-3 bg-gray-900 text-white rounded-xl font-semibold text-center"
        >
          📞 Call
        </a>

        <a
          href="https://wa.me/919985227139"
          target="_blank"
          className="py-3 bg-green-600 text-white rounded-xl font-semibold text-center"
        >
          💬 WhatsApp
        </a>
      </div>

      {/* DESKTOP CTA */}
      <div className="hidden sm:flex px-10 pb-8 gap-4 justify-end">
        <a
          href="tel:9985227139"
          className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/919985227139"
          target="_blank"
          className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold"
        >
          💬 WhatsApp
        </a>
      </div>

    </div>
  </div>
)}
</div>
  );
}
