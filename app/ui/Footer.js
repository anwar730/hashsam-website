import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-teal-600 text-white rounded-3xl container mx-auto mt-36">
      {/* Aesthetic CTA Section */}
      <div className="py-20 px-4 sm:px-8 md:px-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
          Get in touch
        </h2>
        <p className="text-lg text-gray-50 mb-8">
          We’re ready to bring your ideas to life. Get in touch with us today.
        </p>
        <button className="px-8 py-3 bg-transparent border-2 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300">
          Contact Us
        </button>
      </div>

      {/* Line Break */}
      <div className="border-t border-gray-100 md:ml-32 md:mr-32"></div>

      {/* Footer Section */}
      <footer className="py-12 px-4 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Headquarters */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Headquarters</h3>
          <p className="text-gray-100 font-light">1775 William Flood</p>
          <p className="text-gray-100 py-2 font-light">Harold, Kenya</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-100 font-light">1 704-21 99.57 760</p>
          <p className="text-gray-100 py-2 font-light">E-Mail@eljewa.edu</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="text-gray-100 font-light">
            <li className="py-2 ">About</li>
            <li className="py-2 ">Blog</li>
            <li className="py-2 ">Careers</li>
            <li className="py-2 ">Contact</li>
          </ul>
        </div>

        {/* Privacy */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Privacy</h3>
          <ul className="text-gray-100 font-light">
            <li>Terms and Conditions</li>
            <li className="py-2 ">Cookie Preferences</li>
          </ul>
        </div>      
        
        {/* Logo and Social Media Section */}
        
      </footer>
      <div className="flex justify-center items-center space-y-4 flex-col pb-24 mt-4">
          <a href="#home">
            <Image alt="logo" src="/Green and Blue Minimalist Pharmacy Logo (3).svg" width={180} height={60} />
          </a>
          <p className="text-gray-200">© 2025 Klinikum™. All Rights Reserved.</p>
        </div>
    </div>
  );
}
