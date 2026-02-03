"use client";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const smartHomeItems = [
  {
    name: "Smart WiFi Switch (1 Gang)",
    price: "₹1,200",
    img: "/smarthome/Smart WiFi Switch (1 Gang).png",
    category: "Smart Switches",
    desc: "WiFi-enabled smart switch with app control.",
  },
  {
    name: "Smart WiFi Switch (4 Gang)",
    price: "₹2,800",
    img: "/smarthome/Smart WiFi Switch (4 Gang).jpg",
    category: "Smart Switches",
    desc: "Control multiple lights via mobile app.",
  },
  {
    name: "Smart Plug 16A",
    price: "₹1,450",
    img: "/smarthome/Smart Plug 16A.jpg",
    category: "Smart Plugs",
    desc: "Heavy-duty smart plug with energy monitoring.",
  },
  {
    name: "Smart Bulb RGB",
    price: "₹950",
    img: "/smarthome/Smart Bulb RGB.jpg",
    category: "Smart Lighting",
    desc: "RGB smart bulb with voice control.",
  },
  {
    name: "Smart LED Strip",
    price: "₹1,800",
    img: "/smarthome/Smart LED Strip.jpg",
    category: "Smart Lighting",
    desc: "Color-changing LED strip with app control.",
  },
  {
    name: "Smart Door Lock",
    price: "₹12,500",
    img: "/smarthome/Smart Door Lock.jpg",
    category: "Security",
    desc: "Fingerprint and PIN-based smart door lock.",
  },
  {
    name: "Smart Video Door Bell",
    price: "₹4,800",
    img: "/smarthome/Smart Video Door Bell.jpg",
    category: "Security",
    desc: "Video door bell with mobile notifications.",
  },
  {
    name: "Smart Motion Sensor",
    price: "₹1,600",
    img: "/smarthome/Smart Motion Sensor.jpg",
    category: "Sensors",
    desc: "Motion detection sensor for automation.",
  },
  {
    name: "Smart Door / Window Sensor",
    price: "₹1,200",
    img: "/smarthome/Smart Door.jpg",
    category: "Sensors",
    desc: "Detects door or window opening.",
  },
  {
    name: "Smart Smoke Sensor",
    price: "₹2,400",
    img: "/smarthome/Smart Smoke Sensor.jpg",
    category: "Sensors",
    desc: "Smart smoke detector with alerts.",
  },
  {
    name: "Smart IR Remote Hub",
    price: "₹2,200",
    img: "/smarthome/Smart IR Remote Hub.jpg",
    category: "Controllers",
    desc: "Control AC, TV & appliances via phone.",
  },
  {
    name: "Smart Home Hub",
    price: "₹3,500",
    img: "/smarthome/Smart Home Hub.jpg",
    category: "Controllers",
    desc: "Central hub for all smart devices.",
  },
  {
    name: "Voice Assistant (Alexa)",
    price: "₹4,200",
    img: "/smarthome/Voice Assistant (Alexa).jpg",
    category: "Voice Control",
    desc: "Voice control for smart home devices.",
  },
  {
    name: "Voice Assistant (Google Nest)",
    price: "₹4,500",
    img: "/smarthome/Voice Assistant.jpg",
    category: "Voice Control",
    desc: "Google-powered smart voice assistant.",
  },
  
];

export default function SmartHomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Smart Switches",
    "Smart Plugs",
    "Smart Lighting",
    "Security",
    "Sensors",
    "Controllers",
    "Voice Control",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? smartHomeItems
      : smartHomeItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Smart Home Systems
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
