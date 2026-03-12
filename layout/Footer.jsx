"use client";

import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#30303c] text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Info */}
          <div>
            <img
              src="/images/mylogo.png"
              alt="Logo"
              className="h-8 mb-4"
            />
            {/* <span className="text-4xl font-bold text-white-800 hover:animate-grow transition-transform duration-300 hover:scale-110">RK4CES</span> */}
            <p className="text-[15px] mb-1">
              Overall client rating is 4.9 out of 5
            </p>
            <p className="text-[15px] mb-4">8,500 Clients for RK4CES</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="hover:text-[#F84365] transition-colors duration-300"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-[#F84365] transition-colors duration-300"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-[#F84365] transition-colors duration-300"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-[#F84365] transition-colors duration-300"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            <a
              href="/contact"
              className="inline-block bg-[#F84365] text-white px-6 py-2 rounded-full 
                         hover:bg-[#CC334E] transition-all duration-300"
            >
              contact us
            </a>
          </div>

          {/* Inquiry */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Work Inquiry</h3>
            <ul className="space-y-2 text-[15px]">
              <li className="flex items-center">
                <span className="mr-2">📞</span> +91 99490 11223
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span> +91 77020 11223
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span> aneel@robolegalonline.com
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span> contact@roboonline.in


              </li>
              <li className="flex items-center">
                <span className="mr-2">💬</span> RK4CES
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-[15px]">
              <li>
                <a
                  href="/"
                  className="hover:text-[#F84365] transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#F84365] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#F84365] transition">
                  services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#F84365] transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#F84365] transition"
                >
                  Faqs
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-[15px]">
              <li>
                <a
                  href="/services"
                  className="hover:text-[#F84365] transition"
                >
                  IT Services
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-[#F84365] transition"
                >
                  Corporate Services
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-[#F84365] transition"
                >
                  Legal Services
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-[#F84365] transition"
                >
                  NRI Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-sm text-gray-400 text-center space-y-2">
          <p>We are tracking any intention of piracy.</p>
          <p>
            Copyright © 2025 RK4CES. All rights reserved. Template By Rajesh
            Doot
          </p>
        </div>
      </div>
    </footer>
  );
}
