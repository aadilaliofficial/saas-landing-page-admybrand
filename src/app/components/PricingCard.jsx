'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Button from './Button'

const PricingCard = ({ title, price, features }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className={`
        relative p-6 rounded-2xl border
        bg-black/30 border-white/10 text-white
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:scale-[1.05] hover:border-neon-blue hover:shadow-[0_0_28px_#38BDF8AA]
        hover:bg-white/5 hover:backdrop-blur-md
        group cursor-pointer
      `}
    >
      <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-purple transition-colors duration-300">{title}</h3>
      <p className="text-3xl font-bold text-neon-purple mb-6 group-hover:text-white transition-colors duration-300">${price}/mo</p>

      <ul className="space-y-3 mb-6 text-gray-300 text-sm">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-neon-blue">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button text="Choose Plan" href="#contact" />
    </div>
  )
}

export default PricingCard
