import MainLayout from '@/components/layout/MainLayout';
import { resumeData } from '@/lib/resume';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Award, Lightbulb, Star, Briefcase, GraduationCap, UserCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resume",
  description: "My professional resume, showcasing my skills and experience as a backend developer.",
};

const Section: React.FC<{title: string, icon: React.ElementType, children: React.ReactNode, className?: string, delay?: number }> = 
({ title, icon: Icon, children, className, delay = 0 }) => (
  <Card className={`mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700`} style={{ animationDelay: `${delay}ms` }}>
    <CardHeader>
      <CardTitle className="flex items-center gap-3 font-headline text-2xl">
        <Icon className="w-7 h-7 text-primary" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className={className}>
      {children}
    </CardContent>
  </Card>
);

export default function ResumePage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-500">
            <FileText className="mx-auto h-12 w-12 text-primary" />
            <h1 className="text-4xl font-headline font-bold mt-4">My Resume</h1>
            <p className="mt-4 text-lg text-muted-foreground">A summary of my professional journey and technical expertise.</p>
          </div>
          
          <Section title="Professional Summary" icon={UserCheck} delay={100}>
            <p className="text-muted-foreground">{resumeData.professionalSummary}</p>
          </Section>

          <Section title="Technical Skills" icon={Briefcase} delay={200}>
            <div className="space-y-6">
              {resumeData.technicalSkills.map((skillCategory, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <skillCategory.icon className="w-5 h-5 text-primary/80"/>
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Projects" icon={Lightbulb} delay={300}>
            <div className="space-y-6">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{project.technologies}</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Education" icon={GraduationCap} delay={400}>
            <div className="flex items-center gap-4">
              <resumeData.education.icon className="w-10 h-10 text-primary/80"/>
              <div>
                <h3 className="font-bold text-lg">{resumeData.education.degree}</h3>
                <p className="text-muted-foreground">{resumeData.education.university}</p>
                <p className="text-sm text-primary">{resumeData.education.status}</p>
              </div>
            </div>
          </Section>

          <Section title="Certifications" icon={Award} delay={500}>
             {resumeData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4">
                    <cert.icon className="w-10 h-10 text-primary/80"/>
                    <div>
                        <h3 className="font-bold text-lg">{cert.title}</h3>
                        <p className="text-muted-foreground">{cert.institution}</p>
                    </div>
                </div>
             ))}
          </Section>

          <Section title="Soft Skills & Strengths" icon={Star} delay={600} className="space-y-2">
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {resumeData.softSkills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </Section>
          
          <Section title="Interests" icon={UserCheck} delay={700} className="space-y-2">
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {resumeData.interests.map((interest, i) => <li key={i}>{interest}</li>)}
            </ul>
          </Section>
        </div>
      </div>
    </MainLayout>
  );
}
