"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './results.css'

export default function ResultsPage() {
  return (
    <>
      <div className="quiz-container">
        <Image 
          src="https://mit45-quiz.ryanjhunter.workers.dev/_next/image?url=%2Fm45boost.webp&w=384&q=75" 
          alt="MIT45 BOOST" 
          width={200} 
          height={100} 
          className="logo"
        />
        
        <h1>Your Perfect Sleep Solution</h1>
        
        <h2>Based on your answers, we recommend:</h2>
        
        <div className="product-recommendation">
          <h3>MIT45 BOOST Sleep Formula</h3>
          <p>Our specially formulated sleep aid designed to help you fall asleep faster and stay asleep longer.</p>
          
          <div className="product-benefits">
            <div className="benefit">
              <span className="benefit-check">✓</span>
              <span>Natural Ingredients</span>
            </div>
            <div className="benefit">
              <span className="benefit-check">✓</span>
              <span>Non-Habit Forming</span>
            </div>
            <div className="benefit">
              <span className="benefit-check">✓</span>
              <span>Wake Up Refreshed</span>
            </div>
            <div className="benefit">
              <span className="benefit-check">✓</span>
              <span>Fast Acting Formula</span>
            </div>
          </div>
          
          <div className="continue-button-container">
            <Link href="/quiz/overview" className="continue-button">
              See Your Sleep Enhancement Plan
            </Link>
          </div>
        </div>
        
        <div className="testimonials">
          <h3>What Our Customers Say</h3>
          
          <div className="testimonial">
            <div className="testimonial-stars">★★★★★</div>
            <p>&quot;I&apos;ve struggled with sleep for years. This is the first product that actually helps me fall asleep and stay asleep without feeling groggy the next day.&quot;</p>
            <div className="testimonial-author">- Sarah T.</div>
          </div>
          
          <div className="testimonial">
            <div className="testimonial-stars">★★★★★</div>
            <p>&quot;After just one week of using this, I&apos;m sleeping better than I have in decades. Highly recommend!&quot;</p>
            <div className="testimonial-author">- Michael R.</div>
          </div>
        </div>
        
        <div className="pricing-module">
          <h3>Special Offer</h3>
          <p>Would you pay $29 to get your best night&apos;s sleep, EVERY night? Based on your answers, this is the perfect product I would recommend to solve all of your sleep issues</p>
        </div>
        
        <div className="comparison-link-container text-center my-6">
          <p className="mb-3">Want to compare options?</p>
          <Link href="/quiz/comparison" className="text-blue-600 hover:text-blue-800 underline">
            See how MIT45 BOOST compares to traditional sleep aids
          </Link>
        </div>
        
        <div className="continue-button-container">
          <Link href="/" className="continue-button secondary-button">
            Take Quiz Again
          </Link>
        </div>
      </div>
    </>
  )
} 

.testimonial-author {
  font-weight: bold;
  color: #666;
  margin-top: 0.5rem;
}

.pricing-module {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
}

.pricing-module h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #28a745;
}

.pricing-module p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  max-width: 600px;
  margin: 0 auto;
}

.comparison-link-container {
  // ... existing code ...
} 