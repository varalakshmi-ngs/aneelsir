"use client";

import { FaHeadphonesAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Container animation (stagger children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Line/Card animation (fade up)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ContactSection() {
  return (
    <section className="bg-[#fdf7fb] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left Side - Heading & Text */}
        <motion.div
          className="lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex items-center text-[#F84365] font-semibold uppercase text-sm mb-3"
            variants={itemVariants}
          >
            <FaHeadphonesAlt className="mr-2" />
            Get in Touch
          </motion.div>

          <motion.h2
            className="text-4xl font-extrabold text-[#281E5C] leading-snug"
            variants={itemVariants}
          >
            Connecting You with the Right Solutions
          </motion.h2>

          <motion.p
            className="text-gray-600 mt-4 max-w-lg"
            variants={itemVariants}
          >
            At RoboOnline, we’re here to support you—whether it’s IT services,
            corporate solutions, or NRI support. Reach out to us and let’s make
            your journey seamless.
          </motion.p>
        </motion.div>

        {/* Right Side - Contact Cards */}
        <motion.div
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Corporate Services - Phone */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-[#281E5C] mr-3" />
              <h3 className="text-[#281E5C] font-medium">Corporate Services</h3>
            </div>
            <p className="text-gray-800">+91 99490 11223</p>
            <p className="text-gray-800">+91 77020 11223</p>
          </motion.div>

          {/* NRI Support - Phone */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-[#281E5C] mr-3" />
              <h3 className="text-[#281E5C] font-medium">NRI Support</h3>
            </div>
            <p className="text-gray-800">+91 99490 11223</p>
            <p className="text-gray-800">+91 77020 11223</p>
          </motion.div>

          {/* Corporate Services - Email */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-[#F84365] mr-3" />
              <h3 className="text-[#281E5C] font-medium">Corporate Services</h3>
            </div>
            <p className="text-gray-800">aneel@robolegalonline.com</p>
          </motion.div>

          {/* NRI Support - Email */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-[#F84365] mr-3" />
              <h3 className="text-[#281E5C] font-medium">NRI Support</h3>
            </div>
            <p className="text-gray-800">aneel@robolegalonline.com</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
