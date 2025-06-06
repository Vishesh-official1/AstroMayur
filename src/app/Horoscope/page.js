import Image from "next/image";
import Navbar from "../components/Navbar";

import HoroscopeA from "../components/HoroscopeA";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Consult /> */}
      <HoroscopeA />
      {/* <TarotB /> */}
      <Footer />
    </div>
  );
}
