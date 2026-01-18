import Link from 'next/link';
import { Wrench, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="py-4 border-b border-border/40 sticky top-0 bg-background/80 backdrop-blur-sm z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Wrench className="text-primary group-hover:rotate-[-15deg] transition-transform" />
          <span className="text-xl font-headline font-bold">Engineer's Workshop</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
          <Link href="/#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link>
          <Link href="/job-insights" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <Sparkles className="w-4 h-4 text-primary/80" />
            Job Insights
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
