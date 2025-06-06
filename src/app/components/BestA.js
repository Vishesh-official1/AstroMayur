"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Genuine Services",
      description:
        "We deliver 100% authentic and personalized readings in Tarot, Horoscope, Numerology, and more — trusted by thousands.",
      image: "/images/Service.gif",
    },
    {
      title: "Trusted Remedies",
      description:
        "All our remedies are spiritual, effective, and tailored to your doshas, energies, and astrological alignment.",
      image: "/images/Trusted.gif",
    },
    {
      title: "Spiritual Products",
      description:
        "We offer handpicked yantras, crystals, and astrology tools energized by experts for real-world transformation.",
      image: "/images/Products.gif",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#2e0249] via-[#570861] to-[#380e4a] text-white px-4">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">
          Why Choose AstroKapil?
        </h2>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto">
          We are dedicated to providing the most genuine and effective
          astrological services and spiritual products for your life’s journey.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg border border-yellow-500/10 rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
          >
            <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-6 shadow-xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-yellow-300 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-purple-200 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
