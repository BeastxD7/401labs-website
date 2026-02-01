"use client";

import { Bolt, Layers, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Philosophy() {
  const items = [
    {
      icon: Bolt,
      title: "Rapid Prototyping",
      description: "Napkin sketch to production MVP in days. We bypass the bureaucracy of traditional development cycles."
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Built with production-grade code from day one. Scalable, clean, and ready for any infrastructure."
    },
    {
      icon: Rocket,
      title: "Built to Exit",
      description: "Engineered for acquisition. We ensure seamless handovers with comprehensive documentation."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto mb-32 px-6" id="philosophy">
      <SectionHeader title="The Method" index="INDEX_02 // PHILOSOPHY" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:bg-card hover:shadow-md">
            <CardHeader>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
