// app/components/Footer.jsx
'use client'

import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-16 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-neon-purple mb-3">ADmyBRAND</h3>
          <p className="text-gray-400">AI-powered marketing tools to help you grow smarter and faster.</p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#features" className="hover:text-neon-blue">Features</a></li>
            <li><a href="#pricing" className="hover:text-neon-blue">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-neon-blue">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-neon-blue">FAQ</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-neon-blue">About Us</a></li>
            <li><a href="#" className="hover:text-neon-blue">Careers</a></li>
            <li><a href="#" className="hover:text-neon-blue">Blog</a></li>
            <li><a href="#" className="hover:text-neon-blue">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Get in Touch</h4>
          <p className="text-gray-400 mb-2">📞 +91 98765 43210</p>
          <p className="text-gray-400 mb-4">📧 support@admybrand.ai</p>
          <div className="flex gap-4 text-xl text-neon-blue">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ADmyBRAND. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
