import { portfolioData } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            A selection of my recent work.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
