import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cog, Network, ShieldCheck, Monitor, Github, ExternalLink } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    hint: string;
  };
  tags: string[];
  specs: {
    engine: string;
    transmission: string;
    ecu: string;
    chassis: string;
  };
  githubUrl?: string;
  liveUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden bg-card/70 hover:border-primary/50 transition-colors duration-300 group shadow-md hover:shadow-lg hover:shadow-primary/10">
      <div className="overflow-hidden rounded-t-lg">
        <Image 
          src={project.image.src} 
          alt={project.title} 
          width={600}
          height={400}
          className="object-cover w-full aspect-video group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          data-ai-hint={project.image.hint} 
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-start gap-2"><Cog className="w-4 h-4 text-primary mt-1 shrink-0" /> <span><strong>Engine:</strong> {project.specs.engine}</span></p>
          <p className="flex items-start gap-2"><Network className="w-4 h-4 text-primary mt-1 shrink-0" /> <span><strong>Transmission:</strong> {project.specs.transmission}</span></p>
          <p className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-primary mt-1 shrink-0" /> <span><strong>ECU:</strong> {project.specs.ecu}</span></p>
          <p className="flex items-start gap-2"><Monitor className="w-4 h-4 text-primary mt-1 shrink-0" /> <span><strong>Chassis:</strong> {project.specs.chassis}</span></p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto pt-4 flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        <div className="flex w-full justify-end gap-2">
          {project.githubUrl && <Button variant="outline" size="sm" asChild><a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4 mr-1" /> Source</a></Button>}
          {project.liveUrl && <Button size="sm" asChild><a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4 mr-1" /> Live Demo</a></Button>}
        </div>
      </CardFooter>
    </Card>
  );
}
