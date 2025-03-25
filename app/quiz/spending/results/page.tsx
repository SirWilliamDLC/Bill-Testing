"use client";

import React from 'react';
import Link from 'next/link';

export default function SpendingQuizResults() {
  const symptoms = [
    "Constant worry about retirement",
    "Feeling lost & confused",
    "Trapped in the debt cycle",
    "Overwhelmed & exhausted",
    "Shame & embarrassment",
    "Frustration from working hard but staying stuck",
    "Anxiety over essential expenses",
    "Fear of an uncertain future"
  ];

  return (
    <div className="container">
      <div className="result-section">
        <h1 className="analysis-title">
          Analysis Complete <span role="img" aria-label="complete">📊</span>
        </h1>
        
        <h2 className="news-title">We've got some news to break to you...</h2>
        
        <p className="analysis-result">
          Your responses indicate a clear <span className="highlight">pattern of overspending</span>.
        </p>

        <div className="score-comparison">
          <div className="score-item">
            <span role="img" aria-label="your score">📊</span> Your Debt Dependency Score: <strong>52%</strong>
          </div>
          <div className="score-item">
            <span role="img" aria-label="average score">💰</span> The Average Person's Score: <strong>13%</strong>
          </div>
          <div className="score-difference">
            <span role="img" aria-label="warning">⚠️</span> <strong>39% higher</strong> pattern of overspending
          </div>
        </div>

        <div className="symptoms-section">
          <h3 className="symptoms-title">
            <span role="img" aria-label="magnifying glass">🔍</span> Check the negative effects that apply to you:
          </h3>
          
          <div className="symptoms-list">
            {symptoms.map((symptom, index) => (
              <div key={index} className="symptom-item">
                <span className="checkbox-checked">✓</span>
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="disclaimer">
          * This result is an indication only, not a medical diagnosis. For a definitive assessment, please consult your healthcare provider.
        </div>

        <div className="button-container">
          <Link href="/quiz/spending/action-plan" className="button">
            View Your Action Plan
          </Link>
          <Link href="/quiz/spending" className="button secondary-button">
            Retake Quiz
          </Link>
        </div>
      </div>

      <style jsx>{`
        .result-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          text-align: left;
        }

        .analysis-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .news-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .analysis-result {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }

        .highlight {
          color: #ff4444;
          font-weight: bold;
        }

        .score-comparison {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          margin-bottom: 2rem;
        }

        .score-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }

        .score-difference {
          margin-top: 1rem;
          color: #ff4444;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .symptoms-title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .symptoms-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .symptom-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
        }

        .checkbox-checked {
          color: #28a745;
          font-weight: bold;
        }

        .disclaimer {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 2rem;
          font-style: italic;
        }
      `}</style>
    </div>
  );
} 