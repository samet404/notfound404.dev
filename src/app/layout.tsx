import { type ReactNode } from 'react'
import '@/output.css'

const RootLayout = (props: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className='selection:bg-[#ffffff54] w-full h-full'>{props.children}</body>
    </html>
  )
}

export default RootLayout