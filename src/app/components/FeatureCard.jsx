// app/components/FeatureCard.jsx
'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LucideSparkles } from 'lucide-react' // Or any other Lucide/Heroicon

gsap.registerPlugin(ScrollTrigger)

const FeatureCard = ({ title, description, icon: Icon }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-black/30 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-neon-blue hover:shadow-neon-purple transition duration-300 hover:scale-[1.02]"
    >
      <div className="mb-4 text-neon-blue">
        <Icon size={32} strokeWidth={2.5} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  )
}

export default FeatureCard
