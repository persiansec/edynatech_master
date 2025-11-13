// src/components/pages/ProductsClient.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const products = [
  { id: "p1", name: "محصول اول", desc: "کیفیت بالا، طراحی مدرن.", img: "/statics/16.jpg", color: "text-red-500" },
  { id: "p2", name: "محصول دوم", desc: "نوآوری و بازدهی.", img: "/statics/17.jpg", color: "text-blue-500" },
  { id: "p3", name: "محصول سوم", desc: "ترکیبی از سنت و مدرن.", img: "/statics/18.jpg", color: "text-gray-400" },
];

export default function ProductsClient() {
  return (
    <section id="products" dir="rtl" className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-4xl font-extrabold mb-16">
          محصولات ما
        </motion.h2>

        <div className="flex flex-col gap-16">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`grid gap-8 md:grid-cols-2 items-center ${i % 2 ? "md:grid-flow-row-dense md:text-right" : ""}`}
            >
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg">
                <h3 className={`text-2xl font-bold mb-4 ${p.color}`}>{p.name}</h3>
                <p className="text-gray-300 leading-relaxed">{p.desc}</p>
              </div>

              <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }} className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={p.img} alt={p.name} className="w-full h-[420px] md:h-[360px] object-cover" loading="lazy" />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
