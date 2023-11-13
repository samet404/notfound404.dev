import { ReactNode } from 'react'

export default function RootLayout(props: {
  children: ReactNode
  modal: ReactNode
}) {
  

  return (
    <html lang="en">
      <body>
        {props.modal}
        {props.children}
      </body>
    </html>
  )
}
