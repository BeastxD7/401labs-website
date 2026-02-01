"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Acquire() {
  return (
    <section id="acquire" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group bg-black/40">
           {/* Glow */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-orange/50 via-accent-peach/50 to-transparent opacity-20"></div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
               <div className="max-w-xl text-left">
                   <div className="flex items-center gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-primary shadow-glow animate-pulse"></div>
                        <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Acquire</span>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                       Take Over a Product
                   </h2>
                   <p className="text-lg text-muted-foreground font-light mb-8">
                       Skip the build phase. Acquire a validation-ready product today.
                   </p>
                   <div className="flex gap-4">
                       <Button size="lg" className="rounded-full px-8">Browse Assets</Button>
                       <Button size="lg" variant="outline" className="rounded-full px-8">Contact Studio</Button>
                   </div>
               </div>
               
               <button className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-accent-orange hover:bg-[#ff661a] flex items-center justify-center transition-transform hover:scale-105 shadow-glow group-hover:shadow-neon-glow">
                   <ArrowUpRight className="size-8 text-white" />
               </button>
           </div>
        </div>
      </div>
    </section>
  );
}
