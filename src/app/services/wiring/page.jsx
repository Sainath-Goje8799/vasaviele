"use client";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
const wiringItems = [
  {
    name: "House Wiring Cable (1.5 sq mm)",
    price: "₹1,800 / coil",
    img: "/cableandswitch/housewiringcable1.5.jpg",
    category: "House Wires",
    desc: "Copper wire suitable for lighting points.",
  },
  {
    name: "House Wiring Cable (2.5 sq mm)",
    price: "₹2,900 / coil",
    img: "/cableandswitch/hwc2.5.jpg",
    category: "House Wires",
    desc: "Copper wire for power sockets.",
  },
  {
    name: "Industrial Power Cable",
    price: "₹6,500 / coil",
    img: "/cableandswitch/iwc.jpg",
    category: "Industrial Wires",
    desc: "Heavy-duty cable for industrial use.",
  },
  {
    name: "Flexible Wire",
    price: "₹1,200 / coil",
    img: "/cableandswitch/flexiblecables.jpg",
    category: "Flexible Wires",
    desc: "Flexible wire for appliances.",
  },
  {
    name: "Multi-Core Cable",
    price: "₹4,800 / coil",
    img: "/cableandswitch/multicorecables.jpg",
    category: "Industrial Wires",
    desc: "Multi-core cable for control panels.",
  },
  {
    name: "PVC Conduit Pipe",
    price: "₹120 / piece",
    img: "/cableandswitch/pvc.jpg",
    category: "Accessories",
    desc: "PVC pipe for concealed wiring.",
  },
  {
    name: "Modular Switchboard (6M)",
    price: "₹950",
    img: "/cableandswitch/modularswitchboard.jpg",
    category: "Switchboards",
    desc: "Modular switchboard for homes.",
  },
  {
    name: "Modular Switchboard (12M)",
    price: "₹1,650",
    img: "/cableandswitch/modularswitchboard12.jpg",
    category: "Switchboards",
    desc: "Large switchboard for halls.",
  },
  {
    name: "Non-Modular Switchboard",
    price: "₹450",
    img: "/cableandswitch/nms.jpg",
    category: "Switchboards",
    desc: "Traditional non-modular board.",
  },
  {
    name: "MCB Switch",
    price: "₹380",
    img: "/cableandswitch/mcb.jpg",
    category: "Protection Devices",
    desc: "Miniature Circuit Breaker.",
  },
  {
    name: "ELCB / RCCB",
    price: "₹2,200",
    img: "/cableandswitch/elcb.jpg",
    category: "Protection Devices",
    desc: "Shock protection safety device.",
  },
  {
    name: "Distribution Board (DB Box)",
    price: "₹3,800",
    img: "/cableandswitch/db box.jpg",
    category: "Protection Devices",
    desc: "Main electrical distribution board.",
  },
  {
    name: "Switch Socket Combo",
    price: "₹180",
    img: "/cableandswitch/sscombo.jpg",
    category: "Accessories",
    desc: "Switch and socket combo unit.",
  },
  {
    name: "Fan Regulator",
    price: "₹420",
    img: "/cableandswitch/fanregulator.jpg",
    category: "Accessories",
    desc: "Electronic fan speed regulator.",
  },
  {
    name: "Extension Board",
    price: "₹650",
    img: "/cableandswitch/extension.jpg",
    category: "Accessories",
    desc: "Power extension board with sockets.",
  },

  {
    name: "Armoured Cable (ACSR)",
    price: "₹7,200 / coil",
    img: "/cableandswitch/armouredcable.jpg",
    category: "Industrial Wires",
    desc: "Armoured cable for high current loads.",
  },
  {
    name: "Solar Wire 4 sq mm",
    price: "₹3,600 / coil",
    img: "/cableandswitch/solarwire.jpg",
    category: "Solar Wiring",
    desc: "UV-resistant wire for solar panels.",
  },
  {
    name: "Flexible Copper Wire 0.75 sq mm",
    price: "₹900 / coil",
    img: "/cableandswitch/flexible0_75.jpg",
    category: "Flexible Wires",
    desc: "Flexible wire for lighting circuits.",
  },
  {
    name: "LED Strip Wire",
    price: "₹450 / meter",
    img: "/cableandswitch/ledstripwire.jpg",
    category: "Accessories",
    desc: "Wire for LED strips and decorative lighting.",
  },
  {
    name: "Circuit Breaker 32A",
    price: "₹550",
    img: "/cableandswitch/circuitbreaker32a.jpg",
    category: "Protection Devices",
    desc: "High-quality circuit breaker.",
  },
  {
    name: "Circuit Breaker 63A",
    price: "₹950",
    img: "/cableandswitch/circuitbreaker63a.jpg",
    category: "Protection Devices",
    desc: "Industrial-grade circuit breaker.",
  },
  {
    name: "RCCB 100A",
    price: "₹4,200",
    img: "/cableandswitch/rccb100a.jpg",
    category: "Protection Devices",
    desc: "RCCB for large load protection.",
  },
  {
    name: "Modular Socket 6A",
    price: "₹120",
    img: "/cableandswitch/modularsocket6a.jpg",
    category: "Accessories",
    desc: "Standard 6A modular socket.",
  },
  {
    name: "Modular Socket 16A",
    price: "₹250",
    img: "/cableandswitch/modularsocket16a.jpg",
    category: "Accessories",
    desc: "Heavy-duty 16A modular socket.",
  },
  {
    name: "PVC Junction Box",
    price: "₹80",
    img: "/cableandswitch/junctionbox.jpg",
    category: "Accessories",
    desc: "Junction box for concealed wiring.",
  },
  {
    name: "Floor / Socket Box",
    price: "₹450",
    img: "/cableandswitch/floorbox.jpg",
    category: "Accessories",
    desc: "Floor-mounted socket box.",
  },
];


export default function WiringPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "House Wires",
    "Industrial Wires",
    "Flexible Wires",
    "Switchboards",
    "Protection Devices",
    "Accessories",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? wiringItems
      : wiringItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Wires & Switchboards
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
