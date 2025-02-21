import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="bg-teal-600 text-white rounded-3xl max-w-screen-xl container mx-auto mt-36"
    >
      {/* Aesthetic CTA Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
        className="py-20 px-4 sm:px-8 md:px-12 text-center"
      >
        <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
          Get in touch
        </h2>
        <p className="text-lg text-gray-50 mb-8">
          We’re ready to bring your ideas to life. Get in touch with us today.
        </p>
        <a href="/contact">
          <button className="px-8 py-3 bg-transparent border-2 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300">
            Contact Us
          </button>
        </a>
      </div>

      {/* Line Break */}
      <div className="border-t border-gray-100 md:ml-32 md:mr-32"></div>

      {/* Footer Section */}
      <footer className="py-12 px-4 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Headquarters */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-lg font-semibold mb-4">Headquarters</h3>
          <p className="text-gray-100 font-light">The Ark Place</p>
          <p className="text-gray-100 py-2 font-light">Nairobi, Kenya</p>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-100 font-light">+254-792 830 455</p>
          <p className="text-gray-100 py-2 font-light">klinikumenquiries@gmail.com</p>
        </div>

        {/* Navigation */}
        <div data-aos="fade-up" data-aos-duration="1400" data-aos-delay="200">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <div className="text-gray-100 font-light flex flex-col">
            <Link href="/" className="py-2">Home</Link>
            <Link href="/about" className="py-2">About</Link>
            <Link href="/healthcare-solutions" className="py-2">HealthCare Solutions</Link>
            <Link href="/pharmacy-solutions" className="py-2">Pharmacy Solutions</Link>
          </div>
        </div>

        {/* Privacy */}
        <div data-aos="fade-up" data-aos-duration="1600" data-aos-delay="300">
          <h3 className="text-lg font-semibold mb-4">Privacy</h3>
          <div className="text-gray-100 font-light flex flex-col">
            <Link
                  href="/">Terms and Conditions</Link>
            <Link
                  href="/" className="py-2">Cookie Preferences</Link>
          </div>
        </div>
      </footer>

      {/* Logo and Social Media Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="1800"
        data-aos-delay="400"
        className="flex justify-center items-center space-y-4 flex-col pb-24 mt-4"
      >
        <a href="#home">
          <Image alt="logo" src="/Green and Blue Minimalist Pharmacy Logo (3).svg" width={180} height={60} />
        </a>
        <p className="text-gray-200">© 2025 Klinikum™. All Rights Reserved.</p>
        
        {/* Social Media Icons */}
        {/* <div className="flex space-x-6">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-teal-300" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white text-2xl hover:text-teal-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-white text-2xl hover:text-teal-300" />
          </a>
        </div> */}
      </div>
    </div>
  );
}
