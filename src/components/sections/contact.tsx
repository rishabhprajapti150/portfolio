import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  CheckCircle,
  Clock,
  FileText,
  Github,
  Mail,
  Phone,
  Rocket,
  Send,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const { contact, availability } = portfolioData;

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-dots pointer-events-none opacity-30" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary mb-6">
            <Send className="w-3.5 h-3.5" />
            Contact
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Let&apos;s{" "}
            <span className="text-gradient-2 animate-gradient">Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I&apos;m open to discussing new projects, creative ideas, or opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Contact Information */}
          <Card className="card-glow border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-sm font-medium hover:text-primary transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Phone</p>
                  <a href={`tel:${contact.phone}`} className="text-sm font-medium hover:text-primary transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Location</p>
                  <p className="text-sm font-medium">{contact.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Response Time</p>
                  <p className="text-sm font-medium">{contact.responseTime}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-border/50">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-3">Find Me On</p>
                <div className="flex gap-2">
                  <a href={contact.social.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="h-9">
                      <Github className="mr-1.5 h-4 w-4" />
                      GitHub
                    </Button>
                  </a>
                  <a href={contact.social.naukri} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="h-9">
                      <FileText className="mr-1.5 h-4 w-4" />
                      Naukri
                    </Button>
                  </a>
                  <a href={contact.social.indeed} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="h-9">
                      <Briefcase className="mr-1.5 h-4 w-4" />
                      Indeed
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card className="card-glow border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                  <Rocket className="w-4 h-4" />
                </div>
                Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{availability.status}</p>
                  <p className="text-xs text-muted-foreground">Ready to start immediately</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-3">Preferred Roles</p>
                <div className="flex flex-wrap gap-2">
                  {availability.preferredRoles.map((role) => (
                    <Badge key={role} variant="secondary" className="px-3 py-1">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-3">Work Type</p>
                <div className="flex flex-wrap gap-2">
                  {availability.workType.map((type) => (
                    <Badge
                      key={type}
                      variant="outline"
                      className="px-3 py-1 border-primary/20 text-primary"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Preferences / CTA */}
          <Card className="card-glow border-border/50 bg-gradient-to-br from-primary/5 via-background to-violet-500/5 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                Work Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 flex flex-col h-full">
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                    Expected Compensation
                  </p>
                  <p className="font-semibold text-sm">{availability.expectedSalary}</p>
                </div>

                <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                    Start Date
                  </p>
                  <p className="font-semibold text-sm">Immediate</p>
                </div>
              </div>

              <div className="mt-auto pt-3">
                <a href={`mailto:${contact.email}`}>
                  <Button className="w-full group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Me an Email
                    </span>
                  </Button>
                </a>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  I typically respond within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
