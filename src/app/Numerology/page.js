import Image from "next/image";
import Navbar from "../components/Navbar";

import NumerologyA from "../components/NumerologyA";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Consult /> */}
      <NumerologyA />
      {/* <TarotB /> */}
      <Footer />
    </div>
  );
}
