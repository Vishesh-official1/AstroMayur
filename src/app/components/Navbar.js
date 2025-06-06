"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function AstroKapilNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Consult Now", href: "/consult" },
    { label: "Horoscope", href: "/Horoscope" },
    { label: "Numerology", href: "/Numerology" },
    { label: "Tarot", href: "/tarot" },
    { label: "Free Readings ▼", href: "/free-readings" },
    { label: "Remedies", href: "/Remedies" },
    { label: "Session Booking", href: "/session-booking" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      {/* Top Bar */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="AstroKapil Logo"
            width={56} // ~14 * 4 = 56px
            height={56}
            className="object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-gray-900">
            Astro
            <span className="text-yellow-500">Kapil</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="hover:text-yellow-600 transition cursor-pointer">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Sign In */}
        <div className="hidden md:block">
          <Link href="/login">
            <button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white font-semibold px-5 py-2 rounded-full shadow transition-all duration-300">
              Sign In
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Slide-out */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-40 transition-transform transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b  bg-white">
          <span className="text-xl font-bold text-gray-800">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6 gap-4 font-medium text-gray-700  bg-white">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <span
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer hover:text-yellow-600 transition"
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/login">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white px-4 py-2 rounded-full shadow"
            >
              Sign In
            </button>
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
