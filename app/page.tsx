import Banner from "@/components/Banner/Banner";
import ProductionSection from "@/components/Production/ProductionSection";
import ContactSection from "@/components/Contact/ContactSection";
import ProductsSection from "@/components/Product/ProductsSection";

export default function Home() {
  return (
    <>
      <Banner videoSrc="/statics/15.mp4" />
      <ProductsSection />
      <ProductionSection videoSrc="/statics/15.mp4" />
      <ContactSection />
    </>
  );
}
