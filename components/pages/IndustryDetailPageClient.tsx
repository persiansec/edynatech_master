"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface IndustryDetailPageClientProps {
  title: string;
  desc: string;
  images: string[];
}

export default function IndustryDetailPageClient({ title, desc, images }: IndustryDetailPageClientProps) {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white py-24 px-6"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/statics/pattern-dark.svg')] opacity-10 pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-4"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h1>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">{desc}</p>
        </div>

        {/* Gallery */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-3xl overflow-hidden group"
            >
              <Image
                src={img}
                alt={`${title} - تصویر ${idx + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-64 rounded-3xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-300 mb-6 text-lg">
            برای کسب اطلاعات بیشتر درباره کاربرد محصولات سیلیس نگین اصفهان در این صنعت، با تیم ما در تماس باشید.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            تماس با ما
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
