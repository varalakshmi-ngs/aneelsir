import CollaborationSection from "../../components/services/CollaborationSection";
import ServicesGrid from "../../components/services/ServicesGrid";
import CustomHero from "../../utils/CustomHero";

export default function page() {
  return (
    <div className="mt-[50px] lg:mt-[80px]">
      <CustomHero
        title="Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <ServicesGrid />
      <CollaborationSection />
    </div>
  );
}
