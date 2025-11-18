// app/page.tsx
import Banner from "@/components/Banner/Banner"
import ProductsSection from "@/components/Product/ProductsSection"
import ProductionSection from "@/components/Production/ProductionSection"
import ContactSection from "@/components/Contact/ContactSection"

export default function Home() {
  return (
    <>
      <Banner />            {/* بنر */}
      <ProductsSection />   {/* بخش محصولات */}
      <ContactSection />    {/* فرم تماس */}
    </>
  )
}
