"use client";

import Link from "next/link";

const services = [
  {
      title: "Bulb & Lighting Installation",
      desc: "LED, CFL, tube lights, and decorative lighting installations.",
      icon: "💡",
      href: "/services/bulbs",
    },
    {
      title: "Fan & Appliances Repair",
      desc: "Ceiling fans, exhaust fans, and small electrical appliances repair.",
      icon: "🌀",
      href: "/services/fans",
    },
    {
      title: "Wiring & Switchboards",
      desc: "Complete home and office wiring, switchboard installation and maintenance.",
      icon: "🏠",
      href: "/services/wiring",
    },
    {
      title: "MCB, RCCB & DB Installation",
      desc: "Safety breakers, distribution boards installation and replacement.",
      icon: "⚡",
      href: "/services/mcb",
    },
    {
      title: "Industrial Electrical Services",
      desc: "Factory wiring, machines, panels, and industrial maintenance.",
      icon: "🏭",
      href: "/services/industrial",
    },
    {
      title: "Outdoor & Street Lighting",
      desc: "Street lights, flood lights, and outdoor lighting solutions.",
      icon: "🌙",
      href: "/services/outdoor",
    },
    {
      title: "Solar Panel Installation",
      desc: "Residential and commercial solar power solutions.",
      icon: "☀️",
      href: "/services/solar",
    },
    {
      title: "Inverter & UPS Services",
      desc: "Inverter installation, battery replacement, and UPS maintenance.",
      icon: "🔋",
      href: "/services/inverter",
    },
    {
      title: "Panel Board Installation",
      desc: "LT panels, control panels, and distribution panels.",
      icon: "📊",
      href: "/services/panels",
    },
    {
      title: "Generator Installation & Service",
      desc: "Generator wiring, installation, and periodic servicing.",
      icon: "🔌",
      href: "/services/generator",
    },
    {
      title: "CCTV & Security Systems",
      desc: "Camera installation, wiring, and surveillance setup.",
      icon: "📷",
      href: "/services/cctv",
    },
    {
      title: "Smart Home Electricals",
      desc: "Smart switches, lighting automation, and IoT solutions.",
      icon: "📱",
      href: "/services/smart-home",
    },
    {
      title: "Decorative Lighting Setup",
      desc: "False ceiling lights, garden lights, and festival lighting.",
      icon: "✨",
      href: "/services/decorative",
    },
    {
      title: "Motor & Pump Installation",
      desc: "Water pumps, motors installation and electrical connections.",
      icon: "🚿",
      href: "/services/motors",
    },
    {
      title: "Earthing & Lightning Protection",
      desc: "Earthing pits, lightning arresters, and safety solutions.",
      icon: "🛡️",
      href: "/services/earthing",
    },
    {
      title: "Electrical Maintenance Contracts",
      desc: "Annual maintenance for homes, shops, and industries.",
      icon: "🛠️",
      href: "/services/maintenance",
    },
    {
      title: "Transformer Services",
      desc: "Transformer installation, testing, and maintenance.",
      icon: "🔄",
      href: "/services/transformers",
    },
    {
      title: "Emergency Electrical Services",
      desc: "Quick fault fixing, short circuit and power failure support.",
      icon: "🚨",
      href: "/services/emergency",
    }
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
