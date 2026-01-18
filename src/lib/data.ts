import { Cog, Database, GitBranch, Globe, Network, Server, ShieldCheck, Smartphone, Wind, Type, Monitor } from 'lucide-react';
import type { Project } from '@/components/ProjectCard';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) return { src: 'https://picsum.photos/seed/error/600/400', hint: 'placeholder' };
    return { src: image.imageUrl, hint: image.imageHint };
}

export const skills = [
  { name: 'Java', icon: Cog },
  { name: 'Spring Boot', icon: Wind },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'Docker', icon: Server },
  { name: 'Next.js', icon: Globe },
  { name: 'React', icon: Monitor },
  { name: 'TypeScript', icon: Type },
  { name: 'Android', icon: Smartphone },
  { name: 'Networking', icon: Network },
];


export const projects: Project[] = [
  {
    id: 'https-server',
    title: 'HTTPS Server in Java',
    description: 'A fully-functional HTTPS server built from scratch using pure Java, demonstrating deep knowledge of networking and security protocols.',
    image: getImage('project-car-1'),
    tags: ['Java', 'Networking', 'Security', 'TLS/SSL'],
    specs: {
      engine: 'Java 17, TCP Sockets',
      transmission: 'Custom HTTP/1.1 Parser',
      ecu: 'TLSv1.3 Handshake, Certificate Validation',
      chassis: 'Command-Line Interface',
    },
    githubUrl: '#',
  },
  {
    id: 'android-os',
    title: 'Android OS Internals',
    description: 'An exploration of Android OS internals, including process management, memory allocation, and custom ROM building.',
    image: getImage('project-car-2'),
    tags: ['Android', 'Java', 'Linux Kernel', 'Systems'],
    specs: {
      engine: 'AOSP (Android Open Source Project)',
      transmission: 'Binder IPC, Zygote Process',
      ecu: 'SELinux Policies, App Sandboxing',
      chassis: 'Custom ROM Interface',
    },
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'portfolio-workshop',
    title: 'This Portfolio Website',
    description: 'An interactive portfolio built to showcase my skills in a creative and engaging way, featuring a garage theme and AI-powered tools.',
    image: getImage('project-car-3'),
    tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'GenAI'],
    specs: {
      engine: 'Next.js, Server Components',
      transmission: 'Vercel Deployment, Server Actions',
      ecu: 'Genkit AI, zod validation',
      chassis: 'TailwindCSS, shadcn/ui',
    },
    githubUrl: '#',
  },
  {
    id: 'api-gateway',
    title: 'Cloud API Gateway',
    description: 'A resilient and scalable API Gateway built with Spring Cloud Gateway, handling routing, rate limiting, and authentication for microservices.',
    image: getImage('project-car-4'),
    tags: ['Java', 'Spring Cloud', 'Microservices', 'API'],
    specs: {
        engine: 'Spring Cloud Gateway',
        transmission: 'WebFlux, Reactive Programming',
        ecu: 'JWT Authentication, Resilience4j',
        chassis: 'Service Discovery with Eureka',
    },
    githubUrl: '#',
  }
];
