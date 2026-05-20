import { portfolioData } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { Code2 } from "lucide-react";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary mb-6">
            <Code2 className="w-3.5 h-3.5" />
            Portfolio
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Featured{" "}
            <span className="text-gradient-2 animate-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A showcase of my recent work — full-stack applications built with modern technologies
          </p>
        </div>
        <div className="grid gap-8 lg:gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
