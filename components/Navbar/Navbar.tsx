"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 22)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  const items = [
    { label: "خانه", href: "/" },
    { label: "کاربرد در صنایع", href: "/industries" },
    { label: "معرفی شرکت", href: "/about" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200
        ${scrolled ? "backdrop-blur-xl bg-black/10 border-b border-white/10" : "bg-transparent"}
      `}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      style={{ fontFamily: "var(--font-baloo)" }}
    >
      <div className="mx-auto max-w-7xl px-6 h-[58px] flex items-center justify-between text-white">
        <Link href="/" className="text-[22px] font-bold tracking-tight">
          سیلیس نگین اصفهان
        </Link>

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

        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.22 }}
        className={`
          fixed inset-0 z-40 md:hidden bg-black/85 backdrop-blur-xl flex flex-col items-center justify-center gap-9
          ${open ? "pointer-events-auto" : "pointer-events-none"}
        `}
        style={{ fontFamily: "var(--font-baloo)" }}
      >
        {items.map((i, index) => (
          <motion.div
            key={i.label}
            initial={{ opacity: 0, y: 18 }}
            animate={open ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.055 }}
          >
            <Link
              href={i.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold opacity-90 hover:opacity-100 hover:text-red-500 transition"
            >
              {i.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  )
}
