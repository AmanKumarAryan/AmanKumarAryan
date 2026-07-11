
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 md:px-10 lg:px-16 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}