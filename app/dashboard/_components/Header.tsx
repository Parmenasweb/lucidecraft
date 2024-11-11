"use client";

import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-4 shadow-sm border-b-2 flex justify-between bg-white items-center w-[90%] mx-auto ">
      <div className="flex gap-2 items-center p-2 rounded-md max-w-lg bg-white">
        <Search />
        <Input type="text" placeholder="search..." className="outline-none" />
      </div>
      <div className="flex justify-between ">
        <h2 className=" flex items-center justify-center bg-primary p-1 rounded-xl text-xs text-white px-2 mr-5">
          Join membership just for $9.99/month
        </h2>
        <div className="flex justify-end ml-5 p-2 bg-primary rounded-full ">
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
