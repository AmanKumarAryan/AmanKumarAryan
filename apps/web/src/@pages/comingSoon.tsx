

export function ComingSoon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <span className="font-poppins text-xs uppercase tracking-[0.3em] text-muted-foreground">
        This page
      </span>
      <h1 className="mt-4 font-anton text-6xl leading-[1.05] text-accent sm:text-7xl lg:text-8xl">
        Working on it.
      </h1>
      <p className="mt-6 max-w-md font-poppins text-base text-muted-foreground">
        This section isn&apos;t built yet — check back soon.
      </p>
    </main>
  );
}