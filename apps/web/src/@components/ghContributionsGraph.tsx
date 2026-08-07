'use client'

import { useEffect, useState } from "react";
import { GITHUB_USERNAME, type ContributionsData } from "../@lib/github";

const LEVEL_ESTIMATE = [0, 2, 5, 8, 12];
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const MONTH_COUNT = 12;

export function GitHubContributionsGraph() {
  const [data, setData] = useState<ContributionsData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch("/api/github/contributions")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: ContributionsData) => setData(d))
      .catch(() => setFailed(true));
  }, []);

  if (failed) {
    return (
      <p className="text-sm text-muted-foreground italic">
        Couldn&apos;t load the contribution graph right now — check back later.
      </p>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center gap-3 py-10">
        <div className="flex items-end gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="w-6 rounded-t animate-pulse"
              style={{
                height: `${12 + ((i * 7) % 40)}px`,
                backgroundColor: "rgba(0,0,0,0.08)",
                animationDelay: `${i * 80}ms`,
              }}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          Loading contributions…
        </span>
      </div>
    );
  }

  const cells = data.cells;
  const latest = cells[cells.length - 1];
  if (!latest) {
    return (
      <p className="text-sm text-muted-foreground italic">
        No contribution data yet.
      </p>
    );
  }

  const byMonth = new Map<string, { count: number; days: number }>();
  for (const c of cells) {
    if (c.level === 0) continue;
    const key = c.date.slice(0, 7);
    const entry = byMonth.get(key) ?? { count: 0, days: 0 };
    entry.count += LEVEL_ESTIMATE[Math.min(c.level, 4)];
    entry.days += 1;
    byMonth.set(key, entry);
  }

  const end = `${latest.date.slice(0, 7)}`;
  const [year, month] = end.split("-").map(Number);
  const months: { key: string; label: string; count: number; days: number }[] = [];
  for (let i = MONTH_COUNT - 1; i >= 0; i--) {
    const m = month - i;
    let y = year;
    let mm = m;
    while (mm <= 0) {
      mm += 12;
      y -= 1;
    }
    while (mm > 12) {
      mm -= 12;
      y += 1;
    }
    const key = `${y}-${String(mm).padStart(2, "0")}`;
    const entry = byMonth.get(key);
    months.push({
      key,
      label: `${MONTHS[mm - 1]} ${String(y).slice(2)}`,
      count: entry?.count ?? 0,
      days: entry?.days ?? 0,
    });
  }

  const max = Math.max(...months.map((m) => m.count), 1);
  const activeCount = months.reduce((acc, m) => acc + m.count, 0);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
        <div className="text-sm text-muted-foreground">
          <span className="text-xl font-anton text-foreground">
            {data.total ?? "—"}
          </span>{" "}
          contributions in the last year
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-foreground hover:text-accent transition-colors underline underline-offset-4"
        >
          github.com/{GITHUB_USERNAME} →
        </a>
      </div>

      <div className="flex items-end gap-2 sm:gap-3 overflow-x-auto pb-1">
        {months.map((m) => (
          <div
            key={m.key}
            className="flex flex-col items-center gap-2 shrink-0 group"
            title={`${m.label}: ${m.count} ~contributions on ${m.days} day${m.days === 1 ? "" : "s"}`}
          >
            <div className="text-[10px] text-muted-foreground font-medium opacity-0 transition-opacity group-hover:opacity-100">
              {m.count > 0 ? m.count : ""}
            </div>
            <div className="flex items-end" style={{ height: 72 }}>
              <div
                className="w-7 sm:w-9 rounded-t-[4px] transition-all duration-300 group-hover:brightness-110"
                style={{
                  height: `${Math.max(6, (m.count / max) * 100)}%`,
                  backgroundColor:
                    m.count > 0
                      ? "#30a14e"
                      : "rgba(0,0,0,0.07)",
                }}
              />
            </div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 text-[11px] text-muted-foreground">
        <span>{activeCount} estimated commits · last {MONTH_COUNT} months</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-[2px] inline-block" style={{ backgroundColor: "#39924a" }} />
          has commits
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-[2px] inline-block" style={{ backgroundColor: "rgba(0,0,0,0.07)" }} />
          quiet
        </span>
      </div>
    </div>
  );
}