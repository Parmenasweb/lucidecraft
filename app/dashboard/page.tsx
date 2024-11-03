"use client";

import { AppSidebar } from "@/components/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Header from "./_components/Header";
import { useEffect, useState } from "react"; // Import useEffect and useState
import SearchSection from "./_components/SearchSection";
import TemplateList from "./_components/TemplateList";

export default function Page() {
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  useEffect(() => {
    setIsClient(true); // Set to true when component mounts
  }, []);

  return (
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
          <div className="grid gap-4 ">
            <SearchSection
              onSearchInput={(value: string) => setUserSearchInput(value)}
            />
          </div>
          <div>
            <TemplateList userSearchInput={userSearchInput} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
