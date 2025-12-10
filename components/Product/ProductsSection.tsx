"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type Product = {
  slug: string
  name: string
  images: string[]
}

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading)
    return (
      <div className="text-center text-white py-40 text-2xl">
        در حال بارگذاری محصولات...
      </div>
    )

  // helper: determine layout
  const getGridCols = (index: number) => {
    // AUTO pattern A: full width for even index (0,3,6...), 2 col for next two
    const cycle = index % 3
    if (cycle === 0) return "md:col-span-2" // full width
    return "md:col-span-1"
  }

  return (
    <section
      dir="rtl"
      className="relative bg-black py-28 overflow-hidden"
      style={{ fontFamily: "var(--font-baloo)" }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          محصولات
        </h2>
        <div className="h-[2px] w-24 mx-auto bg-red-500 rounded-full" />
      </motion.div>

      {/* Products Grid */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {products.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.06 * i }}
            className={`group relative rounded-xl overflow-hidden shadow-xl bg-neutral-950 border border-white/5 transition-all duration-300 ${getGridCols(i)}`}
          >
            <Link href={`/products/${p.slug}`}>
              {/* Image */}
              <div className="w-full relative aspect-[3/2] overflow-hidden">
                <Image
                  src={p.images?.[0] ?? "/statics/fallback.jpg"}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                />
              </div>

              {/* Bottom Text Block */}
              <div className="p-8 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  {p.name}
                </h3>
                <span className="text-red-500 text-lg font-semibold mt-2 group-hover:translate-y-0.5 transition-transform">
                  مشاهده جزئیات →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
