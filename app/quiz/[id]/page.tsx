"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Define the quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "How would you describe your sleep quality?",
    description: "Choose the option that best describes your typical sleep experience",
    options: [
      { emoji: "😊", title: "Excellent", description: "I fall asleep quickly and wake up refreshed" },
      { emoji: "🙂", title: "Good", description: "I sleep well most nights" },
      { emoji: "😐", title: "Fair", description: "I have occasional sleep issues" },
      { emoji: "😔", title: "Poor", description: "I often have trouble sleeping" },
      { emoji: "😫", title: "Terrible", description: "I can barely sleep at all" }
    ],
    type: "single"
  },
  {
    id: 2,
    question: "How many hours do you typically sleep?",
    description: "Select your average nightly sleep duration",
    options: [
      { emoji: "😴", title: "Less than 6 hours", description: "Not enough sleep" },
      { emoji: "🥱", title: "6-7 hours", description: "Below recommended" },
      { emoji: "😌", title: "7-8 hours", description: "Recommended amount" },
      { emoji: "😊", title: "8-9 hours", description: "Above average" },
      { emoji: "💤", title: "More than 9 hours", description: "Extended sleep" }
    ],
    type: "single"
  },
  {
    id: 3,
    question: "How often do you get a good night's sleep?",
    description: "Your sleep patterns can tell us a lot about your health",
    options: [
      { emoji: "😞", title: "Almost Never", description: "Maybe once a month" },
      { emoji: "😕", title: "Occasionally", description: "1-2 times per week" },
      { emoji: "😐", title: "Sometimes", description: "3-4 times per week" },
      { emoji: "🙂", title: "Most Nights", description: "5-6 times per week" },
      { emoji: "😊", title: "Every Night", description: "Consistently good sleep" }
    ],
    type: "single"
  },
  {
    id: 4,
    question: "Do you experience any of these symptoms?",
    description: "Select all that apply to your daily life",
    options: [
      { emoji: "☀️", title: "Morning Fatigue", description: "Hard to get going, even after sleep" },
      { emoji: "😴", title: "Afternoon Energy Crash", description: "Feel exhausted between 2-4 PM" },
      { emoji: "🍪", title: "Salt & Sugar Cravings", description: "Strong urges for salty or sweet foods" },
      { emoji: "🎯", title: "Difficulty Focusing", description: "Brain fog or trouble concentrating" },
      { emoji: "😩", title: "Feeling Overwhelmed", description: "Small tasks feel like big challenges" }
    ],
    type: "multiple"
  },
  {
    id: 5,
    question: "What affects your sleep quality?",
    description: "Select all factors that impact your sleep",
    options: [
      { emoji: "😰", title: "Stress & Anxiety", description: "Feeling tense or worried" },
      { emoji: "🤯", title: "Racing Thoughts", description: "Mind won't quiet down" },
      { emoji: "🤕", title: "Physical Discomfort", description: "Body aches or tension" },
      { emoji: "🌡️", title: "Environmental", description: "Noise, light, or temperature" },
      { emoji: "⏰", title: "Schedule Changes", description: "Irregular sleep times" }
    ],
    type: "multiple"
  },
  {
    id: 6,
    question: "What's your activity level?",
    description: "Physical activity can significantly impact your sleep quality",
    options: [
      { emoji: "🛋️", title: "No Exercise", description: "Mostly sedentary lifestyle" },
      { emoji: "🚶", title: "Light Exercise", description: "Walking, yoga, stretching" },
      { emoji: "🏃", title: "Moderate Exercise", description: "Regular workouts, jogging" },
      { emoji: "💪", title: "Active Lifestyle", description: "Daily physical activity" },
      { emoji: "🏋️", title: "Intense Training", description: "High-intensity workouts" }
    ],
    type: "single"
  },
  {
    id: 7,
    question: "Do you use any of these substances?",
    description: "Select all that apply to your daily life",
    options: [
      { emoji: "☕", title: "Caffeine", description: "Coffee, tea, energy drinks" },
      { emoji: "🍷", title: "Alcohol", description: "Beer, wine, spirits" },
      { emoji: "🚬", title: "Nicotine", description: "Smoking or vaping" },
      { emoji: "💊", title: "Sleep Aids", description: "Pills or supplements" },
      { emoji: "✨", title: "None", description: "No substances used" }
    ],
    type: "multiple"
  },
  {
    id: 8,
    question: "Do you have any medical conditions?",
    description: "Select all that apply to your health",
    options: [
      { emoji: "❤️", title: "High Blood Pressure", description: "Currently being treated" },
      { emoji: "💗", title: "Heart Conditions", description: "Any cardiovascular issues" },
      { emoji: "🔵", title: "Liver Problems", description: "Current or past conditions" },
      { emoji: "🟣", title: "Kidney Issues", description: "Including kidney stones" },
      { emoji: "✅", title: "None of these", description: "No conditions listed" }
    ],
    type: "multiple"
  },
  {
    id: 9,
    question: "How's your daily energy level?",
    description: "Select what best describes your typical day",
    options: [
      { emoji: "😫", title: "Very Low", description: "Feeling exhausted all day" },
      { emoji: "😔", title: "Low", description: "Low energy most of the day" },
      { emoji: "😐", title: "Moderate", description: "Energy varies throughout day" },
      { emoji: "🙂", title: "High", description: "Good energy most of the day" },
      { emoji: "😊", title: "Very High", description: "Energetic all day long" }
    ],
    type: "single"
  },
  {
    id: 10,
    question: "What's your height?",
    description: "This helps us understand your body composition",
    type: "height",
    units: [
      { label: "Imperial", value: "imperial" },
      { label: "Metric", value: "metric" }
    ]
  },
  {
    id: 11,
    question: "What's your weight?",
    description: "This helps us understand your body composition",
    type: "weight",
    units: [
      { label: "Imperial", value: "imperial" },
      { label: "Metric", value: "metric" }
    ]
  },
  {
    id: 12,
    question: "What's your age?",
    description: "Age can affect sleep patterns and energy levels",
    type: "age",
    ageRange: { min: 18, max: 100 }
  },
  {
    id: 13,
    question: "How would you rate your sleep quality?",
    description: "Rate your overall sleep experience in the past month",
    options: [
      { emoji: "😫", title: "Terrible", description: "Can't sleep at all" },
      { emoji: "😔", title: "Poor", description: "Lots of interruptions" },
      { emoji: "😐", title: "Fair", description: "Some issues but manageable" },
      { emoji: "🙂", title: "Good", description: "Minor sleep issues" },
      { emoji: "😊", title: "Excellent", description: "Sleep like a baby" }
    ],
    type: "single"
  }
];

