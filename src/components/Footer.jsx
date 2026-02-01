export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Sri Vasavi Electricals
          </h3>
          <p className="text-sm">
            Trusted electrical services in Mudhole, Nirmal district, Telangana.
            Serving homes, shops, and offices for over 6 years.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Bulb & Lighting Installation</li>
            <li>Fan & Appliance Repair</li>
            <li>House & Shop Wiring</li>
            <li>Electrical Maintenance</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">📍 Mudhole, Telangana</p>
          <p className="text-sm">📞 9985227139</p>
          <p className="text-sm">⏰ Mon – Sun: 9 AM – 8 PM</p>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 border-t border-gray-700 py-4">
        © {new Date().getFullYear()} Sri Vasavi Electricals. All rights reserved.
      </div>
    </footer>
  );
}
