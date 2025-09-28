"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import EmployeesTab from "./(employees)/EmployeesTab";
import { useState } from "react";

export default function LeftNavigation() {
  // in future need to use lazy loading for each tab content
  // const { data, loading, error } = useLazyFetch("/api/admin/employees", true);
  // console.log("data", data);

  const [activeTab, setActiveTab] = useState<string>("employees");

  return (
    <Tabs
      defaultValue="employees"
      orientation="vertical"
      className="lg:flex w-full lg:flex-row"
    >
      <TabsList className="bg-white dark:bg-[#171726] dark:rounded-lg rounded-none lg:border-r-1 lg:flex lg:flex-col h-full w-screen lg:w-[15%] w-[100%]  ">
        <div className="hidden lg:block align-left w-full p-2 text-sm">
          Manage
        </div>
        <TabsTrigger value="employees">Employees</TabsTrigger>
        <TabsTrigger value="product">Product</TabsTrigger>
        <TabsTrigger value="permission">Permission</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>

      <div className="lg:w-[85%] rounded-lg overflow-auto">
        <TabsContent value="employees" className="overflow-auto">
          {activeTab === "employees" && <EmployeesTab />}
        </TabsContent>
        <TabsContent value="product">
          <p>Product tab content goes here.</p>
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
