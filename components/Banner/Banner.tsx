"use client"
import { motion } from "framer-motion"

export default function Banner({ videoSrc }: { videoSrc: string }) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* subtle gradient overlay, thinner */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ fontFamily: "var(--font-baloo)" }}
        className="absolute bottom-24 left-12 md:bottom-32 md:left-20 text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          نام شرکت
        </h1>

        <p className="text-lg md:text-2xl opacity-90 mt-2 md:mt-3">
          کیفیت برتر، طراحی مدرن
        </p>
      </motion.div>
    </section>
  )
}
