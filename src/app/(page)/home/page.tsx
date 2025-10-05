import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import FeatureSection from "./Feature";
import OurProduct from "./OurProduct";
import ServiceSection from "./ServiceSection";
import { Contact } from "lucide-react";
import ContactUsSection from "./ContactUsSection";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div>
      {/* first section */}
      {/* <FeatureSection /> */}
      <OurProduct />
      <ServiceSection />
      <ContactUsSection />
    </div>
  );
}
