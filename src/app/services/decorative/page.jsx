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
    highlights: [
      "Energy-efficient LED",
      "Warm white glow",
      "Long lifespan (~25,000 hours)",
      "Easy to install in standard sockets",
    ],
    use: "Living rooms • Bedrooms • Dining areas",
  },
  {
    name: "Vintage Filament Bulb",
    price: "₹450",
    img: "/decorative/Vintage Filament Bulb.jpg",
    category: "Lighting",
    desc: "Classic filament bulb for decorative use.",
    highlights: [
      "Vintage-style filament",
      "Soft warm light",
      "Perfect for aesthetic lighting",
      "Compatible with dimmers",
    ],
    use: "Cafes • Living rooms • Restaurants",
  },
  {
    name: "LED Strip Light (Warm White)",
    price: "₹1,200",
    img: "/decorative/LED Strip Light (Warm White).jpg",
    category: "LED Strips",
    desc: "Flexible LED strip for false ceiling.",
    highlights: [
      "Flexible and easy to install",
      "Warm white ambient light",
      "Low power consumption",
      "Water-resistant coating",
    ],
    use: "False ceilings • Under cabinets • Cove lighting",
  },
  {
    name: "RGB LED Strip Light",
    price: "₹1,850",
    img: "/decorative/RGB LED Strip Light.jpg",
    category: "LED Strips",
    desc: "Color-changing LED strip with controller.",
    highlights: [
      "16 million colors via app/remote",
      "Sync with music & modes",
      "Flexible design for curves",
      "Timer and scheduling options",
    ],
    use: "Living rooms • Gaming rooms • Party decor",
  },
  {
    name: "Wall Decorative Light",
    price: "₹2,600",
    img: "/decorative/Wall Decorative Light.jpg",
    category: "Wall Lights",
    desc: "Modern wall-mounted decorative light.",
    highlights: [
      "Stylish modern design",
      "Ambient soft lighting",
      "Energy-efficient LED",
      "Durable build",
    ],
    use: "Hallways • Bedrooms • Living areas",
  },
  {
    name: "Outdoor Wall Light",
    price: "₹3,200",
    img: "/decorative/Outdoor Wall Light.jpg",
    category: "Wall Lights",
    desc: "Weatherproof outdoor decorative light.",
    highlights: [
      "IP65 waterproof rating",
      "Durable aluminum body",
      "Soft warm outdoor light",
      "Easy wall mount installation",
    ],
    use: "Porches • Gardens • Pathways",
  },
  {
    name: "Chandelier Light",
    price: "₹9,500",
    img: "/decorative/Chandelier Light.jpg",
    category: "Ceiling Lights",
    desc: "Elegant chandelier for living rooms.",
    highlights: [
      "Premium crystal design",
      "Multi-light LED bulbs",
      "Perfect for high ceilings",
      "Adds elegance and luxury",
    ],
    use: "Living rooms • Dining halls • Banquet areas",
  },
  {
    name: "Pendant Ceiling Light",
    price: "₹4,200",
    img: "/decorative/Pendant Ceiling Light.jpg",
    category: "Ceiling Lights",
    desc: "Stylish hanging pendant light.",
    highlights: [
      "Modern pendant design",
      "Adjustable hanging height",
      "Soft warm illumination",
      "Energy-efficient LED",
    ],
    use: "Dining areas • Kitchen islands • Workspaces",
  },
  {
    name: "LED Panel Light",
    price: "₹1,750",
    img: "/decorative/LED Panel Light.jpg",
    category: "Ceiling Lights",
    desc: "Slim LED panel for modern interiors.",
    highlights: [
      "Slim and sleek design",
      "Uniform soft white light",
      "Low energy consumption",
      "Ideal for office and home",
    ],
    use: "Offices • Kitchens • Living rooms",
  },
  {
    name: "Mirror Decorative Light",
    price: "₹2,300",
    img: "/decorative/Mirror Decorative Light.jpg",
    category: "Bathroom Lights",
    desc: "Mirror light for bathrooms and dressing areas.",
    highlights: [
      "Moisture-resistant",
      "Soft warm lighting",
      "Elegant design with LED",
      "Easy mounting above mirrors",
    ],
    use: "Bathrooms • Dressing tables • Salons",
  },
  {
    name: "Garden Spike Light",
    price: "₹1,950",
    img: "/decorative/Garden Spike Light.jpg",
    category: "Outdoor",
    desc: "Spike light for garden decoration.",
    highlights: [
      "IP65 weatherproof",
      "Durable aluminum body",
      "Soft decorative illumination",
      "Easy to position in soil",
    ],
    use: "Gardens • Pathways • Landscaping",
  },
  {
    name: "Decorative Rope Light",
    price: "₹650 / meter",
    img: "/decorative/Decorative Rope Light.jpg",
    category: "LED Strips",
    desc: "Flexible rope light for festivals.",
    highlights: [
      "Flexible and bendable",
      "Water-resistant PVC coating",
      "Multicolor options",
      "Perfect for festive decoration",
    ],
    use: "Festivals • Parties • Outdoor decoration",
  },
  {
    name: "Festoon Light (10 Bulbs)",
    price: "₹2,800",
    img: "/decorative/Festoon Light (10 Bulbs).jpg",
    category: "Outdoor",
    desc: "Decorative festoon lighting for events.",
    highlights: [
      "10 hanging bulbs included",
      "Durable PVC cable",
      "Ideal for parties and events",
      "Easy to hang and connect",
    ],
    use: "Weddings • Parties • Outdoor decor",
  },
  {
    name: "Decorative Table Lamp",
    price: "₹1,600",
    img: "/decorative/Decorative Table Lamp.jpg",
    category: "Indoor Decor",
    desc: "Stylish table lamp for bedrooms.",
    highlights: [
      "Compact and elegant design",
      "Soft warm glow",
      "Energy-efficient LED",
      "Perfect for bedside or study",
    ],
    use: "Bedrooms • Study tables • Living rooms",
  },
  {
    name: "Decorative Floor Lamp",
    price: "₹3,900",
    img: "/decorative/Decorative Floor Lamp.jpg",
    category: "Indoor Decor",
    desc: "Tall floor lamp with soft lighting.",
    highlights: [
      "Elegant tall design",
      "Soft ambient illumination",
      "Sturdy base",
      "Adds style to interiors",
    ],
    use: "Living rooms • Bedrooms • Reading corners",
  },
];

