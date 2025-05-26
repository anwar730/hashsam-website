import Hero from "./ui/Hero";
import Services from "./ui/services";
import AboutUs from "./ui/AboutUs";

export const metadata = {
  title: "HashSam Medical Center",
  description: "Best Healthcare solutions",
};
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs  />
      <div id="services"><Services /></div>
    </>
  );
}
