// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'My App',
  description: 'Next.js 14 App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
