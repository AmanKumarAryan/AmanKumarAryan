export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="w-6 h-px bg-accent" />
      {children}
    </div>
  );
}