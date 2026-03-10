"use client";

import CustomButton from "utils/CustomButton";

export default function CollaborationSection() {
  return (
    <section className="relative w-full bg-[#f6fbf7] py-16 px-6 md:px-12 lg:px-20 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#281E5C]">
          Let’s collaborate <span className="font-serif">with us</span>
        </h2>

        <p className="text-gray-700 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          From an early stage start-up’s growth strategies to helping existing
          businesses, we have done it all ! The results speak for themselves.
          Our services work.
        </p>

        <div className="mt-6">
         <CustomButton text="Get Financial Consulting" href="/" />
        </div>
      </div>
    </section>
  );
}
