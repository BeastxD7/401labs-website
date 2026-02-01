import { Timer, Armchair } from "lucide-react";

export function Stats() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Rapid Execution */}
        <div className="glass-panel p-10 rounded-[2rem] flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-16 h-16 rounded-full bg-[#1A1A1C] flex items-center justify-center mb-6 shadow-inner border border-white/5">
                <Timer className="size-8 text-accent-orange" />
            </div>
            
            <h3 className="text-foreground font-medium text-lg mb-2">Rapid Execution</h3>
            <div className="text-5xl font-bold text-foreground mb-2 tracking-tight">
                1 <span className="text-muted-foreground">Year</span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Live Period</p>
        </div>

        {/* Card 2: Weekend Built */}
        <div className="glass-panel p-10 rounded-[2rem] flex flex-col justify-between relative overflow-hidden group min-h-[300px]">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="flex justify-between items-start w-full">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border">
                    <Armchair className="size-6 text-muted-foreground" />
                </div>
                
                {/* Avatars */}
                <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-background"></div>
                    <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-background"></div>
                    <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-background flex items-center justify-center text-xs font-medium text-white">
                        +4
                    </div>
                </div>
             </div>

             <div className="mt-8">
                 <h3 className="text-2xl font-bold text-foreground mb-2">Weekend Built</h3>
                 <p className="text-muted-foreground">Community driven development sprints.</p>
             </div>
        </div>
      </div>
    </section>
  );
}
