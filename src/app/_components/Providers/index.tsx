import { Fragment, type ReactNode } from 'react'
import { VercelAnalytics } from './Analytics'
import { DarkTheme } from './DarkTheme'

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <Fragment>
            <VercelAnalytics />
            <DarkTheme>
                {children}
            </DarkTheme>
        </Fragment>
    )
}