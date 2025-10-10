import ContactUsSection from "./ContactUsSection";
import FeatureSection from "./Feature";
import OurProduct from "./OurProduct";
import ServiceSection from "./ServiceSection";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div>
      {/* first section */}
      <FeatureSection />
      <OurProduct />
      <ServiceSection />
      <ContactUsSection />
    </div>
  );
}
