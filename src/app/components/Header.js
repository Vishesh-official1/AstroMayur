"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/spiritual.png",
  "/images/spiritual2.png",
  "/images/spiritual3.png",
  "/images/spiritual4.png",
  "/images/spiritual5.png",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
          loading="lazy"
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20 pointer-events-none" />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-wide mb-4 animate-fadeInUp">
          <span className="text-yellow-400 drop-shadow-lg">AstroKapil</span> —
          Discover Your Destiny
        </h1>
        <p className="text-base md:text-xl max-w-2xl font-light drop-shadow-md animate-fadeInUp delay-300">
          Unveil the wisdom of the stars and experience harmony through
          <span className="text-yellow-300 font-medium">
            {" "}
            celestial guidance
          </span>{" "}
          and
          <span className="text-yellow-300 font-medium">
            {" "}
            spiritual insight
          </span>
          .
        </p>

        {/* Optional CTA */}
        <button className="mt-6 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-md transition-all duration-300 animate-fadeInUp delay-500">
          Consult Now
        </button>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
