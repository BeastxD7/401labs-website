"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { 
  Card, 
  CardDescription, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import projectsData from "@/constants/projects.json";

// Define Types based on JSON shape
type Project = {
  id: string;
  title: string;
  description: string;
  status: string;
  tags?: string[];
  version?: string;
  cta?: string;
  layout: string;
  imageAlt: string;
};

// Vibrant, OpenAI-inspired mesh gradients
const getGradient = (str: string) => {
  const gradients = [
    "bg-gradient-to-r from-rose-300 via-fuchsia-300 to-indigo-300",
    "bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300",
    "bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300",
    "bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300",
    "bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300",
    "bg-gradient-to-r from-orange-300 via-rose-300 to-pink-300",
  ];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % gradients.length;
  // Add opacity and saturation adjustments for that "pop"
  return `${gradients[index]} saturate-150 brightness-110`;
};

export function Projects() {
  return (
    <section className="max-w-7xl mx-auto mb-32 px-6" id="projects">
      <SectionHeader title="Active Labs" index="INDEX_01 // PROJECTS" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {projectsData.map((project: Project) => {
           // Define card classes based on layout
           const spanClass = project.layout === "featured" ? "lg:col-span-2" : "";
           const Icon = project.layout === "featured" ? ArrowUpRight : ArrowRight;
           const gradient = getGradient(project.title);

           return (
             <Card key={project.id} className={`${spanClass} border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-colors duration-300 overflow-hidden group flex flex-col`}>
                
                {/* 
                   TEMPLATE: FEATURED (Side-by-Side)
                */}
                {project.layout === "featured" && (
                    <div className="flex flex-col md:flex-row h-full">
                        {/* Image Left */}
                        <div className={`md:w-1/2 min-h-[240px] ${gradient} relative`}>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        {/* Content Right */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-4">
                                <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider">{project.status}</Badge>
                                <Link href={`/projects/${project.id}`} className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary/50 hover:bg-accent-orange hover:border-accent-orange transition-all duration-300 group/link z-20">
                                   <Icon className="text-muted-foreground group-hover/link:text-white transition-colors size-5" />
                                </Link>
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-medium text-foreground mb-3">{project.title}</CardTitle>
                                <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</CardDescription>
                            </div>
                            <div className="flex items-center gap-2 mt-auto">
                                {project.tags?.map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/50">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* 
                   TEMPLATE: VERTICAL (Image Top) 
                */}
                {project.layout === "vertical" && (
                    <div className="flex flex-col h-full">
                        <div className={`h-48 ${gradient} relative`}>
                            <div className="absolute top-4 left-4">
                                <Badge variant="secondary" className="backdrop-blur-md bg-background/80 text-xs font-mono uppercase tracking-wider">{project.status}</Badge>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <CardTitle className="text-xl font-medium text-foreground mb-2">{project.title}</CardTitle>
                                <CardDescription className="text-muted-foreground text-xs leading-relaxed">{project.description}</CardDescription>
                            </div>
                            <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
                                <span className="text-[10px] text-muted-foreground font-mono">{project.version}</span>
                                <Link href={`/projects/${project.id}`} className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary/50 hover:bg-accent-orange hover:border-accent-orange transition-all duration-300 group/link z-20">
                                    <Icon className="text-muted-foreground group-hover/link:text-white transition-colors size-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* 
                   TEMPLATE: STANDARD (Image Middle) 
                   Updated to include top-right arrow like vertical/featured
                */}
                {project.layout === "standard" && (
                    <div className="p-6 h-full flex flex-col relative">
                        <div className="flex justify-between items-start mb-6">
                            <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider">{project.status}</Badge>
                             <Link href={`/projects/${project.id}`} className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary/50 hover:bg-accent-orange hover:border-accent-orange transition-all duration-300 group/link z-20 absolute top-6 right-6">
                                <ArrowUpRight className="text-muted-foreground group-hover/link:text-white transition-colors size-5" />
                            </Link>
                        </div>
                        <div className={`mb-6 relative aspect-[2/1] rounded-lg overflow-hidden ${gradient}`}>
                        </div>
                        <CardTitle className="text-xl font-medium text-foreground mb-1">{project.title}</CardTitle>
                        <CardDescription className="text-muted-foreground text-xs leading-relaxed mb-4">{project.description}</CardDescription>
                        <div className="mt-auto flex items-center gap-2">
                             {project.tags?.map(tag => (
                                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/50">{tag}</span>
                            ))}
                        </div>
                    </div>
                )}
             </Card>
           );
        })}

      </div>
    </section>
  );
}
