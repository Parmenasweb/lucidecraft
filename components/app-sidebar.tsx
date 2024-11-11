"use client";

import * as React from "react";
import {
  FileClock,
  Home,
  LifeBuoy,
  Send,
  Settings2,
  WalletCards,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarHeader,
  // SidebarMenu,
  // SidebarMenuButton,
  // SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import UsageTrack from "@/app/dashboard/_components/UsageTrack";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "History",
      url: "/dashboard/history",
      icon: FileClock,
    },
    {
      title: "Billing",
      url: "/dashboard/pricing",
      icon: WalletCards,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="flex items-start mt-4">
        <Image
          src="/logo.svg"
          alt="LucideCraft.AI Logo"
          width={100}
          height={75}
          priority
        />
        <div className="ml-2 text-left">
          <span className="block font-bold text-md">LucideCraft.AI</span>
          <span className="text-xs text-primary">Craft with Intelligence</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="flex justify-between">
        <NavMain items={data.navMain} />
        <div className="mt-8">
          <UsageTrack />
        </div>
      </SidebarContent>
      {/* <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      {/* <UserButton />
      </SidebarFooter> */}{" "}
      */
    </Sidebar>
  );
}
