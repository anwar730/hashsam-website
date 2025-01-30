import Image from "next/image";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Services from "./ui/services";
import AboutUs from "./ui/AboutUs";

export default function Home() {
  return (
    <>
    <Hero />
    <AboutUs />
    <Services />
    </>
    
  );
}
