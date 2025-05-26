import React from 'react';
import Image from 'next/image';
import PurposeSection from '../ui/ExtendedAbout';

export const metadata = {
  title: "About us",
  description: "Get to know Klinikum",
};

export default function About() {
  return (
    <>
    <div className="hero2 max-w-screen-2xl container mx-auto relative h-[700px] flex justify-center text-white">
      {/* Background Image */}
      <div className="">
        <Image
          src="/layered-waves-haikei (1).svg" // Replace with your image path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="brightness-100 md:brightness-60" // Darken the image for better text contrast
        />
      </div>

      {/* Content */}
      <div className="hero2 relative mt-24 md:mt-36 text-center max-w-4xl px-4">
        <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Committed to Our Region and Its Patients
        </h1>
        <p className="text-md md:text-xl lg:text-2xl font-light text-gray-50 pt-6">
          <strong>HashSam Medical Center </strong> is a trusted leader in delivering high-quality healthcare solutions, specializing in the distribution of innovative pharmaceuticals, biosimilars, and advanced medical treatments.
        </p>
      </div>

      {/* Floating Rounded Images */}
      {/* <div className="absolute hidden md:flex -bottom-1 left-0 right-0 justify-center gap-8">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/Leonardo_Kino_XL_group_of_doctors_smiling_3.jpg" // Replace with your image path
            alt="Floating Image 1"
            width={600}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-64 h-24 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/Leonardo_Kino_XL_group_of_doctors_smiling_3.jpg" // Replace with your image path
            alt="Floating Image 2"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/Leonardo_Kino_XL_group_of_doctors_smiling_3.jpg" // Replace with your image path
            alt="Floating Image 3"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}
      
    </div>
    <PurposeSection />
    </>
  );
}