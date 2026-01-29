"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          
          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Sri Vasavi Electricals ⚡ Reliable Electrical Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Providing quality electrical solutions for homes, offices, and shops in Mudhole, Telangana. 
              Installation, repairs, and maintenance done safely and efficiently.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="/services"
                className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-xl hover:bg-yellow-600 transition"
              >
                Our Services
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2">
            <img
              src="/hero-electrical.png" // replace with actual electrical shop image
              alt="Electrical Services"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Services Preview Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Our Electrical Services</h2>
        <p className="text-gray-600 text-center mt-2 mb-12">
          We provide a wide range of electrical services for homes, shops, and offices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Bulb & Lighting Installation", desc: "LED, CFL, tube lights, and decorative lighting installations.", icon: "💡", href: "/services/bulbs" },
            { title: "Fan & Appliances Repair", desc: "Ceiling fans, exhaust fans, and small electrical appliances repair.", icon: "🌀", href: "/services/fans" },
            { title: "Wiring & Switchboards", desc: "Complete home and office wiring, switchboard installation and maintenance.", icon: "🏠", href: "/services/wiring" },
          ].map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center text-center"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">About Sri Vasavi Electricals</h2>
          <p className="text-gray-600">
            Founded by <span className="font-semibold">Vinay Kumar Deshmukh</span>, Sri Vasavi Electricals has been serving Mudhole, Nirmal, Telangana for over 6 years.  
            We specialize in safe and reliable electrical installations, repairs, and maintenance for homes, shops, and offices.
          </p>
          <p className="text-gray-600">
            Our team ensures high-quality workmanship, fast service, and transparent pricing.  
            From bulb replacements to complete wiring solutions, we provide trusted electrical services with safety and professionalism in mind.
          </p>
          <Link
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Call-to-Action / Contact Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900">
        <h2 className="text-3xl font-bold">Need Electrical Service?</h2>
        <p className="mt-2 mb-6">Contact Sri Vasavi Electricals today and get reliable electrical solutions for your home or business.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/chatapp"
            className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition"
          >
            Chat with Us
          </Link>
          <a
            href="tel:9985227139"
            className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © 2026 Sri Vasavi Electricals. Trusted electrical services in Mudhole, Telangana.
      </footer>
    </main>
  );
}
