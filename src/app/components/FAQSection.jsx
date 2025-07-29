// app/components/FAQSection.jsx
'use client'

import FAQItem from './FAQItem'

const faqList = [
  {
    question: 'What is ADmyBRAND AI Suite?',
    answer: 'It’s an all-in-one AI-powered marketing tool for campaign automation, analytics, and growth strategies.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial. No credit card required.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. You can cancel your plan at any time without penalties.',
  },
  {
    question: 'Do you support integrations?',
    answer: 'Yes, we integrate with popular tools like HubSpot, Google Ads, Facebook, and more.',
  },
]

const FAQSection = () => {
  return (
    <section id="faq" className="w-full py-24 px-6 md:px-20 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-neon-purple mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqList.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
