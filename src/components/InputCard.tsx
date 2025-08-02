import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFallacyAnalysis } from '../hooks/useFallacyAnalysis';
import ResultCard from './ResultCard';
import FallacyExamples from './FallacyExamples';

const InputCard: React.FC = () => {
  const [sentence, setSentence] = useState('');
  const { result, loading, error, analyze, resetAnalysis } = useFallacyAnalysis();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analyze(sentence);
  };
  
  const handleReset = () => {
    setSentence('');
    resetAnalysis();
  };

  return (
    <div className="card bg-base-100 border border-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">Analyze an Argument</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label htmlFor="sentence" className="label">
              <span className="label-text">Enter a statement to analyze</span>
            </label>
            <textarea
              id="sentence"
              className="textarea textarea-bordered h-32 text-base"
              placeholder="Example: If you don't support this policy, you must hate our country"
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
              disabled={loading}
            />
          </div>
          
          {error && (
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}
          
          <div className="card-actions justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-ghost"
              disabled={loading}
            >
              Clear
            </button>
            
            <button
              type="submit"
              className="btn btn-primary gap-2"
              disabled={loading || !sentence.trim()}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Analyzing...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Analyze Argument
                </>
              )}
            </button>
          </div>
        </form>
        
        {result && <ResultCard result={result} />}
        
        {!result && !loading && <FallacyExamples />}
      </div>
    </div>
  );
};

export default InputCard;