// app/components/FeaturesSection.jsx
'use client'

import FeatureCard from './FeatureCard'
import { BrainCog, Rocket, BarChart3, Zap, Settings, Cloud } from 'lucide-react'

const features = [
  {
    title: 'AI Campaign Automation',
    description: 'Launch and optimize campaigns with no manual effort.',
    icon: Rocket,
  },
  {
    title: 'Predictive Analytics',
    description: 'Get AI-powered predictions on performance and ROI.',
    icon: BarChart3,
  },
  {
    title: 'Smart Audience Targeting',
    description: 'Segment and target the right users using behavioral data.',
    icon: BrainCog,
  },
  {
    title: 'Real-Time Insights',
    description: 'Track campaign metrics with up-to-date AI analysis.',
    icon: Zap,
  },
  {
    title: 'No-Code Integration',
    description: 'Easily integrate with your tools and workflows.',
    icon: Settings,
  },
  {
    title: 'Cloud Synced Dashboard',
    description: 'Access from anywhere, anytime — securely.',
    icon: Cloud,
  },
]

const FeaturesSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neon-purple mb-4">Powerful Features</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          ADmyBRAND AI Suite offers everything you need to automate, analyze, and scale your marketing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
