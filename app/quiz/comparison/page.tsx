import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ComparisonPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Image 
          src="https://mit45-quiz.ryanjhunter.workers.dev/_next/image?url=%2Fm45boost.webp&w=384&q=75" 
          alt="MIT45 BOOST Logo" 
          width={200} 
          height={100} 
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">Solution Comparison</h1>
        <p className="text-lg mb-6">
          See how MIT45 BOOST compares to traditional sleep aids
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Features</th>
              <th>MIT45 BOOST</th>
              <th>Traditional Sleep Aids</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Natural Ingredients
                <div className="comparison-description">Uses plant-based ingredients</div>
              </td>
              <td className="text-green-600">✓</td>
              <td className="text-red-600">✗</td>
            </tr>
            <tr>
              <td>
                Non-Habit Forming
                <div className="comparison-description">No risk of dependency</div>
              </td>
              <td className="text-green-600">✓</td>
              <td className="text-red-600">✗</td>
            </tr>
            <tr>
              <td>
                Boosts Energy
                <div className="comparison-description">Helps with daytime energy levels</div>
              </td>
              <td className="text-green-600">✓</td>
              <td className="text-red-600">✗</td>
            </tr>
            <tr>
              <td>
                No Morning Grogginess
                <div className="comparison-description">Wake up feeling refreshed</div>
              </td>
              <td className="text-green-600">✓</td>
              <td className="text-red-600">✗</td>
            </tr>
            <tr>
              <td>
                Improves Sleep Quality
                <div className="comparison-description">Enhances deep sleep phases</div>
              </td>
              <td className="text-green-600">✓</td>
              <td className="text-yellow-600">△</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <p className="mb-4">Ready to try a better solution for your sleep?</p>
        <Link href="/quiz/results" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300">
          Get MIT45 BOOST Now
        </Link>
        <div className="mt-4">
          <Link href="/quiz/results" className="text-gray-600 hover:text-gray-800">
            ← Back to Results
          </Link>
        </div>
      </div>
    </div>
  )
} 