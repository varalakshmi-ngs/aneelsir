"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/aboutus" },
    { name: "Collaborations", href: "/collaborations" },
    { name: "Share Holders", href: "/shareholders" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f1f9f5] shadow-md z-50 ">
      <div className="bg-blue-600 h-10 flex items-center justify-center">
        <span className="text-white text-sm font-bold">
          📞 For More Queries: +91 99490 11223 &nbsp; | &nbsp; +91 77020 11223 &nbsp; | &nbsp; ⏰ 24/7 Available
        </span>
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/mylogo.png"
            alt="Logo"
            className="h-12 w-auto"
          />
          {/* <span className="text-4xl font-bold text-blue-800 hover:animate-grow transition-transform duration-300 hover:scale-110">RK4CES</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center text-gray-800 hover:text-[#CC334E] transition"
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} className="ml-1" />}
              </Link>

              {/* Dropdown */}
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#CC334E]"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side (Desktop CTA) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contact"
            className="px-5 py-2 bg-[#F84365] text-white rounded-full hover:bg-[#CC334E] transition"
          >
            Contact With RK4CES
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f1f9f5] border-t border-gray-200 shadow-md">
          <nav className="flex flex-col items-center space-y-2 p-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-gray-800 hover:text-[#F84365]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        href="#"
                        className="block text-gray-600 hover:text-[#CC334E] text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              className="mt-3 px-5 py-2 bg-[#F84365] text-white rounded-full hover:bg-[#CC334E] transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact With RK4CES
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
