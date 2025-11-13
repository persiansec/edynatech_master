"use client";
import { motion } from "framer-motion";

export default function ProductionSection({ videoSrc }: { videoSrc: string }) {
  return (
    <section
      id="production"
      dir="rtl"
      className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-24 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12"
      >
        خط تولید
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8"
      >
        <video controls autoPlay muted loop className="w-full h-100">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </motion.div>

      <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
        در این ویدیو، روند تولید محصولات ما از مواد اولیه تا بسته‌بندی نهایی نمایش داده می‌شود.  
        ما از جدیدترین تکنولوژی‌ها و استانداردهای جهانی استفاده می‌کنیم تا بهترین کیفیت را ارائه دهیم.
      </p>
    </section>
  );
}
