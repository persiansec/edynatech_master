// app/page.tsx
import Banner from "@/components/Banner/Banner"
import ContactSection from "@/components/Contact/ContactSection"

export default function Home() {
  return (
    <>
      <Banner />            {/* بنر */}
      <ContactSection />    {/* فرم تماس */}
    </>
  )
}
