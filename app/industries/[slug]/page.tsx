import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/lib/industries-data";
import IndustryDetailPageClient from "@/components/pages/IndustryDetailPageClient";

interface Props {
  params: Promise<{ slug: string }>; // ✅ params is a Promise now
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params; // ✅ Unwrap the params Promise
  const industry = await getIndustry(resolvedParams.slug);
  if (!industry) return { title: "صنعت یافت نشد" };

  return {
    title: industry.title,
    description: industry.seoDesc || industry.desc,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const resolvedParams = await params; // ✅ Unwrap again
  const industry = await getIndustry(resolvedParams.slug);
  if (!industry) return notFound();

  return (
    <IndustryDetailPageClient
      title={industry.title}
      desc={industry.desc}
      images={industry.images}
    />
  );
}
