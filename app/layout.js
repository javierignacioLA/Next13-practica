

import { Inter } from 'next/font/google'
import Headers from './components/Headers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crear app next lopo',
  description: 'Generated by create next app',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
      
      <Headers/>
        {children}
        
        </body>
    </html>
  )
}
