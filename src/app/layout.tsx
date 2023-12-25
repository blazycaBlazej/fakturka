import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ApolloClientProvider } from '@/providers/ApolloClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Fakturka',
   description: 'Aplikacja do fakturowania żłobków i przedszkoli',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='pl'>
         <ApolloClientProvider>
            <body className={inter.className}>{children}</body>
         </ApolloClientProvider>
      </html>
   )
}
