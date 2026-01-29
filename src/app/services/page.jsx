"use client";

import Link from "next/link";

const services = [
  {
    title: "Bulb Installation & Repair",
    desc: "LED, CFL, tube light installation and replacement.",
    href: "/services/bulbs",
    icon: "💡",
  },
  {
    title: "Fan Installation",
    desc: "Ceiling, exhaust, and wall fan services.",
    href: "/services/fans",
    icon: "🌀",
  },
  {
    title: "House Wiring",
    desc: "Complete wiring for homes and shops.",
    href: "/services/wiring",
    icon: "🏠",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Our Services ⚡
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Click a service to know more
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition block"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {service.desc}
              </p>
              <p className="mt-4 text-yellow-600 font-medium">
                View Details →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
