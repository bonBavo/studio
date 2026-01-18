'use server';

import { analyzeJobApplication, AnalyzeJobApplicationOutput } from '@/ai/flows/automated-job-application-insights';
import { z } from 'zod';

const formSchema = z.object({
  resumeData: z.string().min(50, 'Resume data must be at least 50 characters.'),
  jobPostingData: z.string().min(50, 'Job posting data must be at least 50 characters.'),
});

export type FormState = {
  success: boolean;
  message: string;
  data: AnalyzeJobApplicationOutput | null;
}

export async function getJobApplicationInsights(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = {
    resumeData: formData.get('resumeData'),
    jobPostingData: formData.get('jobPostingData'),
  };

  const validatedFields = formSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.issues.map((issue) => issue.message).join(', ');
    return {
      success: false,
      message: errorMessage || 'Invalid form data. Please check your inputs.',
      data: null,
    };
  }

  try {
    const result = await analyzeJobApplication(validatedFields.data);
    return {
      success: true,
      message: 'Analysis complete.',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'An error occurred during analysis. Please try again later.',
      data: null,
    };
  }
}
