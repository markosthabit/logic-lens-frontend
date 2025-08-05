import React, { useState } from 'react';
import { FaLightbulb, FaRedo, FaComments } from 'react-icons/fa';
import type { AnalysisResult } from '../types/types';

/**
 * Color mapping for fallacy types to visually distinguish them using Tailwind CSS classes.
 */
const fallacyColors: Record<string, string> = {
  None: 'bg-success text-success-content',
  'Straw Man': 'bg-error text-error-content',
  'Ad Hominem': 'bg-error text-error-content',
  'False Dilemma': 'bg-error text-error-content',
  'Slippery Slope': 'bg-error text-error-content',
  'Appeal to Emotion': 'bg-warning text-warning-content',
  'Appeal to Authority': 'bg-warning text-warning-content',
  Bandwagon: 'bg-warning text-warning-content',
  'Hasty Generalization': 'bg-warning text-warning-content',
  'Appeal to Popularity': 'bg-warning text-warning-content', // Added for completeness
};

/**
 * Component to display the fallacy analysis result from the backend.
 * Shows original statement, detected fallacies, flagged parts, explanations,
 * reframed alternatives, and counterarguments in a tabbed interface.
 * @param result - The analysis result from the backend
 */
const ResultCard: React.FC<{ result: AnalysisResult }> = ({ result }) => {
  const [activeTab, setActiveTab] = useState<'explanations' | 'reframed' | 'counterarguments'>('explanations');

  // Extract arrays from nested objects or fall back to empty arrays
  const safeFallacies = Array.isArray(result.fallacies) ? result.fallacies : [];
  const safeExplanations = Array.isArray(result.explanations?.explanations)
    ? result.explanations.explanations
    : Array.isArray(result.explanations)
    ? result.explanations
    : [];
  const safeReframed = Array.isArray(result.reframed?.reframed)
    ? result.reframed.reframed
    : Array.isArray(result.reframed)
    ? result.reframed
    : [];
  const safeCounterarguments = Array.isArray(result.counterarguments?.counterarguments)
    ? result.counterarguments.counterarguments
    : Array.isArray(result.counterarguments)
    ? result.counterarguments
    : [];
  const safeFlaggedParts = Array.isArray(result.flaggedParts) ? result.flaggedParts : [];

  // Log data for debugging
  console.log('Result:', result);
  console.log('safeFallacies:', safeFallacies);
  console.log('safeExplanations:', safeExplanations);
  console.log('safeReframed:', safeReframed);
  console.log('safeCounterarguments:', safeCounterarguments);
  console.log('safeFlaggedParts:', safeFlaggedParts);

  // Show tabs if any analysis data is present
  const hasAnalysisData =
    safeFallacies.length > 0 ||
    safeExplanations.length > 0 ||
    safeReframed.length > 0 ||
    safeCounterarguments.length > 0;

  return (
    <div className="mt-8 space-y-6">
      {/* Header with title and AI badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">Analysis Result</h2>
          <div className="badge badge-lg badge-primary mt-1">AI-Powered</div>
        </div>
        {safeFallacies.length > 0 && safeFallacies[0] !== 'None' && (
          <div className="flex items-center gap-2">
            <div className="badge badge-error gap-1">
              <FaRedo />
              {safeFallacies.length} Fallac{safeFallacies.length > 1 ? 'ies' : 'y'} Detected
            </div>
          </div>
        )}
      </div>

      {/* Fallacy Detection Summary */}
      <div
        className={`card rounded-xl overflow-hidden transition-all duration-500 ${
          safeFallacies.length > 0 && safeFallacies[0] !== 'None' ? 'bg-error text-error-content' : 'bg-success text-success-content'
        }`}
      >
        <div className="card-body">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{safeFallacies.length > 0 && safeFallacies[0] !== 'None' ? '⚠️' : '✅'}</div>
            <div>
              <h3 className="text-xl font-semibold">Detected Fallacies</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {safeFallacies.length > 0 && safeFallacies[0] !== 'None' ? (
                  safeFallacies.map((fallacy, index) => (
                    <div
                      key={index}
                      className={`badge badge-lg badge-outline ${fallacyColors[fallacy] || 'badge-error'}`}
                    >
                      {fallacy}
                    </div>
                  ))
                ) : (
                  <div className="text-xl">No fallacies detected</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation for Detailed Analysis */}
      {hasAnalysisData && (
        <div className="tabs tabs-boxed bg-base-200 p-1">
          <button
            className={`tab tab-lg ${activeTab === 'explanations' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('explanations')}
          >
            <FaLightbulb className="mr-2" /> Explanations
          </button>
          <button
            className={`tab tab-lg ${activeTab === 'reframed' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('reframed')}
          >
            <FaRedo className="mr-2" /> Reframed
          </button>
          <button
            className={`tab tab-lg ${activeTab === 'counterarguments' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('counterarguments')}
          >
            <FaComments className="mr-2" /> Counterarguments
          </button>
        </div>
      )}

      {/* Explanations Panel with Flagged Parts */}
      {hasAnalysisData && activeTab === 'explanations' && (
        <div className="card bg-base-100 border border-base-300">
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2">
              <FaLightbulb className="text-warning" />
              Why These Are Logical Fallacies
            </h3>
            <div className="space-y-4 mt-4">
              {safeExplanations.length > 0 ? (
                safeExplanations.map((explanation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="badge badge-warning mt-1">{index + 1}</div>
                    <div>
                      <p className="font-medium">{safeFallacies[index] || 'Unknown Fallacy'}</p>
                      {safeFlaggedParts[index] && (
                        <p className="mt-1 text-sm text-base-content/70">
                          <span className="font-semibold">Flagged Part:</span> "{safeFlaggedParts[index]}"
                        </p>
                      )}
                      <p className="mt-1">{explanation || 'No explanation provided'}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-base-content/70">No explanations provided.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Reframed Suggestions Panel */}
      {hasAnalysisData && activeTab === 'reframed' && (
        <div className="card bg-base-100 border border-base-300">
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2">
              <FaRedo className="text-info" />
              Logically Sound Alternatives
            </h3>
            <p className="mt-2 text-base-content/80">
              Try these improved versions that maintain your intent without logical flaws:
            </p>
            <div className="space-y-4 mt-4">
              {safeReframed.length > 0 ? (
                safeReframed.map((suggestion, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="badge badge-info mt-1">{index + 1}</div>
                    <div className="bg-info/10 p-4 rounded-lg w-full">
                      <p>{suggestion}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-base-content/70">No reframed alternatives provided.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Counterarguments Panel */}
      {hasAnalysisData && activeTab === 'counterarguments' && (
        <div className="card bg-base-100 border border-base-300">
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2">
              <FaComments className="text-secondary" />
              Effective Counterarguments
            </h3>
            <p className="mt-2 text-base-content/80">
              Use these responses when encountering similar fallacious arguments:
            </p>
            <div className="space-y-4 mt-4">
              {safeCounterarguments.length > 0 ? (
                safeCounterarguments.map((counter, index) => (
                  <div key={index} className="chat chat-end">
                    <div className="chat-bubble chat-bubble-secondary">{counter}</div>
                  </div>
                ))
              ) : (
                <p className="text-base-content/70">No counterarguments provided.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Original Statement */}
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <h3 className="card-title">Original Statement</h3>
          <div className="mt-2 p-4 bg-base-200 rounded-lg">
            <p className="italic">"{result.original || 'No statement provided'}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;