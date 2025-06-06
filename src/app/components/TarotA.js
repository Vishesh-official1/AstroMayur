"use client";

import Image from "next/image";
import {
  Heart,
  Calendar,
  DollarSign,
  Brain,
  Glasses,
  Layers,
  Flower2,
  BookOpen,
  LayoutList,
} from "lucide-react";

export default function TarotPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "91xxxxxxxxxx";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f0f3f] to-[#3b0a58] text-white font-serif px-4 py-10">
      {/* 🔮 Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-20 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 tracking-wide">
          ✨ Tarot Reading
        </h1>
        <p className="text-lg md:text-xl text-purple-200 leading-relaxed">
          Unveil the mysteries of your life through the ancient wisdom of tarot.
          Trust your intuition and let the cards guide your path.
        </p>
        <button
          aria-label="Start Your Tarot Reading"
          className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-200"
        >
          Start Your Reading
        </button>
      </section>

      {/* ✨ How it Works Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            emoji: "🃏",
            title: "Shuffle the Deck",
            desc: "Let your energy flow into the cards.",
          },
          {
            emoji: "🔮",
            title: "Pick Your Cards",
            desc: "Choose the ones you’re drawn to.",
          },
          {
            emoji: "📜",
            title: "Reveal the Meaning",
            desc: "Receive insight and divine guidance.",
          },
        ].map((step, i) => (
          <article
            key={i}
            className="bg-purple-700/30 border border-purple-500 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-3">{step.emoji}</div>
            <h3 className="text-xl font-semibold text-yellow-200 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-purple-200">{step.desc}</p>
          </article>
        ))}
      </section>

      {/* 🌟 Tarot Section */}
      <section className="bg-white text-gray-900 rounded-xl p-6 md:p-10 shadow-xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <span>Home</span>
          <span className="text-yellow-600"> &gt; Tarot</span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Image + Description */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-xl shadow-md">
              <Image
                src="/images/Tarot.jpg"
                alt="Tarot Table"
                width={600}
                height={400}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover"
                priority
              />
            </div>
            <div className="mt-5">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">Tarot</h2>
              <p className="text-gray-700 leading-relaxed text-[1rem]">
                Unlock the mysteries of your journey through the ancient wisdom
                of tarot. These symbolic cards provide insight and guidance into
                love, relationships, career, finances, and your inner world. Let
                this be your space of self-discovery, clarity, and soulful
                exploration.
              </p>
            </div>
          </div>

          {/* Right: Cards Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <TarotCard icon={<BookOpen size={28} />} title="One Card Tarot" />
            <TarotCard icon={<Layers size={28} />} title="Three Card Tarot" />
            <TarotCard icon={<Calendar size={28} />} title="2025 Tarot" />
            <TarotCard icon={<LayoutList size={28} />} title="Major Arcana" />
            <TarotCard icon={<BookOpen size={28} />} title="Minor Arcana" />
            <TarotCard icon={<Flower2 size={28} />} title="Wellness Tarot" />
            <TarotCard icon={<Heart size={28} />} title="Love Tarot" />
            <TarotCard icon={<DollarSign size={28} />} title="Money Tarot" />
            <TarotCard icon={<Brain size={28} />} title="Mind & Emotion" />
            <TarotCard icon={<Glasses size={28} />} title="Tarot Style" />
          </div>
        </div>
      </section>

      {/* 📞 Call-to-Action */}
      <section className="text-center mt-20">
        <h3 className="text-2xl font-bold text-yellow-100 mb-4">
          Want a Deeper Reading?
        </h3>
        <p className="text-md text-purple-200 mb-6">
          Connect 1-on-1 for a live tarot session personalized for you.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-full font-bold transition duration-200"
          aria-label="Book a Live Tarot Session via WhatsApp"
        >
          📲 Book a Live Session
        </a>
      </section>
    </div>
  );
}

// Tarot Card Component
function TarotCard({ icon, title }) {
  return (
    <article className="flex flex-col items-center justify-center text-center border border-gray-200 bg-white p-4 rounded-xl shadow hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out">
      <div className="text-[#c4a869] mb-2">{icon}</div>
      <div className="text-sm font-semibold text-[#c4a869]">{title}</div>
    </article>
  );
}
