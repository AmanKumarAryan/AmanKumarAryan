'use client'

import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Heart, Loader2 } from "lucide-react";

type ModelItem = {
  id: string;
  downloads?: number;
  likes?: number;
  pipeline_tag?: string | null;
  library_name?: string | null;
  private?: boolean;
};

type DatasetItem = {
  id: string;
  downloads?: number;
  likes?: number;
  private?: boolean;
  num_examples?: number | null;
};

type HfData = {
  models: ModelItem[];
  datasets: DatasetItem[];
};

function repoName(id: string) {
  return id.split("/")[1] ?? id;
}

function formatCount(n?: number) {
  if (n === undefined || n === null) return "–";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

function MetaChip({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
      {icon}
      {children}
    </span>
  );
}

function RepoCard({
  id,
  kind,
  downloads,
  likes,
  meta,
}: {
  id: string;
  kind: "models" | "datasets";
  downloads?: number;
  likes?: number;
  meta: string;
}) {
  return (
    <a
      href={`https://huggingface.co/${id}`}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-border/60 bg-card p-5 flex flex-col justify-between gap-4 hover:border-accent/50 transition-colors"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-9 h-9 rounded-xl bg-accent/15 text-accent font-bold flex items-center justify-center shrink-0">
            {repoName(id).slice(0, 2).toUpperCase()}
          </span>
          <div className="min-w-0">
            <div className="font-semibold text-foreground truncate">
              {repoName(id)}
            </div>
            <div className="text-xs text-muted-foreground truncate">{id}</div>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" />
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
          {kind === "models" ? "Model" : "Dataset"}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <MetaChip icon={<Download className="w-3 h-3" />}>
            {formatCount(downloads)}
          </MetaChip>
          <MetaChip icon={<Heart className="w-3 h-3" />}>
            {formatCount(likes)}
          </MetaChip>
          <span className="text-[11px] text-muted-foreground">{meta}</span>
        </div>
      </div>
    </a>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-3 py-6">
      <Loader2 className="w-5 h-5 animate-spin text-accent" />
      <span className="text-xs text-muted-foreground">
        Pulling from Hugging Face…
      </span>
    </div>
  );
}

export function HfContent() {
  const [data, setData] = useState<HfData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch("/api/huggingface")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: HfData) => setData(d))
      .catch(() => setFailed(true));
  }, []);

  if (failed) {
    return (
      <div className="rounded-2xl border border-dashed border-border/60 p-8 text-center text-sm text-muted-foreground italic">
        Couldn&apos;t load from Hugging Face right now — check back later.
      </div>
    );
  }

  if (!data) return <LoadingSpinner />;

  const models = data.models ?? [];
  const datasets = data.datasets ?? [];

  if (models.length === 0 && datasets.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border/60 p-10 text-center text-sm text-muted-foreground">
        Nothing published yet — the first model is cooking.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {models.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Models
            </h3>
            <span className="text-xs text-muted-foreground">
              {models.length} repo{models.length === 1 ? "" : "s"}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {models.map((m) => (
              <RepoCard
                key={m.id}
                id={m.id}
                kind="models"
                downloads={m.downloads}
                likes={m.likes}
                meta={[m.library_name, m.pipeline_tag].filter(Boolean).join(" · ")}
              />
            ))}
          </div>
        </div>
      )}

      {datasets.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Datasets
            </h3>
            <span className="text-xs text-muted-foreground">
              {datasets.length} repo{datasets.length === 1 ? "" : "s"}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {datasets.map((d) => (
              <RepoCard
                key={d.id}
                id={d.id}
                kind="datasets"
                downloads={d.downloads}
                likes={d.likes}
                meta={
                  d.num_examples
                    ? `${formatCount(d.num_examples)} rows`
                    : "public"
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}