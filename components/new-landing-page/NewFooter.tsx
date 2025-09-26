import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

function NewFooter() {
  return (
    <footer className="bg-white text-gray-700 px-10 md:px-20 py-10 border-t">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and description */}
        <div>
          <img
            src="/logo.png"
            alt="Coders Clutch Logo"
            className="w-32 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Visionaries, innovators, and entrepreneurs with the tools, mentors,
            and opportunities they need to make an impact.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Our Pillars</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Impact Report</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Linkedin size={16}/> LinkedIn</li>
            <li className="flex items-center gap-2"><Twitter size={16}/> Twitter</li>
            <li className="flex items-center gap-2"><Instagram size={16}/> Instagram</li>
            <li className="flex items-center gap-2"><Facebook size={16}/> Facebook</li>
            <li className="flex items-center gap-2"><Youtube size={16}/> YouTube</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
        <div className="text-gray-500">© Coderclutch 2025</div>
      </div>
    </footer>
  );
}

export default NewFooter;
