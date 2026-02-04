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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Our Electrical Services ⚡
        </h1>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl">
          Reliable solutions for home, office, and industry. Click a service to know more.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
            <p className="mt-4 text-yellow-600 font-medium">View Details →</p>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      {/* <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Need an Expert?</h2>
        <p className="mt-2 text-gray-600 text-lg">
          Contact us today and let our certified electricians handle your electrical needs safely and efficiently.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition"
        >
          Get in Touch
        </Link>
      </div> */}
    </main>
  );
}
