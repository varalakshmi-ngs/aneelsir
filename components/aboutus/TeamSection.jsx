"use client";

import { Linkedin } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Bhargav Sai",
      role: "Founder",
      image: "/images/Anil-1-683x1024.jpg",
      linkedin: "https://www.linkedin.com/in/example1",
    },
    {
      name: "Jignavi Reddy",
      role: "Relationship Manager",
      image: "/images/testimonial-1.jpg",
      linkedin: "https://www.linkedin.com/in/example2",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-12 text-center">
      <h3 className="text-2xl md:text-3xl font-semibold italic text-[#281E5C]">
        The Minds Behind BristleTech
      </h3>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-black">
        Meet Our Team
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-lg">
        Our team is a powerhouse of creativity, strategy, and innovation. 
        We bring ideas to life with AI-powered efficiency.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-64 h-72 object-cover rounded-lg shadow-md mx-auto"
            />
            <h3 className="mt-6 text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[#281E5C] hover:text-[#1f1647] transition"
            >
              <Linkedin size={24} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
