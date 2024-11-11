import Image from "next/image";
import { TEMPLATE } from "./TemplateList";
import Link from "next/link";

export default function TemplateCard(item: TEMPLATE) {
  const templateSlug = item?.slug;
  return (
    <Link href={`/dashboard/content/${templateSlug}`}>
      <div className="p-5 shadow-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image src={item.icon} alt="" width={50} height={50} />
        <h2 className="font-medium text-lg">{item.name} </h2>
        <p className="text-grey-500 line-clamp-3">{item.desc} </p>
      </div>
    </Link>
  );
}
