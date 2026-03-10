"use client";

import { useEffect, useState, useRef } from "react";
import { FaUsers, FaAward, FaChartLine, FaGlobe } from "react-icons/fa";

export default function CompanyStats() {
  const stats = [
    {
      id: 1,
      icon: <FaGlobe className="text-yellow-400 text-4xl" />,
      value: 56,
      suffix: "k",
      label: "Clients around the world",
    },
    {
      id: 2,
      icon: <FaAward className="text-yellow-400 text-4xl" />,
      value: 30,
      suffix: "+",
      label: "Awards winning",
    },
    {
      id: 3,
      icon: <FaChartLine className="text-yellow-400 text-4xl" />,
      value: 96,
      suffix: "%",
      label: "Business growth",
    },
    {
      id: 4,
      icon: <FaUsers className="text-yellow-400 text-4xl" />,
      value: 168,
      suffix: "+",
      label: "Team members",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateCounts();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 sec animation
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = start;
          return newCounts;
        });
        if (start === end) clearInterval(timer);
      }, stepTime);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 overflow-hidden"
    >
      {/* Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white relative z-10">
        {stats.map((stat, i) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center transform transition duration-500 hover:scale-110"
          >
            <div className="mb-4 animate-bounce">{stat.icon}</div>
            <h2 className="text-4xl font-extrabold text-white">
              {counts[i]}
              {stat.suffix}
            </h2>
            <p className="mt-2 text-gray-300 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Decorative Lines Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          className="w-full h-28"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            d="M0,100 C360,180 1080,20 1440,100"
          />
          <path
            fill="none"
            stroke="#10B981"
            strokeWidth="1.5"
            d="M0,120 C360,200 1080,40 1440,120"
          />
          <path
            fill="none"
            stroke="#10B981"
            strokeWidth="1"
            d="M0,140 C360,220 1080,60 1440,140"
          />
        </svg>
      </div>
    </section>
  );
}
