// "use client";
// import React from "react";
// import {
//   Heart,
//   Calendar,
//   DollarSign,
//   Brain,
//   Glasses,
//   Layers,
//   Flower2,
//   BookOpen,
//   LayoutList,
// } from "lucide-react";

// export default function TarotSection() {
//   return (
//     <section className="bg-white py-8 px-4 md:px-16">
//       {/* Breadcrumb */}
//       <nav className="text-sm text-gray-500 mb-6">
//         <span>Home</span>
//         <span className="text-yellow-600"> &gt; Tarot</span>
//       </nav>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row gap-8 items-start">
//         {/* Left Section - Image and Description */}
//         <div className="w-full md:w-1/2">
//           <div className="overflow-hidden rounded-xl shadow-md">
//             <img
//               src="/images/Tarot.jpg"
//               alt="Tarot Table"
//               className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover"
//             />
//           </div>
//           <div className="mt-4">
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">Tarot</h2>
//             <p className="text-gray-700 leading-relaxed text-[1rem]">
//               Unlock the mysteries of your journey through the ancient wisdom of
//               tarot. These symbolic cards provide insight and guidance into
//               love, relationships, career, finances, and your inner world. Let
//               this be your space of self-discovery, clarity, and soulful
//               exploration.
//             </p>
//           </div>
//         </div>

//         {/* Right Section - Tarot Cards Grid */}
//         <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
//           <TarotCard icon={<BookOpen size={28} />} title="One Card Tarot" />
//           <TarotCard icon={<Layers size={28} />} title="Three Card Tarot" />
//           <TarotCard icon={<Calendar size={28} />} title="2025 Tarot" />
//           <TarotCard icon={<LayoutList size={28} />} title="Major Arcana" />
//           <TarotCard icon={<BookOpen size={28} />} title="Minor Arcana" />
//           <TarotCard icon={<Flower2 size={28} />} title="Wellness Tarot" />
//           <TarotCard icon={<Heart size={28} />} title="Love Tarot" />
//           <TarotCard icon={<DollarSign size={28} />} title="Money Tarot" />
//           <TarotCard icon={<Brain size={28} />} title="Mind & Emotion" />
//           <TarotCard icon={<Glasses size={28} />} title="Tarot Style" />
//         </div>
//       </div>
//     </section>
//   );
// }

// // TarotCard Component
// function TarotCard({ icon, title }) {
//   return (
//     <div className="flex flex-col items-center justify-center text-center border border-gray-200 bg-white p-4 rounded-xl shadow hover:shadow-md transition-all duration-200 ease-in-out">
//       <div className="text-[#c4a869] mb-2">{icon}</div>
//       <div className="text-sm font-semibold text-[#c4a869]">{title}</div>
//     </div>
//   );
// }
