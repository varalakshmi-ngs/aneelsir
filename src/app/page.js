import ContactSection from "../../components/contact/ContactSection";
import AboutRoboOnline from "../../components/home/AboutRoboOnline";
import CompanyStats from "../../components/home/CompanyStats";
import CreativeHeroSection from "../../components/home/CreativeHeroSection";
import Service from "../../components/home/Service";
import WhatWeOffer from "../../components/home/WhatWeOffer";


export default function Home() {
  return (
    <div>
      <CreativeHeroSection />
      <Service />
      <AboutRoboOnline/>
      <WhatWeOffer />
      <CompanyStats/>
      <ContactSection/>
    </div>
  );
}
