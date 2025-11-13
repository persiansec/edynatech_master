import { NextResponse } from "next/server";
import { industries } from "@/lib/industries-data";

export async function GET() {
  return NextResponse.json(industries);
}
