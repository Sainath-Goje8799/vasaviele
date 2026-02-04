"use client";

import Image from "next/image";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const emergencyServices = [
  {
    name: "24/7 Electrical Emergency Support",
    price: "On Call",
    img: "/emergency/24 Electrical Emergency Support.jpg",
    category: "General Emergency",
    desc: "Round-the-clock emergency electrical assistance.",
  },
  {
    name: "Power Failure Troubleshooting",
    price: "Starting ₹800",
    img: "/emergency/Power Failure Troubleshooting.jpg",
    category: "General Emergency",
    desc: "Quick diagnosis and restoration of power supply.",
  },
  {
    name: "Short Circuit Repair",
    price: "Starting ₹1,200",
    img: "/emergency/Short Circuit Repair.jpg",
    category: "Fault Repair",
    desc: "Immediate repair of short circuits and burnt wiring.",
  },
  {
    name: "Burnt Wiring Replacement",
    price: "Starting ₹1,500",
    img: "/emergency/Burnt Wiring Replacement.jpg",
    category: "Fault Repair",
    desc: "Safe replacement of damaged electrical wires.",
  },
  {
    name: "MCB / RCCB Tripping Issue",
    price: "Starting ₹700",
    img: "/emergency/MCB  RCCB Tripping Issue.jpg",
    category: "Protection Issues",
    desc: "Resolve frequent breaker tripping problems.",
  },
  {
    name: "DB Box Emergency Repair",
    price: "Starting ₹2,000",
    img: "/emergency/DB Box Emergency Repair.jpg",
    category: "Protection Issues",
    desc: "Distribution board fault repair and replacement.",
  },
  {
    name: "Electric Shock Issue Rectification",
    price: "Starting ₹1,000",
    img: "/emergency/Electric Shock Issue Rectification.jpg",
    category: "Safety",
    desc: "Eliminate leakage current and shock hazards.",
  },
  {
    name: "Earthing Failure Repair",
    price: "Starting ₹2,500",
    img: "/emergency/Earthing Failure Repair.jpg",
    category: "Safety",
    desc: "Emergency earthing inspection and correction.",
  },
  {
    name: "Overheating Socket Repair",
    price: "Starting ₹600",
    img: "/emergency/Overheating Socket Repair.jpg",
    category: "Appliance Issues",
    desc: "Fix overheating plugs and sockets.",
  },
  {
    name: "AC Power Emergency Repair",
    price: "Custom Quote",
    img: "/emergency/AC Power Emergency Repair.jpg",
    category: "Appliance Issues",
    desc: "Immediate electrical support for air conditioners.",
  },
  {
    name: "Lift / Elevator Electrical Fault",
    price: "Custom Quote",
    img: "/emergency/Lift  Elevator Electrical Fault.jpg",
    category: "Commercial Emergency",
    desc: "Emergency electrical support for lifts.",
  },
  {
    name: "Generator Power Failure",
    price: "Custom Quote",
    img: "/emergency/Generator Power Failure.jpg",
    category: "Commercial Emergency",
    desc: "Emergency generator electrical troubleshooting.",
  },
  {
    name: "Fire Hazard Electrical Inspection",
    price: "Starting ₹3,000",
    img: "/emergency/Fire Hazard Electrical Inspection.jpg",
    category: "Safety",
    desc: "Urgent inspection after sparks or burning smell.",
  },
  
  {
    name: "Industrial Electrical Breakdown",
    price: "Custom Quote",
    img: "/emergency/Industrial Electrical Breakdown.jpg",
    category: "Industrial Emergency",
    desc: "Immediate response to industrial power failures.",
  },
  
];

export default function EmergencyElectricalPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "General Emergency",
    "Fault Repair",
    "Protection Issues",
    "Safety",
    "Appliance Issues",
    "Commercial Emergency",
    "Industrial Emergency",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? emergencyServices
      : emergencyServices.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        Emergency Electrical Services
      </h1>

      <p className="text-gray-600 mb-6 max-w-4xl">
        Fast, reliable emergency electrical services to protect life,
        property, and equipment. Available 24/7 for homes, offices,
        commercial buildings, and industries.
      </p>

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
                  ? "bg-red-600 text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
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
            <p className="text-red-600 font-bold">
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
