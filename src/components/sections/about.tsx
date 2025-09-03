import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutSection() {
  const { description } = portfolioData.about;
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
        </div>
      </div>
    </section>
  );
}
