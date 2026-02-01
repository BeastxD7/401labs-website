export interface StatusBadgeProps {
  status: "Live" | "Beta" | "Acquire";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    Live: "bg-accent-orange shadow-neon-glow",
    Beta: "bg-accent-peach",
    Acquire: "bg-accent-peach shadow-[0_0_8px_#FF8A50]"
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`w-1.5 h-1.5 rounded-full ${colors[status]}`}></span>
      <span className="text-[10px] uppercase tracking-widest text-slate-400">{status}</span>
    </div>
  );
}
