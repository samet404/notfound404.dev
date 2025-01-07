import { type ReactNode } from 'react'
import './_styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600', '700', '900'],
})

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html style={{
      scrollbarWidth: 'none',
    }} lang="en">
      <body className={`${inter.className} h-full w-full overflow-y-scroll selection:bg-[#ffffff54]`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
