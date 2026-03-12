"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomButton from "utils/CustomButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function AboutRoboOnline() {
  return (
    <section className="relative flex flex-col-reverse mt-10 lg:mt-10 lg:flex-row items-center justify-between px-6 py-16 bg-white">
      {/* Left content */}
      <motion.div
        className="max-w-xl text-center lg:text-left space-y-6 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="text-[#281E5C]  font-medium"
          variants={lineVariants}
        >
         // About RK4CES
        </motion.p>

        <motion.h1
          className="text-4xl lg:text-5xl font-bold"
          variants={lineVariants}
        >
          <span className="text-[#281E5C] ">We Take Care </span>
          <span className="text-[#281E5C]">of Your Problems Carefully</span>
        </motion.h1>

        <motion.p className="text-gray-600 text-justify" variants={lineVariants}>
          Offering comprehensive solutions in IT services, Corporate services,
          and NRI services, our company ensures seamless integration of
          technology and expertise. We empower businesses with innovative IT
          strategies, streamline corporate operations for efficiency, and
          deliver tailored support for NRIs, simplifying their global
          connectivity and financial needs. Your trusted partner in excellence
          and growth.
        </motion.p>

        <motion.ul
          className="list-disc pl-6 text-gray-700 space-y-2"
          variants={lineVariants}
        >
          <li>Delivering innovative and tailored tech solutions.</li>
          <li>
            Streamlining operations and ensuring compliance for organizational
            efficiency.
          </li>
          <li>
            Providing seamless global connectivity and support for Non-Resident
            Indians&apos; financial and legal needs.
          </li>
        </motion.ul>
        <motion.div
          variants={lineVariants}
          whileHover={{ scale: 1.05 }}
          className="relative inline-flex group"
        >
          <motion.div
            className="absolute -inset-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(120deg,#F84365,#ff8aa0,#7c6cff,#4fb7ff,#F84365)",
              backgroundSize: "300% 300%",
              filter: "blur(3px)"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <a
            href="/contact"
            className="relative flex items-center gap-2 px-7 py-3 rounded-full bg-[#F84365] text-white font-semibold shadow-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

            Read More

            {/*           <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity
              }}
            >
              →
            </motion.span> */}
          </a>
        </motion.div>


      </motion.div>

      {/* Right main image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center relative mb-10 lg:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <Image
          src="/images/Anil-1-683x1024.jpg"
          alt="RK4CES Illustration"
          width={500}
          height={500}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg object-cover"
        />
      </motion.div>

    </section>
  );
}
