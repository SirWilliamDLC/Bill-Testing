import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Image 
        src="https://mit45-quiz.ryanjhunter.workers.dev/_next/image?url=%2Fm45boost.webp&w=384&q=75" 
        alt="MIT45 BOOST" 
        width={200} 
        height={100} 
        className="logo"
      />
      
      <h1>Want to Have Your Best Night&apos;s Sleep, EVERY Night?</h1>
      
      <h2>Find Your Perfect Sleep Solution</h2>
      
      <h3>How's your current pillow working for you?</h3>
      
      <div className="button-container">
        <Link href="/quiz/1" className="button">
          Love my pillow
        </Link>
        <Link href="/quiz/1" className="button">
          Hate my pillow
        </Link>
      </div>
      
      <div className="benefits">
        <div className="benefit">
          <span className="benefit-check">✓</span>
          <span>Better Sleep Quality</span>
        </div>
        <div className="benefit">
          <span className="benefit-check">✓</span>
          <span>Neck Pain Relief</span>
        </div>
        <div className="benefit">
          <span className="benefit-check">✓</span>
          <span>Cooler Nights</span>
        </div>
        <div className="benefit">
          <span className="benefit-check">✓</span>
          <span>Wake Up Refreshed</span>
        </div>
        <div className="benefit">
          <span className="benefit-check">✓</span>
          <span>Don&apos;t wake up groggy</span>
        </div>
      </div>
      
      <div className="badges">
        <div className="badge">Made in USA</div>
        <div className="badge">Lab Tested</div>
        <div className="badge">100% Natural</div>
      </div>
      
      <div className="variation-switcher">
        <div className="variation-option">Sleep</div>
        <div className="variation-option">Energy</div>
        <div className="variation-option">Focus</div>
        <div className="variation-option">Stress</div>
        <div className="variation-option">Fitness</div>
        <span className="close-button">×</span>
      </div>
    </div>
  )
} 