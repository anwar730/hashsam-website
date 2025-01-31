"use client";
import { useState, useLayoutEffect } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";

// Dynamically import the Contact component and disable SSR
const ContactForm = dynamic(() => import('./page.js'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false); // Track loading state for button

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs
      .send(
        "service_w5m49bs",
        "template_jfgsehi",
        formData,
        "T6-o0k-kWQFpJtMZh"
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          setFormData({ name: "", company: "", email: "", message: "" });
        },
        () => {
          setStatus({ type: "error", message: "Something went wrong. Try again!" });
        }
      )
      .finally(() => {
        setLoading(false); // Stop loading when done
      });
  };

  useLayoutEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timer); // Cleanup the timeout on component unmount
    }
  }, [status.message]);

  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Contact Information Section */}
        <div className="mt-0 md:mt-8" data-aos="fade-up">
          <h1 className="text-4xl text-center md:text-start md:text-5xl font-bold text-teal-500 mb-4">Contact</h1>
          <p className="text-lg text-center md:text-start text-gray-600 mb-8">
            Drop us a line and we’ll get back to you.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-transparent p-8" data-aos="fade-up" data-aos-delay="200">
          {status.message && visible && (
            <div
              className={`mb-4 px-4 py-3 rounded-lg text-white ${
                status.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-2 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company name"
              className="w-full px-2 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-2 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
              className="w-full px-2 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition duration-300 disabled:bg-teal-300 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <div className="spinner-border animate-spin border-4 border-t-4 border-white w-6 h-6 rounded-full mr-2"></div> // Add margin to space out spinner from text
            ) : (
              ""
            )}
            {!loading && "Submit"} {/* Ensures text appears when not loading */}
          </button>
        </form>
      </div>
    </div>
  );
}
