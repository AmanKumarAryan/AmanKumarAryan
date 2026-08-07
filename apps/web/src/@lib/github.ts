export const GITHUB_USERNAME = "AmanKumarAryan";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export type ContributionCell = {
  date: string;
  level: number;
};

export type ContributionsData = {
  cells: ContributionCell[];
  total: number | null;
};

export async function getContributions(): Promise<ContributionsData | null> {
  try {
    const res = await fetch(
      `https://github.com/users/${GITHUB_USERNAME}/contributions`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    const html = await res.text();

    const cells: ContributionCell[] = [];
    const re =
      /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null) {
      cells.push({ date: m[1], level: Number(m[2]) });
    }

    const totalMatch = html.match(/(\d+)\s*contributions\s+in the last year/);
    return {
      cells,
      total: totalMatch ? Number(totalMatch[1]) : null,
    };
  } catch {
    return null;
  }
}

export function buildWeeks(
  cells: ContributionCell[],
): (ContributionCell | null)[][] {
  const weeks: (ContributionCell | null)[][] = [];
  let cur: (ContributionCell | null)[] = Array.from({ length: 7 }, () => null);
  let prev: Date | null = null;

  for (const c of cells) {
    const d = new Date(c.date + "T00:00:00");
    const dow = d.getDay();
    const started = cur.some((v) => v !== null);
    const gap =
      prev && d.getTime() - prev.getTime() > 24 * 60 * 60 * 1000;

    if (started && (dow === 0 || gap)) {
      weeks.push(cur);
      cur = Array.from({ length: 7 }, () => null);
    }
    cur[dow] = c;
    prev = d;
  }

  if (cur.some((v) => v !== null)) weeks.push(cur);
  return weeks;
}