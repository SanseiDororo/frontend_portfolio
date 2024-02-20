'use client'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
//import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400', '900'] })

//export const metadata: Metadata = {
//  title: 'Fronted Portfolio',
//  description: 'Frontend Challenge Examples',
//}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={roboto.className}>{children}</body>
      </QueryClientProvider>
    </html>
  )
}
