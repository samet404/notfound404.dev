import { type ReactNode } from 'react'
import './_styles/globals.css'
import { Outfit } from 'next/font/google'
import { Nav } from './_components/Nav'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '900'],
})

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${outfit.className} relative selection:bg-[#ffffff54]`}>
        {process.env.NODE_ENV === 'development' && <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />}
        {children}
        <Nav />
      </body>
    </html>
  )
}

export default RootLayout
