import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/app/components/navBar/navBar";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'User Dashboard',
        template: '%s | User Dashboard',
    },
  description: 'dashboard of my app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="mx-auto max-w-5xl text-2xl gap-2 mb-10">
        <NavBar />
        {children}
      </div>
      </body>
    </html>
  )
}
