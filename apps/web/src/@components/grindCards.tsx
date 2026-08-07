'use client'

import { useEffect, useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";

const LEETCODE_URL = "https://leetcode.com/u/AmanKumarAryan/";
const DEEPML_URL = "https://www.deep-ml.com/profile/6Yx8DMFCBKPvKDVYoWIFuyj33103";

type LeetCodeStats = {
  realName?: string;
  solved?: number;
  solvedOverTotal?: string;
  solvedPercentage?: string;
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-background/60 px-3 py-3">
      <span className="text-lg font-semibold text-foreground">{value}</span>
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function GrindCards() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: LeetCodeStats) => setStats(d))
      .catch(() => setFailed(true));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* LeetCode */}
      <a
        href={LEETCODE_URL}
        target="_blank"
        rel="noreferrer"
        className="group rounded-2xl border border-border/60 bg-card p-6 flex flex-col justify-between gap-6 hover:border-accent/50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-[#FFA116]/15 text-[#FFA116] font-bold flex items-center justify-center">
              LC
            </span>
            <div>
              <div className="font-semibold text-foreground">LeetCode</div>
              <div className="text-xs text-muted-foreground">AmanKumarAryan</div>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {stats ? (
            <>
              <Stat label="Solved" value={`${stats.solved ?? 0}`} />
              <Stat label="Total" value={stats.solvedOverTotal ?? "–"} />
              <Stat label="Done" value={stats.solvedPercentage ?? "–"} />
            </>
          ) : (
            <div className="col-span-3 flex items-center justify-center gap-2 py-4 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">{failed ? "Couldn't load" : "Loading stats…"}</span>
            </div>
          )}
        </div>
      </a>

      {/* Deep-ML */}
      <a
        href={DEEPML_URL}
        target="_blank"
        rel="noreferrer"
        className="group rounded-2xl border border-border/60 bg-card p-6 flex flex-col justify-between transition-colors hover:border-accent/50"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-foreground text-background font-bold flex items-center justify-center">
              DM
            </span>
            <div>
              <div className="font-semibold text-foreground">Deep-ML</div>
              <div className="text-xs text-muted-foreground">ML fundamentals</div>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Sharpening the maths behind the models — gradient descent,
          backpropagation, loss functions and linear algebra, solved by hand.
        </p>

        <div className="text-sm font-medium text-foreground hover:text-accent transition-colors underline underline-offset-4">
          View profile →
        </div>
      </a>
    </div>
  );
}