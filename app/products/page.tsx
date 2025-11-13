// src/app/products/page.tsx
import ProductsClient from "@/components/pages/ProductsClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "محصولات — سیلیس نگین اصفهان",
  description: "نمایش محصولات سیلیس نگین اصفهان — توضیحات، مشخصات و تصاویر محصولات.",
  openGraph: {
    title: "محصولات — سیلیس نگین اصفهان",
    description: "محصولات سیلیس نگین اصفهان: کیفیت و طراحی مدرن برای نیازهای صنعتی.",
    url: "https://example.com/products",
    siteName: "سیلیس نگین اصفهان",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
