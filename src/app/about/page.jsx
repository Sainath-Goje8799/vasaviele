"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">

        {/* Back Link */}
        <Link
          href="/"
          className="text-yellow-600 font-medium mb-4 inline-block"
        >
          ← Back to Home
        </Link>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          About Us
        </h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-yellow-500 mx-auto my-6 rounded-full"></div>

        {/* About Description */}
        <p className="text-gray-600 text-lg">
          Welcome to <span className="font-semibold">Sri Vasavi Electricals</span>, your trusted local electrician shop located in <span className="font-medium">Mudhole, Tq. Mudhole, District Nirmal, Telangana</span>.  
          For over 6 years, we have been providing high-quality electrical services to homes, offices, and commercial establishments in the region.
        </p>

        <p className="mt-4 text-gray-600 text-lg">
          Our founder, <span className="font-semibold">Vinay Kumar Deshmukh</span>, has built a reputation for reliability, professionalism, and customer satisfaction.  
          With years of hands-on experience in electrical repairs, installations, and maintenance, he ensures that every service is performed safely, efficiently, and with meticulous attention to detail.
        </p>

        <p className="mt-4 text-gray-600 text-lg">
          At Sri Vasavi Electricals, we specialize in:
        </p>

        <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1 text-left max-w-md mx-auto">
          <li>Home and commercial wiring</li>
          <li>Bulb, fan, and lighting installation</li>
          <li>Switchboard and electrical repairs</li>
          <li>Inverter and UPS installation</li>
          <li>Emergency electrical services</li>
        </ul>

        <p className="mt-4 text-gray-600 text-lg">
          Under the guidance of Vinay Kumar Deshmukh, our shop has become a trusted name for quality electrical services in Mudhole and surrounding areas.  
          We combine expertise, transparency, and personalized service to ensure every customer is satisfied.
        </p>

        {/* Call to Action */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919985227139"
            target="_blank"
            className="px-4 sm:px-6 py-3 bg-yellow-600 text-white rounded-xl font-semibold text-center"
          >
            chat with us
          </a>

          <a
            href="tel:9985227139"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Call Now
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-sm text-gray-400">
          Trusted by Vinay Kumar Deshmukh • Serving Mudhole, Nirmal, Telangana for over 6 years • Fast service • Fair pricing
        </p>
      </div>
    </main>
  );
}
