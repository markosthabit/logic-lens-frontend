import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { FallacyExample } from '../types/types';

const examples: FallacyExample[] = [
  {
    sentence: "If you don't support the war, you must hate our country.",
    fallacy: "False Dilemma"
  },
  {
    sentence: "You can't trust his opinion on climate change because he's not a scientist.",
    fallacy: "Ad Hominem"
  },
  {
    sentence: "We shouldn't allow any refugees because soon we'll be overrun by foreigners.",
    fallacy: "Slippery Slope"
  },
  {
    sentence: "The senator wants to increase education funding? He must be trying to indoctrinate our children!",
    fallacy: "Straw Man"
  }
];

const FallacyExamples: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <FaLightbulb className="text-warning text-xl" />
        <h2 className="text-xl font-semibold">Common Fallacy Examples</h2>
      </div>
      
      <p className="mb-6 text-base-content/80 text-base">
        Try analyzing these statements to see how our fallacy detection works:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {examples.map((example, index) => (
          <div 
            key={index} 
            className="card bg-base-200 border border-base-300 rounded-lg hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="card-body p-5">
              <div className="flex items-start gap-4">
               
                <div>
                <div className="bg-primary/10 size text-primary rounded-lg  items-center justify-center font-bold mt-0.5 inline">
                  {index + 1}
                </div>
                  <p className="font-medium mb-2 text-base">{example.sentence}</p>
                  <div className="badge badge-primary badge-lg">{example.fallacy}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FallacyExamples;