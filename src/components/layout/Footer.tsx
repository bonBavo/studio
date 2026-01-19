import Link from 'next/link';
import { socialLinks } from '@/lib/socials';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border/40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">&copy; {year} Braven Performance. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
          <Link
            href="/projects"
            className="relative flex items-center justify-center h-9 w-9 rounded-full border-2 border-muted-foreground text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="Start Engine"
          >
            <span className="text-[9px] font-bold font-code">START</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
