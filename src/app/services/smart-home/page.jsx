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
    highlights: [
      "Control from anywhere via mobile app",
      "Works with Alexa & Google Assistant",
      "Energy monitoring supported"
    ],
    details: [
      "WiFi 2.4 GHz compatible",
      "Max load 10A per gang",
      "Supports scheduling & timers",
      "Compact & sleek design"
    ],
    badge: "Bestseller"
  },
  {
    name: "Smart WiFi Switch (4 Gang)",
    price: "₹2,800",
    img: "/smarthome/Smart WiFi Switch (4 Gang).jpg",
    category: "Smart Switches",
    desc: "Control multiple lights via mobile app.",
    highlights: [
      "Four independent switches",
      "App control & voice commands",
      "Scene and timer settings"
    ],
    details: [
      "WiFi 2.4 GHz",
      "Max 10A per gang",
      "Supports Alexa & Google Home",
      "Durable ABS material"
    ],
    badge: "Popular"
  },
  {
    name: "Smart Plug 16A",
    price: "₹1,450",
    img: "/smarthome/Smart Plug 16A.jpg",
    category: "Smart Plugs",
    desc: "Heavy-duty smart plug with energy monitoring.",
    highlights: [
      "Monitor energy consumption",
      "Remote on/off control",
      "Compatible with Alexa & Google Assistant"
    ],
    details: [
      "16A max load",
      "Overload protection",
      "Compact design",
      "WiFi 2.4 GHz"
    ],
    badge: "Hot"
  },
  {
    name: "Smart Bulb RGB",
    price: "₹950",
    img: "/smarthome/Smart Bulb RGB.jpg",
    category: "Smart Lighting",
    desc: "RGB smart bulb with voice control.",
    highlights: [
      "16 million colors",
      "Dimmable & schedule support",
      "Works with Alexa & Google Assistant"
    ],
    details: [
      "WiFi 2.4 GHz",
      "9W LED bulb",
      "Lifespan 25,000 hours",
      "Supports scenes & moods"
    ],
    badge: "Trending"
  },
  {
    name: "Smart LED Strip",
    price: "₹1,800",
    img: "/smarthome/Smart LED Strip.jpg",
    category: "Smart Lighting",
    desc: "Color-changing LED strip with app control.",
    highlights: [
      "16 million colors with brightness control",
      "Sync with music & movies",
      "Schedule & timers via app"
    ],
    details: [
      "5 meters length",
      "Adhesive backing for easy installation",
      "WiFi 2.4 GHz",
      "Compatible with Alexa & Google Assistant"
    ]
  },
  {
    name: "Smart Door Lock",
    price: "₹12,500",
    img: "/smarthome/Smart Door Lock.jpg",
    category: "Security",
    desc: "Fingerprint and PIN-based smart door lock.",
    highlights: [
      "Fingerprint, PIN, & mechanical key access",
      "Mobile app remote control",
      "Tamper alarm & auto-lock"
    ],
    details: [
      "Battery powered (6 months life)",
      "Supports up to 100 users",
      "Compatible with most doors",
      "Stainless steel construction"
    ],
    badge: "Premium"
  },
  {
    name: "Smart Video Door Bell",
    price: "₹4,800",
    img: "/smarthome/Smart Video Door Bell.jpg",
    category: "Security",
    desc: "Video door bell with mobile notifications.",
    highlights: [
      "1080p HD video",
      "Two-way audio",
      "Motion detection & alerts"
    ],
    details: [
      "Night vision enabled",
      "Works with WiFi 2.4 GHz",
      "Cloud storage support",
      "Weatherproof design"
    ]
  },
  {
    name: "Smart Motion Sensor",
    price: "₹1,600",
    img: "/smarthome/Smart Motion Sensor.jpg",
    category: "Sensors",
    desc: "Motion detection sensor for automation.",
    highlights: [
      "Trigger lights & alarms automatically",
      "Adjustable sensitivity",
      "Battery powered"
    ],
    details: [
      "Wireless WiFi 2.4 GHz",
      "Range: 7 meters",
      "Angle: 120°",
      "Compatible with smart home hubs"
    ]
  },
  {
    name: "Smart Door / Window Sensor",
    price: "₹1,200",
    img: "/smarthome/Smart Door.jpg",
    category: "Sensors",
    desc: "Detects door or window opening.",
    highlights: [
      "Real-time alerts to phone",
      "Trigger automation routines",
      "Easy installation"
    ],
    details: [
      "Wireless WiFi 2.4 GHz",
      "Battery life up to 1 year",
      "Compact & lightweight",
      "Works with Alexa & Google Home"
    ]
  },
  {
    name: "Smart Smoke Sensor",
    price: "₹2,400",
    img: "/smarthome/Smart Smoke Sensor.jpg",
    category: "Sensors",
    desc: "Smart smoke detector with alerts.",
    highlights: [
      "Immediate alerts to phone",
      "Integrated alarm sound",
      "Battery powered"
    ],
    details: [
      "WiFi 2.4 GHz",
      "Easy mounting",
      "Works with smart home hub",
      "Test & silence button"
    ]
  },
  {
    name: "Smart IR Remote Hub",
    price: "₹2,200",
    img: "/smarthome/Smart IR Remote Hub.jpg",
    category: "Controllers",
    desc: "Control AC, TV & appliances via phone.",
    highlights: [
      "Universal IR controller",
      "Set schedules & timers",
      "Works with Alexa & Google Home"
    ],
    details: [
      "WiFi 2.4 GHz",
      "Infrared range: 8 meters",
      "Compatible with most devices",
      "Compact design"
    ]
  },
  {
    name: "Smart Home Hub",
    price: "₹3,500",
    img: "/smarthome/Smart Home Hub.jpg",
    category: "Controllers",
    desc: "Central hub for all smart devices.",
    highlights: [
      "Connects multiple smart devices",
      "Voice & app control",
      "Automate routines easily"
    ],
    details: [
      "WiFi 2.4 GHz & Zigbee compatible",
      "Supports up to 50 devices",
      "Firmware updates via app",
      "Elegant compact design"
    ]
  },
  {
    name: "Voice Assistant (Alexa)",
    price: "₹4,200",
    img: "/smarthome/Voice Assistant (Alexa).jpg",
    category: "Voice Control",
    desc: "Voice control for smart home devices.",
    highlights: [
      "Hands-free voice commands",
      "Music, alarms, and routines",
      "Works with many smart devices"
    ],
    details: [
      "WiFi 2.4 GHz",
      "Supports multiple languages",
      "Far-field microphone",
      "Compatible with Alexa ecosystem"
    ]
  },
  {
    name: "Voice Assistant (Google Nest)",
    price: "₹4,500",
    img: "/smarthome/Voice Assistant.jpg",
    category: "Voice Control",
    desc: "Google-powered smart voice assistant.",
    highlights: [
      "Control devices via Google Assistant",
      "Voice reminders & schedules",
      "Streaming & smart routines"
    ],
    details: [
      "WiFi 2.4 GHz",
      "Supports multiple users",
      "Far-field microphone",
      "Compatible with Google ecosystem"
    ]
  }
];

