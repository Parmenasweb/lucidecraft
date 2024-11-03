"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-4 shadow-sm border-b-2 flex justify-between bg-white items-center w-[90%] mx-auto ">
      <div className="flex gap-2 items-center p-2 rounded-md max-w-lg bg-white">
        <Search />
        <Input type="text" placeholder="search..." className="outline-none" />
      </div>
      <div>
        <h2 className="bg-primary p-1 rounded-xl text-xs text-white px-2">
          Join membership just for $9.99/month
        </h2>
      </div>
    </div>
  );
}

export default Header;
