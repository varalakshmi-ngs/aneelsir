"use client";

import { motion } from "framer-motion";
import CustomButton from "../../utils/CustomButton";

export default function AboutUsSection() {
  return (
    <div className="bg-white text-gray-900">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-10 sm:py-16 px-4 sm:px-6 md:px-12">
        <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-[#281E5C] leading-snug">
          Top Robotics & AI Solutions Provider - Robo Online
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
          Empowering industries with cutting-edge Robotics, AI, and Automation
          solutions. Robo Online bridges technology with innovation to drive
          growth and efficiency worldwide.
        </p>

        {/* Who We Are Section */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#281E5C] italic">
              Who We Are?
            </h3>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Robo Online is a fast-growing robotics and AI solutions company,
              established in 2023. We specialize in providing innovative
              automation, machine learning, and IoT solutions. Our dedicated team
              of engineers and innovators ensures businesses transform with
              smarter, faster, and scalable technology. From industrial robotics
              to AI-driven platforms, Robo Online is shaping the future of
              intelligent systems.
            </p>
          </motion.div>
          <div className="flex flex-col items-center">
            <img
              src="/images/Logo-removebg-preview1 (1).png"
              alt="Robo Online Logo"
              className="w-36 sm:w-44 md:w-56 mb-4 sm:mb-6"
            />
            <img
              src="/images/img1.jpg"
              alt="Robotics innovation"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img
              src="/images/img2.jpg"
              alt="Robotics team"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#281E5C] italic">
              Why Choose Us?
            </h3>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Partnering with Robo Online ensures your business is future-ready.
              We focus on:
            </p>
            <ul className="list-disc list-inside mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-700 space-y-2">
              <li>AI-Driven Robotics</li>
              <li>Smart Automation Solutions</li>
              <li>Scalable & Future-Proof Technology</li>
              <li>Customized Strategies for Every Business</li>
            </ul>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              With expertise in robotics, AI, and automation, Robo Online helps
              you stay ahead in the global innovation race.
            </p>
             <CustomButton
                        text="Ready to innovate? Contact us today!"
                        href="/contact"
                        bgColor="bg-[#F84365]"
                        hoverColor="hover:bg-[#CC334E]"
                        textColor="text-white"
                      />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
