'use client'
import React, { useLayoutEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Healthcare() {
  useLayoutEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, // Ensures the animation happens once
    });
  }, []);

  return (
    <div className="md:py-24 py-12 px-4 sm:px-8 md:px-12 bg-gray-100 container mx-auto max-w-screen-2xl">
      {/* Our Purpose Section */}
      <div
        data-aos="fade-right"
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"
      >
        {/* Image on the Left */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/Leonardo_Kino_XL_black_doctor_operating_hmis_0.jpg" // Replace with your image path
            alt="Our Purpose"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>

        {/* Text on the Right */}
        <div
          data-aos="fade-up" // Adding fade-up animation for the text
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-teal-500 mb-6">
            HMIS
          </h1>
          <p className="text-md font-thin md:text-xl lg:text-xl text-gray-600">
            Our Healthcare Management Information System (HMIS) is designed to streamline operations, enhance patient care, and optimize healthcare workflows. By integrating innovation, efficiency, and accessibility, we empower healthcare providers with data-driven insights to improve patient outcomes and overall healthcare quality.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-gray-300 max-w-5xl mx-auto"></div>

      {/* Our Vision Section */}
      <div
        data-aos="fade-left"
        className="max-w-6xl mx-auto justify-between flex flex-col md:flex-row items-center gap-8"
      >
        {/* Text on the Left */}
        <div
          data-aos="fade-up" // Fade-up for the text animation on this section as well
          className="w-full md:ml-8 md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-500 mb-6">
            Telemedicine
          </h2>
          <p className="text-md font-thin md:text-xl lg:text-xl text-gray-600">
            HashSam's Telemedicine platform revolutionizes healthcare by providing remote consultations, real-time medical support, and seamless patient care. Our goal is to enhance access to quality healthcare across Africa, ensuring affordability, convenience, and improved health outcomes through digital innovation.
          </p>
        </div>

        {/* Image on the Right */}
        <div
          data-aos="fade-up" // Adding fade-up for image animation too
          className="w-full md:w-1/4 flex justify-center"
        >
          <Image
            src="/Leonardo_Kino_XL_black_patient_smiling_while_there_is_a_laptop_1.jpg" // Replace with your image path
            alt="Our Vision"
            width={300}
            height={300}
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
}

