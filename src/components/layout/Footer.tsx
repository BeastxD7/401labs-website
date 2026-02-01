"use client";

import Link from "next/link";
import Image from "next/image";
import brandConfig from "@/constants/brand-config.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center overflow-hidden border border-border">
             <Image 
                src={brandConfig.logo.src} 
                alt={brandConfig.logo.alt} 
                width={32} 
                height={32} 
                className="h-full w-full object-cover" 
              />
          </div>
          <span className="text-foreground font-medium text-sm tracking-tight">{brandConfig.name}</span>
        </div>
        <div className="flex gap-8">
          <Link className="text-muted-foreground hover:text-accent-orange transition-colors text-xs uppercase tracking-widest" href={brandConfig.contact.socials.twitter}>Twitter</Link>
          <Link className="text-muted-foreground hover:text-accent-orange transition-colors text-xs uppercase tracking-widest" href={brandConfig.contact.socials.github}>GitHub</Link>
        </div>
        <div className="text-muted-foreground text-xs font-mono">
          © {new Date().getFullYear()} {brandConfig.name}.
        </div>
      </div>
    </footer>
  );
}
