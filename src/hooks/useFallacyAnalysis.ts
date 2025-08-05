import { useState } from 'react';
import { analyzeSentence } from '../services/api';
import { AnalysisResult } from '../types/types';

export const useFallacyAnalysis = () => {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const analyze = async (sentence: string) => {
    if (!sentence.trim()) {
      setError('Please enter a sentence to analyze');
      return;
    }
    
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const response = await analyzeSentence(sentence);
      setResult(response);
    } catch (err) {
      setError(err.message || 'An error occurred during analysis');
    } finally {
      setLoading(false);
    }
  };
  
  const resetAnalysis = () => {
    setResult(null);
    setError(null);
  };
  
  return { result, loading, error, analyze, resetAnalysis };
};