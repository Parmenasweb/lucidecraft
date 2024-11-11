"use client";

import { useState } from "react"; // Import useEffect and useState
import SearchSection from "./_components/SearchSection";
import TemplateList from "./_components/TemplateList";

export default function Page() {
  // Remove unused state since it's not being used anywhere in the component
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  return (
    <>
      <div className="grid gap-4 ">
        <SearchSection
          onSearchInput={(value: string) => setUserSearchInput(value)}
        />
      </div>
      <div>
        <TemplateList userSearchInput={userSearchInput} />
      </div>
    </>
  );
}
