import { RiArrowRightUpLine, RiCheckFill } from '@remixicon/react'
import React from 'react'

import { useNavigate } from 'react-router-dom';

const ServiceHero = () => {
	const navigate = useNavigate();

	const handleQuoteClick = () => {
    console.log("Button clicked!");
    navigate('/services');
  	};

	return (
		<section className='service-section'>
			<div className='service-hero'>
				<div className='hero-content'>
					<h1>Roof Replacement in Bondi</h1>
					<p className='hero-subtitle'>Instant roof estimate • 3 free quotes • Bondi’s coastal-proof roofing experts</p>
					
					<div className='hero-input-area'>
						<textarea placeholder='Enter Address' className='textarea'></textarea>
						<button className='cta-btn-service' type='submit' onClick={handleQuoteClick} >
							Get Instant Estimate <RiArrowRightUpLine size={20} />
						</button>
					</div>
				</div>
			</div>

			<div className='s-cards'>
				<div className='service-card'>
					<div className='hero-icon'><RiCheckFill size={20} /></div>
					<p>Price in 30 seconds</p>
				</div>
				<div className='service-card'>
					<div className='hero-icon'><RiCheckFill size={20} /></div>
					<p>AI-powered accuracy</p>
				</div>
				<div className='service-card'>
					<div className='hero-icon'><RiCheckFill size={20} /></div>
					<p>Licensed, 5-star roofers</p>
				</div>
				<div className='service-card'>
					<div className='hero-icon'><RiCheckFill size={20} /></div>
					<p>No hidden fees</p>
				</div>
			</div>
		</section>
	)
}

export default ServiceHero