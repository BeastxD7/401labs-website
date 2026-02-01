"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="max-w-5xl mx-auto mb-32 text-center relative z-10 pt-40 pb-24 px-6">
      <div className="mb-8 flex justify-center">
        <Badge variant="secondary" className="rounded-full py-1 px-4 border border-border bg-secondary/50 backdrop-blur-sm">
           <span className="relative flex h-1.5 w-1.5 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-orange"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Venture Studio</span>
        </Badge>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-foreground mb-8 text-glow leading-[0.9]">
        Building the future,<br/>
        <span className="text-muted-foreground/40 font-light">one weekend at a time.</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed mb-12">
        We are an ad-hoc product factory. From rapid concept to acquisition-ready assets, focusing on minimal overhead and maximum impact.
      </p>
      <div className="flex items-center justify-center gap-6">
        <Button asChild size="lg" className="rounded-full px-8 bg-accent-orange hover:bg-accent-orange/90 text-white shadow-[0_0_25px_rgba(255,85,0,0.4)] hover:shadow-[0_0_35px_rgba(255,85,0,0.6)] transition-all">
          <Link href="#projects">Explore Projects</Link>
        </Button>
        <Button asChild variant="ghost" size="lg" className="rounded-full px-8 text-muted-foreground hover:text-foreground">
          <Link href="#philosophy">Our Philosophy</Link>
        </Button>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-orange/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </section>
  );
}
