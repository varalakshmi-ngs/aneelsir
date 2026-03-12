"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "utils/ServiceCard";

export default function Service() {
  const services = [
    {
      title: "IT Services",
      description:
        "From software development to cloud solutions, RK4CES delivers cutting-edge IT services that drive innovation and growth for your business.",
      image: "/images/itservises.jpeg",
      bgColor: "bg-blue-100",
    },
    {
      title: "Corporate Services",
      description:
        "We provide end-to-end corporate solutions including company registration, and financial consulting to empower enterprises.",
      image: "/images/corporate.jpeg",
      bgColor: "bg-green-100",
    },
    {
      title: "Legal Services",
      description:
        "Expert legal support covering contracts, intellectual property covering contracts, and compliance to ensure your business operates seamlessly.",
      image: "/images/itservises.jpeg",
      bgColor: "bg-purple-100",
    },
    {
      title: "NRI Services",
      description:
        "Comprehensive NRI support from property management to taxation and legal consulting, helping NRIs manage their India-related needs hassle-free.",
      image: "/images/nri.jpeg",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="py-12 px-4 ">
      <h2 className="text-4xl font-bold text-[#281E5C]  text-center mb-4">Our Services</h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        At RK4CES, we provide a complete suite of services to support businesses,
        professionals, and NRIs with IT, corporate, legal, and consulting solutions.
      </p>

      {/* Parent Container with Scroll Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
              bgColor={service.bgColor}
              className="h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
