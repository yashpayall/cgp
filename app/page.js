import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Collaboration from "@/components/homepage/Collaboration";
import Debugging from "@/components/homepage/Debugging";
import Hero from "@/components/homepage/Hero";
import Spectrum from "@/components/homepage/Spectrum";
import Turbocharge from "@/components/homepage/Turbocharge";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Turbocharge />
      <Debugging />
      <Collaboration />
      <Spectrum />
      <Footer />
    </>
  );
}
