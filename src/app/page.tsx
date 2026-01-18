import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Wrench, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { siteContent } from '@/lib/content';

export default function Home() {

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
            {siteContent.home.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            {siteContent.home.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/job-insights">AI Job Helper</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 border-y border-border/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-card/50 border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-3xl flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-primary" />
                {siteContent.home.about.title}: {siteContent.home.about.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4 text-base">
              {siteContent.home.about.description.map((p, i) => <p key={i}>{p}</p>)}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Wrench className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4">{siteContent.home.skills.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {siteContent.home.skills.subtitle}
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8">
            {skills.map(skill => (
              <div key={skill.name} className="flex flex-col items-center gap-3 text-center group">
                <div className="w-20 h-20 bg-card rounded-lg flex items-center justify-center border-2 border-transparent group-hover:border-primary transition-all duration-300 transform group-hover:-translate-y-1 shadow-md group-hover:shadow-primary/20">
                  <skill.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Briefcase className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4">{siteContent.home.projects.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {siteContent.home.projects.subtitle}
            </p>
          </div>
          <div className="text-center">
            <Button asChild size="lg">
                <Link href="/projects">Explore All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
