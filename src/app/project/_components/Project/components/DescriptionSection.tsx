import { type ReactNode } from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
})

const DescriptionSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${inter.className} p-3 flex flex-col gap-4 text-base text-[rgba(0,0,0,0.6)] leading-5`}>{children}</div>
  )
}

export default DescriptionSection
