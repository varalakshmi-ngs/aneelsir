"use client";

import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Sharma",
      location: "Mumbai",
      feedback:
        "BristleTech transformed our online presence! Their AI-driven marketing strategies helped us achieve incredible growth in just a few months. Highly recommended!",
    },
    {
      name: "Priya Nair",
      location: "Pune",
      feedback:
        "The team at BristleTech is professional, creative, and fast. They delivered our website and animation videos within a day, exceeding our expectations!",
    },
    {
      name: "Amit Verma",
      location: "Delhi",
      feedback:
        "Their SEO and PPC campaigns boosted our traffic and conversions significantly. One of the best digital marketing agencies in Hyderabad!",
    },
    {
      name: "Sneha Reddy",
      location: "Guntur",
      feedback:
        "BristleTech’s expertise in social media marketing helped our brand gain massive engagement. Their AI-powered approach is truly next-level!",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-12 text-center">
      {/* Heading */}
      <h3 className="text-lg font-semibold text-gray-800">Testimonials</h3>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
        We Have Many Good Client&apos;s Feedbacks
      </h2>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-white shadow-lg rounded-lg p-6 text-left border border-gray-100"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-4 right-4 text-gray-300 w-8 h-8" />

            {/* Avatar Placeholder */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-green-400 flex items-center justify-center text-white font-bold text-lg">
                {t.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-600">{t.location}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex text-yellow-400 mb-3">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-700 leading-relaxed text-sm">{t.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
