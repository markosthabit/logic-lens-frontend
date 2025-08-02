import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { AnalysisResult } from '../types/types';

const fallacyColors: Record<string, string> = {
  'None': 'bg-success text-success-content',
  'Straw Man': 'bg-error text-error-content',
  'Ad Hominem': 'bg-error text-error-content',
  'False Dilemma': 'bg-error text-error-content',
  'Slippery Slope': 'bg-error text-error-content',
  'Appeal to Emotion': 'bg-warning text-warning-content',
};

const ResultCard: React.FC<{ result: AnalysisResult }> = ({ result }) => {
  const bgClass = fallacyColors[result.fallacy] || 'bg-neutral text-neutral-content';
  
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold">Analysis Result</h2>
        <div className="badge badge-lg badge-primary">AI-Powered</div>
      </div>
      
      <div className={`card ${bgClass} rounded-xl overflow-hidden transition-all duration-500`}>
        <div className="card-body p-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-opacity-90">DETECTED FALLACY</h3>
              <div className="text-3xl font-bold">{result.fallacy}</div>
            </div>
            
            <div className="divider md:divider-horizontal m-0" />
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-opacity-90">EXPLANATION</h3>
              <p className="text-xl">{result.explanation}</p>
            </div>
          </div>
          
          {result.fallacy !== 'None' && (
            <div className="mt-6 bg-base-100/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FaInfoCircle className="text-xl mt-0.5 flex-shrink-0" />
                <p className="text-base">
                  This statement contains a <strong>{result.fallacy}</strong> fallacy. 
                  Recognizing these patterns helps strengthen critical thinking and promotes more productive discussions.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;