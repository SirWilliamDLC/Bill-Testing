"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SpendingQuizWelcome() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleStart = () => {
    // TODO: Handle email signup if provided
    router.push('/quiz/spending/1');
  };

  return (
    <div className="container">
      <h1>
        Do You Have a Spending Problem? Let's Find Out! <span className="inline-block">💬</span>
      </h1>

      <h2>
        <span className="inline-block mr-2">🎉</span>
        How to Make All Your Debts Vanish Into Thin Air (While Still Enjoying Life)
      </h2>

      <div className="benefits">
        <div className="benefit">
          <span className="benefit-check">✓</span>
          <span>Discover your spending patterns</span>
        </div>
        <div className="benefit">
          <span className="benefit-check">✓</span>
          <span>Get personalized insights</span>
        </div>
        <div className="benefit">
          <span className="benefit-check">✓</span>
          <span>Receive actionable steps to financial freedom</span>
        </div>
      </div>

      <div className="result-card">
        <div className="result-header">
          <div className="result-icon">📧</div>
          <div className="result-title">Save Your Progress</div>
        </div>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-4"
        />
        <div className="button-container">
          <button onClick={handleStart} className="button secondary-button">
            Skip for now
          </button>
          <button onClick={handleStart} className="button">
            Start Quiz
          </button>
        </div>
      </div>

      <div className="badges">
        <div className="badge">100% Free</div>
        <div className="badge">5 Minute Quiz</div>
        <div className="badge">Personalized Results</div>
      </div>
    </div>
  );
} 