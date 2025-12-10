// lib/product-data.ts
export type Product = {
    slug: string;
    name: string;
    description: string;
    images: string[];
    seoDesc?: string;
  };
  
  export const products: Product[] = [
    {
      slug: "micronized-silica",
      name: "سیلیس میکرونیزه",
      description:
        "سیلیس میکرونیزه با خلوص بالا برای استفاده در صنایع کاشی، سرامیک، لاستیک و رنگ. این محصول موجب افزایش مقاومت مکانیکی و شفافیت در محصولات نهایی می‌شود.",
      images: ["/statics/16.jpg", "/statics/17.jpg", "/statics/18.jpg"],
      seoDesc:
        "سیلیس میکرونیزه با خلوص بالا برای کاربردهای صنعتی و افزایش دوام محصولات.",
    },
    {
      slug: "crystalline-silica",
      name: "پودر سیلیس کریستالی",
      description:
        "پودری با دانه‌بندی دقیق و مقاومت حرارتی بالا، مناسب برای صنایع ریخته‌گری و تولید شیشه‌های مقاوم در برابر حرارت.",
      images: ["/statics/17.jpg", "/statics/19.jpg"],
      seoDesc: "پودر سیلیس کریستالی برای صنایع ریخته‌گری و شیشه‌های صنعتی.",
    },
    {
      slug: "granular-silica",
      name: "سیلیس دانه‌بندی شده",
      description:
        "با کیفیت ثابت و کنترل دقیق اندازه ذرات برای فیلترهای تصفیه آب، سندبلاست، و صنایع شیمیایی کاربرد دارد.",
      images: ["/statics/18.jpg", "/statics/1.jpg"],
    },
    {
      slug: "oil-gas-silica",
      name: "سیلیس مخصوص صنایع نفت و گاز",
      description:
        "مناسب محیط‌های با دمای بالا و فشار زیاد، با پایداری شیمیایی بالا جهت استفاده در چاه‌های نفت و گاز.",
      images: ["/statics/19.jpg", "/statics/20.jpg"],
    },
    {
      slug: "high-purity-silica",
      name: "سیلیس با خلوص بالا",
      description:
        "ویژه صنایع الکترونیک و اپتیک، تولید با فناوری پیشرفته جهت دستیابی به خلوص بیش از 99.9٪.",
      images: ["/statics/20.jpg", "/statics/21.jpg"],
    },
    {
      slug: "industrial-silica",
      name: "سیلیس صنعتی عمومی",
      description:
        "انتخابی اقتصادی برای مصارف عمومی در صنایع ساختمانی، بتن و مواد نسوز با کارایی بالا.",
      images: ["/statics/1.jpg", "/statics/2.jpg"],
    },
  ];
  