"use client";

import { portfolioData } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const { name, title, intro } = portfolioData.hero;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "0s" }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary w-fit animate-slide-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for opportunities
            </div>

            {/* Name and Title */}
            <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="text-gradient animate-gradient">{name.split(" ")[0]}</span>
              <br />
              <span className="text-muted-foreground/80">{name.split(" ").slice(1).join(" ")}</span>
            </h1>

            <div className="space-y-2">
              <p className="text-lg md:text-xl font-medium text-primary">
                {title}
              </p>
              <p className="text-muted-foreground max-w-xl leading-relaxed text-base md:text-lg">
                {intro}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects">
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
              <a href="#about">
                <Button size="lg" variant="outline" className="group">
                  About Me
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>

            {/* Social proof / quick stats */}
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["React", "Next", "Node"].map((tech, i) => (
                  <div
                    key={tech}
                    className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary"
                    style={{ zIndex: 3 - i }}
                  >
                    {tech[0]}
                  </div>
                ))}
              </div>
              <span className="font-medium">MERN Stack Developer</span>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-violet-500 to-primary opacity-20 rounded-full blur-xl animate-gradient group-hover:opacity-30 transition-opacity duration-500" />

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 animate-float" />
                <Image
                  src="./portfolio-icon.jpg"
                  alt="Rishabh Prajapati"
                  width={400}
                  height={400}
                  priority
                  className="rounded-full object-cover border-4 border-border shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Orbiting dots */}
                <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: "8s" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-violet-400/60" />
                </div>
                <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: "10s" }}>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400/60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-16 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
