"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectionPage() {
  return (
    <div className="quiz-container projection-page">
      <Image 
        src="https://mit45-quiz.ryanjhunter.workers.dev/_next/image?url=%2Fm45boost.webp&w=384&q=75" 
        alt="MIT45 BOOST" 
        width={200} 
        height={100} 
        className="logo"
      />
      
      <div className="score-label">YOUR WEEKLY PROGRESS</div>
      
      <h1>Your Sleep Enhancement Journey</h1>
      
      <p className="overview-description">
        Watch your sleep quality improve week by week with MIT45 BOOST. Here's your personalized projection:
      </p>
      
      <div className="score-container">
        <div className="score-label">Weekly Progress</div>
        
        <div className="score-comparison">
          <div className="score-current">
            <div className="score-value">50</div>
            <div className="score-date">Mar 5, 2025</div>
          </div>
          
          <div className="score-arrow">→</div>
          
          <div className="score-projected">
            <div className="score-value">85</div>
            <div className="score-date">Apr 16, 2025</div>
          </div>
        </div>
      </div>
      
      <div className="progress-timeline">
        <div className="timeline-dates">
          <span>Feb 19</span>
          <span>Feb 26</span>
          <span>Mar 5</span>
          <span>Mar 12</span>
          <span>Mar 19</span>
          <span>Mar 26</span>
          <span>Apr 2</span>
          <span>Apr 9</span>
        </div>
      </div>
      
      <div className="progress-milestones">
        <div className="milestone">
          <div className="milestone-number">1</div>
          <div className="milestone-content">
            <h3>Adaptation Phase</h3>
            <p>Your body begins adjusting to the natural sleep enhancement</p>
          </div>
        </div>
        
        <div className="milestone">
          <div className="milestone-number">2</div>
          <div className="milestone-content">
            <h3>Initial Results</h3>
            <p>Experience improved sleep quality and morning energy</p>
          </div>
        </div>
        
        <div className="milestone">
          <div className="milestone-number">4</div>
          <div className="milestone-content">
            <h3>Consistent Progress</h3>
            <p>Establish better sleep patterns and daily routines</p>
          </div>
        </div>
        
        <div className="milestone">
          <div className="milestone-number">6</div>
          <div className="milestone-content">
            <h3>Optimal Results</h3>
            <p>Achieve your target sleep score and maintain it</p>
          </div>
        </div>
      </div>
      
      <div className="badges">
        <div className="badge">Made in USA</div>
        <div className="badge">Lab Tested</div>
        <div className="badge">100% Natural</div>
      </div>
      
      <div className="continue-button-container">
        <Link href="/quiz/profile" className="continue-button">
          View Your Sleep Profile →
        </Link>
      </div>
    </div>
  )
} 