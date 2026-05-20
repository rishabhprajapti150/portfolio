"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  PlayCircle,
  User,
  Users,
  Shield,
  ExternalLink,
  Star,
  Code2,
} from "lucide-react";
import type { PortfolioData } from "@/lib/data";
import { VideoPlayer } from "@/components/video-player";

type ProjectCardProps = {
  project: PortfolioData["projects"][0];
};

const roleIcons: Record<string, React.ReactNode> = {
  jobseeker: <User className="h-5 w-5" />,
  employer: <Users className="h-5 w-5" />,
  admin: <Shield className="h-5 w-5" />,
  student: <User className="h-5 w-5" />,
  university_admin: <Users className="h-5 w-5" />,
  super_admin: <Shield className="h-5 w-5" />,
  user: <User className="h-5 w-5" />,
};

function getRoleBadgeColor(role: string): string {
  const colors: Record<string, string> = {
    jobseeker: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    employer: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    admin: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    student: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
    university_admin: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800",
    super_admin: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
    user: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
  };
  return colors[role] || "bg-primary/10 text-primary border-primary/20";
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border-border/50 group card-glow">
      <div className="grid lg:grid-cols-5">
        {/* Content side */}
        <div className="lg:col-span-3 p-6 md:p-8 flex flex-col">
          <CardHeader className="p-0 mb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="font-headline text-2xl font-bold mb-1">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex-grow space-y-6">
            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Tech Stack
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 text-xs font-medium transition-all hover:bg-primary/20 hover:text-primary hover:border-primary/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Roles & Features */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Roles &amp; Features
                </h4>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {Object.entries(project.roles).map(([role, features]) => (
                  <AccordionItem
                    value={role}
                    key={role}
                    className="border rounded-lg px-4 data-[state=open]:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="capitalize font-medium text-base py-3 hover:no-underline">
                      <div className="flex items-center gap-2">
                        <span className={`p-1 rounded-md ${getRoleBadgeColor(role)}`}>
                          {roleIcons[role] || <User className="h-4 w-4" />}
                        </span>
                        <span className="text-sm font-semibold">
                          {role.replace(/_/g, " ")}
                        </span>
                        <Badge
                          variant="outline"
                          className="ml-1 text-[10px] px-1.5 py-0 h-5"
                        >
                          {features.length}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="space-y-2">
                        {features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </CardContent>

          <CardFooter className="p-0 pt-6 mt-auto">
            <div className="flex gap-3">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="group/btn">
                  <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                  Source Code
                  <ExternalLink className="ml-1 h-3 w-3 opacity-50" />
                </Button>
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="group/btn">
                    <PlayCircle className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="font-headline text-xl">
                      {project.title} - Demo
                    </DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video rounded-lg overflow-hidden mt-2 bg-muted">
                    <VideoPlayer src={project.videoUrl} />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardFooter>
        </div>

        {/* Screenshots side */}
        <div className="lg:col-span-2 p-4 md:p-6 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/10 flex items-center justify-center">
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
              {project.screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl border border-border/50 shadow-sm">
                      <div className="relative aspect-video bg-muted">
                        <Image
                          src={screenshot.src}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={1200}
                          height={800}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          data-ai-hint={screenshot.hint}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0 h-8 w-8" />
              <CarouselNext className="static translate-y-0 h-8 w-8" />
            </div>
          </Carousel>
        </div>
      </div>
    </Card>
  );
}
