import { Fragment, type ReactNode } from 'react'
import { VercelAnalytics } from './Analytics'

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <Fragment>
            <VercelAnalytics />
            {children}
        </Fragment>
    )
}