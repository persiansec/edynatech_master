import { NextRequest, NextResponse } from "next/server";
import { getIndustry } from "@/lib/industries-data";

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
): Promise<NextResponse> {
  const { slug } = context.params;

  // If getIndustry is async, await it
  const industry = await getIndustry(slug);

  if (!industry) {
    return NextResponse.json({ error: "صنعت مورد نظر یافت نشد." }, { status: 404 });
  }

  // Make sure we return a plain object, not a Promise
  return NextResponse.json(industry);
}
