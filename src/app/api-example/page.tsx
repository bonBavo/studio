
'use client';

import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteContent } from '@/lib/content';
import { Code } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

const reactCode = `
'use client';

import { useState, useEffect } from 'react';

type SpringResponse = {
  id: number;
  content: string;
  // Add other fields from your Spring Boot response
};

export default function DataFetcher() {
  const [data, setData] = useState<SpringResponse[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDataFromSpring() {
      try {
        setLoading(true);
        // IMPORTANT: Replace with your actual Spring Boot API endpoint
        const apiEndpoint = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/items';
        
        const response = await fetch(apiEndpoint);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const result: SpringResponse[] = await response.json();
        setData(result);

      } catch (e: any) {
        setError(e.message);

      } finally {
        setLoading(false);
      }
    }

    fetchDataFromSpring();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  if (loading) {
    return <div>Loading data from Spring Boot backend...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div>
      <h1>Data from Spring Boot</h1>
      {data && data.length > 0 ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data found or returned from the API.</p>
      )}
    </div>
  );
}
`.trim();

export default function ApiExamplePage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Code className="mx-auto h-12 w-12 text-primary" />
            <h1 className="text-4xl font-headline font-bold mt-4">{siteContent.apiExamplePage.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {siteContent.apiExamplePage.subtitle}
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>React Client Component Example</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Here’s an example of a React client component that fetches data from an external backend, like a Spring Boot application. You can copy and adapt this code to fit your specific API endpoints and data structures.
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                For this to work, ensure your Spring application has CORS configured to allow requests from your Next.js application's domain. It's also a good practice to use environment variables for your API URL.
              </p>
              <CodeBlock code={reactCode} />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
