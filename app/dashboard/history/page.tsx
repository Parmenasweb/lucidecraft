import React from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import { TEMPLATE } from "../_components/TemplateList";
import { template } from "@/app/(data)/Templates";
import { currentUser } from "@clerk/nextjs/server";
import CopyButton from "./_components/CopyButton";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();
  const HistoryList: HISTORY[] = (
    await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(AIOutput.id))
      .execute()
  ).map((item) => ({
    id: item.id,
    formData: item.formData,
    templateSlug: item.templateSlug,
    createdBy: item.createdBy,
    aiResponse: item.aiResponse ?? "",
    createdAt: item.createdAt ?? "",
  }));

  const GetTemplateName = (slug: string) => {
    const templates: TEMPLATE | undefined = template?.find(
      (item) => item.slug == slug
    );
    return templates;
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-old text-3xl">History</h2>
      <p className="text-gray-500">
        Search your previously generated Ai contents
      </p>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>
      {HistoryList.length === 0
        ? "             cmon dawg, you have not generated shit"
        : HistoryList.map((item: HISTORY, index: number) => (
            <React.Fragment key={index}>
              <div className="grid grid-cols-7 my-5 py-3 px-3">
                <h2 className="col-span-2 flex gap-2 items-center">
                  <Image
                    alt=""
                    src={GetTemplateName(item?.templateSlug)?.icon ?? ""}
                    width={50}
                    height={50}
                  />
                  {GetTemplateName(item.templateSlug)?.name}
                </h2>
                <h2 className="col-span-2 line-clamp-3">{item?.aiResponse} </h2>
                <h2>{item.createdAt} </h2>
                <h2>{item?.aiResponse.length} </h2>
                <h2>
                  <CopyButton response={item.aiResponse} />
                </h2>
              </div>
              <hr />
            </React.Fragment>
          ))}
    </div>
  );
}

export default History;
