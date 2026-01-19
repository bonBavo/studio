'use client';

import Link from 'next/link';
import { Zap, Github, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/routes';
import { ThemeToggle } from '../ThemeToggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import * as React from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="py-4 border-b border-border/40 sticky top-0 bg-background/80 backdrop-blur-sm z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
          <Zap className="text-primary group-hover:rotate-[-15deg] transition-transform" />
          <span className="text-xl font-headline font-bold">Braven Performance</span>
        </Link>

        {/* Desktop Navigation */}
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
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
                <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/bonBavo" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                    </a>
                </Button>
                <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Menu className={cn("h-5 w-5 transition-all", isMobileMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100")} />
                      <X className={cn("absolute h-5 w-5 transition-all", isMobileMenuOpen ? "rotate-0 scale-100" : "rotate-90 scale-0")} />
                      <span className="sr-only">Open Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="py-6">
                        <SheetClose asChild>
                          <Link href="/" className="flex items-center gap-2 mb-8">
                              <Zap className="text-primary" />
                              <span className="text-xl font-headline font-bold">Braven Performance</span>
                          </Link>
                        </SheetClose>
                        <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => {
                            const isActive = link.path === '/' 
                                ? pathname === '/'
                                : link.path.startsWith('/#')
                                    ? pathname === '/'
                                    : pathname.startsWith(link.path);
                            
                            return (
                            <SheetClose asChild key={link.path}>
                                <Link
                                href={link.path}
                                className={cn(
                                    'flex items-center gap-3 p-3 rounded-md text-lg font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary',
                                    isActive && 'font-bold text-primary bg-muted'
                                )}
                                >
                                <link.icon className="h-5 w-5" />
                                {link.name}
                                </Link>
                            </SheetClose>
                            );
                        })}
                        </nav>
                        <div className="mt-8 pt-6 border-t border-border/40 flex items-center gap-4">
                            <Button variant="outline" className="w-full" asChild>
                                <a href="https://github.com/bonBavo" target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                GitHub
                                </a>
                            </Button>
                            <ThemeToggle />
                        </div>
                    </div>
                </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
