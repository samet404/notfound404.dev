"use client"

import { useAtomValue } from 'jotai'
import { dialogInfoAtom } from './atoms'
import dynamic from 'next/dynamic'

const Dialog = dynamic(() => import('./Dialog').then(m => m.Dialog), {
    loading: () => <div className='absolute z-40 pointer-events-none text-white w-full h-full top-0 left-0 flex justify-center items-end pb-5'>
        Loading...
    </div>
})

export const DialogLoader = () => {
    const dialogContent = useAtomValue(dialogInfoAtom)

    if (dialogContent) return <Dialog />
}