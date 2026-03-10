"use client";

import ContactSection from "../../components/contact/ContactSection";
import InquirySection from "../../components/contact/InquirySection";


export default function page() {
  return (
    <div className="mt-[50px] lg:mt-[80px]">
      <ContactSection />
      <InquirySection />
    </div>
  )
}
