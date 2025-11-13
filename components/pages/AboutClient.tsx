"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MissionItem {
  title: string;
  desc: string;
  icon: string;
}

interface HistoryItem {
  year: string;
  text: string;
}

interface AboutData {
  title: string;
  intro: { heading: string; text: string };
  mission: MissionItem[];
  history: HistoryItem[];
  images: string[];
}

export default function AboutPageClient() {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching about data:", err));
  }, []);

  if (loading)
    return (
      <div className="text-center text-white py-40 text-2xl">
        در حال بارگذاری...
      </div>
    );

  if (!data)
    return (
      <div className="text-center text-red-400 py-40 text-2xl">
        خطا در دریافت اطلاعات
      </div>
    );

  return (
    <section
      dir="rtl"
      className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/statics/pattern-dark.svg')] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-4">
            {data.title}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            {data.intro.text}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {data.images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-64"
            >
              <Image
                src={img}
                alt={`About image ${idx + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {data.mission.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-lg hover:border-red-500 transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-red-400">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="relative border-r-2 border-red-500 pr-10 mr-4 md:mr-12 space-y-16">
          {data.history.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              <div className="absolute right-[-17px] top-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white"></div>
              <h4 className="text-xl font-bold text-red-400 mb-2">
                {item.year}
              </h4>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
