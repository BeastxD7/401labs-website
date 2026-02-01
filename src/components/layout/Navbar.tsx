"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import brandConfig from "@/constants/brand-config.json";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <header className="pointer-events-auto flex items-center gap-2 rounded-full border border-border/50 bg-background/80 p-2 shadow-sm backdrop-blur-md dark:border-border/40 dark:bg-card/50">
        <div className="flex items-center gap-2 px-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground overflow-hidden border border-border group-hover:border-accent-orange transition-colors">
                <Image 
                  src={brandConfig.logo.src} 
                  alt={brandConfig.logo.alt} 
                  width={32} 
                  height={32} 
                  className="h-full w-full object-cover" 
                />
            </div>
            <span className="text-sm font-semibold tracking-tight">
              401<span className="text-accent-orange">Labs</span>
            </span>
          </Link>
        </div>
        
        <div className="hidden h-5 w-[1px] bg-border md:block" />

        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild className="h-8 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground">
            <Link href="/#projects">Projects</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild className="h-8 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground">
            <Link href="/#philosophy">Philosophy</Link>
          </Button>
        </nav>

        <div className="h-5 w-[1px] bg-border" />

        <div className="flex items-center gap-1 pl-1">
           {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 rounded-full text-muted-foreground hover:text-yellow-400"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
          <Button size="sm" variant="default" asChild className="h-8 rounded-full text-xs uppercase tracking-wider gap-2">
            <Link href="#acquire">
              Acquire
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
