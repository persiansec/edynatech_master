import { NextResponse } from "next/server";

export async function GET() {
  const contactData = {
    companyName: "نوژان داینامیک",
    address: "تهران، خیابان فناوری، ساختمان نوآوران",
    phone: "+98 21 4444 5678",
    email: "info@nojan.ai",
    mapUrl: "https://goo.gl/maps/example",
  };

  return NextResponse.json(contactData);
}
