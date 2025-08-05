export interface AnalysisResult {
  original: string;
  fallacies: string[];
  explanations: string[];
  reframed: string[];
  counterarguments: string[];
  flaggedParts?: string[]; // Optional, from detection
}