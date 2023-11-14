import { type ReactNode } from 'react'
import '@/output.css'

const RootLayout = (props: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}

export default RootLayout