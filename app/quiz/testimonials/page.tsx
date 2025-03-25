"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TestimonialsPage() {
  return (
    <div className="quiz-container testimonials-page">
      <Image 
        src="https://mit45-quiz.ryanjhunter.workers.dev/_next/image?url=%2Fm45boost.webp&w=384&q=75" 
        alt="MIT45 BOOST" 
        width={200} 
        height={100} 
        className="logo"
      />
      
      <div className="testimonials-label">REAL STORIES</div>
      
      <h1>Users experience massive <br/> changes in less than a month</h1>
      
      <div className="testimonial">
        <div className="testimonial-stars">★★★★★</div>
        <h2>3 Weeks in and Doing Great</h2>
        <p>
          I've been using MIT45 BOOST for 3 weeks and already seeing amazing results. 
          My sleep quality has improved dramatically, and I wake up feeling refreshed. 
          Taking it slow to reach my optimal sleep goal. Feeling better every day!
        </p>
        <div className="testimonial-author">✓Emily J.</div>
      </div>
      
      <div className="testimonial-navigation">
        <button className="nav-button">←</button>
        <button className="nav-button">→</button>
      </div>
      
      <div className="continue-button-container">
        <Link href="/quiz/bundle" className="continue-button">
          Continue
        </Link>
      </div>
      
      <div className="media-logos">
        <Image 
          src="https://mit45-quiz.ryanjhunter.workers.dev/cosmopolitan.svg" 
          alt="Cosmopolitan" 
          width={100} 
          height={30} 
        />
        <Image 
          src="https://mit45-quiz.ryanjhunter.workers.dev/business-insider.svg" 
          alt="Business Insider" 
          width={100} 
          height={30} 
        />
        <Image 
          src="https://mit45-quiz.ryanjhunter.workers.dev/nyt.svg" 
          alt="New York Times" 
          width={100} 
          height={30} 
        />
      </div>
    </div>
  );
} 