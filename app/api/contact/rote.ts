import { NextResponse } from "next/server";

export async function GET() {
  const contactData = {
    companyName: "الکتروداینامیک",
    address: "کرج مهرشهر کوی فرهنک نبش دوم جنوبی",
    phone: "09962307484-02633314268",
    email: "info@edynatech.ir",
    mapUrl: "https://goo.gl/maps/example",
  };

  return NextResponse.json(contactData);
}
