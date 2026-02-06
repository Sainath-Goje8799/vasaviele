"use client";
import Image from "next/image";
import { useState } from "react";

const generalServices = [
  {
    name: "3-Pin Plug",
    img: "/general/3-pin Plug.jpg",
    category: "Accessories",
    desc: "Heavy-duty 3-pin plug suitable for irons, refrigerators, and power tools.",
    use: "Homes • Shops • Offices",
    details: [
      "Heavy-duty copper pins",
      "Heat-resistant plastic body",
      "Compatible with all 3-pin sockets",
      "Safe for high-load appliances",
    ],
  },
  {
    name: "2-Pin Plug",
    img: "/general/2-Pin Plug.jpg",
    category: "Accessories",
    desc: "Standard 2-pin plug for chargers, lamps, and low-load appliances.",
    use: "Homes • Shops",
    details: [
      "Compact and lightweight",
      "Durable plastic insulation",
      "For low-current appliances",
      "Easy to plug and remove",
    ],
  },
  {
    name: "Modular Electrical Switch",
    img: "/general/Modular Electrical Switch.jpg",
    category: "Switches",
    desc: "Smooth-action modular switch with long life and premium finish.",
    use: "Homes • Offices",
    details: [
      "High-quality modular design",
      "Long life (>1,00,000 cycles)",
      "Premium finish",
      "Safe and spark-free",
    ],
  },
  {
    name: "Switch Socket (6A / 16A)",
    img: "/general/socket.jpg",
    category: "Switches",
    desc: "Safe and durable sockets for regular and heavy electrical loads.",
    use: "Homes • Shops • Commercial",
    details: [
      "Multiple ratings available (6A, 16A)",
      "Durable and fire-resistant",
      "Compatible with modular plates",
      "Smooth switch action",
    ],
  },
  {
    name: "Fuse & Fuse Base",
    img: "/general/fuse.jpg",
    category: "Protection & Safety",
    desc: "Essential safety component to prevent electrical damage.",
    use: "Residential • Commercial",
    details: [
      "Protects circuits from overload",
      "Easy to replace fuses",
      "High-quality ceramic base",
      "Reliable electrical protection",
    ],
  },
  {
    name: "Copper Electrical Wire (ISI)",
    img: "/general/wire.jpg",
    category: "Wires & Cables",
    desc: "High-grade copper wire for safe and efficient current flow.",
    use: "Homes • Offices • Factories",
    details: [
      "100% pure copper conductor",
      "ISI certified",
      "Flexible and durable insulation",
      "Safe for all electrical installations",
    ],
  },
  {
    name: "Flexible Wire",
    img: "/general/Flexible Wire.jpg",
    category: "Wires & Cables",
    desc: "Flexible insulated wire for appliances and panel wiring.",
    use: "Appliances • Control Panels",
    details: [
      "Highly flexible and bendable",
      "Safe for appliance wiring",
      "Heat-resistant insulation",
      "Easy installation in tight spaces",
    ],
  },
  {
    name: "Concealed PVC Box",
    img: "/general/Concealed PVC Box.jpg",
    category: "Accessories",
    desc: "Used for concealed wiring and modular switch fitting.",
    use: "New Constructions • Renovation",
    details: [
      "Durable PVC construction",
      "Fire-resistant material",
      "Perfect for concealed wiring",
      "Easy mounting for switches",
    ],
  },
  {
    name: "Modular Switch Plate",
    img: "/general/modularswitchplate.jpg",
    category: "Switches",
    desc: "Stylish and durable plates for modular switches.",
    use: "Homes • Offices • Hotels",
    details: [
      "Elegant and modern design",
      "Scratch-resistant surface",
      "Fits standard modular switches",
      "Durable and long-lasting",
    ],
  },
  {
    name: "Ceiling Rose",
    img: "/general/ceiling rose.jpg",
    category: "Accessories",
    desc: "Safe connection point for ceiling fans and lights.",
    use: "Homes • Shops",
    details: [
      "Secure fan and light connection",
      "Durable plastic body",
      "Supports various fan models",
      "Easy installation",
    ],
  },
  {
    name: "Extension Board",
    img: "/general/Extension Board.jpg",
    category: "Accessories",
    desc: "Multi-socket extension board with overload protection.",
    use: "Homes • Offices • Temporary setups",
    details: [
      "Multiple sockets for devices",
      "Overload protection included",
      "Durable and heat-resistant",
      "Compact and portable",
    ],
  },
  {
    name: "Cable Clips & Saddles",
    img: "/general/cableclip.jpg",
    category: "Accessories",
    desc: "Helps in neat and secure wire routing.",
    use: "Surface Wiring • Maintenance",
    details: [
      "Secure wire placement",
      "Prevents tangling",
      "Easy to install",
      "Durable plastic construction",
    ],
  },
  {
    name: "Electrical Tape & Insulation",
    img: "/general/Electrical Tape & Insulation.jpg",
    category: "Accessories",
    desc: "High insulation tape for safe electrical joints.",
    use: "Repairs • Maintenance",
    details: [
      "Strong adhesive",
      "High insulation property",
      "Heat and moisture resistant",
      "Easy to cut and apply",
    ],
  },
  {
    name: "Earthing Clamp & Accessories",
    img: "/general/Earthing Clamp & Accessories.jpg",
    category: "Protection & Safety",
    desc: "Ensures proper grounding for electrical safety.",
    use: "Homes • Industrial",
    details: [
      "High-quality copper clamps",
      "Secure connection to grounding rods",
      "Prevents electrical shocks",
      "Durable and corrosion-resistant",
    ],
  },
];



