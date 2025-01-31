import React from 'react';
import Image from 'next/image';
import PurposeSection from '../ui/ExtendedAbout';
import Healthcare from './pharmacy';

export const metadata = {
  title: "Pharmacy Solutions",
  description: "Our Pharmacy Solutions",
};
export default function Pharmacy() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto relative h-[200px] flex justify-center text-white mb-12">
      {/* Background Image */}
      <div className="hero2">
        <Image
          src="/doc.jpg" // Replace with your image path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="100% 40%"
          className="brightness-100 md:brightness-60" // Darken the image for better text contrast
        />
        <div className="absolute inset-0 bg-teal-700 opacity-80 md:opacity-70" />
      </div>

      {/* Content */}
      <div className="relative flex items-center text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Pharmacy Solutions
        </h1>
        {/* <p className="text-md md:text-xl lg:text-2xl font-light text-gray-50 pt-6">
          <strong>Klinikum </strong> is a trusted leader in delivering high-quality healthcare solutions, specializing in the distribution of innovative pharmaceuticals, biosimilars, and advanced medical treatments.
        </p> */}
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
    <Healthcare />
    </>
  );
}