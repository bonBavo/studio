'use client';

import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function ApiExamplePage() {
  const [data, setData] = useState<{ message: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('/api/hello');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API.');
        }
        const result = await response.json();
        setData(result);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-headline font-bold mt-4">API Fetching Example</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              This page demonstrates how to fetch data from a backend API route in a client component.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>API Response</CardTitle>
            </CardHeader>
            <CardContent>
              {loading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Loading data from API...</span>
                </div>
              )}
              {error && (
                <p className="text-destructive">Error: {error}</p>
              )}
              {data && !loading && (
                <pre className="bg-muted p-4 rounded-md text-muted-foreground font-code">
                  <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
