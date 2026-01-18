// src/ai/ai-career-path-recommendations.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized career path recommendations to developers.
 *
 * - `getCareerPathRecommendations` - A function that takes a developer's background, goals, and interests as input and returns tailored recommendations for languages and tools to learn next.
 * - `CareerPathInput` - The input type for the `getCareerPathRecommendations` function.
 * - `CareerPathOutput` - The return type for the `getCareerPathRecommendations` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerPathInputSchema = z.object({
  developerBackground: z
    .string()
    .describe(
      'A description of the developer\s current skills, experience, and education.'
    ),
  careerGoals: z.string().describe('The developer\s desired career path and goals.'),
  interests: z.string().describe('The developer\s interests within software development.'),
});

export type CareerPathInput = z.infer<typeof CareerPathInputSchema>;

const CareerPathOutputSchema = z.object({
  recommendedLanguages: z
    .string()
    .describe('A list of recommended programming languages to learn.'),
  recommendedTools: z
    .string()
    .describe('A list of recommended tools and technologies to learn.'),
  suggestedLearningResources: z
    .string()
    .describe('A list of suggested learning resources (courses, tutorials, etc.).'),
});

export type CareerPathOutput = z.infer<typeof CareerPathOutputSchema>;

export async function getCareerPathRecommendations(
  input: CareerPathInput
): Promise<CareerPathOutput> {
  return careerPathFlow(input);
}

const careerPathPrompt = ai.definePrompt({
  name: 'careerPathPrompt',
  input: {schema: CareerPathInputSchema},
  output: {schema: CareerPathOutputSchema},
  prompt: `Based on the following information about a developer, provide personalized recommendations for which languages and tools they should learn next.

Developer Background: {{{developerBackground}}}
Career Goals: {{{careerGoals}}}
Interests: {{{interests}}}

Your recommendations should be tailored to the developer's specific situation and goals. Include suggested learning resources where applicable.

Format the output as a JSON object with the following keys:
- recommendedLanguages: A list of recommended programming languages to learn.
- recommendedTools: A list of recommended tools and technologies to learn.
- suggestedLearningResources: A list of suggested learning resources (courses, tutorials, etc.).`,
});

const careerPathFlow = ai.defineFlow(
  {
    name: 'careerPathFlow',
    inputSchema: CareerPathInputSchema,
    outputSchema: CareerPathOutputSchema,
  },
  async input => {
    const {output} = await careerPathPrompt(input);
    return output!;
  }
);
