"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
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

// Vibrant, smooth gradients matching the reference
const getGradient = (index: number) => {
    const gradients = [
        "bg-gradient-to-br from-[#FF9A9E] via-[#FECFEF] to-[#FEF9D7]", // Pink/Orange/Yellow (Like GPT-5.2)
        "bg-gradient-to-bl from-[#E0C3FC] via-[#8EC5FC] to-[#C2E9FB]", // Purple/Blue (Like GPT-5 mini)
        "bg-gradient-to-tr from-[#89f7fe] via-[#66a6ff] to-[#89f7fe]", // Blue/Cyan (Like GPT-5 nano)
        "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
        "bg-gradient-to-r from-[#4facfe] to-[#00f2fe]",
        "bg-gradient-to-r from-[#fa709a] to-[#fee140]",
    ];
    return gradients[index % gradients.length];
};

export function Projects() {
    return (
        <section className="max-w-7xl mx-auto mb-32 px-6" id="projects">
            <div className="mb-6">
                <h2 className="text-lg font-medium text-foreground tracking-tight">Featured projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {projectsData.map((project: Project, index: number) => {
                    const gradient = getGradient(index);
                    const isNew = project.status === "Beta" || project.status === "New";

                    return (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="group flex flex-col gap-3 cursor-pointer"
                        >
                            {/* Image Area */}
                            <div className={`aspect-video w-full rounded-xl ${gradient} relative overflow-hidden`}>
                                {/* Noise & Texture Overlay for that matte look */}
                                <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-noise" />
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Centered Title on Image */}
                                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-sm group-hover:scale-105 transition-transform duration-500">
                                        {project.id.toLowerCase()}
                                    </h3>
                                </div>
                            </div>

                            {/* Content Below */}
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-bold text-sm text-foreground tracking-tight">{project.title}</h4>
                                    {isNew && (
                                        <span className="bg-[#1C3A29] text-[#4ADE80] text-[10px] uppercase font-bold px-1.5 py-[2px] rounded-[4px] leading-tight flex items-center justify-center">
                                            New
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground leading-snug line-clamp-2 pr-2">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    );
                })}

            </div>
        </section>
    );
}
