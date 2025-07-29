'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const arrowRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current) return

    if (open) {
      gsap.to(contentRef.current, {
        height: contentRef.current.scrollHeight,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          contentRef.current.style.height = 'auto' // prevent jump after animation
        },
      })

      gsap.to(arrowRef.current, {
        rotate: 180,
        duration: 0.3,
        ease: 'power2.out',
      })
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      })

      gsap.to(arrowRef.current, {
        rotate: 0,
        duration: 0.2,
        ease: 'power2.in',
      })
    }
  }, [open])

  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-lg text-white font-medium focus:outline-none"
      >
        <span>{question}</span>
        <span
          ref={arrowRef}
          className="text-neon-blue transition-transform"
        >
          ▼
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden h-0 opacity-0"
        style={{ willChange: 'height, opacity' }}
      >
        <p className="mt-4 text-gray-400 text-sm">{answer}</p>
      </div>
    </div>
  )
}

export default FAQItem
