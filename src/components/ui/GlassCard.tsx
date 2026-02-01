import { cn } from "@/lib/utils";

export function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-border/80 transition-all duration-500", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
