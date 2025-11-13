import { Metadata } from "next";
import Image from "next/image";
import { products } from "@/lib/products-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; // ✅ unwrap the promise
  const product = products.find((p) => p.slug === slug);
  return {
    title: product ? `${product.name} | سیلیس نگین اصفهان` : "محصول یافت نشد",
    description: product?.seoDesc ?? product?.description ?? "",
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ unwrap the promise
  const product = products.find((p) => p.slug === slug);

  if (!product)
    return (
      <div className="text-center text-white py-40 text-2xl">
        محصول مورد نظر یافت نشد.
      </div>
    );

  return (
    <section
      dir="rtl"
      className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white py-24 px-6"
    >
      <div className="absolute inset-0 bg-[url('/statics/pattern-dark.svg')] opacity-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl font-extrabold text-red-400 mb-6">{product.name}</h1>
        <p className="text-gray-300 text-lg mb-12 leading-relaxed">{product.description}</p>

        {/* ✅ 2-column adaptive image grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {product.images.map((img, i) => (
            <div
              key={i}
              className={`rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${
                product.images.length % 2 === 1 && i === product.images.length - 1
                  ? "sm:col-span-2" // full width for last odd image
                  : ""
              }`}
            >
              <div className="relative w-full h-80">
                <Image
                  src={img}
                  alt={`${product.name} - تصویر ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Optional caption */}
              <p className="text-center text-gray-400 mt-2">{`تصویر ${i + 1} از ${product.name}`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
