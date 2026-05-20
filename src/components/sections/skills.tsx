"use client";

import { portfolioData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, GitBranch, Layout, Server, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-green-500",
    bg: "bg-green-500/10",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    skills: ["Git", "GitHub"],
  },
];

function SkillProgressBar({ name, index }: { name: string; index: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  // Calculate a "score" for each skill for the progress bar
  const getScore = (skill: string): number => {
    const scores: Record<string, number> = {
      "React.js": 92,
      "Next.js": 88,
      "TypeScript": 85,
      "JavaScript": 90,
      "Tailwind CSS": 90,
      "Node.js": 85,
      "Express.js": 82,
      "MongoDB": 78,
      "MySQL": 75,
      "Git": 85,
      "GitHub": 85,
    };
    return scores[skill] || 80;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          setTimeout(() => setWidth(getScore(name)), 200 + index * 50);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [name, index]);

  const score = getScore(name);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{score}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-violet-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-dots pointer-events-none opacity-30" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary mb-6">
            <Code2 className="w-3.5 h-3.5" />
            Technical Skills
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            My{" "}
            <span className="text-gradient-2 animate-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {skillCategories.map((category) => (
            <Card key={category.title} className="card-glow border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${category.bg} ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-headline">{category.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-sm transition-all hover:bg-primary/20 hover:text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Bars */}
        <Card className="max-w-3xl mx-auto border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Wrench className="w-5 h-5 text-primary" />
              <h3 className="font-semibold font-headline">Proficiency Levels</h3>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <SkillProgressBar key={skill.name} name={skill.name} index={index} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
