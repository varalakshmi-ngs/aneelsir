"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Direct Investment through Shares",
    desc: "Can purchase shares directly having the offer price of Rs.10/- each. Can purchase shares directly having the offer price of Rs.10/- each. Can purchase shares directly having the offer price of Rs.10/- each.",
    img: "/images/investment.jpg",
    link: "/services", 
  },
  {
    title: "Investment through Services",
    desc: "Investment through services. Investment through services. Investment through services. Investment through services. Investment through services. Investment through services.",
    img: "/images/investment.jpg",
    link: "/services", 
  },
  {
    title: "Collaborate through Products",
    desc: "Collaborate through products. Collaborate through products. Collaborate through products. Collaborate through products. Collaborate through products. Collaborate through products.",
    img: "/images/investment.jpg",
    link: "/services", 
  },
];

export default function WhatWeOffer() {
  return (
    <section className="w-full py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-[#281E5C]">// What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#281E5C] mt-2">
          Unlock Growth <br />
          with <span className="italic font-serif">Our Opportunities</span>
        </h2>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <Image
              src={service.img}
              alt={service.title}
              width={600}
              height={400}
              className="object-cover w-full h-[280px]"
            />

            {/* Title at Bottom */}
            <div className="absolute bottom-4 left-0 w-full text-center text-white text-lg font-semibold z-10 group-hover:opacity-0 transition-opacity duration-300">
              {service.title}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-center items-center text-center px-6 bg-black/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h3 className="text-white text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-200 text-sm mb-4">{service.desc}</p>

              {/* Arrow Button with Link + Hover */}
              <Link href={service.link}>
                <button
                  className="w-10 h-10 rounded-full bg-[#F84365] flex items-center justify-center text-white font-bold 
                  transition-all duration-300 ease-in-out hover:bg-[#CC334E] hover:scale-110 cursor-pointer"
                >
                  →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
