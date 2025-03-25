"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ComparisonStatsPage() {
  return (
    <div className="quiz-container comparison-stats-page">
      <Image 
        src="https://mit45-quiz.ryanjhunter.workers.dev/_next/image?url=%2Fm45boost.webp&w=384&q=75" 
        alt="MIT45 BOOST" 
        width={200} 
        height={100} 
        className="logo"
      />
      
      <h1>Your Sleep Analysis</h1>
      
      <p className="overview-description">
        Here's how your sleep metrics compare to others aged 35-39
      </p>
      
      <div className="comparison-metrics">
        <div className="comparison-metric">
          <div className="metric-emoji">💤</div>
          <h3>Sleep Quality</h3>
          <div className="metric-comparison">
            <div className="metric-user">
              <div className="metric-value">50</div>
              <div className="metric-label">Your Score</div>
            </div>
            <div className="metric-vs">vs</div>
            <div className="metric-average">
              <div className="metric-value">78</div>
              <div className="metric-label">Average</div>
            </div>
          </div>
        </div>
        
        <div className="comparison-metric">
          <div className="metric-emoji">⏰</div>
          <h3>Deep Sleep</h3>
          <div className="metric-comparison">
            <div className="metric-user">
              <div className="metric-value">3</div>
              <div className="metric-label">Your Score</div>
            </div>
            <div className="metric-vs">vs</div>
            <div className="metric-average">
              <div className="metric-value">7</div>
              <div className="metric-label">Average</div>
            </div>
          </div>
        </div>
        
        <div className="comparison-metric">
          <div className="metric-emoji">⌛</div>
          <h3>Sleep Latency</h3>
          <div className="metric-comparison">
            <div className="metric-user">
              <div className="metric-value">45</div>
              <div className="metric-label">Your Score</div>
            </div>
            <div className="metric-vs">vs</div>
            <div className="metric-average">
              <div className="metric-value">15</div>
              <div className="metric-label">Average</div>
            </div>
          </div>
        </div>
        
        <div className="comparison-metric">
          <div className="metric-emoji">⚡</div>
          <h3>Morning Energy</h3>
          <div className="metric-comparison">
            <div className="metric-user">
              <div className="metric-value">4/10</div>
              <div className="metric-label">Your Score</div>
            </div>
            <div className="metric-vs">vs</div>
            <div className="metric-average">
              <div className="metric-value">8/10</div>
              <div className="metric-label">Average</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="improvement-note">
        <h2>Room for Improvement</h2>
        <p>
          Your sleep metrics indicate significant potential for enhancement. MIT45 BOOST users 
          typically see improvements across all metrics within 4-6 weeks of consistent use.
        </p>
      </div>
      
      <div className="continue-button-container">
        <Link href="/quiz/comparison" className="continue-button">
          See How We Can Help
        </Link>
      </div>
    </div>
  )
} 