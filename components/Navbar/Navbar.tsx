"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // تغییر حالت Navbar هنگام اسکرول
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 22)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // قفل کردن اسکرول صفحه هنگام باز بودن منو
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  const items = [
    { label: "خانه", href: "/" },
    
    { label: "درباره ما", href: "/about" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200
        ${scrolled ? "backdrop-blur-xl bg-black/20 border-b border-white/10" : "bg-transparent"}
      `}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      style={{ fontFamily: "var(--font-baloo)" }}
    >
      {/* Navbar container */}
      <div className="mx-auto max-w-7xl px-6 h-[58px] flex items-center justify-between text-white">
        {/* لوگو */}
        <Link href="/" className="text-[25px] font-bold">
            الکتردایناتک
                    </Link>

        {/* منوی دسکتاپ */}
        <div className="hidden md:flex items-center gap-9">
          {items.map((i) => (
            <Link
              key={i.label}
              href={i.href}
              className="text-lg opacity-90 hover:opacity-100 hover:text-red-500 transition"
            >
              {i.label}
            </Link>
          ))}
        </div>

        {/* دکمه همبرگر موبایل */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(true)}
          aria-label="باز کردن منو"
        >
          <Menu />
        </button>
      </div>

      {/* منوی موبایل فول‌اسکرین */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`
          fixed inset-0 z-50 md:hidden
          flex flex-col items-center justify-center gap-10
          ${open ? "pointer-events-auto" : "pointer-events-none"}
          backdrop-blur-xl bg-black/40
        `}
        style={{ fontFamily: "var(--font-baloo)" }}
      >
        {/* لایه پشت‌زمینه برای بستن منو هنگام کلیک */}
        <div
          className="absolute inset-0"
          onClick={() => setOpen(false)}
        ></div>

        {/* دکمه بستن */}
        <button
          className="absolute top-6 right-6 text-white z-50"
          onClick={() => setOpen(false)}
          aria-label="بستن منو"
        >
          <X size={32} />
        </button>

        {/* آیتم‌های منو */}
        <div
          className="flex flex-col items-center gap-8 relative z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {items.map((i, index) => (
            <motion.div
              key={i.label}
              initial={{ opacity: 0, y: 18 }}
              animate={open ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.07, duration: 0.3, ease: "easeOut" }}
            >
              <Link
                href={i.href}
                className="text-3xl font-semibold text-white hover:text-red-400 transition"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
