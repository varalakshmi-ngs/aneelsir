
import AboutUsSection from "components/aboutus/AboutUsSection";
import ContactSection from "components/aboutus/ContactSection";
import TeamSection from "components/aboutus/TeamSection";
import Testimonials from "components/aboutus/Testimonials";
import CompanyStats from "components/home/CompanyStats";
import CustomHero from "utils/CustomHero";

export default function page() {
  return (
    <div className="mt-[50px] lg:mt-[80px]">
      <CustomHero
        title="Share Holders"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "shareholders" }]}
      />

      <AboutUsSection />
      <CompanyStats />
      <TeamSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
