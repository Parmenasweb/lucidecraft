"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <section className="flex h-16 shrink-0 items-center w-[95%] mx-auto gap-2">
            <div className="flex items-center w-[8%] gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div className="w-[92%] ">
              <Header />
            </div>
          </section>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children}{" "}
            {/* This will render the child components passed to the layout */}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TotalUsageContext.Provider>
  );
}
