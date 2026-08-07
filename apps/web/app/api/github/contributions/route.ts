import { NextResponse } from "next/server";
import { getContributions } from "@/src/@lib/github";

export async function GET() {
  const data = await getContributions();
  if (!data) {
    return NextResponse.json({ error: "failed to fetch" }, { status: 502 });
  }
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
