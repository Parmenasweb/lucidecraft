"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const CopyButton = ({ response }: { response: string }) => {
  return (
    <Button
      onClick={() => navigator.clipboard.writeText(response)}
      variant={"ghost"}
      className="text-primary"
    >
      Copy
    </Button>
  );
};

export default CopyButton;
