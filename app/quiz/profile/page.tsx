"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProfilePage() {
  return (
    <div className="quiz-container profile-page">
      <Image 
        src="https://mit45-quiz.ryanjhunter.workers.dev/_next/image?url=%2Fm45boost.webp&w=384&q=75" 
        alt="MIT45 BOOST" 
        width={200} 
        height={100} 
        className="logo"
      />
      
      <h1>Your Sleep Profile</h1>
      
      <p className="overview-description">
        Here's a detailed analysis of your current sleep health
      </p>
      
      <div className="profile-score-container">
        <div className="profile-score-label">SLEEP SCORE</div>
        <div className="profile-score-value">50</div>
      </div>
      
      <div className="profile-section">
        <h2>Physical Profile</h2>
        
        <div className="profile-attributes">
          <div className="profile-attribute">
            <div className="attribute-label">Height</div>
            <div className="attribute-value">5'7"</div>
          </div>
          
          <div className="profile-attribute">
            <div className="attribute-label">Weight</div>
            <div className="attribute-value">154 lbs</div>
          </div>
        </div>
      </div>
      
      <div className="continue-button-container">
        <Link href="/quiz/comparison-stats" className="continue-button">
          See How You Compare
        </Link>
      </div>
    </div>
  )
} 