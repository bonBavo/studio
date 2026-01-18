import { Briefcase, Home, PenSquare, Sparkles, Wrench } from "lucide-react";

export type NavLink = {
    name: string;
    path: string;
    icon: React.ComponentType<{ className?: string }>;
};

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Projects', path: '/projects', icon: Briefcase },
  { name: 'Blog', path: '/blog', icon: PenSquare },
  { name: 'Skills', path: '/#skills', icon: Wrench },
  { name: 'Job Insights', path: '/job-insights', icon: Sparkles },
];
