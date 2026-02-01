import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { Philosophy } from "@/components/home/Philosophy";
import { Stats } from "@/components/home/Stats";
import { Acquire } from "@/components/home/Acquire";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-accent-orange/30 selection:text-white">
      <Navbar />
      
      {/* Global Background Elements from HTML */}
      {/* Global Background Elements from HTML */}
      <div className="fixed inset-0 bg-noise opacity-40 pointer-events-none z-0 hidden dark:block"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-transparent dark:from-obsidian dark:via-transparent dark:to-obsidian pointer-events-none z-0"></div>
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-accent-orange/5 dark:bg-accent-orange/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-accent-peach/5 dark:bg-accent-peach/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"></div>

      <Hero />
      <Projects />
      <Philosophy />
      <Stats />
      <Acquire />
    </main>
  );
}
