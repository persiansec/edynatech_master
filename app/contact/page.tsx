// src/app/contact/page.tsx
import ContactClient from "@/components/pages/ContactClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "تماس با ما — سیلیس نگین اصفهان",
  description: "تماس با سیلیس نگین اصفهان — آدرس، تلفن و فرم ارتباطی برای دریافت مشاوره و سفارش.",
  openGraph: {
    title: "تماس با ما — سیلیس نگین اصفهان",
    description: "با تیم سیلیس نگین اصفهان تماس بگیرید تا در مورد پروژه‌های شما مشاوره دهیم.",
    url: "https://example.com/contact",
    siteName: "سیلیس نگین اصفهان",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
