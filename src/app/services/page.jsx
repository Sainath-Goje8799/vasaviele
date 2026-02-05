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
    title: "Inverter & UPS Services",
    desc: "Inverter installation, battery replacement, and UPS maintenance.",
    icon: "🔋",
    href: "/services/inverters",
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
    title: "Emergency Electrical Services",
    desc: "Quick fault fixing, short circuit and power failure support.",
    icon: "🚨",
    href: "/services/emergency",
  },
  {
    title: "Electrical Maintenance Contracts",
    desc: "Annual maintenance for homes, shops, and industries.",
    icon: "🛠️",
    href: "/services/maintenance",
  },
];

export default function Services() {
  return (
    <main className="relative min-h-screen px-4 py-20 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100 overflow-hidden">

         

      
      {/* ⚡ Hero */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
          Our Electrical Services <span className="text-amber-400">⚡</span>
        </h1>
        <p className="mt-5 text-slate-600 text-lg sm:text-xl">
          Professional electrical solutions for homes, shops, offices, and
          industries. Click a service to know more.
        </p>
      </div>

      {/* 🔌 Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group bg-white rounded-3xl shadow-md p-7 flex flex-col items-start
                       hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-5xl mb-5">{service.icon}</div>

            <h3 className="text-xl font-semibold text-slate-800 group-hover:text-pink-500 transition">
              {service.title}
            </h3>

            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              {service.desc}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 text-pink-500 font-semibold">
              View Details
              <span className="group-hover:translate-x-1 transition">→</span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