export default function GeneralElectricalPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const categories = [
    "All",
    "Accessories",
    "Switches",
    "Wires & Cables",
    "Protection & Safety",
  ];

  const filteredServices =
    selectedCategory === "All"
      ? generalServices
      : generalServices.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        General Electrical Services & Accessories
      </h1>

      <p className="text-gray-600 mb-6 max-w-3xl">
        Reliable, safe, and long-lasting electrical solutions for homes,
        shops, offices, and industrial sites.
      </p>

      {/* CATEGORY FILTER */}
      <div className="flex gap-3 flex-wrap mb-8">
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

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredServices.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveItem(item)}
            className="cursor-pointer bg-white border rounded-lg p-4 shadow-sm hover:shadow-xl transition"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={200}
              height={200}
              className="mx-auto object-contain"
            />
            <h3 className="text-lg font-semibold mt-3 text-gray-900">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {item.desc}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Suitable for:{" "}
              <span className="font-medium">{item.use}</span>
            </p>
          </div>
        ))}
      </div>

      {/* 🔥 FULL SCREEN MODAL */}
{activeItem && (
  <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center px-4 overflow-y-auto">

    <div className="relative w-full max-w-md sm:max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">

      {/* CLOSE */}
      <button
        onClick={() => setActiveItem(null)}
        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white text-lg flex items-center justify-center hover:scale-110 transition"
      >
        ✕
      </button>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 px-4 py-2 sm:px-8 sm:py-4 flex justify-between items-center">
        <h2 className="text-base sm:text-xl font-bold text-white">
          Sri Vasavi Electricals ⚡
        </h2>
        <span className="text-xs sm:text-sm font-semibold text-white/90">
          Electrical Essentials
        </span>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 p-3 sm:p-10">

        {/* IMAGE */}
        <div className="flex items-center justify-center">
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl p-4 sm:p-10 w-full">
            <Image
              src={activeItem.img}
              alt={activeItem.name}
              width={300}
              height={300}
              className="rounded-lg w-full max-h-[250px] sm:max-h-[420px] object-contain"
            />
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
              Quality Assured
            </span>
          </div>
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
            {activeItem.name}
          </h1>

          <p className="mt-1 sm:mt-3 text-gray-600 text-xs sm:text-sm">
            {activeItem.desc}
          </p>

          <p className="mt-1 sm:mt-4 text-xs sm:text-sm text-gray-500">
            Suitable for:{" "}
            <span className="font-semibold">{activeItem.use}</span>
          </p>

          {/* FEATURES */}
          <div className="mt-2 sm:mt-6">
            <h3 className="text-sm sm:text-lg font-semibold text-green-700 mb-2 sm:mb-3">
              Key Highlights
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-3">
              {(activeItem.details || []).map((d, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 bg-gray-50 border rounded-lg px-2 py-1 text-xs sm:text-sm font-medium text-gray-800"
                >
                  <span className="text-green-600">✔</span>
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-3 sm:mt-10 p-3 sm:p-6 bg-gray-50 border rounded-xl flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-between">
            <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-0">
              📍 Available at Mudhole Store <br /> ⚡ Installation & service support available
            </div>

            <div className="flex gap-2 sm:gap-3 flex-wrap">
              <a
                href="tel:9985227139"
                className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 text-xs sm:text-sm transition"
              >
                📞 Call
              </a>

              <a
                href="https://wa.me/919985227139"
                target="_blank"
                className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 text-xs sm:text-sm transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* TRUST */}
          <p className="mt-2 sm:mt-6 text-xs sm:text-sm text-gray-500">
            ✔ Trusted brands • ✔ ISI quality • ✔ Expert guidance
          </p>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
