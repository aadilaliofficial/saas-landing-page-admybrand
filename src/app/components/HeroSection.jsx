'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Button from './Button'

const HeroSection = () => {
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    gsap.from([headingRef.current, subRef.current, ctaRef.current], {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-between px-6 md:px-20 bg-black text-white overflow-hidden">
      {/* Left content */}
      <div className="flex flex-col gap-6 z-10 max-w-xl">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold text-neon-blue">
          Unleash AI to Supercharge Your Marketing
        </h1>
        <p ref={subRef} className="text-lg text-gray-300 max-w-md">
          ADmyBRAND AI Suite combines automation, analytics & strategy to take your marketing to the next level.
        </p>
        <div ref={ctaRef}>
          <Button text="Get Started Free" href="#pricing" />
        </div>
      </div>

      {/* Right image */}
      <div className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2 z-0">
        <Image
          src="https://www.zdnet.com/a/img/resize/ada36a8ca094a512f972578b7b4742f38ac90b5c/2024/05/28/95683789-ebda-4272-964e-ce5d1a5a000f/gettyimages-1888972727.jpg?auto=webp&width=1280"
          alt="AI Dashboard Preview"
          width={500}
          height={500}
          className="rounded-xl opacity-90 object-cover"
        />
      </div>
    </section>
  )
}

export default HeroSection
