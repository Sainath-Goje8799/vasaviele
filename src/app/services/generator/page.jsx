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
  },
  {
    name: "2-Pin Plug",
    img: "/general/2-Pin Plug.jpg",
    category: "Accessories",
    desc: "Standard 2-pin plug for chargers, lamps, and low-load appliances.",
    use: "Homes • Shops",
  },
  {
    name: "Modular Electrical Switch",
    img: "/general/Modular Electrical Switch.jpg",
    category: "Switches",
    desc: "Smooth-action modular switch with long life and premium finish.",
    use: "Homes • Offices",
  },
  {
    name: "Switch Socket (6A / 16A)",
    img: "/general/socket.jpg",
    category: "Switches",
    desc: "Safe and durable sockets for regular and heavy electrical loads.",
    use: "Homes • Shops • Commercial",
  },
  {
    name: "Fuse & Fuse Base",
    img: "/general/fuse.jpg",
    category: "Protection & Safety",
    desc: "Essential safety component to prevent electrical damage.",
    use: "Residential • Commercial",
  },
  {
    name: "Copper Electrical Wire (ISI)",
    img: "/general/wire.jpg",
    category: "Wires & Cables",
    desc: "High-grade copper wire for safe and efficient current flow.",
    use: "Homes • Offices • Factories",
  },
  {
    name: "Flexible Wire",
    img: "/general/Flexible Wire.jpg",
    category: "Wires & Cables",
    desc: "Flexible insulated wire for appliances and panel wiring.",
    use: "Appliances • Control Panels",
  },
  {
    name: "Concealed PVC Box",
    img: "/general/Concealed PVC Box.jpg",
    category: "Accessories",
    desc: "Used for concealed wiring and modular switch fitting.",
    use: "New Constructions • Renovation",
  },
  {
    name: "Modular Switch Plate",
    img: "/general/modularswitchplate.jpg",
    category: "Switches",
    desc: "Stylish and durable plates for modular switches.",
    use: "Homes • Offices • Hotels",
  },
  {
    name: "Ceiling Rose",
    img: "/general/ceiling rose.jpg",
    category: "Accessories",
    desc: "Safe connection point for ceiling fans and lights.",
    use: "Homes • Shops",
  },
  {
    name: "Extension Board",
    img: "/general/Extension Board.jpg",
    category: "Accessories",
    desc: "Multi-socket extension board with overload protection.",
    use: "Homes • Offices • Temporary setups",
  },
  {
    name: "Cable Clips & Saddles",
    img: "/general/cableclip.jpg",
    category: "Accessories",
    desc: "Helps in neat and secure wire routing.",
    use: "Surface Wiring • Maintenance",
  },
  {
    name: "Electrical Tape & Insulation",
    img: "/general/Electrical Tape & Insulation.jpg",
    category: "Accessories",
    desc: "High insulation tape for safe electrical joints.",
    use: "Repairs • Maintenance",
  },
  {
    name: "Earthing Clamp & Accessories",
    img: "/general/Earthing Clamp & Accessories.jpg",
    category: "Protection & Safety",
    desc: "Ensures proper grounding for electrical safety.",
    use: "Homes • Industrial",
  },
];

export default function GeneralElectricalPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
        we ensure reliable, safe, and long-lasting
        electrical solutions for homes, shops, offices, and industrial sites.
      </p>

      {/* Category Filter */}
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredServices.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
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
              Suitable for: <span className="font-medium">{item.use}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
