import Link from 'next/link';
import { Wrench, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/routes';
import { ThemeToggle } from '../ThemeToggle';

export default function Header() {
  return (
    <header className="py-4 border-b border-border/40 sticky top-0 bg-background/80 backdrop-blur-sm z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Wrench className="text-primary group-hover:rotate-[-15deg] transition-transform" />
          <span className="text-xl font-headline font-bold">bonfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => {
            if (link.name === 'Home') return null;
            return (
                <Button variant="ghost" asChild key={link.path}>
                    <Link href={link.path} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-3">
                        <link.icon className="w-4 h-4 text-primary/80" />
                        {link.name}
                    </Link>
                </Button>
            )
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
