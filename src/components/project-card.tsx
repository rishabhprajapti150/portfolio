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
import { Github, PlayCircle, User, Users, Shield } from "lucide-react";
import type { PortfolioData } from "@/lib/data";
import { VideoPlayer } from "@/components/video-player";

type ProjectCardProps = {
  project: PortfolioData["projects"][0];
};

const roleIcons = {
  jobseeker: <User className="h-5 w-5 mr-2" />,
  employer: <Users className="h-5 w-5 mr-2" />,
  admin: <Shield className="h-5 w-5 mr-2" />,
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-8 flex flex-col">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="font-headline text-2xl font-bold">
              {project.title}
            </CardTitle>
            <CardDescription className="pt-2">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 flex-grow">
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Key Roles & Features</h4>
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(project.roles).map(([role, features]) => (
                  <AccordionItem value={role} key={role}>
                    <AccordionTrigger className="capitalize font-medium text-base">
                      <div className="flex items-center">
                        {roleIcons[role as keyof typeof roleIcons]}
                        {role}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {features.map((feature: any, i: number) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </CardContent>
          <CardFooter className="p-0 pt-6 mt-auto">
            <div className="flex gap-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>{project.title} - Demo</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video rounded-lg overflow-hidden mt-4">
                    <VideoPlayer src={project.videoUrl} />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardFooter>
        </div>
        <div className="p-4 md:p-8 bg-muted/50 flex items-center justify-center">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {project.screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <Image
                          src={screenshot.src}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={1200}
                          height={800}
                          className=" w-full h-full"
                          data-ai-hint={screenshot.hint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </Card>
  );
}
