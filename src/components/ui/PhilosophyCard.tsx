import { LucideIcon } from "lucide-react";

export interface PhilosophyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PhilosophyCard({ icon: Icon, title, description }: PhilosophyCardProps) {
  return (
    <div className="bg-card p-10 hover:bg-primary/[0.03] transition-colors group border-r border-border last:border-r-0">
      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 border border-border group-hover:border-primary/20">
        <Icon className="size-5" />
      </div>
      <h3 className="text-lg font-medium text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
