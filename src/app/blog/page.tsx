import MainLayout from '@/components/layout/MainLayout';
import { PenSquare } from 'lucide-react';
import type { Metadata } from 'next';
import { siteContent } from '@/lib/content';

export const metadata: Metadata = {
  title: "Blog | Engineer's Workshop",
  description: siteContent.blogPage.subtitle,
};

export default function BlogPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <PenSquare className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-4xl font-headline font-bold mt-4">{siteContent.blogPage.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{siteContent.blogPage.subtitle}</p>
        </div>
      </div>
    </MainLayout>
  );
}
