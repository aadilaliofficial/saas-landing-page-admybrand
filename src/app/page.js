import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <Footer />
    </main>
  )
}
