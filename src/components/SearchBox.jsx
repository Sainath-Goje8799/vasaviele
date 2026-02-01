"use client";

export default function SearchBox({ search, setSearch, placeholder }) {
  return (
    <div className="max-w-md mx-auto mb-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder || "Search..."}
        className="w-full px-4 py-3 rounded-xl border border-gray-300
                   focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}
