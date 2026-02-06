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
    details: [
      "2MP resolution for clear video",
      "Indoor use only",
      "Night vision up to 20m",
      "Compact and discreet design",
    ],
  },
  {
    name: "Full HD CCTV Camera 5MP",
    price: "₹2,600",
    img: "/cctv/Full HD CCTV Camera 5MP.jpg",
    category: "Cameras",
    desc: "High clarity 5MP surveillance camera.",
    details: [
      "5MP Full HD resolution",
      "Wide-angle lens for larger coverage",
      "Infrared night vision",
      "Supports wall and ceiling mounting",
    ],
  },
  {
    name: "Dome CCTV Camera",
    price: "₹1,800",
    img: "/cctv/Dome CCTV Camera.jpg",
    category: "Cameras",
    desc: "Dome camera suitable for offices and shops.",
    details: [
      "Indoor/outdoor use",
      "360° adjustable dome",
      "Vandal-resistant casing",
      "Infrared night vision",
    ],
  },
  {
    name: "Bullet CCTV Camera",
    price: "₹1,750",
    img: "/cctv/Bullet CCTV Camera.jpg",
    category: "Cameras",
    desc: "Weatherproof outdoor bullet camera.",
    details: [
      "Outdoor use with IP66 rating",
      "Infrared night vision up to 30m",
      "Long-range coverage",
      "Weather and dust resistant",
    ],
  },
  {
    name: "4 Channel DVR",
    price: "₹2,900",
    img: "/cctv/4 Channel DVR.jpg",
    category: "Recorders",
    desc: "DVR supporting up to 4 cameras.",
    details: [
      "Supports 4 CCTV cameras",
      "Remote monitoring via app",
      "Motion detection alerts",
      "Video playback and backup options",
    ],
  },
  {
    name: "8 Channel DVR",
    price: "₹4,800",
    img: "/cctv/8 Channel DVR.jpg",
    category: "Recorders",
    desc: "DVR for medium CCTV installations.",
    details: [
      "Supports 8 CCTV cameras",
      "HD recording & playback",
      "Remote viewing via mobile",
      "Multiple video storage options",
    ],
  },
  {
    name: "16 Channel DVR",
    price: "₹8,500",
    img: "/cctv/16 Channel DVR.jpg",
    category: "Recorders",
    desc: "Professional DVR for large setups.",
    details: [
      "Supports up to 16 cameras",
      "Advanced motion detection",
      "Remote access via app or web",
      "Large storage support with HDDs",
    ],
  },
  {
    name: "CCTV SMPS Power Supply",
    price: "₹1,200",
    img: "/cctv/CCTV SMPS Power Supply.jpg",
    category: "Accessories",
    desc: "Power supply for CCTV cameras.",
    details: [
      "12V/5A regulated power output",
      "Overload & short-circuit protection",
      "Suitable for multiple cameras",
      "Compact and durable design",
    ],
  },
  {
    name: "CCTV Camera Stand",
    price: "₹180",
    img: "/cctv/CCTV Camera Stand.jpg",
    category: "Accessories",
    desc: "Wall/ceiling mounting stand.",
    details: [
      "Adjustable angle for precise positioning",
      "Compatible with most cameras",
      "Durable and rust-resistant",
      "Easy installation",
    ],
  },
  {
    name: "BNC Connector (Pack of 10)",
    price: "₹250",
    img: "/cctv/BNC Connector (Pack of 10).jpg",
    category: "Accessories",
    desc: "Connector for CCTV video cables.",
    details: [
      "10-pack connectors",
      "Compatible with coaxial cables",
      "Secure video signal connection",
      "Easy crimping installation",
    ],
  },
  {
    name: "CCTV Power Connector",
    price: "₹120",
    img: "/cctv/CCTV Power Connector.jpg",
    category: "Accessories",
    desc: "DC power connector for cameras.",
    details: [
      "Connects camera to 12V DC supply",
      "Reliable & secure connection",
      "Compact design",
      "Supports indoor and outdoor cameras",
    ],
  },
  {
    name: "Coaxial CCTV Cable",
    price: "₹2,200 / coil",
    img: "/cctv/Coaxial.jpg",
    category: "Cables",
    desc: "Video cable for analog CCTV systems.",
    details: [
      "High-quality coaxial cable",
      "Supports analog cameras",
      "Durable insulation",
      "Reliable signal transmission",
    ],
  },
  {
    name: "LAN Cable Cat6",
    price: "₹3,400 / box",
    img: "/cctv/LAN Cable Cat6.jpg",
    category: "Cables",
    desc: "Cat6 cable for IP CCTV cameras.",
    details: [
      "High-speed network cable",
      "Supports IP cameras and PoE",
      "Shielded for low interference",
      "Durable and flexible",
    ],
  },
  {
    name: "Hard Disk 1TB (Surveillance)",
    price: "₹3,600",
    img: "/cctv/Hard Disk 1TB (Surveillance).jpg",
    category: "Storage",
    desc: "24/7 surveillance-grade hard disk.",
    details: [
      "1TB storage capacity",
      "Designed for continuous recording",
      "High reliability for CCTV",
      "Low noise and heat",
    ],
  },
  {
    name: "Hard Disk 2TB (Surveillance)",
    price: "₹5,800",
    img: "/cctv/Hard Disk 2TB (Surveillance).jpg",
    category: "Storage",
    desc: "High-capacity CCTV storage disk.",
    details: [
      "2TB storage capacity",
      "24/7 recording reliability",
      "Supports multiple cameras",
      "Optimized for CCTV applications",
    ],
  },
];


