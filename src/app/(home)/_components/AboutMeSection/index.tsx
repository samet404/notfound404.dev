import { FirstPart } from './components/FirstPart'
import { Links } from './components/Links'
import { Dialog } from './components/Dialog'
import { HavntUsedL } from './components/HavntUsedL'
import { TechIUse } from './components/TechIUse'
import { MusicsILike } from './components/MusicsILike'
import { Description } from './components/Description'
import { Suspense } from 'react'
import { Spinner } from '@/src/components/Spinner'

export const AboutMeSection = () => {
  return (
    <div className="flex w-full flex-col items-center px-2 py-2 ">
      <div className="flex flex-col gap-3 max-w-[40rem] items-start">
        <div className='flex lg:flex-row xxs:flex-col gap-9  w-full xxs:justify-center xxs:items-center lg:items-start rounded-lg p-3 lg:justify-between'>
          <FirstPart />
          <Links />
        </div>
        <Dialog />

        <div className='flex flex-col gap-4 rounded-lg relative text-[0.9rem] leading-5 text-[rgba(255,255,255,0.7)]'>
          <div className="prose prose-headings:text-[#ffffffdd] pt-10 pb-10 prose-strong:text-[#ffffffc0] prose-p:text-[#ffffffc1] prose-li:text-[#ffffffa0]">
            <Description />

            <div className='w-full flex flex-col justify-center items-center'>
              <h2>Why am I self-taught?</h2>
              <p className='text-center'>
                I think turkey's current education system is not good enough to provide a good education for a software developer.
              </p>
            </div>
            <Suspense fallback={
              <div className='w-full pt-4 flex justify-center items-center flex-col text-white'>
                <div>Please wait... :)</div>
                <Spinner />
              </div>
            }>
              <TechIUse />
              <HavntUsedL />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
