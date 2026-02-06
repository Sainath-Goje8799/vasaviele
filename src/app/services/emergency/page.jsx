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
    tag: "24/7 Service",
    features: [
      "Immediate response team",
      "Available day & night",
      "Certified electricians",
      "On-site troubleshooting",
    ],
    specs: [
      "Service Area: Local & Nearby regions",
      "Response Time: Within 1 hour",
      "Coverage: Homes, Offices, Shops",
    ],
  },
  {
    name: "Power Failure Troubleshooting",
    price: "Starting ₹800",
    img: "/emergency/Power Failure Troubleshooting.jpg",
    category: "General Emergency",
    desc: "Quick diagnosis and restoration of power supply.",
    features: [
      "Identify root cause of power outage",
      "Fast restoration",
      "Safe handling of electrical faults",
    ],
    specs: [
      "Tools: Multi-meter, Voltage tester",
      "Applicable to: Residential & Commercial",
    ],
  },
  {
    name: "Short Circuit Repair",
    price: "Starting ₹1,200",
    img: "/emergency/Short Circuit Repair.jpg",
    category: "Fault Repair",
    desc: "Immediate repair of short circuits and burnt wiring.",
    features: [
      "Detects damaged wires",
      "Prevents fire hazards",
      "Safe replacement using ISI wires",
    ],
    specs: [
      "Applicable Voltage: 230V / 440V",
      "Material: Copper / ISI standard wires",
    ],
  },
  {
    name: "Burnt Wiring Replacement",
    price: "Starting ₹1,500",
    img: "/emergency/Burnt Wiring Replacement.jpg",
    category: "Fault Repair",
    desc: "Safe replacement of damaged electrical wires.",
    features: [
      "High-quality ISI wires",
      "Prevents future short circuits",
      "Fast on-site replacement",
    ],
    specs: ["Wiring Types: Copper, FRLS", "Applicable Areas: Homes & Offices"],
  },
  {
    name: "MCB / RCCB Tripping Issue",
    price: "Starting ₹700",
    img: "/emergency/MCB  RCCB Tripping Issue.jpg",
    category: "Protection Issues",
    desc: "Resolve frequent breaker tripping problems.",
    features: [
      "Identify overload or leakage",
      "Repair or replace faulty MCB/RCCB",
      "Ensures safety of appliances",
    ],
    specs: ["Voltage Rating: 230V/440V", "Applicable Current: 6A-32A"],
  },
  {
    name: "DB Box Emergency Repair",
    price: "Starting ₹2,000",
    img: "/emergency/DB Box Emergency Repair.jpg",
    category: "Protection Issues",
    desc: "Distribution board fault repair and replacement.",
    features: [
      "Inspect & repair faulty DB",
      "Replace damaged fuses or breakers",
      "Restores safe power distribution",
    ],
    specs: ["Capacity: 4-32 ways", "Material: Sheet Metal / FRP"],
  },
  {
    name: "Electric Shock Issue Rectification",
    price: "Starting ₹1,000",
    img: "/emergency/Electric Shock Issue Rectification.jpg",
    category: "Safety",
    desc: "Eliminate leakage current and shock hazards.",
    features: [
      "Detects earth leakage",
      "Corrects faulty wiring",
      "Ensures safe touchpoints",
    ],
    specs: ["Voltage Tested: 230V", "Applies to: Homes, Shops, Offices"],
  },
  {
    name: "Earthing Failure Repair",
    price: "Starting ₹2,500",
    img: "/emergency/Earthing Failure Repair.jpg",
    category: "Safety",
    desc: "Emergency earthing inspection and correction.",
    features: [
      "Checks earthing resistance",
      "Repairs broken or faulty earthing",
      "Ensures safety from shocks",
    ],
    specs: ["Earth Resistance: < 5 Ohms", "Applicable Sites: Residential & Commercial"],
  },
  {
    name: "Overheating Socket Repair",
    price: "Starting ₹600",
    img: "/emergency/Overheating Socket Repair.jpg",
    category: "Appliance Issues",
    desc: "Fix overheating plugs and sockets.",
    features: [
      "Replaces faulty sockets",
      "Prevents fire hazards",
      "Quick on-site repair",
    ],
    specs: ["Voltage: 230V", "Appliances Supported: All household devices"],
  },
  {
    name: "AC Power Emergency Repair",
    price: "Custom Quote",
    img: "/emergency/AC Power Emergency Repair.jpg",
    category: "Appliance Issues",
    desc: "Immediate electrical support for air conditioners.",
    features: [
      "Diagnose AC power issues",
      "Correct faulty wiring or plugs",
      "Ensures safe operation",
    ],
    specs: ["Voltage: 230V/440V", "Appliance: Split/Window AC units"],
  },
  {
    name: "Lift / Elevator Electrical Fault",
    price: "Custom Quote",
    img: "/emergency/Lift  Elevator Electrical Fault.jpg",
    category: "Commercial Emergency",
    desc: "Emergency electrical support for lifts.",
    features: [
      "Detect electrical faults",
      "Prevent elevator stoppages",
      "Safe and certified repair",
    ],
    specs: ["Voltage: 440V", "Commercial Buildings: Lifts & Escalators"],
  },
  {
    name: "Generator Power Failure",
    price: "Custom Quote",
    img: "/emergency/Generator Power Failure.jpg",
    category: "Commercial Emergency",
    desc: "Emergency generator electrical troubleshooting.",
    features: [
      "Diagnose generator faults",
      "Quick onsite repair",
      "Ensures backup power availability",
    ],
    specs: ["Generator Type: Diesel / Petrol", "Capacity: Up to 200 kVA"],
  },
  {
    name: "Fire Hazard Electrical Inspection",
    price: "Starting ₹3,000",
    img: "/emergency/Fire Hazard Electrical Inspection.jpg",
    category: "Safety",
    desc: "Urgent inspection after sparks or burning smell.",
    features: [
      "Detect potential fire hazards",
      "Correct faulty wiring",
      "Ensure safe electrical environment",
    ],
    specs: ["Voltage Tested: 230V", "Areas: Residential, Offices, Shops"],
  },
  {
    name: "Industrial Electrical Breakdown",
    price: "Custom Quote",
    img: "/emergency/Industrial Electrical Breakdown.jpg",
    category: "Industrial Emergency",
    desc: "Immediate response to industrial power failures.",
    features: [
      "Industrial-scale troubleshooting",
      "Fast response team",
      "Restores production quickly",
    ],
    specs: ["Voltage: 440V/3-phase", "Applicable: Factories, Workshops"],
  },
];




