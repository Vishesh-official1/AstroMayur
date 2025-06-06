"use client";

import {
  Sparkles,
  Calculator,
  Star,
  CircleDollarSign,
  Landmark,
  Layers3,
  Globe2,
  Gem,
} from "lucide-react";

export default function NumerologyPage() {
  return (
    <section className="bg-gradient-to-br from-[#f4f1ec] via-[#fff9f2] to-[#f4f1ec] py-10 px-6 md:px-20">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span>Home</span>
        <span className="text-pink-600"> &gt; Numerology</span>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#924c9d] mb-4">
          🔢 Discover Your Numerology
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Tap into the secret power of numbers and understand your personality,
          purpose, and path with a unique numerology reading.
        </p>
      </div>

      {/* Info Grid Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
        {/* Left Section */}
        <div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/Numerology.gif"
              alt="Numerology Symbolism"
              className="w-full h-[280px] md:h-[360px] object-cover rounded-xl"
            />
          </div>
          <div className="mt-5">
            <h2 className="text-3xl font-bold text-[#4b296b] mb-3">
              What is Numerology?
            </h2>
            <p className="text-gray-800 text-[1rem] leading-relaxed">
              Numerology is an ancient system that explores the mystical
              relationship between numbers and life events. Discover your life
              path, destiny number, soul urge, and more. It's a fascinating tool
              for understanding yourself and your place in the universe.
            </p>
          </div>
        </div>

        {/* Right Section - Numerology Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <NumerologyCard icon={<Calculator size={28} />} title="Life Path" />
          <NumerologyCard icon={<Star size={28} />} title="Destiny Number" />
          <NumerologyCard
            icon={<CircleDollarSign size={28} />}
            title="Soul Urge"
          />
          <NumerologyCard
            icon={<Globe2 size={28} />}
            title="Personality Number"
          />
          <NumerologyCard
            icon={<Landmark size={28} />}
            title="Birthday Number"
          />
          <NumerologyCard
            icon={<Layers3 size={28} />}
            title="Expression Number"
          />
          <NumerologyCard icon={<Gem size={28} />} title="Maturity Number" />
          <NumerologyCard icon={<Sparkles size={28} />} title="Power Number" />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#7b3f9c] mb-2">
          Curious to know more?
        </h3>
        <p className="text-md text-gray-700 mb-6">
          Unlock the meaning of your numbers with a personal reading.
        </p>
        <a
          href="https://wa.me/91xxxxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          📲 Book a Numerology Session
        </a>
      </div>
    </section>
  );
}

function NumerologyCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center justify-center text-center border border-[#e8d9f2] bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ease-in-out">
      <div className="text-purple-600 mb-2">{icon}</div>
      <div className="text-sm font-semibold text-[#7b3f9c]">{title}</div>
    </div>
  );
}
