"use client";

import React from 'react';
import Link from 'next/link';

export default function SolutionPage() {
  const testimonials = [
    {
      name: "James",
      achievement: "paid off $25,000 spread across 45 credit cards and now manages just ONE responsibly.",
      emoji: "💰"
    },
    {
      name: "Sarah",
      achievement: "is managing $53,000 in debt while still traveling and enjoying life.",
      emoji: "🌎"
    },
    {
      name: "Michael",
      achievement: "turned a $200 shoe purchase into $1,500 through our parallel investing strategy.",
      emoji: "👟"
    }
  ];

  const goals = [
    "Pay off debt fast",
    "Stop living paycheck to paycheck",
    "Save for a home or retirement",
    "Never stress about money again"
  ];

  const benefits = [
    {
      title: "One Full Year of Diane Money",
      description: "The revolutionary app that makes debt vanish into thin air using money hiding in plain sight.",
      value: "Regular Price: $49/month = $588/year",
      icon: "💰"
    },
    {
      title: "A Personalized, Custom Debt Payoff Plan",
      description: "A one-on-one strategy call to craft your customized debt payoff plan—showing you exactly which debts to pay first, how much to pay, and how to enjoy life as you pay them down.",
      value: "Value: $5,000 for debts over $50K",
      icon: "🎯"
    },
    {
      title: "One-on-One Debt Coaching Calls",
      description: [
        "26 private coaching sessions to keep you on track, provide accountability, and develop a winning money mindset.",
        "Ongoing support to help you reach pristine credit (720+ score club).",
        "Fast Start → Ongoing Guidance → Credit Repair"
      ],
      value: "Value: $1,950",
      icon: "📞"
    },
    {
      title: "The Debt Rolodex",
      description: [
        "A powerful network of tools and resources to help you:",
        "Lower interest rates 💳",
        "Refinance loans 🚗🏡",
        "Improve your credit score 📈"
      ],
      value: "Value: $100",
      icon: "📚"
    }
  ];

  return (
    <div className="container">
      <div className="solution-section">
        <h1 className="main-title">
          Real People, Real Results
        </h1>

        <div className="testimonials">
          <h2 className="section-title">
            📜 Scroll through real success stories:
          </h2>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <span className="testimonial-emoji">{testimonial.emoji}</span>
              <p className="testimonial-text">
                <strong>{testimonial.name}</strong> {testimonial.achievement}
              </p>
            </div>
          ))}
        </div>

        <div className="goals-section">
          <h2 className="section-title">Choose Your Goal</h2>
          <div className="goals-list">
            {goals.map((goal, index) => (
              <div key={index} className="goal-item">
                <span className="check">✅</span>
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-section">
          <h2 className="pricing-title">
            Your Personalized Debt-Free Plan Is Ready!
          </h2>
          <div className="pricing-subtitle">
            <p>🎯 Based on your responses, we've built a plan for you.</p>
            <p>💰 If you follow this, you will be completely debt-free in just 90 days.</p>
          </div>

          <h3 className="benefits-title">💰 Here's Everything You'll Receive:</h3>
          
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-header">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <h4 className="benefit-title">
                    {index + 1}. {benefit.title}
                  </h4>
                </div>
                <div className="benefit-value">{benefit.value}</div>
                {Array.isArray(benefit.description) ? (
                  <ul className="benefit-description-list">
                    {benefit.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="benefit-description">{benefit.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="guarantee-section">
          <div className="guarantee-icon">🛡️</div>
          <h3 className="guarantee-title">90-Day Money-Back Guarantee</h3>
          <p className="guarantee-text">
            If you're not completely satisfied with your results within 90 days, 
            we'll give you a full refund. No questions asked.
          </p>
        </div>

        <div className="button-container">
          <Link href="/quiz/spending/checkout" className="button">
            Start Your Debt-Free Journey
          </Link>
        </div>
      </div>

      <style jsx>{`
        .solution-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        .testimonials {
          margin-bottom: 3rem;
        }

        .testimonial {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .testimonial-emoji {
          font-size: 1.5rem;
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.5;
        }

        .goals-section {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 3rem;
        }

        .goals-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .goal-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
        }

        .pricing-section {
          margin-bottom: 3rem;
        }

        .pricing-title {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .pricing-subtitle {
          text-align: center;
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }

        .benefits-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .benefit-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .benefit-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .benefit-icon {
          font-size: 1.5rem;
        }

        .benefit-title {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .benefit-value {
          color: #28a745;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .benefit-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #444;
        }

        .benefit-description-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #444;
        }

        .guarantee-section {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
          text-align: center;
        }

        .guarantee-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .guarantee-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #28a745;
        }

        .guarantee-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #444;
          max-width: 600px;
          margin: 0 auto;
        }

        .button {
          background: #28a745;
          color: white;
          font-size: 1.25rem;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.3s;
        }

        .button:hover {
          background: #218838;
        }
      `}</style>
    </div>
  );
} 