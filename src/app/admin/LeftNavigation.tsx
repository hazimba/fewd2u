"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import EmployeesTab from "./(employees)/EmployeesTab";
import { useState } from "react";
import ProductTab from "./(product)/ProductTab";
import { ADMIN_NAVIGATION_LINKS, PAGES_LINKS } from "@/lib/const";
import { TAB } from "@/lib/const";
import FeatureTab from "./(feature)/FeatureTab";

export default function LeftNavigation() {
  // in future need to use lazy loading for each tab content

  const [activeTab, setActiveTab] = useState<string>(TAB.FEATURE);
  const onTabChange = (value: string) => {
    setActiveTab(value);
  };

  console.log("activeTab", activeTab);

  return (
    <Tabs
      defaultValue={activeTab}
      orientation="vertical"
      className="lg:flex w-full lg:flex-row"
    >
      <TabsList className=" dark:rounded-lg bg-custom-default flex-wrap lg:gap-2 rounded-none lg:border-r-1 lg:flex lg:flex-col h-full w-screen lg:w-[15%] w-[100%] sticky top-2 ">
        <div className="hidden lg:block align-left w-full p-2 text-sm">
          Manage
        </div>
        {ADMIN_NAVIGATION_LINKS.map((link) => (
          <TabsTrigger
            key={link.value}
            onClick={() => onTabChange(link.value)}
            value={link.value}
            className="lg:w-full"
          >
            {link.name}
          </TabsTrigger>
        ))}

        <div className="hidden lg:block align-left w-full p-2 text-sm">
          Pages
        </div>
        {PAGES_LINKS.map((link) => (
          <TabsTrigger
            key={link.value}
            onClick={() => onTabChange(link.value)}
            value={link.value}
            className="lg:w-full"
          >
            {link.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="lg:w-[85%] rounded-lg overflow-auto">
        <TabsContent value={TAB.EMPLOYEES} forceMount>
          {activeTab === TAB.EMPLOYEES && <EmployeesTab />}
        </TabsContent>
        <TabsContent value={TAB.PRODUCT} forceMount>
          {activeTab === TAB.PRODUCT && <ProductTab />}
        </TabsContent>
        <TabsContent value={TAB.PERMISSION}>
          {activeTab === TAB.PERMISSION && (
            <p>Permission tab content goes here.</p>
          )}
        </TabsContent>
        <TabsContent value={TAB.OTHER}>
          {activeTab === TAB.OTHER && <p>Other tab content goes here.</p>}
        </TabsContent>
        <TabsContent value="Feature" forceMount>
          {activeTab === "feature" && <FeatureTab />}
        </TabsContent>
        <TabsContent value="About" forceMount>
          {activeTab === "about" && <>About tab content goes here.</>}
        </TabsContent>
      </div>
    </Tabs>
  );
}
