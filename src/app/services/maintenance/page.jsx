"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const maintenanceItems = [
  { name: "Residential Electrical AMC – Basic", category: "Residential", price: "₹3,500 / year", desc: "Basic electrical maintenance for homes." },
  { name: "Residential Electrical AMC – Standard", category: "Residential", price: "₹5,000 / year", desc: "Wiring, switches, fans & lights support." },
  { name: "Residential Electrical AMC – Premium", category: "Residential", price: "₹7,500 / year", desc: "Complete home electrical coverage." },
  { name: "Fan & Light Maintenance", category: "Residential", price: "₹1,200", desc: "Inspection & repair of fans and lights." },
  { name: "Home Wiring Inspection", category: "Residential", price: "₹1,500", desc: "Safety inspection of internal wiring." },
  { name: "MCB & DB Maintenance", category: "Residential", price: "₹1,800", desc: "Check & tighten MCBs and distribution boards." },
  { name: "Inverter Electrical Maintenance", category: "Residential", price: "₹1,200", desc: "Inverter wiring & protection check." },
  { name: "UPS Electrical Maintenance", category: "Residential", price: "₹1,400", desc: "UPS power line inspection." },
  { name: "Home Earthing Maintenance", category: "Residential", price: "₹1,600", desc: "Earth resistance testing." },
  { name: "Lighting Load Balancing", category: "Residential", price: "₹1,300", desc: "Balancing lighting circuits." },

  { name: "Commercial Electrical AMC – Basic", category: "Commercial", price: "₹8,000 / year", desc: "Basic electrical maintenance for offices." },
  { name: "Commercial Electrical AMC – Standard", category: "Commercial", price: "₹12,000 / year", desc: "Routine inspections & repairs." },
  { name: "Commercial Electrical AMC – Premium", category: "Commercial", price: "₹18,000 / year", desc: "Complete electrical support." },
  { name: "Office Lighting Maintenance", category: "Commercial", price: "₹3,000", desc: "Indoor lighting systems." },
  { name: "Commercial DB Panel Maintenance", category: "Commercial", price: "₹4,500", desc: "Distribution board servicing." },
  { name: "Generator Electrical Maintenance", category: "Commercial", price: "₹5,000", desc: "Electrical systems for DG sets." },
  { name: "Server Room Power Maintenance", category: "Commercial", price: "₹6,500", desc: "Critical power systems." },
  { name: "Commercial Earthing Maintenance", category: "Commercial", price: "₹3,800", desc: "Multiple earth pit testing." },

  { name: "Industrial Electrical AMC – Basic", category: "Industrial", price: "Custom Quote", desc: "Basic industrial maintenance." },
  { name: "Industrial Electrical AMC – Comprehensive", category: "Industrial", price: "Custom Quote", desc: "Full plant electrical support." },
  { name: "HT Panel Maintenance", category: "Industrial", price: "₹15,000", desc: "High tension panel servicing." },
  { name: "LT Panel Maintenance", category: "Industrial", price: "₹8,000", desc: "Low tension panels." },
  { name: "Motor Electrical Maintenance", category: "Industrial", price: "₹5,500", desc: "Industrial motor connections." },
  { name: "VFD Panel Maintenance", category: "Industrial", price: "₹6,500", desc: "Variable frequency drive panels." },
  { name: "Capacitor Bank Maintenance", category: "Industrial", price: "₹7,000", desc: "Power factor correction systems." },
  { name: "Electrical Thermography", category: "Industrial", price: "₹12,000", desc: "Hotspot detection." },

  { name: "Preventive Electrical Maintenance – Monthly", category: "Preventive", price: "₹2,500", desc: "Scheduled inspections." },
  { name: "Preventive Electrical Maintenance – Quarterly", category: "Preventive", price: "₹4,500", desc: "Quarterly checks." },
  { name: "Preventive Electrical Maintenance – Annual", category: "Preventive", price: "₹7,000", desc: "Yearly maintenance plan." },
  { name: "Power Quality Analysis", category: "Preventive", price: "₹6,000", desc: "Voltage & harmonics study." },
  { name: "Electrical Load Study", category: "Preventive", price: "₹3,500", desc: "Load analysis & balancing." },

  { name: "Emergency Electrical Support – Home", category: "Emergency", price: "On Call", desc: "Residential breakdown service." },
  { name: "Emergency Electrical Support – Commercial", category: "Emergency", price: "On Call", desc: "Commercial breakdown service." },
  { name: "Emergency Electrical Support – Industrial", category: "Emergency", price: "On Call", desc: "Critical industrial support." },
   { name: "Residential Electrical AMC – Basic", category: "Residential", price: "₹3,500 / year", desc: "Basic electrical maintenance for homes." },
  { name: "Residential Electrical AMC – Standard", category: "Residential", price: "₹5,000 / year", desc: "Wiring, switches, fans & lights support." },
  { name: "Residential Electrical AMC – Premium", category: "Residential", price: "₹7,500 / year", desc: "Complete home electrical coverage." },
  { name: "Fan & Light Maintenance", category: "Residential", price: "₹1,200", desc: "Inspection & repair of fans and lights." },
  { name: "Home Wiring Inspection", category: "Residential", price: "₹1,500", desc: "Safety inspection of internal wiring." },
  { name: "MCB & DB Maintenance", category: "Residential", price: "₹1,800", desc: "Check & tighten MCBs and distribution boards." },
  { name: "Inverter Electrical Maintenance", category: "Residential", price: "₹1,200", desc: "Inverter wiring & protection check." },
  { name: "UPS Electrical Maintenance", category: "Residential", price: "₹1,400", desc: "UPS power line inspection." },
  { name: "Home Earthing Maintenance", category: "Residential", price: "₹1,600", desc: "Earth resistance testing." },
  { name: "Lighting Load Balancing", category: "Residential", price: "₹1,300", desc: "Balancing lighting circuits." },
  { name: "Short Circuit Inspection", category: "Residential", price: "₹1,500", desc: "Fault detection & correction." },
  { name: "Switch Board Maintenance", category: "Residential", price: "₹1,000", desc: "Repair & replacement of switch boards." },
  { name: "Electrical Safety Check – Home", category: "Residential", price: "₹2,000", desc: "Complete safety audit for homes." },
  { name: "Geyser Electrical Maintenance", category: "Residential", price: "₹1,200", desc: "Power line & safety check." },
  { name: "AC Power Line Maintenance", category: "Residential", price: "₹1,400", desc: "Dedicated AC wiring inspection." },
  { name: "Door Bell & Intercom Maintenance", category: "Residential", price: "₹900", desc: "Low voltage system maintenance." },
  { name: "Outdoor Lighting Maintenance", category: "Residential", price: "₹1,300", desc: "Garden & compound lights." },
  { name: "Surge Protection Maintenance", category: "Residential", price: "₹1,600", desc: "SPD inspection & testing." },
  { name: "Electrical Load Calculation", category: "Residential", price: "₹1,800", desc: "Load assessment for homes." },
  { name: "Emergency Electrical Support – Home", category: "Residential", price: "On Call", desc: "Breakdown support." },

  // Commercial (21–45)
  { name: "Commercial Electrical AMC – Basic", category: "Commercial", price: "₹8,000 / year", desc: "Basic electrical maintenance for offices." },
  { name: "Commercial Electrical AMC – Standard", category: "Commercial", price: "₹12,000 / year", desc: "Routine inspections & repairs." },
  { name: "Commercial Electrical AMC – Premium", category: "Commercial", price: "₹18,000 / year", desc: "Complete electrical support." },
  { name: "Office Lighting Maintenance", category: "Commercial", price: "₹3,000", desc: "Indoor lighting systems." },
  { name: "Retail Shop Electrical Maintenance", category: "Commercial", price: "₹2,500", desc: "Shops & showrooms." },
  { name: "Commercial DB Panel Maintenance", category: "Commercial", price: "₹4,500", desc: "Distribution board servicing." },
  { name: "Power Socket Load Testing", category: "Commercial", price: "₹3,200", desc: "Socket & plug load test." },
  { name: "Generator Electrical Maintenance", category: "Commercial", price: "₹5,000", desc: "Electrical systems for DG sets." },
  { name: "UPS Panel Maintenance", category: "Commercial", price: "₹4,200", desc: "UPS input/output panels." },
  { name: "Server Room Power Maintenance", category: "Commercial", price: "₹6,500", desc: "Critical power systems." },
  { name: "Commercial Earthing Maintenance", category: "Commercial", price: "₹3,800", desc: "Multiple earth pit testing." },
  { name: "Energy Audit – Commercial", category: "Commercial", price: "₹7,500", desc: "Power consumption analysis." },
  { name: "Emergency Lighting Maintenance", category: "Commercial", price: "₹2,800", desc: "Exit & emergency lights." },
  { name: "Fire Alarm Electrical Maintenance", category: "Commercial", price: "₹4,000", desc: "Electrical fire alarm systems." },
  { name: "CCTV Power Maintenance", category: "Commercial", price: "₹2,500", desc: "CCTV power supply check." },
  { name: "Parking Area Lighting Maintenance", category: "Commercial", price: "₹3,500", desc: "Basement & parking lights." },
  { name: "Commercial Safety Audit", category: "Commercial", price: "₹9,000", desc: "Electrical compliance audit." },
  { name: "Transformer HT/LT Inspection", category: "Commercial", price: "₹12,000", desc: "HT/LT side inspection." },
  { name: "Emergency Electrical Support – Commercial", category: "Commercial", price: "On Call", desc: "Urgent breakdown service." },
  { name: "Electrical Documentation Update", category: "Commercial", price: "₹3,000", desc: "As-built drawings & records." },

  // Industrial (46–65)
  { name: "Industrial Electrical AMC – Basic", category: "Industrial", price: "Custom Quote", desc: "Basic industrial maintenance." },
  { name: "Industrial Electrical AMC – Comprehensive", category: "Industrial", price: "Custom Quote", desc: "Full plant electrical support." },
  { name: "HT Panel Maintenance", category: "Industrial", price: "₹15,000", desc: "High tension panel servicing." },
  { name: "LT Panel Maintenance", category: "Industrial", price: "₹8,000", desc: "Low tension panels." },
  { name: "Motor Electrical Maintenance", category: "Industrial", price: "₹5,500", desc: "Industrial motor connections." },
  { name: "VFD Panel Maintenance", category: "Industrial", price: "₹6,500", desc: "Variable frequency drive panels." },
  { name: "Capacitor Bank Maintenance", category: "Industrial", price: "₹7,000", desc: "Power factor correction systems." },
  { name: "Industrial Earthing Audit", category: "Industrial", price: "₹6,000", desc: "Earth resistance analysis." },
  { name: "Cable Tray Inspection", category: "Industrial", price: "₹4,500", desc: "Cable routing & safety." },
  { name: "Busbar System Maintenance", category: "Industrial", price: "₹9,000", desc: "Busbar joints & insulation." },
  { name: "Electrical Thermography", category: "Industrial", price: "₹12,000", desc: "Hotspot detection." },
  { name: "Industrial Energy Audit", category: "Industrial", price: "₹18,000", desc: "Detailed energy study." },
  { name: "Machine Power Line Maintenance", category: "Industrial", price: "₹6,500", desc: "Machine wiring inspection." },
  { name: "Emergency Shutdown System Check", category: "Industrial", price: "₹5,000", desc: "E-stop & safety circuits." },
  { name: "Industrial Electrical Safety Audit", category: "Industrial", price: "₹20,000", desc: "Statutory compliance audit." },
  { name: "Control Panel Wiring Maintenance", category: "Industrial", price: "₹7,500", desc: "Control circuits inspection." },
  { name: "Factory Lighting Maintenance", category: "Industrial", price: "₹6,000", desc: "High bay & flood lights." },
  { name: "Lightning Protection System Maintenance", category: "Industrial", price: "₹8,500", desc: "LPS inspection." },
  { name: "Industrial Emergency Electrical Support", category: "Industrial", price: "On Call", desc: "Critical breakdown handling." },
  { name: "Electrical Risk Assessment", category: "Industrial", price: "₹10,000", desc: "Risk analysis & mitigation." },

  // Preventive / General (66–80)
  { name: "Preventive Electrical Maintenance – Monthly", category: "Preventive", price: "₹2,500", desc: "Scheduled inspections." },
  { name: "Preventive Electrical Maintenance – Quarterly", category: "Preventive", price: "₹4,500", desc: "Quarterly checks." },
  { name: "Preventive Electrical Maintenance – Annual", category: "Preventive", price: "₹7,000", desc: "Yearly maintenance plan." },
  { name: "Electrical Load Study", category: "Preventive", price: "₹3,500", desc: "Load analysis & balancing." },
  { name: "Power Quality Analysis", category: "Preventive", price: "₹6,000", desc: "Voltage & harmonics study." },
  { name: "Surge Protection Maintenance", category: "Preventive", price: "₹3,200", desc: "SPD health check." },
  { name: "Electrical Documentation Review", category: "Preventive", price: "₹2,800", desc: "Drawings & records review." },
  { name: "Emergency Electrical Support – General", category: "Emergency", price: "On Call", desc: "24/7 emergency response." },
  { name: "Temporary Power Maintenance", category: "Emergency", price: "₹4,000", desc: "Temporary electrical setups." },
  { name: "Electrical Compliance Inspection", category: "Preventive", price: "₹5,500", desc: "Regulatory compliance check." },
];

export default function ElectricalMaintenancePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Industrial",
    "Preventive",
    "Emergency",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? maintenanceItems
      : maintenanceItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        Electrical & Maintenance Contracts
      </h1>

      <p className="text-gray-600 mb-6 max-w-4xl">
        We provide comprehensive electrical maintenance services and AMC
        contracts for residential, commercial, and industrial installations,
        ensuring safety, reliability, and uninterrupted power.
      </p>

      {/* Search */}
      <div className="mb-6">
        <SearchBar />
      </div>

      {/* Category Filter */}
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-black">
              {item.name}
            </h3>
            <p className="text-green-600 font-bold mt-1">
              {item.price}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
