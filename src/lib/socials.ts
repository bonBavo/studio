import { Github, Linkedin } from "lucide-react";

type SocialLink = {
    name: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/bonBavo',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/braven-andrew-775a081b4',
    icon: Linkedin,
  },
];
