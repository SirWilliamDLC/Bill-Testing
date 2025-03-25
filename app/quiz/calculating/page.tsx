import React from 'react'
import Image from 'next/image'

export default function CalculatingPage() {
  // In a real app, we would use useEffect to redirect after a delay
  // For this demo, we'll just show the calculating page
  
  return (
    <div className="quiz-container calculating-page">
      <Image 
        src="https://mit45-quiz.ryanjhunter.workers.dev/_next/image?url=%2Fm45boost.webp&w=384&q=75" 
        alt="MIT45 BOOST" 
        width={200} 
        height={100} 
        className="logo"
      />
      
      <h1>Analyzing Your Responses</h1>
      
      <p className="question-description">Please wait while we calculate your personalized results...</p>
      
      <div className="calculating-spinner"></div>
      
      <p>This will only take a moment</p>
    </div>
  )
} 