import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, CheckCircle, Clock, ExternalLink, FileText, GanttChartSquare, Github, Linkedin, LocateIcon, Mail, Phone, Rocket } from "lucide-react";

export default function ContactSection() {
  const { contact, availability } = portfolioData;

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            I'm open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-grow">
              <p className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-muted-foreground" />
                <span>
                  <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-muted-foreground" />
                <span>
                  <strong>Phone:</strong> {contact.phone}
                </span>
              </p>
              <p className="flex items-start gap-3">
                <LocateIcon className="w-5 h-5 mt-1 text-muted-foreground" />
                <span>
                  <strong>Location:</strong> {contact.location}
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-muted-foreground" />
                <span>
                  <strong>Response Time:</strong> {contact.responseTime}
                </span>
              </p>
               <div className="flex gap-2 pt-2">
                <a href={contact.social.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon"><Github /><span className="sr-only">GitHub</span></Button>
                </a>
                 <a href={contact.social.naukri} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon"><FileText /><span className="sr-only">Naukri</span></Button>
                </a>
                 <a href={contact.social.indeed} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon"><Briefcase /><span className="sr-only">Indeed</span></Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-grow">
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-green-500" />
                <span>{availability.status}</span>
              </p>
              <div>
                <h4 className="font-semibold mb-2">Preferred Roles</h4>
                <div className="flex flex-wrap gap-2">
                  {availability.preferredRoles.map(role => <Badge key={role} variant="secondary">{role}</Badge>)}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Work Type</h4>
                <div className="flex flex-wrap gap-2">
                  {availability.workType.map(type => <Badge key={type} variant="secondary">{type}</Badge>)}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GanttChartSquare className="w-5 h-5 text-primary" />
                Work Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-grow">
               <p>
                  <strong>Expected Salary:</strong> {availability.expectedSalary}
                </p>
              <Button asChild className="mt-auto">
                <a href={`mailto:${contact.email}`}>
                  <Mail className="mr-2" /> Email Me
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}