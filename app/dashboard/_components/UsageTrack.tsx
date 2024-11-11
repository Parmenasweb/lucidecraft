"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, users } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const UsageTrack = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const [credits, setCredits] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const result: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
      GetTotalUsage(result);
      getCredits();
    };

    const GetTotalUsage = (result: HISTORY[]) => {
      let total: number = 0;
      result.forEach((element) => {
        total = total + Number(element.aiResponse?.length);
      });
      setTotalUsage(total);
    };

    const getCredits = async () => {
      const credits = await db
        .select()
        .from(users)
        .where(eq(users.clerkId, user?.id));
      if (credits.length > 0) {
        setCredits(credits[0].credits);
      }
    };
    if (user) {
      getData();
    }
  }, [user, setTotalUsage, totalUsage]);

  return (
    <div>
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-semibold">Your Credits</h2>
        <div className="h-2 w-full rounded-full bg-[#9981f9] ">
          <div
            className="h-2 rounded-full bg-white"
            style={{ width: `${(totalUsage / credits) * 100}%` }}
          ></div>
        </div>
        <h2 className="text-md my-2 font-semibold">
          {totalUsage} / {credits} credits used
        </h2>
      </div>
      <Button
        onClick={() => router.push("/dashboard/pricing")}
        variant={"secondary"}
        className="w-full my-3 text-primary font-semibold text-lg"
      >
        <Sparkles className="text-primary font-semibold text-lg" /> Upgrade
      </Button>
    </div>
  );
};

export default UsageTrack;
