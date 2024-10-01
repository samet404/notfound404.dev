import { type ReactNode } from 'react'
import './_styles/globals.css'

const RootLayout = (props: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="h-full w-full selection:bg-[#ffffff54]">
        {props.children}
      </body>
    </html>
  )
}

export default RootLayout
