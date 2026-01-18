'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getJobApplicationInsights } from '@/app/job-insights/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Lightbulb, CheckCircle, ArrowRight, Loader2, ListChecks, BrainCircuit, Target, BookOpen } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const initialState = {
  success: false,
  message: '',
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</> : 'Get Insights'}
    </Button>
  );
}

export default function JobInsightsForm() {
  const [state, formAction] = useFormState(getJobApplicationInsights, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.success) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
    if (state.success) {
        formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <div className="space-y-8">
      <Card className="bg-card/50">
        <CardContent className="pt-6">
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Textarea
                name="resumeData"
                placeholder="Paste your resume data here..."
                className="min-h-[300px] bg-background text-base"
                rows={15}
                required
              />
              <Textarea
                name="jobPostingData"
                placeholder="Paste the job posting data here..."
                className="min-h-[300px] bg-background text-base"
                rows={15}
                required
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state.data && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <h2 className="text-3xl font-headline font-bold text-center">Analysis Results</h2>

          <Accordion type="multiple" defaultValue={['insights', 'criteria']} className="w-full space-y-4">
            <Card>
              <AccordionItem value="insights" className="border-b-0">
                <AccordionTrigger className="p-6">
                  <CardTitle className="flex items-center gap-3 text-left"><BrainCircuit className="text-primary"/> Relevance Insights</CardTitle>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground">{state.data.relevanceInsights}</p>
                </AccordionContent>
              </AccordionItem>
            </Card>

            <Card>
              <AccordionItem value="criteria" className="border-b-0">
                <AccordionTrigger className="p-6">
                  <CardTitle className="flex items-center gap-3 text-left"><ListChecks className="text-primary"/> Key Criteria from Job Posting</CardTitle>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {state.data.keyCriteria.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Card>
            
            <Card>
              <AccordionItem value="skills" className="border-b-0">
                <AccordionTrigger className="p-6">
                  <CardTitle className="flex items-center gap-3 text-left"><Target className="text-primary"/> Transferable Skills</CardTitle>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {state.data.transferableSkills.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Card>

            <Card>
              <AccordionItem value="improvements" className="border-b-0">
                <AccordionTrigger className="p-6">
                  <CardTitle className="flex items-center gap-3 text-left"><BookOpen className="text-primary"/> Portfolio Improvements</CardTitle>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                   <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {state.data.portfolioImprovements.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Card>
          </Accordion>
        </div>
      )}
    </div>
  );
}