export default function SmartHomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

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
      : smartHomeItems.filter((item) => item.category === selectedCategory);

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
            onClick={() => setActiveItem(item)}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="mx-auto h-40 object-contain"
            />
            <h3 className="text-lg font-semibold mt-3 text-black">
              {item.name}
            </h3>
            {item.price && (
              <p className="text-green-600 font-bold">{item.price}</p>
            )}
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 🔥 FULL-SCREEN SMART HOME MODAL */}
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

            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                Smart Home Systems ⚡
              </h2>
              <span className="text-sm font-semibold text-white/90">
                Advanced & Connected Devices
              </span>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 p-10">
              {/* Image Section */}
              <div className="flex items-center justify-center">
                <div className="relative bg-gradient-to-br from-indigo-200 to-purple-400 rounded-2xl p-10 shadow-inner">
                  <Image
                    src={activeItem.img}
                    alt={activeItem.name}
                    width={420}
                    height={420}
                    className="rounded-xl transition-transform duration-300 hover:scale-105"
                  />
                  {activeItem.badge && (
                    <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {activeItem.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Info Section */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {activeItem.name}
                </h1>
                {activeItem.price && (
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-4xl font-extrabold text-purple-600">
                      {activeItem.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      (Inclusive of taxes)
                    </span>
                  </div>
                )}

                {/* Key Highlights */}
                {activeItem.highlights && activeItem.highlights.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                      Key Highlights
                    </h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {activeItem.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Description */}
                <p className="mt-6 text-gray-700 leading-relaxed">
                  {activeItem.desc}
                </p>

                {/* Features / Details */}
                {activeItem.details && activeItem.details.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4 text-indigo-600">
                      Features & Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeItem.details.map((d, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-gray-50 border rounded-xl px-4 py-3 text-sm font-medium text-gray-800"
                        >
                          <span className="text-green-600">✔</span>
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="mt-10 p-6 bg-gray-50 border rounded-2xl flex flex-wrap gap-4 items-center justify-between">
                  <div className="text-sm text-gray-600">
                    📍 Available at our store  
                    <br />
                    ⚡ Installation & Smart Setup support
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

                <p className="mt-6 text-xs text-gray-500">
                  ✔ High-quality • ✔ Reliable • ✔ Trusted smart home solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
