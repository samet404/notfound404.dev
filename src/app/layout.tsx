import { type ReactNode } from 'react'
import './_styles/globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '900'],
})

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${outfit.className} relative selection:bg-[#ffffff54]`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
