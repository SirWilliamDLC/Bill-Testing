"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BundlePage() {
  const [selectedBundle, setSelectedBundle] = useState('popular');
  
  return (
    <div className="quiz-container bundle-page">
      <div className="sale-banner">BLACK FRIDAY SALE UP TO 50% OFF!</div>
      
      <h1>MIT45 BOOST</h1>
      
      <div className="recommendation-badge">OUR RECOMMENDATION</div>
      
      <h2>Our recommendation for achieving <br/> your goals with 50% OFF</h2>
      
      <p className="bundle-description">
        Based on your data, we recommend starting with the 12-bottle subscription plan to achieve 
        effective results or a 36-bottle subscription plan to form a longer-lasting routine.
      </p>
      
      <div className="product-image-container">
        <Image 
          src="https://mit45-quiz.ryanjhunter.workers.dev/_next/image?url=%2Fmit-bottle.webp&w=828&q=75" 
          alt="MIT45 BOOST Product" 
          width={300} 
          height={300} 
          className="product-image"
        />
        <div className="gift-badge">+SECRET GIFT</div>
      </div>
      
      <div className="product-badges">
        <div className="product-badge">
          <Image 
            src="https://mit45-quiz.ryanjhunter.workers.dev/vegan-icon.svg" 
            alt="Vegan" 
            width={20} 
            height={20} 
          />
          VEGAN
        </div>
        <div className="product-badge">
          <Image 
            src="https://mit45-quiz.ryanjhunter.workers.dev/gluten-free-icon.svg" 
            alt="Gluten Free" 
            width={20} 
            height={20} 
          />
          GLUTEN-FREE
        </div>
        <div className="product-badge">
          <Image 
            src="https://mit45-quiz.ryanjhunter.workers.dev/non-gmo-icon.svg" 
            alt="Non-GMO" 
            width={20} 
            height={20} 
          />
          NON-GMO
        </div>
      </div>
      
      <div className="bundle-options">
        <div 
          className={`bundle-option ${selectedBundle === 'popular' ? 'recommended' : ''}`}
          onClick={() => setSelectedBundle('popular')}
        >
          <div className="recommended-badge">MOST POPULAR | SAVE 50%</div>
          <h3 className="bundle-name">MOST POPULAR</h3>
          <div className="bundle-description">12-Bottle supply</div>
          <div className="bundle-price">
            <span className="sale-price">$263.64</span>
            <span className="original-price">$527.28</span>
          </div>
          <div className="bundle-features">
            <div className="bundle-feature"><span className="feature-check">✓</span> 360 servings</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> 12 bottles will be delivered</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> Pause subscription anytime</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> Strawberry flavor</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> Free gift</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> Free shipping</div>
          </div>
          <button className="bundle-select-button">SELECT BUNDLE</button>
        </div>
        
        <div 
          className={`bundle-option ${selectedBundle === 'starter' ? 'recommended' : ''}`}
          onClick={() => setSelectedBundle('starter')}
        >
          <h3 className="bundle-name">STARTER</h3>
          <div className="bundle-description">6-Bottle supply</div>
          <div className="bundle-price">
            <span className="sale-price">$131.82</span>
            <span className="original-price">$263.64</span>
          </div>
          <div className="bundle-features">
            <div className="bundle-feature"><span className="feature-check">✓</span> 180 servings</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> 6 bottles will be delivered</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> Pause or cancel subscription</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> Strawberry flavor</div>
          </div>
          <button className="bundle-select-button">SELECT BUNDLE</button>
        </div>
        
        <div 
          className={`bundle-option ${selectedBundle === 'value' ? 'recommended' : ''}`}
          onClick={() => setSelectedBundle('value')}
        >
          <h3 className="bundle-name">BEST VALUE</h3>
          <div className="bundle-description">36-Bottle supply</div>
          <div className="bundle-price">
            <span className="sale-price">$790.92</span>
            <span className="original-price">$1581.84</span>
          </div>
          <div className="bundle-features">
            <div className="bundle-feature"><span className="feature-check">✓</span> 1080 servings</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> 36 bottles will be delivered</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> Strawberry flavor</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> Pause subscription anytime</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> Premium free gift</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> Free priority shipping</div>
            <div className="bundle-feature"><span className="feature-check">✓</span> VIP support</div>
          </div>
          <button className="bundle-select-button">SELECT BUNDLE</button>
        </div>
      </div>
      
      <div className="sellout-risk">
        <div className="risk-label">SELLOUT RISK: <span className="risk-high">High</span></div>
        <p className="risk-description">
          This product is currently being purchased by many users. Based on the sales volume 
          from the past 12 hours, this product is likely to sell out today.
        </p>
      </div>
      
      <div className="action-buttons">
        <button className="take-offer-button">TAKE THIS OFFER</button>
        <button className="decline-offer-button">I do not want this offer</button>
      </div>
      
      <div className="trust-badges">
        <div className="trust-badge">Fast shipping</div>
        <div className="trust-badge">Excellent Support</div>
        <div className="trust-badge">Free Gift Included</div>
      </div>
      
      <div className="payment-methods">
        <Image src="https://mit45-quiz.ryanjhunter.workers.dev/payment/paypal.svg" alt="PayPal" width={40} height={25} />
        <Image src="https://mit45-quiz.ryanjhunter.workers.dev/payment/visa.svg" alt="Visa" width={40} height={25} />
        <Image src="https://mit45-quiz.ryanjhunter.workers.dev/payment/mastercard.svg" alt="Mastercard" width={40} height={25} />
        <Image src="https://mit45-quiz.ryanjhunter.workers.dev/payment/amex.svg" alt="American Express" width={40} height={25} />
        <Image src="https://mit45-quiz.ryanjhunter.workers.dev/payment/stripe.svg" alt="Stripe" width={40} height={25} />
      </div>
    </div>
  );
} 