import React from 'react';
import Image from 'next/image';

export default function PurposeSection() {
  return (
    <div className="md:py-24 py-0 px-4 sm:px-8 md:px-12 bg-gray-50 overflow-hidden">
      {/* Our Purpose Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image on the Left */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          data-aos="fade-right" 
          data-aos-duration="1000"
          data-aos-offset="200" // Offset for better visibility on mobile
        >
          <Image
            src="/purpose-1-480x480.png" // Replace with your image path
            alt="Our Purpose"
            width={300}
            height={300}
            className="rounded-sm"
          />
        </div>

        {/* Text on the Right */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-left" 
          data-aos-duration="1000"
          data-aos-offset="200" // Offset for better visibility on mobile
        >
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-teal-500 mb-6">
            <span className="font-thin text-black">Our </span>Purpose
          </h1>
          <p className="text-md font-thin md:text-xl lg:text-xl text-gray-600">
            We strive to create healthcare opportunities that enhance patient well-being and improve the quality of life for individuals and their families. Through innovation, accessibility, and excellence, we are dedicated to making a lasting impact on healthcare in our community.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-gray-300 max-w-5xl mx-auto"></div>

      {/* Our Vision Section */}
      <div className="max-w-6xl mx-auto justify-between flex flex-col md:flex-row items-center gap-8">
        {/* Text on the Left */}
        <div
          className="w-full md:ml-8 md:w-1/2 text-center md:text-left"
          data-aos="fade-right" 
          data-aos-duration="1000"
          data-aos-offset="200" // Offset for better visibility on mobile
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-500 mb-6">
            <span className="font-thin text-black">Our </span>Vision
          </h2>
          <p className="text-md font-thin md:text-xl lg:text-xl text-gray-600">
            To expand access to high-quality, cost-effective pharmaceuticals, ensuring better health outcomes for individuals and families across Africa. At Klinikum, we are committed to bridging healthcare gaps and improving lives through innovation and affordability.
          </p>
        </div>

        {/* Image on the Right */}
        <div
          className="w-full md:w-1/4 flex justify-center"
          data-aos="fade-left" 
          data-aos-duration="1000"
          data-aos-offset="200" // Offset for better visibility on mobile
        >
          <div className="w-full flex justify-center md:justify-start">
          <Image
            src="/vision23.jpg" // Replace with your image path
            alt="Our Purpose"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
