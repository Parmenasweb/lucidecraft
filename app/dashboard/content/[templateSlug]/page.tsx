"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { template } from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TemplateList";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
// import { PageProps } from "@/.next/types/app/dashboard/content/[template-slug]/page";

interface PROPS {
  params: {
    templateSlug: string;
  };
}

function CreateNewContent({ params }: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = template?.find(
    (template) => template.slug === params.templateSlug
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const { totalUsage } = useContext(TotalUsageContext);
  const router = useRouter();

  const generateAIContent = async (formData: Record<string, unknown>) => {
    if (totalUsage >= 10000) {
      alert(
        "You have exceeded the maximum usage limit. Please upgrade your plan to continue generating content."
      );
      router.push("/dashboard/pricing");
      return;
    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;

    if (!selectedPrompt) {
      console.error("Selected template prompt is undefined");
      setLoading(false);
      return;
    }

    const finalAiPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
    const result = await chatSession.sendMessage(finalAiPrompt);
    if (result) {
      const responseText = await result.response.text();
      setAiOutput(responseText);
      await saveInDb(
        JSON.stringify(formData),
        selectedTemplate?.slug,
        responseText
      );
    }
    setLoading(false);
  };

  const saveInDb = async (
    formData: string,
    slug: string | undefined,
    aiResp: string
  ) => {
    if (!slug) return; // Ensure slug is defined before proceeding
    const content = {
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress ?? "", // Provide a default empty string if undefined
      createdAt: moment().format("DD/MM/yyyy"),
    };
    try {
      const result = await db.insert(AIOutput).values(content);
      console.log(result);
    } catch (error) {
      console.error("Error saving to database:", error);
    }
  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* form section..... */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={generateAIContent}
          loading={loading}
        />
        {/* output section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
