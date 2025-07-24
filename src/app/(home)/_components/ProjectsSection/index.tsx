'use client'

import { Spinner } from '@/src/components/Spinner'
import dynamic from 'next/dynamic'

const Content = dynamic(
  () => import('./components/Content').then((m) => m.Content),
  {
    loading: () => (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    ),
  },
)

export const ProjectsSection = () => {
  return <Content />
}
