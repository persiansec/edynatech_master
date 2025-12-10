// app/industries/page.tsx
import IndustriesPageClient from "@/components/pages/IndustriesClient";
import { industries } from "@/lib/industries-data";
export const metadata = {
  title: "کاربرد در صنایع - سیلیس نگین اصفهان",
  description: "بررسی کاربرد محصولات سیلیس نگین اصفهان در صنایع مختلف",
  openGraph: {
    title: "کاربرد در صنایع - سیلیس نگین اصفهان",
    description: "بررسی کاربرد محصولات سیلیس نگین اصفهان در صنایع مختلف",
    url: "https://example.com/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient industries={industries} />;
}