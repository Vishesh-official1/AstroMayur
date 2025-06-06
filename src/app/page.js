import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Horoscope from "./components/Horscope";
import BestA from "./components/BestA";
import ReviewA from "./components/ReviewA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Horoscope />
      <BestA />
      <ReviewA />
      <Footer />
    </div>
  );
}