export default function DecorativePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null); // Full-screen modal

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
      : decorativeItems.filter((item) => item.category === selectedCategory);

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
            onClick={() => setActiveItem(item)}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition cursor-pointer"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={200}
              height={200}
              className="mx-auto object-contain"
            />
            <h3 className="text-lg font-semibold mt-3 text-black">
              {item.name}
            </h3>
            <p className="text-green-600 font-bold">{item.price}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

     {/* 🔥 Full-screen Modal - Mobile Friendly */}
{activeItem && (
  <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg flex items-center justify-center px-2 sm:px-4">
    <div className="relative w-full max-w-md sm:max-w-3xl md:max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">

      {/* Close Button */}
      <button
        onClick={() => setActiveItem(null)}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/80 text-white text-lg sm:text-xl flex items-center justify-center hover:scale-110 transition"
      >
        ✕
      </button>

      {/* Top Brand Strip */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 px-4 sm:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0">
        <h2 className="text-lg sm:text-xl font-bold text-white">
          Sri Vasavi Electricals ⚡
        </h2>
        <span className="text-xs sm:text-sm font-semibold text-white/90">
          Premium Decorative Lighting
        </span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 p-4 sm:p-10">

        {/* Image Showcase */}
        <div className="flex items-center justify-center">
          <div className="relative bg-gradient-to-br from-yellow-500 to-orange-700 rounded-2xl p-6 sm:p-10 shadow-inner w-full max-w-[350px] sm:max-w-[420px]">
            <Image
              src={activeItem.img}
              alt={activeItem.name}
              width={420}
              height={420}
              className="rounded-xl w-full h-auto transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-green-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-semibold">
              Premium Quality
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {activeItem.name}
          </h1>
          <p className="mt-2 text-gray-500 text-sm sm:text-base">{activeItem.desc}</p>

          {/* Price */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="text-2xl sm:text-4xl font-extrabold text-orange-600">
              {activeItem.price}
            </span>
            <span className="text-xs sm:text-sm text-gray-500">(Inclusive of taxes)</span>
          </div>

          {/* Highlights */}
          {activeItem.highlights && (
            <div className="mt-4 sm:mt-6">
              <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4 text-orange-600">
                Key Highlights
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-xs sm:text-sm">
                {activeItem.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Bar */}
          <div className="mt-6 sm:mt-10 p-4 sm:p-6 bg-gray-50 border rounded-2xl flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-start sm:items-center justify-between text-xs sm:text-sm">
            <div className="text-gray-600">
              📍 Available at our Mudhole store  
              <br />
              ⚡ Professional installation support
            </div>

            <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-0 w-full sm:w-auto">
              <a
                href="tel:9985227139"
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition text-center"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919985227139"
                target="_blank"
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition text-center"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Trust */}
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
            ✔ Premium Quality • ✔ Fire Resistant • ✔ Trusted Local Store
          </p>
        </div>
      </div>
    </div>
  </div>
)}
</div>
  );
}
