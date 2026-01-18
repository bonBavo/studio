import MainLayout from '@/components/layout/MainLayout';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import { Briefcase } from 'lucide-react';
import type { Metadata } from 'next';
import { siteContent } from '@/lib/content';

export const metadata: Metadata = {
  title: "Projects | Engineer's Workshop",
  description: siteContent.projectsPage.subtitle,
};

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
            <Briefcase className="mx-auto h-12 w-12 text-primary" />
            <h1 className="text-4xl font-headline font-bold mt-4">{siteContent.projectsPage.title}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{siteContent.projectsPage.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </MainLayout>
  );
}
