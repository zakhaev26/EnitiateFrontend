import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {AuthContextProvider} from "../auth/context/AuthContext"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enitiate - Posts',
  description: 'Watch your favourite posts - like a Breeze!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
