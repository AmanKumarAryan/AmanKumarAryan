import { NextResponse } from "next/server";

export type LeetCodeStats = {
  realName?: string;
  ranking?: number | null;
  solved?: number;
  solvedOverTotal?: string;
  solvedPercentage?: string;
};

export async function GET() {
  try {
    const res = await fetch(
      "https://leetcode-badge.vercel.app/api/users/AmanKumarAryan",
      { next: { revalidate: 1800 } },
    );
    if (!res.ok) {
      return NextResponse.json({ error: "failed to fetch" }, { status: 502 });
    }
    const data = (await res.json()) as LeetCodeStats & { error?: string | null };
    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 404 });
    }
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json({ error: "failed to fetch" }, { status: 502 });
  }
}