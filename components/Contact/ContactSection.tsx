// components/ContactPageClient.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 px-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-red-500">تماس با ما</h1>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Info */}
          <motion.div initial={{ x: -20 }} whileInView={{ x: 0, opacity: 1 }} className="md:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">اطلاعات تماس</h3>
            <p className="mb-2">📍 کرج مهرشهر کوی فرهنگ نبش دوم جنوبی</p>
            <p className="mb-2">📞 026-33314268-09962307484</p>
            <p>✉️ info@edynatech.ir</p>
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit} initial={{ x: 20 }} whileInView={{ x: 0, opacity: 1 }} className="md:w-1/2 flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
            <input type="text" placeholder="نام شما" className="p-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-gray-400" required />
            <input type="email" placeholder="ایمیل شما" className="p-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-gray-400" required />
            <input type="text" placeholder="شماره تماس" className="p-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-gray-400" />
            <textarea placeholder="پیام شما..." rows={4} className="p-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-gray-400" required />
            <button type="submit" className="bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-semibold">ارسال پیام</button>
            {submitted && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-300 mt-2">پیام شما با موفقیت ارسال شد!</motion.p>}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
