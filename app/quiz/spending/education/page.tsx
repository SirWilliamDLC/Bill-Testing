"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function EducationPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const educationSlides = [
    {
      title: "Debt Is a Trap",
      emoji: "💳",
      content: [
        "Credit cards and loans were designed to keep you in debt forever.",
        "The average credit card charges 20% interest, meaning if you only make minimum payments, you could be in debt for 20+ years.",
        "You might think you're in control—but if you carry a balance, the banks are making money off your stress."
      ]
    },
    {
      title: "Debt Affects Every Part of Your Life",
      emoji: "📉",
      content: [
        "Financial stress isn't just about money. It affects:",
        "Your health (stress, anxiety, poor sleep).",
        "Your relationships (arguments, resentment, feeling alone).",
        "Your happiness (feeling stuck, overwhelmed, depressed).",
        "Your future (no retirement savings, fear of losing everything)."
      ]
    },
    {
      title: "The Overspending Cycle Is Like an Addiction",
      emoji: "🛍",
      content: [
        "Buying things gives you a dopamine hit, just like a drug.",
        "Shopping, ordering food, or upgrading your lifestyle feels good in the moment but leads to long-term stress.",
        "Every time you swipe your credit card, you train your brain to avoid discomfort with spending."
      ]
    },
    {
      title: "Escaping Overspending & Taking Control",
      emoji: "✅",
      content: [
        "The only way out is to break the cycle and take control of your money.",
        "Step 1: Stop using credit for non-essentials.",
        "Step 2: Track every dollar you spend.",
        "Step 3: Create a simple, automatic plan to eliminate debt.",
        "🔹 The good news? You're not alone. There's a step-by-step process to escape this, and it works."
      ]
    },
    {
      title: "Welcome to Financial Freedom",
      emoji: "🎉",
      isSolution: true,
      content: [
        "Over 200 people have already joined the waitlist to become debt-free with Diane Money",
        "How it works:",
        "✅ Analyze your debt and reveal the true cost of interest",
        "✅ Create a step-by-step payoff plan tailored to your lifestyle",
        "✅ Find hidden money in your budget without painful restrictions",
        "✅ Transform everyday spending into smart financial decisions",
        "📊 Diane Money users quit overspending 76% faster than traditional budgeting."
      ]
    }
  ];

  const handleNext = () => {
    if (currentStep < educationSlides.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentSlide = educationSlides[currentStep];
  const progress = ((currentStep + 1) / educationSlides.length) * 100;

  return (
    <div className="quiz-container">
      <div className="progress-container">
        <div className="progress-text">
          Step {currentStep + 1} of {educationSlides.length}
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="result-card">
        <div className="slide-content">
          <h2>
            <span className="emoji">{currentSlide.emoji}</span>
            {currentSlide.title}
          </h2>
          
          {currentSlide.content.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        <div className="button-container">
          {currentStep > 0 && (
            <button onClick={handlePrevious} className="button secondary">
              ← Previous
            </button>
          )}
          {currentStep < educationSlides.length - 1 ? (
            <button onClick={handleNext} className="button primary">
              Next →
            </button>
          ) : (
            <Link href="/quiz/spending/solution" className="button primary">
              See Your Solution →
            </Link>
          )}
        </div>
      </div>

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
          text-align: left;
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

        .result-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          flex: 1;
        }

        .slide-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .emoji {
          font-size: 2rem;
          line-height: 1;
        }

        p {
          font-size: 1rem;
          line-height: 1.5;
          color: #4B5563;
          margin: 0;
        }

        .button-container {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .button {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          text-decoration: none;
          text-align: center;
        }

        .button.primary {
          background: #3B82F6;
          color: white;
        }

        .button.primary:hover {
          background: #2563EB;
        }

        .button.secondary {
          background: #E5E7EB;
          color: #374151;
        }

        .button.secondary:hover {
          background: #D1D5DB;
        }

        @media (min-width: 640px) {
          .quiz-container {
            padding: 2rem;
          }

          .result-card {
            padding: 2rem;
          }

          h2 {
            font-size: 1.75rem;
          }

          p {
            font-size: 1.125rem;
          }

          .button {
            padding: 1rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
} 