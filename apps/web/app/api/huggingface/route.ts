import { NextResponse } from "next/server";

export const HF_USER = "AmanKumarAryan";

type WrappedResponse = {
  models: unknown[];
  datasets: unknown[];
};

export async function GET() {
  try {
    const [modelsRes, datasetsRes] = await Promise.all([
      fetch(`https://huggingface.co/api/models?author=${HF_USER}&limit=24`, {
        next: { revalidate: 1800 },
      }),
      fetch(`https://huggingface.co/api/datasets?author=${HF_USER}&limit=24`, {
        next: { revalidate: 1800 },
      }),
    ]);

    const models = modelsRes.ok ? await modelsRes.json() : [];
    const datasets = datasetsRes.ok ? await datasetsRes.json() : [];

    const enrichedDatasets = await Promise.all(
      datasets.slice(0, 8).map(async (d: { id: string }) => {
        try {
          const r = await fetch(
            `https://huggingface.co/api/datasets/${d.id}`,
            { next: { revalidate: 1800 } },
          );
          if (!r.ok) return d;
          const detail = await r.json();
          const info = detail?.cardData?.dataset_info;
          return {
            ...d,
            num_examples: info?.splits?.[0]?.num_examples ?? null,
            dataset_size: info?.dataset_size ?? null,
          };
        } catch {
          return d;
        }
      }),
    );

    const payload: WrappedResponse = {
      models,
      datasets: enrichedDatasets,
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json({ error: "failed to fetch" }, { status: 502 });
  }
}