// app/components/Button.jsx
import Link from 'next/link'

const Button = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="inline-block bg-neon-blue text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition transform shadow-neon-blue"
    >
      {text}
    </Link>
  )
}

export default Button
