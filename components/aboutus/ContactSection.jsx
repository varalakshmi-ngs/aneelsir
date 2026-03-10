"use client";

import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-black max-w-4xl mx-auto">
        Contact Us For Bristle -tech top Digital Marketing agency in Hyderabad
        And Multimedia Solutions.
      </h2>

      {/* Contact Options */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Mail Option */}
        <div className="flex flex-col items-center">
          <Mail className="w-12 h-12 text-[#281E5C] mb-4" />
          <a
            href="mailto:info@bristletech.com"
            className="bg-gradient-to-r from-teal-400 to-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            SEND A MAIL
          </a>
          <p className="mt-3 text-gray-700">info@bristletech.com</p>
        </div>

        {/* Call Option */}
        <div className="flex flex-col items-center">
          <Phone className="w-12 h-12 text-[#281E5C] mb-4" />
          <a
            href="tel:+917816029870"
            className="bg-gradient-to-r from-teal-400 to-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            REQUEST A CALL BACK
          </a>
          <p className="mt-3 text-gray-700">+91 7816029870</p>
        </div>
      </div>
    </section>
  );
}
