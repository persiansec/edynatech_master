// lib/industries-data.ts
export interface Industry {
    slug: string;
    title: string;
    desc: string;
    seoDesc?: string;
    images: string[];
  }
  
  export const industries: Industry[] = [
    {
      slug: "oil-gas",
      title: "صنعت نفت و گاز",
      desc: "محصولات سیلیس نگین اصفهان در محیط‌های پر فشار و دمای بالا، مانند پالایشگاه‌ها و واحدهای کنترل فرآیندی، عملکردی مطمئن و پایدار دارند.",
      seoDesc:
        "کاربرد محصولات سیلیس نگین اصفهان در صنعت نفت و گاز — عملکرد قابل اعتماد در محیط‌های صنعتی با دمای بالا و فشار زیاد.",
      images: ["/statics/1.jpg", "/statics/2.jpg", "/statics/3.jpg"],
    },
    {
      slug: "automotive",
      title: "صنعت خودروسازی",
      desc: "در خطوط تولید خودرو، ابزارها و سنسورهای سیلیس نگین اصفهان با دقت بالا، کنترل کیفی و اتوماسیون را به سطح جهانی می‌رسانند.",
      seoDesc:
        "سیلیس نگین اصفهان در صنعت خودروسازی — راهکارهای دقیق برای تولید و کنترل کیفی خودرو.",
        images: ["/statics/6.jpg", "/statics/5.jpg", "/statics/4.jpg"],
    },
    {
      slug: "packaging",
      title: "صنعت بسته‌بندی",
      desc: "راهکارهای سیلیس نگین اصفهان موجب افزایش سرعت، دقت و کنترل کیفیت در فرآیند بسته‌بندی می‌شوند.",
      seoDesc:
        "کاربرد محصولات سیلیس نگین اصفهان در صنعت بسته‌بندی — سرعت و دقت در خطوط تولید هوشمند.",
        images: ["/statics/7.jpg", "/statics/8.jpg", "/statics/9.jpg"],
    },
  ];
  
  export async function getIndustry(slug: string) {
    return industries.find((i) => i.slug === slug);
  }
  