export default function CCTVPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

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
      : cctvItems.filter((item) => item.category === selectedCategory);

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
            onClick={() => setActiveItem(item)}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition cursor-pointer"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={200}
              height={160}
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

      {/* 🔥 FULL-SCREEN MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg flex items-center justify-center px-4">
          <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/80 text-white text-xl flex items-center justify-center hover:scale-110 transition"
            >
              ✕
            </button>

            {/* Top Brand Strip */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                Sri Vasavi Electricals ⚡
              </h2>
              <span className="text-sm font-semibold text-white/90">
                CCTV & Surveillance Systems
              </span>
            </div>

            {/* Modal Content */}
            <div className="grid lg:grid-cols-2 gap-12 p-10">

              {/* Image */}
              <div className="flex items-center justify-center">
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-700 rounded-2xl p-10 shadow-inner">
                  <Image
                    src={activeItem.img}
                    alt={activeItem.name}
                    width={420}
                    height={420}
                    className="rounded-xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Details */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{activeItem.name}</h1>
                <p className="mt-2 text-gray-500">{activeItem.desc}</p>

                {/* Price */}
                <div className="mt-5 flex items-center gap-4">
                  <span className="text-4xl font-extrabold text-blue-600">
                    {activeItem.price}
                  </span>
                  <span className="text-sm text-gray-500">(Inclusive of taxes)</span>
                </div>

                {/* Features */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-indigo-600">
                    Key Highlights
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {(activeItem.details || []).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-gray-50 border rounded-xl px-4 py-3 text-sm font-medium text-gray-800"
                      >
                        <span className="text-green-600">✔</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 p-6 bg-gray-50 border rounded-2xl flex flex-wrap gap-4 items-center justify-between">
                  <div className="text-sm text-gray-600">
                    📍 Available at our Mudhole store  
                    <br />
                    ⚡ Installation & service support available
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="tel:9985227139"
                      className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
                    >
                      📞 Call Now
                    </a>
                    <a
                      href="https://wa.me/919985227139"
                      target="_blank"
                      className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

                {/* Trust */}
                <p className="mt-6 text-xs text-gray-500">
                  ✔ High-quality cameras • ✔ Professional installation • ✔ Trusted local store
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
