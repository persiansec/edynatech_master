// src/components/pages/ContactClient.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up API / server action for real submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" dir="rtl" className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold mb-8 text-center">
          تماس با ما
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4">اطلاعات تماس</h3>
            <p className="text-gray-300 mb-2">📍 تهران، خیابان مثال، ساختمان سیلیس نگین اصفهان</p>
            <p className="text-gray-300 mb-2">📞 ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <p className="text-gray-300">✉️ info@company.com</p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="flex flex-col gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <input required className="bg-transparent border border-white/20 rounded-lg p-3 text-white placeholder-gray-400" placeholder="نام شما" />
            <input required type="email" className="bg-transparent border border-white/20 rounded-lg p-3 text-white placeholder-gray-400" placeholder="ایمیل شما" />
            <textarea required rows={4} className="bg-transparent border border-white/20 rounded-lg p-3 text-white placeholder-gray-400" placeholder="پیام شما..." />
            <button type="submit" className="bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-semibold">
              ارسال پیام
            </button>

            {submitted && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-300 mt-2">
                پیام شما با موفقیت ثبت شد — متشکریم!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
