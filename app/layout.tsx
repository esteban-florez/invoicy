import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Invoicy',
  description: 'Toma control de tus gastos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={ubuntu.className}>
        {children}
      </body>
    </html>
  )
}
