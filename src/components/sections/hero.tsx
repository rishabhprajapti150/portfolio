import { portfolioData } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const { name, title, intro } = portfolioData.hero;

  return (
    <section id="home" className="py-20 md:py-32 bg-card">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            {name}
          </h1>
          <p className="text-lg md:text-xl text-primary font-medium">{title}</p>
          <p className="text-muted-foreground max-w-xl">{intro}</p>
          <div className="mt-4 flex gap-4">
            <a href="#projects">
              <Button size="lg">View My Work</Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline">
                More About Me
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="https://picsum.photos/400/400"
              alt="Rishabh Prajapati"
              width={400}
              height={400}
              priority
              className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
              data-ai-hint="profile picture"
            />
            <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
