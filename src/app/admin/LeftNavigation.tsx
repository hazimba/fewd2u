"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import EmployeesTab from "./(employees)/EmployeesTab";
import { useState } from "react";
import ProductTab from "./(product)/ProductTab";
import { ADMIN_NAVIGATION_LINKS } from "@/lib/const";

export default function LeftNavigation() {
  // in future need to use lazy loading for each tab content
  // const { data, loading, error } = useLazyFetch("/api/admin/employees", true);
  // console.log("data", data);

  const [activeTab, setActiveTab] = useState<string>("product");
  const onTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Tabs
      defaultValue={activeTab}
      orientation="vertical"
      className="lg:flex w-full lg:flex-row"
    >
      <TabsList className="bg-white dark:bg-[#171726] dark:rounded-lg lg:gap-2 rounded-none lg:border-r-1 lg:flex lg:flex-col h-full w-screen lg:w-[15%] w-[100%] sticky top-1 z-10">
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
      </TabsList>

      <div className="lg:w-[85%] rounded-lg overflow-auto">
        <TabsContent value="employees" forceMount>
          {activeTab === "employees" && <EmployeesTab />}
        </TabsContent>
        <TabsContent value="product" forceMount>
          {activeTab === "product" && <ProductTab />}
        </TabsContent>
        <TabsContent value="permission">
          <p>Permission tab content goes here.</p>
        </TabsContent>
        <TabsContent value="other">
          <p>Other tab content goes here.</p>
        </TabsContent>
      </div>
    </Tabs>
  );
}
