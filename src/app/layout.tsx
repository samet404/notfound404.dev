import { type ReactNode } from 'react'
import './_styles/globals.css'
import { Outfit } from 'next/font/google'
import { Nav } from './_components/Nav'
import type { Metadata } from 'next'
import { Providers } from './_components/Providers'
import { CustomCursor } from './_components/CustomCursor'
import { headers } from 'next/headers'
import { getOSFromUA } from '../utils/getOSFromUA'
import dynamic from 'next/dynamic'

const Presence = dynamic(() => import('./_components/Presence').then(m => m.Presence))

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '900'],
})

const description = "Hi! I'm a software engineer, interested in kotlin and web programming. You can learn more about me on my website."
const title = "notfound404.dev"

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'title not found',
    template: '404 - %s',
  },
  creator: '404',
  description,
  keywords: [
    '404',
    'portfolio',
    'software',
    'kotlin',
    'kotlin multiplatform',
    'engineer',
    'software engineer',
    'personal website',
    'personal blog',
    'blog',
    'web',
    'kotlin',
    'nextjs',
    'react',
    'typescript',
    'tailwindcss',
    'tailwind',
    'css',
    'jetpack compose',
    'nextjs'
  ],
  category: 'blog',
  openGraph: {
    type: 'website',
    title,
    description,
  },

  twitter: {
    title,
    description,
  },
  icons: {
    icon: '/images/png/icon.png',
  },
  authors: [
    {
      name: '404',
      url: 'https://notfound404.dev',
    },
  ],
  metadataBase: new URL('https://notfound404.dev'),
}


const RootLayout = async ({ children }: { children: ReactNode }) => {
  const headersRes = await headers()
  const os = getOSFromUA(headersRes.get('user-agent'))

  console.log(os)

  return (
    <html lang="en">
      <body className={`${outfit.className} relative`}>
        <Providers>
          {process.env.NODE_ENV === 'development' && <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />}
          {os === 'Android' || os === 'ios' ? null : <CustomCursor />}

          {children}
          {os === 'Windows' || os === 'macOS' || os === 'Linux' ? <Presence /> : null}
          <Nav />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
