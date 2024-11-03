import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className=" p-10 bg-gradient-to-r from-purple-500 via-purple-700 to-blue-600 flex justify-center items-center flex-col text-white rounded-md">
      <h2 className="text-xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 order rounded-md bg-white my-5 w-[50%] ">
          <Search className="text-primary" />
          <Input
            type="text"
            placeholder="Search for something..."
            className="bg-transparent w-full outline-none text-black"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
