"use client";
import { fetchFeaturePages } from "@/app/api/featurePages/route";
import PageHeader from "@/app/shared/PageHeader";
import { FeaturePage } from "@/types";
import { useEffect, useState } from "react";
import MobileDisplayFeature from "./MobileDisplayFeature";
import WebDisplayFeature from "./WebDisplayFeature";

const FeatureTab = () => {
  const [featurePages, setFeaturePages] = useState<FeaturePage[]>([]);
  const [renderDisplay, setRenderDisplay] = useState<FeaturePage | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const pages = await fetchFeaturePages();
      setFeaturePages(
        pages.sort((a: FeaturePage, b: FeaturePage) => {
          return a.isActive === true ? -1 : 1;
        })
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (featurePages.length > 0) {
      const activePage = featurePages.filter((page) => page.isActive)[0];
      setRenderDisplay(activePage);
    }
  }, [featurePages]);

  return (
    <div className="p-4 overflow-y auto h-screen w-full lg:h-[85vh] px-2">
      <PageHeader
        title="Feature Page"
        setInputValue={() => {}}
        refetch={async () => {}}
      />
      <span className="hidden lg:block">
        <WebDisplayFeature
          featurePages={featurePages}
          renderDisplay={renderDisplay}
          setRenderDisplay={setRenderDisplay}
        />
      </span>
      <span className="lg:hidden flex flex-col min-h-screen gap-2">
        <MobileDisplayFeature
          featurePages={featurePages}
          renderDisplay={renderDisplay}
          setRenderDisplay={setRenderDisplay}
        />
      </span>
    </div>
  );
};
export default FeatureTab;
