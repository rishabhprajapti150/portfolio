import { portfolioData } from "@/lib/data";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container flex items-center justify-between py-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Rishabh Prajapati. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={portfolioData.contact.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
