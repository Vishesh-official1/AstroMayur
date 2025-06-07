"use client";

import { useState } from "react";
import {
  Phone,
  Video,
  MessageCircle,
  Mail,
  Star,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import BookingForm from "./BookingForm";

export default function ConsultNowPage() {
  const [selectedAstrologer, setSelectedAstrologer] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  const options = [
    { icon: <Phone className="w-6 h-6" />, label: "Phone" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "Chat" },
    { icon: <Video className="w-6 h-6" />, label: "Video Call" },
    { icon: <Mail className="w-6 h-6" />, label: "Email" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp" },
  ];

  const handleBook = (method) => {
    setSelectedMethod(method);
    setIsFormOpen(true);
  };

  const astrologers = [
    {
      id: 1,
      name: "Aacharya Kapil",
      specialization: "Vedic Astrology",
      experience: 10,
      languages: "Hindi, English",
      rating: 4.9,
      image: "/images/astro1.png",
      available: true,
    },
    {
      id: 2,
      name: "Shilpi Mayur",
      specialization: "Tarot Reading",
      experience: 6,
      languages: "English",
      rating: 4.7,
      image: "/images/astro2.png",
      available: false,
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Talk to Expert Astrologers Now
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Get personalized guidance on love, career, health, finance & more.
        </p>
        {/* <button className="mt-6 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded font-semibold shadow">
          Start Your Consultation
        </button> */}
      </section>

      {/* 2. Modes of Consultation */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-5 gap-6">
        {options.map(({ icon, label }) => (
          <button
            key={label}
            onClick={() => handleBook(label)}
            className="group flex flex-col items-center bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-yellow-400 transition-all p-6 rounded-2xl"
          >
            <div className="bg-yellow-100 group-hover:bg-yellow-200 p-4 rounded-full mb-3">
              {icon}
            </div>
            <span className="font-semibold text-lg mb-2">{label}</span>
            <span className="text-sm text-gray-500 text-center mb-4">
              Talk to our expert via {label.toLowerCase()}.
            </span>
            <span className="text-sm font-medium text-yellow-600 group-hover:underline">
              Book Appointment →
            </span>
          </button>
        ))}
      </section>

      {/* BookingForm Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative p-6">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Book Appointment via {selectedMethod}
            </h2>
            <BookingForm method={selectedMethod} />
          </div>
        </div>
      )}

      {/* 3. Astrologer Profiles */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Our Expert Astrologers
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {astrologers.map((astro) => (
            <div
              key={astro.id}
              className="flex items-center bg-white p-4 border shadow rounded gap-4"
            >
              <img
                src={astro.image}
                alt={astro.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="relative w-full h-[20px] md:h-[20px] rounded-xl overflow-hidden">
                <Image
                  src={astro.image}
                  alt={astro.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{astro.name}</h3>
                <p className="text-sm">{astro.specialization}</p>
                <p className="text-sm">
                  {astro.experience} yrs • {astro.languages}
                </p>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 mr-1" /> {astro.rating}
                </div>
                <button
                  disabled={!astro.available}
                  className={`mt-2 px-4 py-1 text-white rounded ${
                    astro.available
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  onClick={() => setSelectedAstrologer(astro.id)}
                >
                  {astro.available ? "Consult Now" : "Not Available"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Categories */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Consultation Topics
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            "Love & Relationship",
            "Career & Business",
            "Health & Wellbeing",
            "Marriage & Compatibility",
            "Finance & Property",
            "Spiritual Guidance",
            "Childbirth & Education",
            "Daily Horoscope Talk",
          ].map((topic) => (
            <div
              key={topic}
              className="p-4 border rounded shadow hover:bg-yellow-50"
            >
              <p className="text-center font-medium">{topic}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Booking */}
      <section className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Book Your Session</h2>
        <p className="mb-6 text-gray-600">
          Choose astrologer, time slot & consultation mode.
        </p>
        <BookingForm />
      </section>

      {/* 6. Pricing */}
    </div>
  );
}
