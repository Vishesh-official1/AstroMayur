import AriesIcon from "./icons/AriesIcon";
import TaurusIcon from "./icons/TaurusIcon";
import GeminiIcon from "./icons/GeminiIcon";
import CancerIcon from "./icons/CancerIcon";
import LeoIcon from "./icons/LeoIcon";
import VirgoIcon from "./icons/VirgoIcon";
import LibraIcon from "./icons/LibraIcon";
import ScorpioIcon from "./icons/ScorpioIcon";
import SagittariusIcon from "./icons/SagittariusIcon";
import CapricornIcon from "./icons/CapricornIcon";
import AquariusIcon from "./icons/AquariusIcon";
import PiscesIcon from "./icons/PiscesIcon";

const zodiacData = [
  { name: "Aries", icon: <AriesIcon /> },
  { name: "Taurus", icon: <TaurusIcon /> },
  { name: "Gemini", icon: <GeminiIcon /> },
  { name: "Cancer", icon: <CancerIcon /> },
  { name: "Leo", icon: <LeoIcon /> },
  { name: "Virgo", icon: <VirgoIcon /> },
  { name: "Libra", icon: <LibraIcon /> },
  { name: "Scorpio", icon: <ScorpioIcon /> },
  { name: "Sagittarius", icon: <SagittariusIcon /> },
  { name: "Capricorn", icon: <CapricornIcon /> },
  { name: "Aquarius", icon: <AquariusIcon /> },
  { name: "Pisces", icon: <PiscesIcon /> },
];

export default function ZodiacPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffaf2] via-[#fdf3e7] to-[#faecd9] px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#5e3a17] mb-14 tracking-wide drop-shadow-sm">
        ✨ Zodiac Signs
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8 justify-items-center">
        {zodiacData.map(({ name, icon }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2 px-4 py-6 bg-white shadow-lg hover:shadow-2xl rounded-xl border border-[#f1e0ce] transition-all duration-300 ease-in-out"
          >
            <div className="w-14 h-14 text-[#B59864]">{icon}</div>
            <span className="text-base font-semibold text-[#7b5a30] tracking-wide">
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom space to avoid content cutoff */}
      <div className="mt-20" />
    </div>
  );
}
