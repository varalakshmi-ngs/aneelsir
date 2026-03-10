"use client";

export default function OurServices() {
  return (
    <section className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] xl:h-[500px] flex items-center justify-center bg-[#281E5C] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/our-services-bg.png" 
          alt="Our services background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="absolute inset-0 bg-[#281E5C] bg-opacity-60"></div>

      <h2 className="relative text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center px-4">
        Our services
      </h2>
    </section>
  );
}
