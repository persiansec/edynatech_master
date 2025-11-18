"use client"
import { motion } from "framer-motion"

export default function Banner() {
  const src = "/image/statics/banner.jpg" // مسیر عکس در public

  return (
    <section
      className="relative w-full h-screen bg-black"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",          // فول‌اسکرین
        backgroundPosition: "  center", // بالای عکس همیشه دیده شود
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay برای خوانایی متن */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent"></div>

      {/* متن روی تصویر */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute bottom-24 left-6 md:bottom-32 md:left-20 text-white font-poppins"
      >
        {/* <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          الکتردایناتک>
        </h1> */}

        <p className="text-lg md:text-2xl opacity-90 mt-2 md:mt-3">
          طراحی و ساخت قطعات ناوگان ریلی
        </p>
      </motion.div>
    </section>
  )
}
