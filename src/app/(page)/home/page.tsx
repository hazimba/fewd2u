import FeatureSection from "./Feature";
import OurProduct from "./OurProduct";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div>
      {/* first section */}
      <FeatureSection />
      <OurProduct />
    </div>
  );
}
