import MainLayout from '@/components/layout/MainLayout';
import JobInsightsForm from '@/components/JobInsightsForm';
import { Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Job Insights | Engineer's Workshop",
  description: 'Use AI to analyze your resume against a job description and get actionable insights.',
};

export default function JobInsightsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="mx-auto h-12 w-12 text-primary" />
            <h1 className="text-4xl font-headline font-bold mt-4">Automated Job Application Insights</h1>
            <p className="mt-4 text-lg text-muted-foreground">Paste your resume and a job posting to get AI-powered insights on how to improve your application.</p>
          </div>
          <JobInsightsForm />
        </div>
      </div>
    </MainLayout>
  );
}