export default function EmergencyElectricalPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeService, setActiveService] = useState(null);

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
      : emergencyServices.filter((item) => item.category === selectedCategory);

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
            className={`px-4 py-2 rounded-full border transition ${
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
            onClick={() => setActiveService(item)}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition cursor-pointer"
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
            <p className="text-red-600 font-bold">{item.price}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Full Screen Modal */}
      {/* Full Screen Modal */}
      {activeService && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg flex items-center justify-center px-4">
          <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/80 text-white text-xl flex items-center justify-center hover:scale-110 transition"
            >
              ✕
            </button>

            {/* TOP STRIP */}
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 px-8 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Sri Vasavi Electricals ⚡</h2>
              <span className="text-sm font-semibold text-white/80">{activeService.category}</span>
            </div>

            {/* CONTENT */}
            <div className="grid lg:grid-cols-2 gap-12 p-10">
              {/* IMAGE */}
              <div className="flex items-center justify-center">
                <div className="relative bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl p-10 shadow-inner">
                  <Image
                    src={activeService.img}
                    alt={activeService.name}
                    width={420}
                    height={420}
                    className="rounded-xl hover:scale-105 transition"
                  />
                  {activeService.tag && (
                    <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {activeService.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* INFO */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{activeService.name}</h1>
                <p className="mt-2 text-gray-500">{activeService.desc}</p>

                <div className="mt-5 flex items-center gap-4">
                  <span className="text-4xl font-extrabold text-gray-800">{activeService.price}</span>
                  <span className="text-sm text-gray-500">(Approximate / On-site)</span>
                </div>

                {/* FEATURES */}
                {activeService.features && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Key Highlights & Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
                      {activeService.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 bg-gray-50 border rounded-xl px-4 py-3 text-sm">
                          <span className="text-red-600">✔</span> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SPECIFICATIONS */}
                {activeService.specs && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Technical Specifications</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {activeService.specs.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA BUTTONS */}
                <div className="mt-10 p-6 bg-gray-50 border rounded-2xl flex flex-wrap gap-4 justify-between">
                  <div className="text-sm text-gray-600">
                    📍 Mudhole Store<br />⚡ 24/7 Emergency Electrical Assistance
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="tel:9985227139"
                      className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black"
                    >
                      📞 Call Now
                    </a>
                    <a
                      href="https://wa.me/919985227139"
                      target="_blank"
                      className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

                <p className="mt-6 text-xs text-gray-500">
                  ✔ Rapid Response • ✔ Certified Electricians • ✔ Trusted Local Store
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
