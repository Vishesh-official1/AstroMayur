import Image from "next/image";
import Navbar from "../components/Navbar";

import TarotA from "../components/TarotA";
import TarotB from "../components/TarotB";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Consult /> */}
      <TarotA />
      {/* <TarotB /> */}
      <Footer />
    </div>
  );
}
