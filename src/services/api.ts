import axios, { AxiosError } from 'axios';
import { AnalysisResult } from '../types/types';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const analyzeSentence = async (sentence: string): Promise<AnalysisResult> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/fallacy/analyze`, {
      sentence
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw new Error(axiosError.response.data?.message || 'Analysis failed');
    } else {
      throw new Error('Network error. Please check your connection.');
    }
  }
};