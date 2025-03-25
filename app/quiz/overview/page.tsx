"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function OverviewPage() {
  return (
    <div className="quiz-container overview-page">
      <Image 
        src="https://mit45-quiz.ryanjhunter.workers.dev/_next/image?url=%2Fm45boost.webp&w=384&q=75" 
        alt="MIT45 BOOST" 
        width={200} 
        height={100} 
        className="logo"
      />
      
      <div className="score-label">YOUR SLEEP SCORE</div>
      
      <h1>Here's Your Sleep Enhancement Plan</h1>
      
      <p className="overview-description">
        Based on your responses, we've calculated your current sleep score and projected 
        improvements with MIT45 BOOST. Let's transform your sleep quality together.
      </p>
      
      <div className="score-container">
        <div className="score-label">Sleep Score</div>
        
        <div className="score-comparison">
          <div className="score-current">
            <div className="score-value">50</div>
            <div className="score-date">Mar 2025</div>
          </div>
          
          <div className="score-arrow">→</div>
          
          <div className="score-projected">
            <div className="score-value">85</div>
            <div className="score-date">Apr 2025</div>
          </div>
        </div>
        
        <div className="score-improvement">
          <span className="highlight">+35 points</span> potential improvement
        </div>
      </div>
      
      <div className="continue-button-container">
        <Link href="/quiz/projection" className="continue-button">
          See Weekly Progress Plan →
        </Link>
      </div>
    </div>
  )
} 