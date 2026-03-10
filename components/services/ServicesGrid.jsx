"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "IT Services",
    description: "We provide modern IT solutions to help businesses grow digitally and operate efficiently.",
    points: [
      "Mobile Applications",
      "Web Designing",
      "Graphic Designing",
      "Digital Marketing",
    ],
  },
  {
    title: "Corporate Services",
    description: "We assist businesses with comprehensive services to streamline operations and ensure compliance.",
    points: [
      "Office Automation",
      "Fire and Safety Services",
      "CCTV Installations",
      "Security Services",
      "Manpower/Staffing",
      "Payroll Management",
      "Transport/Logistics",
    ],
  },
  {
    title: "Legal Services",
    description: "End-to-end legal solutions to safeguard and guide your business and personal interests.",
    points: [
      "Background Verification",
      "Valuations",
      "Project Reports",
      "Legal Opinions",
      "General Accounting",
    ],
  },
  {
    title: "NRI Services",
    description: "Specialized services for NRIs to manage and safeguard their property and legal matters.",
    points: [
      "Due Diligence",
      "Property Maintenance",
      "Property Safeguarding",
      "Legal Safeguarding",
      "Property Liaisoning",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-[#f6fbf7] rounded-lg shadow-sm p-6 hover:shadow-md transition"
          >
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-[#281E5C]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg mt-3">
              {service.description}
            </p>

            <hr className="my-4 border-gray-200" />

            {/* Bullet Points */}
            <ul className="space-y-3">
              {service.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-800 text-base md:text-lg"
                >
                  <CheckCircle
                    className="text-[#281E5C] mr-2"
                    size={20}
                    strokeWidth={2}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
