"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, ArrowLeft, Globe, BookOpen } from "lucide-react";
import projectsData from "@/constants/projects.json";

interface ProjectDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const { id } = use(params);
  const project = projectsData.find((p) => p.id === id);
  const [activeTab, setActiveTab] = useState("About");

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center transition-colors duration-300">
      {/* Absolute Background Elements */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none z-0 hidden dark:block"></div>
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-accent-orange/5 dark:bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-normal"></div>

      {/* Navbar - Simplified to Back Button + Logo */}
      <nav className="w-full max-w-7xl px-6 py-6 flex justify-between items-center relative z-10">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
          <div className="w-8 h-8 rounded-full border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary transition-colors">
            <ArrowLeft className="size-4" />
          </div>
          <span className="text-sm font-medium">Back to Studio</span>
        </Link>
        <div className="text-xl font-bold tracking-tight text-foreground">
          401<span className="text-accent-orange">Labs</span>
        </div>
      </nav>

      <main className="w-full max-w-7xl px-6 py-8 lg:py-16 flex-grow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Info */}
          <div className="lg:col-span-4 flex flex-col lg:sticky lg:top-20">
            <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter text-foreground mb-4 text-glow">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground font-light mb-8 border-l border-accent-orange/30 pl-4">
              {project.category}
            </p>
            <div className="flex flex-col gap-3 w-fit">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-accent-orange hover:bg-[#E64D00] text-white font-medium rounded-full transition-all duration-200 shadow-glow w-full"
                >
                  <Globe className="size-5" />
                  Visit Live Site
                </a>
              )}

              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary/80 border border-border text-foreground text-sm font-medium rounded-full transition-colors"
                  >
                    <Github className="size-4" />
                    GitHub
                  </a>
                )}
                {project.docsUrl && (
                  <a
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary/80 border border-border text-foreground text-sm font-medium rounded-full transition-colors"
                  >
                    <BookOpen className="size-4" />
                    Docs
                  </a>
                )}
              </div>
            </div>

            {/* Contributors */}
            <div className="hidden lg:block mt-12 pt-8 border-t border-border">
              <div className="flex flex-col gap-3 text-sm">
                <span className="font-medium text-muted-foreground uppercase tracking-widest text-xs">Contributors</span>
                <div className="flex -space-x-3">
                  {project.contributors?.map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt="Contributor"
                      className="w-10 h-10 rounded-full border-2 border-background bg-secondary"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div className="lg:col-span-8 relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-10 bg-accent-orange/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            {/* Main Card */}
            <div className="glass-panel rounded-3xl overflow-hidden aspect-[16/10] relative bg-card border border-border">
              {/* Content */}
              <div className="relative h-full bg-card p-1">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  {project.image ? (
                    <div className="relative w-full h-full">
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60"></div>
                    </div>
                  ) : (
                    /* Placeholder Structure */
                    <div className="p-8 grid grid-cols-12 gap-6 w-full h-full opacity-60">
                      <div className="col-span-3 bg-secondary/50 rounded-xl h-full border border-border"></div>
                      <div className="col-span-9 flex flex-col gap-6">
                        <div className="h-32 bg-accent-orange/5 rounded-xl border border-accent-orange/20 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-noise opacity-50 dark:opacity-50 opacity-10"></div>
                          <span className="text-accent-orange font-mono text-xs tracking-widest">&lt;AnalyticsGraph /&gt;</span>
                        </div>
                        <div className="grid grid-cols-2 gap-6 h-full">
                          <div className="bg-secondary/50 rounded-xl border border-border"></div>
                          <div className="bg-secondary/50 rounded-xl border border-border"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mt-20 lg:mt-32 max-w-4xl mx-auto">
          <div className="border-b border-border mb-8">
            <nav aria-label="Tabs" className="-mb-px flex space-x-12">
              {["About", "Features", "Tech Stack"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap py-4 border-b-2 font-medium text-sm transition-all tracking-wide ${activeTab === tab
                      ? "border-accent-orange text-accent-orange"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground font-light leading-relaxed">
            {activeTab === "About" && (
              <>
                <p className="text-xl text-foreground mb-6 font-medium">{project.longDescription}</p>
                <p className="opacity-80">{project.mission}</p>
              </>
            )}
            {activeTab === "Features" && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                {project.features?.map((feature, i) => (
                  <li key={i} className="bg-secondary/30 p-4 rounded-lg border border-border flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span> {feature}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "Tech Stack" && (
              <div className="flex flex-wrap gap-3">
                {project.techStack?.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary rounded-full border border-border text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            )}

          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                App Development Period
              </h4>
              <p className="text-foreground font-mono text-sm border-l-2 border-accent-orange pl-3">
                {project.developmentPeriod}
              </p>
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              >
                <Github className="size-5" />
                <span>Open with GitHub</span>
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
