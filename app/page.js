import Hero from "./ui/Hero";
import Services from "./ui/services";
import AboutUs from "./ui/AboutUs";

export const metadata = {
  title: "Klinikum Healthcare",
  description: "Best Healthcare solutions",
};
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs  />
      <Services />
    </>
  );
}
