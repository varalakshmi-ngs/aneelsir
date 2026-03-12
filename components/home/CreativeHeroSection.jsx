"use client";

import { motion } from "framer-motion";
import CustomButton from "utils/CustomButton";

export default function CreativeHeroSection() {
  const headingLines = [
    "Empowering Businesses",
    "With Digital Innovation"
  ];

  const subHeadingLines = [
    "RK4CES transforms ideas into powerful digital solutions.",
    "We help brands grow with AI-driven strategies, automation, and creative design."
  ];

  // Enhanced container with staggered timing
  const container = {
    hidden: { },
    show: {
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.3,
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Enhanced item animation with multiple effects
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Accent element animation
  const accentVariant = {
    hidden: { width: 0, opacity: 0 },
    show: {
      width: "80px",
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  // Parallax effect for background
  const parallaxVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "700px" }}
    >
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0"
        variants={parallaxVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          backgroundImage: "url('/images/Robo-Online-banner.gif')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          width: "100%",
          height: "100%"
        }}
      />

      {/* Multi-layer gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#F84365]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 py-16 md:py-20 max-w-5xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div 
          className="mb-6 h-1 bg-gradient-to-r from-[#F84365] to-transparent rounded-full"
          variants={accentVariant}
        />

        {/* Top tag */}
        <motion.span
          variants={item}
          className="inline-block text-[#F84365] text-lg font-semibold tracking-widest uppercase mb-4 mt-4"
        >
          Welcome to the Future
        </motion.span>

        {/* Main Heading */}
        <div className="mb-6 max-w-3xl">
          {headingLines.map((line, index) => (
            <motion.h1
              key={index}
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight text-white mb-2 tracking-tight"
            >
              {line}
            </motion.h1>
          ))}
        </div>

        {/* Decorative accent */}
        <motion.div
          variants={item}
          className="w-1 h-16 bg-gradient-to-b from-[#F84365] to-transparent mb-6"
        />

        {/* Subheading */}
        <div className="max-w-xl space-y-3 mb-10">
          {subHeadingLines.map((line, index) => (
            <motion.p
              key={index}
              variants={item}
              className="text-lg md:text-xl text-gray-200 leading-relaxed font-light"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          variants={item}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        >
          <CustomButton
            text="Get Started with RK4CES"
            href="/contact"
            bgColor="bg-[#F84365]"
            hoverColor="hover:bg-[#CC334E]"
            textColor="text-white"
          />
          
          {/* Secondary CTA */}
          <motion.a
            href="/services"
            className="text-white font-semibold flex items-center gap-2 hover:text-[#F84365] transition-colors group"
            whileHover={{ x: 5 }}
          >
            Explore Our Services
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}