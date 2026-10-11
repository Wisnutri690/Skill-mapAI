import type { AnalysisResult } from '../types/analysis';

export interface AnalyzePayload {
  cvFile: File;
  jobDescription: string;
}

export async function analyzeSkills(payload: AnalyzePayload): Promise<AnalysisResult> {
  console.log('analyzeSkills dipanggil dengan payload:', payload);

  throw new Error('Service analyzeSkills belum diintegrasikan dengan Supabase Edge Functions.');
}
