"use client";

import { useEffect } from "react";
import {
  Sparkles,
  Sun,
  Moon,
  Star,
  CloudSun,
  Orbit,
  CalendarDays,
  Asterisk,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HoroscopePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#e0f7fa] via-[#fce4ec] to-[#f3e5f5] py-10 px-6 md:px-20">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span>Home</span>
        <span className="text-indigo-600"> &gt; Horoscope</span>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#4b0082] mb-4"
        >
          ✨ Your Daily Horoscope
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed"
        >
          Explore the stars and uncover your cosmic guidance for today. Let the
          Asterisk illuminate your path.
        </motion.p>
      </div>

      {/* Info Grid Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-xl shadow-xl">
            {/* <img
              src="/images/Horoscope.gif"
              alt="Horoscope Chart"
              className="w-full h-[280px] md:h-[360px] object-cover rounded-xl"
            /> */}
            <div className="relative w-full h-[280px] md:h-[360px] rounded-xl overflow-hidden">
              <Image
                src="/images/Horoscope.gif"
                alt="Horoscope Chart"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-3xl font-bold text-[#4b0082] mb-3">
              What is a Horoscope?
            </h2>
            <p className="text-gray-800 text-[1rem] leading-relaxed">
              Horoscopes are personalized astrological readings based on your
              Asterisk sign and Orbit ary positions. They provide insight into
              your love life, career, health, and destiny. Discover what the
              universe has written in the stars for you today.
            </p>
          </div>
        </motion.div>

        {/* Right Section - Horoscope Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <HoroscopeCard icon={<Sun size={28} />} title="Daily Forecast" />
          <HoroscopeCard icon={<Moon size={28} />} title="Moon Phase" />
          <HoroscopeCard icon={<Star size={28} />} title="Love Horoscope" />
          <HoroscopeCard icon={<Orbit size={28} />} title="Orbit ary Motion" />
          <HoroscopeCard icon={<CloudSun size={28} />} title="Career Path" />
          <HoroscopeCard
            icon={<CalendarDays size={28} />}
            title="Monthly Outlook"
          />
          <HoroscopeCard
            icon={<Asterisk size={28} />}
            title="Asterisk Traits"
          />
          <HoroscopeCard icon={<Sparkles size={28} />} title="Lucky Charm" />
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#4b0082] mb-2">
          Want deeper cosmic insight?
        </h3>
        <p className="text-md text-gray-700 mb-6">
          Get a personalized horoscope reading tailored to your birth chart.
        </p>
        <a
          href="https://wa.me/91xxxxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#7b1fa2] to-[#4a148c] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          📲 Book Horoscope Session
        </a>
      </div>
    </section>
  );
}

function HoroscopeCard({ icon, title }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center border border-[#d1c4e9] bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-[#6a1b9a] mb-2">{icon}</div>
      <div className="text-sm font-semibold text-[#4b0082]">{title}</div>
    </motion.div>
  );
}
