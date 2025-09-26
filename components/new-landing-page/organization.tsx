import React from "react";

function Organization() {
  return (
    <section className="w-full bg-[#0c1c1d] text-white px-6 py-16 flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
          Are you a non-tech organization or enterprise?
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-3xl mb-12">
          We deploy, setup, and develop custom built technology solutions that helps you cut cost,
          increase revenue, and automate your processes for efficiency.
        </p>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Button 1 */}
          <button className="flex items-center gap-3 border border-green-500 text-green-500 px-6 py-4 rounded-full text-lg font-medium hover:bg-green-500 hover:text-white transition">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11.3 1.046a1 1 0 00-2.6 0L7.82 3.12a6.978 6.978 0 00-2.027.834L3.46 3.416a1 1 0 00-1.414 1.415l.537 2.332a6.978 6.978 0 00-.834 2.027L1.046 8.7a1 1 0 000 2.6l2.074.88a6.978 6.978 0 00.834 2.027l-1.333 2.333a1 1 0 001.415 1.414l2.332-.537a6.978 6.978 0 002.027.834l.88 2.074a1 1 0 002.6 0l.88-2.074a6.978 6.978 0 002.027-.834l2.332.537a1 1 0 001.415-1.414l-1.333-2.333a6.978 6.978 0 00.834-2.027l2.074-.88a1 1 0 000-2.6l-2.074-.88a6.978 6.978 0 00-.834-2.027l1.333-2.332a1 1 0 00-1.415-1.415l-2.332.537a6.978 6.978 0 00-2.027-.834L11.3 1.046z" />
            </svg>
            Business Process Automation
          </button>

          {/* Button 2 */}
          <button className="flex items-center gap-3 border border-green-500 text-green-500 px-6 py-4 rounded-full text-lg font-medium hover:bg-green-500 hover:text-white transition">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H9.828l-4.95 4.95A.5.5 0 014 21.5V17H4a1 1 0 01-1-1V4z" />
            </svg>
            Manage IT Services
          </button>

          {/* Button 3 */}
          <button className="flex items-center gap-3 border border-green-500 text-green-500 px-6 py-4 rounded-full text-lg font-medium hover:bg-green-500 hover:text-white transition">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h2v18H3V3zm16 0h2v18h-2V3zM8 13h2v8H8v-8zm8-6h2v14h-2V7zm-4 3h2v11h-2V10z" />
            </svg>
            Data Management & Visualization
          </button>

          {/* Button 4 */}
          <button className="flex items-center gap-3 border border-green-500 text-green-500 px-6 py-4 rounded-full text-lg font-medium hover:bg-green-500 hover:text-white transition">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            IT Consulting
          </button>
        </div>

        {/* Explore Button */}
        <button className="bg-[#34cc33] hover:bg-[#008236] text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition">
          Explore our Enterprise Solutions
        </button>
      </div>
    </section>
  );
}

export default Organization;
