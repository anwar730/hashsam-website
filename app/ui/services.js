'use client'
import { useLayoutEffect } from "react";
import { IoEarthOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";
import { FiArrowRight } from "react-icons/fi"; // "Learn More" arrow
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure AOS CSS is imported

export default function Services() {
  useLayoutEffect(() => {
    // Initialize AOS with options for smoothness and delay
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: true, // To prevent re-triggering on scroll
      offset: 200, // Trigger the animation a little before the element reaches the viewport
    });
  }, []);

  return (
    <section className="overflow-hidden py-12 mb-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div data-aos="fade-up" className="text-center">
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-teal-500 mb-6">
            <span className="font-thin text-black">Our </span>Services
          </h1>
        <p className="mt-6 text-sm font-medium text-gray-600 max-w-2xl mx-auto">
          We leverage technology to enhance healthcare and pharmacy operations, ensuring efficiency and accessibility.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
        {/* Card 1 - Global Health Solutions */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="w-full p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center text-center"
        >
          {/* Icon on top */}
          <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mb-4">
            <IoEarthOutline className="text-teal-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Global Health Solutions
          </h3>
          <p className="mt-4 text-sm lg:text-lg text-gray-600">
            We specialize in Health Management Information Systems (HMIS) and Telemedicine, enabling seamless digital health services and efficient patient data management.
          </p>
          <a href="/healthcare-solutions">
            <button className="mt-6 flex items-center text-teal-500 font-semibold hover:text-teal-600 transition-colors">
              Learn More
              <FiArrowRight className="ml-2" />
            </button>
          </a>
        </div>

        {/* Card 2 - Innovative Pharmacy Solutions */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="w-full p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center text-center"
        >
          {/* Icon on top */}
          <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mb-4">
            <GiMedicines className="text-teal-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Innovative Pharmacy Solutions
          </h3>
          <p className="mt-4 text-sm lg:text-lg text-gray-600">
            Providing specialized pharmaceutical offerings, including biosimilars and complex generics, to improve accessibility and affordability in healthcare.
          </p>
          <a href="/pharmacy-solutions">
            <button className="mt-6 flex items-center text-teal-500 font-semibold hover:text-teal-600 transition-colors">
              Learn More
              <FiArrowRight className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
