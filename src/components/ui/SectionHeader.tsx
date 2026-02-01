export interface SectionHeaderProps {
  title: string;
  index: string;
}

export function SectionHeader({ title, index }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
      <h2 className="text-2xl font-light text-foreground tracking-tight">{title}</h2>
      <span className="text-xs text-muted-foreground font-mono">{index}</span>
    </div>
  );
}
