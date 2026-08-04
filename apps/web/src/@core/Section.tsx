
export function Section({
  id,
  children,
  className = "",
  childClass = ""
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  childClass?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 md:px-10 lg:px-16 ${className}`}
    >
      <div className={`mx-auto max-w-7xl ${childClass}`}>{children}</div>
    </section>
  );
}