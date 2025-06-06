"use client";
import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export default function AstroKapilFooter() {
  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* About Section */}
        <div>
          <img
            src="/images/logo.png"
            alt="AstroKapil Logo"
            className="w-80 h-50 object-contain"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">About AstroKapil</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            AstroKapil is your trusted guide to astrology, kundli, numerology,
            tarot and much more. Join thousands in discovering your destiny and
            cosmic path.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Horoscope
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Free Readings
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tarot
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Consult Now
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="text-sm">Email: support@astrokapil.com</p>
          <p className="text-sm">Phone: +91 12345 67890</p>
          <p className="text-sm">Address: New Delhi, India</p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4 text-gray-800">
            <a href="#">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Newsletter + Apps */}
        <div>
          <h2 className="text-lg font-bold mb-2">Stay Updated</h2>
          <form className="flex flex-col space-y-2">
            <div className="flex border border-gray-400 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent text-sm px-2 py-1 w-full text-black placeholder-gray-600 outline-none"
              />
              <button className="bg-black text-white px-3">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* App Buttons */}
          <div className="mt-4 space-y-2">
            <a href="#" className="block">
              <img
                src="/images/playstore.png"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a href="#" className="block">
              <img
                src="/images/appstore.png"
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} AstroKapil. All rights reserved.
      </div>
    </footer>
  );
}
