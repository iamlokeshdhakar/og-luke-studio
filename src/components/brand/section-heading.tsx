export function SectionHeading({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="flex flex-col gap-4">
        <p className="eyebrow text-accent-text">{number} / The foundation</p>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-copy">{children}</p>}
    </div>
  );
}
