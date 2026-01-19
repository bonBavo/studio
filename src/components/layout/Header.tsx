'use client';

import Link from 'next/link';
import { Zap, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/routes';
import { ThemeToggle } from '../ThemeToggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-4 border-b border-border/40 sticky top-0 bg-background/80 backdrop-blur-sm z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
          <Zap className="text-primary group-hover:rotate-[-15deg] transition-transform" />
          <span className="text-xl font-headline font-bold">Braven Performance</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => {
            if (link.name === 'Home') return null;
            const isActive = link.path.startsWith('/#') 
              ? pathname === '/'
              : pathname.startsWith(link.path);
            
            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  'flex items-center gap-2 p-2 text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-primary',
                  isActive && 'font-bold text-primary'
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </Link>
            );
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
