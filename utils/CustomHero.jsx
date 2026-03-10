"use client";

import Link from "next/link";

export default function CustomHero({ title, breadcrumbs }) {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 sm:py-32 text-center md:text-left">
        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-20 top-20 w-40 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 transform rotate-45 animate-pulse"></div>
          <div className="absolute right-40 top-32 w-40 h-0.5 bg-gradient-to-r from-green-400 to-teal-600 transform -rotate-45 animate-pulse"></div>
          <div className="absolute left-1/3 bottom-20 w-32 h-0.5 bg-gradient-to-r from-pink-400 to-red-500 transform rotate-45 animate-pulse"></div>
        </div>

        {/* Title */}
        <h1 className="relative text-5xl sm:text-6xl font-extrabold">{title}</h1>

        {/* Breadcrumbs */}
        <div className="relative mt-5 flex items-center justify-center md:justify-start space-x-2 text-base text-gray-300">
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center space-x-2">
              {crumb.href ? (
                <Link href={crumb.href} className="text-teal-400 hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <span>›</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Curve Shape Bottom */}
      {/* Curve Shape Bottom */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
  <svg
    className="relative block w-full h-12 sm:h-24" // smaller height on mobile
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
  >
    <path
      d="M321.39 56.48C192.83 34.39 96.42 11.55 0 0v120h1200V0c-91.78 8.34-182.86 19.85-321.39 56.48C681.17 95.4 568.31 104.63 321.39 56.48z"
      className="fill-white"
    ></path>
  </svg>
</div>

    </section>
  );
}
