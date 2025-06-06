"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    name: "Anita Sharma",
    feedback:
      "The horoscope readings were incredibly accurate. I felt seen and guided.",
    service: "HOROSCOPE",
  },
  {
    name: "Rohit Verma",
    feedback:
      "Numerology analysis changed how I view my personal strengths and life path!",
    service: "NUMEROLOGY",
  },
  {
    name: "Priya Mehta",
    feedback:
      "Tarot session gave me clarity on a confusing situation. Highly recommended!",
    service: "TAROT",
  },
  {
    name: "Rajeev Malhotra",
    feedback:
      "The remedies suggested were easy, practical, and brought peace at home. Trustworthy and powerful guidance!",
    service: "REMEDIES",
  },
];

// Helper to get initials
const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, feedback, service } = testimonials[index];

  return (
    <div className="relative z-10 bg-gradient-to-b from-[#fbe9d5] to-[#fff3ea] py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-[#3f220f] mb-16">
        ✨ What Our Clients Say
      </h2>

      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            {/* Initials Avatar */}
            <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#f5e7d9] border-4 border-[#d8c3b3] shadow-md text-[#7a542d] text-3xl font-bold tracking-wide">
              {getInitials(name)}
            </div>

            <p className="text-xl italic text-[#7a542d] mb-4">"{feedback}"</p>
            <p className="text-lg font-semibold text-[#3f220f]">- {name}</p>
            <p className="text-sm uppercase tracking-widest text-[#7a542d] mt-1">
              {service}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialSection;
