import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-box'>
        <div className='hero-text'>
          <h1>Get Multiple Quotes from Sydney's Best Roofers</h1>
          <p>RoofHero makes roofing simple - trusted pros compete for your job with fast, transparent quotes.</p>
          <button className="cta-btn-hero">
            Find Trusted Contractors
            <RiArrowRightUpLine size={20} />
          </button>
        </div>
      </div>

      <div className='right-box'>
        <div className='image-container'>
          <div className='label ii'><p>Independent Inspections</p></div>
          <div className='label apa'><p>AI-Powered Accuracy</p></div>
          <div className='label nhc'><p>No Hidden Costs</p></div>
          <div className='label mq'><p>Multiple Quotes</p></div>
        </div>
      </div>
    </div>
  )
}

export default Hero