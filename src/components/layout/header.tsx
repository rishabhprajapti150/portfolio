"use client";

import { Button } from "@/components/ui/button";
import { Code, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <a href="#" className="flex items-center gap-2 mr-4">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Rishabh Prajapati</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <a
            href="/Rishabh_Fullstack.pdf"
            download
            className="hidden md:inline-flex"
          >
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </a>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full py-6">
                <a href="#" className="flex items-center gap-2 mb-8" onClick={() => setIsMenuOpen(false)}>
                  <Code className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Rishabh Prajapati</span>
                </a>
                <nav className="flex flex-col gap-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto">
                  <a
                    href="./Rishabh_Fullstack.pdf"
                    download
                  >
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}