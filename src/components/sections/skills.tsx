import { portfolioData } from "@/lib/data";
import { Card } from "@/components/ui/card";

export default function SkillsSection() {
  const { skills } = portfolioData;
  return (
    <section id="skills" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            My proficiency in modern web technologies.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-4 flex flex-col items-center justify-center gap-3 hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <skill.icon className="w-8 h-8 text-primary" />
              <span className="font-medium text-center">{skill.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
