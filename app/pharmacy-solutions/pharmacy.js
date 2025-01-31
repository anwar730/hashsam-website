import React from 'react';
import Image from 'next/image';

export default function PharmacySolutions() {
  return (
    <div className="md:py-24 py-12 px-4 sm:px-8 md:px-12 bg-gray-100 container mx-auto max-w-screen-2xl">
      {/* Our Purpose Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"
      >
        {/* Image on the Left */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/2-1.png" // Replace with your image path
            alt="Our Purpose"
            width={300}
            height={300}
            className="rounded-sm"
          />
        </div>

        {/* Text on the Right */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-teal-500 mb-6">
            Biosimilars
          </h1>
          <p className="text-md font-thin md:text-xl lg:text-xl text-gray-600">
            Klinikum is committed to expanding access to high-quality, cost-effective biosimilars, providing patients with safe and affordable alternatives to biologic treatments. Through innovation and advanced healthcare solutions, we enhance patient well-being and improve treatment accessibility for individuals and families across our region.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-gray-300 max-w-5xl mx-auto"></div>

      {/* Our Vision Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="400"
        className="max-w-6xl mx-auto justify-between flex flex-col md:flex-row items-center gap-8"
      >
        {/* Text on the Left */}
        <div className="w-full md:ml-8 md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-500 mb-6">
            Complex Generics
          </h2>
          <p className="text-md font-thin md:text-xl lg:text-xl text-gray-600">
            Klinikum is dedicated to improving healthcare access through high-quality, cost-effective complex generics. By providing advanced, affordable treatment options, we enhance patient outcomes and ensure more individuals and families across Africa receive the medications they need. Our commitment to innovation and affordability helps bridge critical healthcare gaps, empowering healthier communities.
          </p>
        </div>

        {/* Image on the Right */}
        <div className="w-full md:w-1/4 flex justify-center">
          <Image
            src="/1-1-1.png" // Replace with your image path
            alt="Our Vision"
            width={300}
            height={300}
            className="rounded-sm "
          />
        </div>
      </div>
    </div>
  );
}
