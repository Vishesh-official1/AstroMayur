import Image from "next/image";
import Navbar from "../components/Navbar";
import Consult from "../components/ConsultNow";
import ConsultSectionA from "../components/ConsultSectionA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Consult />
      <ConsultSectionA />
      <Footer />
    </div>
  );
}
