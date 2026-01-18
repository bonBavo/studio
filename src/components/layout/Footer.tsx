import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 border-t border-border/40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">&copy; {year} bonfolio. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github /></Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
        </div>
      </div>
    </footer>
  );
}
