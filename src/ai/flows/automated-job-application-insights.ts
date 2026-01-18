'use server';

/**
 * @fileOverview A Genkit flow for automated job application insights.
 *
 * - analyzeJobApplication - Analyzes job application relevance based on resume and job posting data.
 * - AnalyzeJobApplicationInput - The input type for the analyzeJobApplication function.
 * - AnalyzeJobApplicationOutput - The return type for the analyzeJobApplication function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeJobApplicationInputSchema = z.object({
  resumeData: z.string().describe('The applicant\'s resume data in plain text.'),
  jobPostingData: z.string().describe('The job posting data in plain text.'),
});
export type AnalyzeJobApplicationInput = z.infer<
  typeof AnalyzeJobApplicationInputSchema
>;

const AnalyzeJobApplicationOutputSchema = z.object({
  keyCriteria: z
    .array(z.string())
    .describe(
      'Key criteria extracted from the job posting that the applicant should address.'
    ),
  relevanceInsights: z
    .string()
    .describe(
      'Insights on how relevant the applicant is to the job, based on the resume and job posting.'
    ),
  transferableSkills: z
    .array(z.string())
    .describe(
      'Transferable skills the applicant possesses that align with the job requirements.'
    ),
  portfolioImprovements: z
    .array(z.string())
    .describe(
      'Suggestions for improving the portfolio to better match the job requirements.'
    ),
});
export type AnalyzeJobApplicationOutput = z.infer<
  typeof AnalyzeJobApplicationOutputSchema
>;

export async function analyzeJobApplication(
  input: AnalyzeJobApplicationInput
): Promise<AnalyzeJobApplicationOutput> {
  return analyzeJobApplicationFlow(input);
}

const analyzeJobApplicationPrompt = ai.definePrompt({
  name: 'analyzeJobApplicationPrompt',
  input: {schema: AnalyzeJobApplicationInputSchema},
  output: {schema: AnalyzeJobApplicationOutputSchema},
  prompt: `You are a career advisor specializing in resume and job application optimization. Given the following resume data and job posting data, extract key criteria from the job posting, provide insights on the applicant\'s relevance to the job, identify transferable skills, and suggest portfolio improvements.

Resume Data:
{{{resumeData}}}

Job Posting Data:
{{{jobPostingData}}}

Format your output as a JSON object with the following keys:
- keyCriteria: An array of key criteria extracted from the job posting.
- relevanceInsights: Insights on how relevant the applicant is to the job, based on the resume and job posting.
- transferableSkills: An array of transferable skills the applicant possesses that align with the job requirements.
- portfolioImprovements: An array of suggestions for improving the portfolio to better match the job requirements.`,
});

const analyzeJobApplicationFlow = ai.defineFlow(
  {
    name: 'analyzeJobApplicationFlow',
    inputSchema: AnalyzeJobApplicationInputSchema,
    outputSchema: AnalyzeJobApplicationOutputSchema,
  },
  async input => {
    const {output} = await analyzeJobApplicationPrompt(input);
    return output!;
  }
);
