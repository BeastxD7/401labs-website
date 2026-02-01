export interface TagPillProps {
  label: string;
}

export function TagPill({ label }: TagPillProps) {
  return (
    <span className="px-2 py-1 rounded border border-white/10 text-[10px] text-slate-500 uppercase tracking-wider">
      {label}
    </span>
  );
}
