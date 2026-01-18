import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { projects, skills } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Wrench, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
            Engineer's Workshop
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Crafting robust and elegant software solutions, one project at a time. Welcome to my digital garage.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg">
              <Link href="/#projects">View Projects</Link>
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
                About Me: Andrew Braven
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4 text-base">
              <p>I'm a software engineer with a passion for building things from the ground up, much like a mechanic in a garage. My expertise lies in Java, backend systems, and network protocols. I thrive on dissecting complex problems and reassembling them into efficient, scalable, and secure applications.</p>
              <p>This portfolio is my "workshop," where I showcase my "builds" (projects) and the "tools" (skills) I use. Take a look around, and feel free to get in touch!</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Wrench className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4">The Toolkit</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The primary technologies and tools I use to bring ideas to life.
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4">Featured Builds</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A few of the "cars" currently in the garage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
