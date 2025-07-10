'use client'

import { useAtom } from 'jotai'
import { ExpandIcon, ShrinkIcon } from 'lucide-react'
import { skillsShrinkedAtom } from './atoms'

export const ShrinkSkills = () => {
  const [isShrinked, setIsShrinked] = useAtom(skillsShrinkedAtom)

  return (
    <button
      className="size-[20rem] flex flex-row items-center justify-center gap-2 rounded-md bg-[#ffffff24] px-2 py-1 text-white hover:bg-[#ffffff42]"
      onMouseDown={() => setIsShrinked(!isShrinked)}
    >
      <div className="text-[0.8rem] text-white">
        {isShrinked ? 'Expand' : 'Minimize'}
      </div>
      {isShrinked ? (
        <ExpandIcon className="size-12 text-white opacity-70" />
      ) : (
        <ShrinkIcon className="size-[20rem] text-white opacity-70" />
      )}
    </button>
  )
}
