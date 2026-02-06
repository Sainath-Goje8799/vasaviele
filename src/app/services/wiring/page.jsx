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
    details: [
      "1.5 sq mm copper conductor",
      "Ideal for lighting circuits",
      "High insulation strength",
      "Long-lasting performance",
    ],
  },
  {
    name: "House Wiring Cable (2.5 sq mm)",
    price: "₹2,900 / coil",
    img: "/cableandswitch/hwc2.5.jpg",
    category: "House Wires",
    desc: "Copper wire for power sockets.",
    details: [
      "2.5 sq mm copper wire",
      "Suitable for power points",
      "Low voltage drop",
      "Heat resistant insulation",
    ],
  },
  {
    name: "Industrial Power Cable",
    price: "₹6,500 / coil",
    img: "/cableandswitch/iwc.jpg",
    category: "Industrial Wires",
    desc: "Heavy-duty cable for industrial use.",
    details: [
      "High current capacity",
      "Industrial-grade insulation",
      "Rugged construction",
      "Factory & machinery use",
    ],
  },
  {
    name: "Flexible Wire",
    price: "₹1,200 / coil",
    img: "/cableandswitch/flexiblecables.jpg",
    category: "Flexible Wires",
    desc: "Flexible wire for appliances.",
    details: [
      "Multi-strand copper wire",
      "Highly flexible",
      "Ideal for appliances",
      "Easy installation",
    ],
  },
  {
    name: "Multi-Core Cable",
    price: "₹4,800 / coil",
    img: "/cableandswitch/multicorecables.jpg",
    category: "Industrial Wires",
    desc: "Multi-core cable for control panels.",
    details: [
      "Multiple insulated cores",
      "Control panel suitable",
      "High durability",
      "Industrial application",
    ],
  },
  {
    name: "PVC Conduit Pipe",
    price: "₹120 / piece",
    img: "/cableandswitch/pvc.jpg",
    category: "Accessories",
    desc: "PVC pipe for concealed wiring.",
    details: [
      "Rigid PVC material",
      "Concealed wiring support",
      "Moisture resistant",
      "Long service life",
    ],
  },
  {
    name: "Modular Switchboard (6M)",
    price: "₹950",
    img: "/cableandswitch/modularswitchboard.jpg",
    category: "Switchboards",
    desc: "Modular switchboard for homes.",
    details: [
      "6 module capacity",
      "Modern modular design",
      "Shock-proof body",
      "Easy maintenance",
    ],
  },
  {
    name: "Modular Switchboard (12M)",
    price: "₹1,650",
    img: "/cableandswitch/modularswitchboard12.jpg",
    category: "Switchboards",
    desc: "Large switchboard for halls.",
    details: [
      "12 module capacity",
      "Ideal for halls",
      "Premium finish",
      "Safe & durable",
    ],
  },
  {
    name: "Non-Modular Switchboard",
    price: "₹450",
    img: "/cableandswitch/nms.jpg",
    category: "Switchboards",
    desc: "Traditional non-modular board.",
    details: [
      "Traditional design",
      "Cost effective",
      "Durable switches",
      "Residential use",
    ],
  },
  {
    name: "MCB Switch",
    price: "₹380",
    img: "/cableandswitch/mcb.jpg",
    category: "Protection Devices",
    desc: "Miniature Circuit Breaker.",
    details: [
      "Overload protection",
      "Fast tripping",
      "Compact size",
      "Essential safety device",
    ],
  },
  {
    name: "ELCB / RCCB",
    price: "₹2,200",
    img: "/cableandswitch/elcb.jpg",
    category: "Protection Devices",
    desc: "Shock protection safety device.",
    details: [
      "Leakage current protection",
      "Prevents electric shock",
      "High sensitivity",
      "Mandatory safety equipment",
    ],
  },
  {
    name: "Distribution Board (DB Box)",
    price: "₹3,800",
    img: "/cableandswitch/db box.jpg",
    category: "Protection Devices",
    desc: "Main electrical distribution board.",
    details: [
      "Multiple MCB slots",
      "Main power distribution",
      "Strong metal body",
      "Residential & commercial use",
    ],
  },
  {
    name: "Switch Socket Combo",
    price: "₹180",
    img: "/cableandswitch/sscombo.jpg",
    category: "Accessories",
    desc: "Switch and socket combo unit.",
    details: [
      "Compact combo unit",
      "Easy installation",
      "Space saving",
      "Home usage",
    ],
  },
  {
    name: "Fan Regulator",
    price: "₹420",
    img: "/cableandswitch/fanregulator.jpg",
    category: "Accessories",
    desc: "Electronic fan speed regulator.",
    details: [
      "Smooth speed control",
      "Energy efficient",
      "Modern design",
      "Long lifespan",
    ],
  },
  {
    name: "Extension Board",
    price: "₹650",
    img: "/cableandswitch/extension.jpg",
    category: "Accessories",
    desc: "Power extension board with sockets.",
    details: [
      "Multiple socket support",
      "Surge protection",
      "Durable cable",
      "Portable usage",
    ],
  },
  {
  name: "Armoured Cable (ACSR)",
  price: "₹7,200 / coil",
  img: "/cableandswitch/armouredcable.jpg",
  category: "Industrial Wires",
  desc: "Armoured cable for high current loads.",
  details: [
    "Steel armoured protection",
    "Suitable for heavy loads",
    "Underground & outdoor use",
    "Industrial-grade durability",
  ],
},
{
  name: "Solar Wire 4 sq mm",
  price: "₹3,600 / coil",
  img: "/cableandswitch/solarwire.jpg",
  category: "Solar Wiring",
  desc: "UV-resistant wire for solar panels.",
  details: [
    "UV & heat resistant",
    "Ideal for solar panels",
    "Low power loss",
    "Weatherproof insulation",
  ],
},
{
  name: "Flexible Copper Wire 0.75 sq mm",
  price: "₹900 / coil",
  img: "/cableandswitch/flexible0_75.jpg",
  category: "Flexible Wires",
  desc: "Flexible wire for lighting circuits.",
  details: [
    "0.75 sq mm copper wire",
    "Highly flexible strands",
    "Lighting applications",
    "Easy routing & installation",
  ],
},
{
  name: "LED Strip Wire",
  price: "₹450 / meter",
  img: "/cableandswitch/ledstripwire.jpg",
  category: "Accessories",
  desc: "Wire for LED strips and decorative lighting.",
  details: [
    "Low voltage compatible",
    "Ideal for LED strips",
    "Flexible insulation",
    "Decorative lighting use",
  ],
},
{
  name: "Circuit Breaker 32A",
  price: "₹550",
  img: "/cableandswitch/circuitbreaker32a.jpg",
  category: "Protection Devices",
  desc: "High-quality circuit breaker.",
  details: [
    "32 Amp capacity",
    "Overload protection",
    "Fast tripping response",
    "Reliable safety device",
  ],
},
{
  name: "Circuit Breaker 63A",
  price: "₹950",
  img: "/cableandswitch/circuitbreaker63a.jpg",
  category: "Protection Devices",
  desc: "Industrial-grade circuit breaker.",
  details: [
    "63 Amp heavy load support",
    "Industrial application",
    "High breaking capacity",
    "Long operational life",
  ],
},
{
  name: "RCCB 100A",
  price: "₹4,200",
  img: "/cableandswitch/rccb100a.jpg",
  category: "Protection Devices",
  desc: "RCCB for large load protection.",
  details: [
    "100 Amp capacity",
    "Earth leakage protection",
    "Shock prevention",
    "Commercial & industrial use",
  ],
},
{
  name: "Modular Socket 6A",
  price: "₹120",
  img: "/cableandswitch/modularsocket6a.jpg",
  category: "Accessories",
  desc: "Standard 6A modular socket.",
  details: [
    "6 Amp rating",
    "Modular design",
    "Safe socket housing",
    "Home electrical use",
  ],
},
{
  name: "Modular Socket 16A",
  price: "₹250",
  img: "/cableandswitch/modularsocket16a.jpg",
  category: "Accessories",
  desc: "Heavy-duty 16A modular socket.",
  details: [
    "16 Amp power socket",
    "Heavy load support",
    "Durable contacts",
    "Kitchen & AC use",
  ],
},
{
  name: "PVC Junction Box",
  price: "₹80",
  img: "/cableandswitch/junctionbox.jpg",
  category: "Accessories",
  desc: "Junction box for concealed wiring.",
  details: [
    "PVC insulated body",
    "Concealed wiring support",
    "Fire resistant",
    "Easy wire management",
  ],
},
{
  name: "Floor / Socket Box",
  price: "₹450",
  img: "/cableandswitch/floorbox.jpg",
  category: "Accessories",
  desc: "Floor-mounted socket box.",
  details: [
    "Floor mounting design",
    "Office & hall usage",
    "Durable metal body",
    "Safe concealed sockets",
  ],
},

];
export default function WiringPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeWire, setActiveWire] = useState(null);

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

      {/* CATEGORY FILTER */}
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

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveWire(item)}
            className="cursor-pointer bg-white border rounded-lg p-4 shadow-sm hover:shadow-xl transition"
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

      {/* 🔥 ULTRA PREMIUM WIRE MODAL */}
      {activeWire && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg flex items-center justify-center px-4">

          <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setActiveWire(null)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/80 text-white text-xl flex items-center justify-center hover:scale-110 transition"
            >
              ✕
            </button>

            {/* TOP STRIP */}
            <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 px-8 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                Sri Vasavi Electricals ⚡
              </h2>
              <span className="text-sm font-semibold text-white/90">
                Premium Wires & Cables
              </span>
            </div>

            {/* CONTENT */}
            <div className="grid lg:grid-cols-2 gap-12 p-10">

              {/* IMAGE */}
              <div className="flex items-center justify-center">
                <div className="relative bg-gradient-to-br from-yellow-500 to-orange-700 rounded-2xl p-10 shadow-inner">
                  <Image
                    src={activeWire.img}
                    alt={activeWire.name}
                    width={420}
                    height={420}
                    className="rounded-xl hover:scale-105 transition"
                  />
                  <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    ISI Certified
                  </span>
                </div>
              </div>

              {/* INFO */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {activeWire.name}
                </h1>

                <p className="mt-2 text-gray-500">
                  High quality electrical wire for safe & reliable wiring
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <span className="text-4xl font-extrabold text-orange-600">
                    {activeWire.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    (Inclusive of taxes)
                  </span>
                </div>

                <p className="mt-6 text-gray-700">
                  {activeWire.desc}
                </p>

                {/* FEATURES */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-orange-600">
                    Specifications & Features
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-gray-800">
                    {(activeWire.details || []).map((d, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-gray-50 border rounded-xl px-4 py-3 text-sm"
                      >
                        <span className="text-green-600">✔</span>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 p-6 bg-gray-50 border rounded-2xl flex flex-wrap gap-4 justify-between">
                  <div className="text-sm text-gray-600">
                    📍 Mudhole Store  
                    <br />
                    ⚡ Wiring & installation available
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="tel:9985227139"
                      className="px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700"
                    >
                      📞 Call
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
                  ✔ ISI Certified • ✔ Fire resistant • ✔ Trusted local store
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
