"use client";

import { portfolioData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, GraduationCap, Briefcase, Award, Shield, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Briefcase, label: "Experience", value: "3+ Years", description: "Full Stack Development" },
  { icon: Code2, label: "Projects", value: "5+", description: "Full-stack applications" },
  { icon: GraduationCap, label: "Education", value: "B.Sc. IT", description: "Patkar Varde College, Mumbai University" },
  { icon: Award, label: "Expertise", value: "10+", description: "Technologies mastered" },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 30;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutSection() {
  const { description } = portfolioData.about;

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary mb-6">
            <Shield className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Turning Ideas Into{" "}
            <span className="text-gradient-2 animate-gradient">Digital Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-glow border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold font-headline">
                    {!isNaN(parseInt(stat.value)) ? (
                      <AnimatedCounter target={parseInt(stat.value)} suffix={stat.value.includes("+") ? "+" : ""} />
                    ) : (
                      <span>{stat.value}</span>
                    )}
                  </p>
                  <p className="font-semibold text-sm">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills highlight */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 via-background to-violet-500/5 border-primary/10 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Rocket className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider">What I Do</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold">
                    Full Stack Development &amp; UI Engineering
                  </h3>
                  <p className="text-muted-foreground">
                    I specialize in building modern web applications with React, Next.js, Node.js,
                    and TypeScript. From intuitive user interfaces to robust backend systems,
                    I deliver end-to-end solutions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["React.js / Next.js", "Node.js / Express", "MongoDB / MySQL", "Tailwind CSS"].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg bg-background/80 border border-border/50 text-sm font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