export default function QuizPage() {
  const params = useParams();
  const questionId = parseInt(params.id as string);
  const question = quizQuestions.find(q => q.id === questionId) || quizQuestions[0];
  const totalQuestions = 13; // Based on the original site
  
  // Calculate next question ID
  const nextQuestionId = questionId < totalQuestions ? questionId + 1 : 'results';
  
  // State for form inputs
  const [selectedUnit, setSelectedUnit] = useState("imperial");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [cm, setCm] = useState("");
  const [lbs, setLbs] = useState("");
  const [kg, setKg] = useState("");
  const [age, setAge] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  
  // Toggle selection for multi-select options
  const toggleOption = (index: number) => {
    setSelectedOptions(prev => {
      // If already selected, remove it
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } 
      // Otherwise add it
      return [...prev, index];
    });
  };
  
  // Render different question types
  const renderQuestionContent = () => {
    switch (question.type) {
      case "single":
        return (
          <div className="options">
            {question.options?.map((option, index) => (
              <Link 
                href={`/quiz/${nextQuestionId}`} 
                key={index}
                className="option"
              >
                <div className="option-emoji">{option.emoji}</div>
                <div className="option-text">
                  <div className="option-title">{option.title}</div>
                  <div className="option-description">{option.description}</div>
                </div>
              </Link>
            ))}
          </div>
        );
        
      case "multiple":
        return (
          <div className="options">
            {question.options?.map((option, index) => (
              <div 
                key={index}
                className={`option option-selectable ${selectedOptions.includes(index) ? 'selected' : ''}`}
                onClick={() => toggleOption(index)}
              >
                <div className="option-emoji">{option.emoji}</div>
                <div className="option-text">
                  <div className="option-title">{option.title}</div>
                  <div className="option-description">{option.description}</div>
                </div>
                <div className="option-checkbox"></div>
              </div>
            ))}
          </div>
        );
        
      case "height":
        return (
          <div className="measurement-input">
            <div className="unit-toggle">
              {question.units?.map((unit, index) => (
                <button 
                  key={index} 
                  className={`unit-button ${selectedUnit === unit.value ? 'active' : ''}`}
                  onClick={() => setSelectedUnit(unit.value)}
                >
                  {unit.label}
                </button>
              ))}
            </div>
            
            {selectedUnit === "imperial" ? (
              <div className="imperial-inputs">
                <div className="input-group">
                  <input 
                    type="number" 
                    placeholder="ft" 
                    min="1" 
                    max="8" 
                    value={feet}
                    onChange={(e) => setFeet(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input 
                    type="number" 
                    placeholder="in" 
                    min="0" 
                    max="11" 
                    value={inches}
                    onChange={(e) => setInches(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <div className="metric-inputs">
                <div className="input-group">
                  <input 
                    type="number" 
                    placeholder="cm" 
                    min="30" 
                    max="250" 
                    value={cm}
                    onChange={(e) => setCm(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
        );
        
      case "weight":
        return (
          <div className="measurement-input">
            <div className="unit-toggle">
              {question.units?.map((unit, index) => (
                <button 
                  key={index} 
                  className={`unit-button ${selectedUnit === unit.value ? 'active' : ''}`}
                  onClick={() => setSelectedUnit(unit.value)}
                >
                  {unit.label}
                </button>
              ))}
            </div>
            
            {selectedUnit === "imperial" ? (
              <div className="imperial-inputs">
                <div className="input-group">
                  <input 
                    type="number" 
                    placeholder="lbs" 
                    min="50" 
                    max="500" 
                    value={lbs}
                    onChange={(e) => setLbs(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <div className="metric-inputs">
                <div className="input-group">
                  <input 
                    type="number" 
                    placeholder="kg" 
                    min="20" 
                    max="250" 
                    value={kg}
                    onChange={(e) => setKg(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
        );
        
      case "age":
        return (
          <div className="age-input">
            <div className="input-group">
              <input 
                type="number" 
                placeholder="years" 
                min={question.ageRange?.min} 
                max={question.ageRange?.max} 
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="age-range-note">
              Must be between {question.ageRange?.min}-{question.ageRange?.max} years old
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
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
        
        <div className="progress-container">
          <div className="progress-text">
            Progress {questionId} of {totalQuestions}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(questionId / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <h1>{question.question}</h1>
        
        <p className="question-description">{question.description}</p>
        
        {renderQuestionContent()}
        
        <div className="continue-button-container">
          <Link href={`/quiz/${nextQuestionId}`} className="continue-button">
            Continue
          </Link>
        </div>
      </div>
    </>
  )
} 