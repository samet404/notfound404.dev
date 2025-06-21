import { Fragment, type ReactNode } from 'react'
import { VercelAnalytics } from './Analytics'
import { DarkTheme } from './DarkTheme'
import { ReactQueryProvider } from './React-query'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <VercelAnalytics />
      <DarkTheme>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </DarkTheme>
    </Fragment>
  )
}
