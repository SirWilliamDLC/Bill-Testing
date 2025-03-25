"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { spendingQuizQuestions } from '../questions';

export default function SpendingQuizQuestion() {
  const params = useParams();
  const router = useRouter();
  const questionId = parseInt(params.id as string);
  const question = spendingQuizQuestions.find(q => q.id === questionId);
  const totalQuestions = spendingQuizQuestions.length;
  
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!question && !isRedirecting) {
      setIsRedirecting(true);
      router.push('/quiz/spending/education');
    }
  }, [question, isRedirecting, router]);

  // Return early if question is not found
  if (!question) {
    return <div className="quiz-container">Loading...</div>;
  }

  const nextQuestionId = questionId < totalQuestions ? questionId + 1 : 'results';
  const progress = (questionId / totalQuestions) * 100;

  const handleOptionSelect = (index: number) => {
    if (question.type === 'single') {
      // For single selection, store the answer and move to next question
      // TODO: Store the answer in a more permanent way (localStorage, database, etc.)
      router.push(`/quiz/spending/${nextQuestionId}`);
    } else {
      // For multiple selection, toggle the option
      setSelectedOptions(prev => {
        if (prev.includes(index)) {
          return prev.filter(i => i !== index);
        }
        return [...prev, index];
      });
    }
  };

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      // TODO: Store the multiple selection answers
      router.push(`/quiz/spending/${nextQuestionId}`);
    }
  };

  return (
    <div className="quiz-container">
      {/* Progress bar */}
      <div className="progress-container">
        <div className="progress-text">
          Question {questionId} of {totalQuestions}
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2>{question.question}</h2>
      {question.description && (
        <div className="question-description">
          {question.description}
        </div>
      )}

      {/* Options */}
      <div className="options">
        {question.options.map((option, index) => (
          question.type === 'single' ? (
            <Link 
              href={`/quiz/spending/${nextQuestionId}`}
              key={index}
              className="option"
            >
              <div className="option-emoji">{option.emoji}</div>
              <div className="option-text">
                <div className="option-title">{option.title}</div>
                {option.description && (
                  <div className="option-description">{option.description}</div>
                )}
              </div>
            </Link>
          ) : (
            <div
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`option option-selectable ${selectedOptions.includes(index) ? 'selected' : ''}`}
            >
              <div className="option-emoji">{option.emoji}</div>
              <div className="option-text">
                <div className="option-title">{option.title}</div>
                {option.description && (
                  <div className="option-description">{option.description}</div>
                )}
              </div>
              <div className="option-checkbox"></div>
            </div>
          )
        ))}
      </div>

      {/* Next button for multiple selection */}
      {question.type === 'multiple' && (
        <div className="continue-button-container">
          <button
            onClick={handleNext}
            disabled={selectedOptions.length === 0}
            className="continue-button"
          >
            Continue
          </button>
        </div>
      )}

      {/* Insight box */}
      {question.insight && (
        <div className="result-card">
          <div className="result-header">
            <div className="result-icon">💡</div>
            <div className="result-title">Why This Matters</div>
          </div>
          <div className="result-description">
            {question.insight}
          </div>
        </div>
      )}

      <style jsx>{`
        .quiz-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 1rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .progress-container {
          margin-bottom: 1rem;
        }

        .progress-text {
          font-size: 0.875rem;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .progress-bar {
          height: 4px;
          background-color: #E5E7EB;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: #3B82F6;
          transition: width 0.3s ease;
        }

        h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 1rem;
          text-align: center;
        }

        .question-description {
          text-align: center;
          color: #4B5563;
          margin-bottom: 1.5rem;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .option {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          border-radius: 0.75rem;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          color: inherit;
        }

        .option:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .option-selectable {
          position: relative;
        }

        .option-selectable.selected {
          background: #EBF5FF;
          border: 2px solid #3B82F6;
        }

        .option-emoji {
          font-size: 1.5rem;
          line-height: 1;
        }

        .option-text {
          flex: 1;
        }

        .option-title {
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .option-description {
          font-size: 0.875rem;
          color: #6B7280;
        }

        .option-checkbox {
          width: 1.5rem;
          height: 1.5rem;
          border: 2px solid #D1D5DB;
          border-radius: 0.375rem;
        }

        .selected .option-checkbox {
          border-color: #3B82F6;
          background: #3B82F6;
          position: relative;
        }

        .selected .option-checkbox:after {
          content: '';
          position: absolute;
          left: 6px;
          top: 2px;
          width: 6px;
          height: 12px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .continue-button-container {
          margin-top: auto;
        }

        .continue-button {
          width: 100%;
          padding: 0.75rem;
          background: #3B82F6;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .continue-button:disabled {
          background: #D1D5DB;
          cursor: not-allowed;
        }

        .continue-button:not(:disabled):hover {
          background: #2563EB;
        }

        .result-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-top: 1.5rem;
        }

        .result-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .result-icon {
          font-size: 1.5rem;
          line-height: 1;
        }

        .result-title {
          font-weight: 600;
        }

        .result-description {
          color: #4B5563;
          line-height: 1.5;
        }

        @media (min-width: 640px) {
          .quiz-container {
            padding: 2rem;
          }

          h2 {
            font-size: 1.75rem;
          }

          .option {
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
} 