'use client'

import PricingCard from './PricingCard'

const pricingData = [
  {
    title: 'Basic',
    price: '29',
    features: [
      '1 Brand Workspace',
      'Limited AI Reports',
      'Email Support',
      'Basic Integrations',
    ],
  },
  {
    title: 'Pro',
    price: '79',
    features: [
      'Unlimited Workspaces',
      'Full AI Dashboard',
      'Priority Support',
      'CRM & Ad Integrations',
    ],
  },
  {
    title: 'Enterprise',
    price: '149',
    features: [
      'Custom AI Models',
      'White-Label Solution',
      'Dedicated Success Manager',
      'Enterprise Integrations',
    ],
  },
]

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-24 px-6 md:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose the plan that fits your team’s size and marketing goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingData.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  )
}

export default PricingSection
