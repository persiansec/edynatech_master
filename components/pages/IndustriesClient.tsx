"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface Industry {
  slug: string
  title: string
  desc: string
  images: string[]
}

export default function IndustriesPageClient({ industries }: { industries: Industry[] }) {
  return (
    <section
      dir="rtl"
      className="bg-black text-white py-16 px-6 min-h-screen"
      style={{ fontFamily: "var(--font-baloo)" }}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            کاربرد محصولات سیلیس نگین اصفهان
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            راهکارهای هوشمند ما در صنایع کلیدی کشور نقش‌آفرینی می‌کنند.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group bg-neutral-900 rounded-xl overflow-hidden shadow-md border border-white/10 hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <Link href={`/industries/${industry.slug}`} className="block">
                <div className="relative w-full h-40 md:h-48 lg:h-52 overflow-hidden">
                  <Image
                    src={industry.images?.[0] ?? "/statics/fallback.jpg"}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg md:text-xl font-bold text-red-500 mb-1">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {industry.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
