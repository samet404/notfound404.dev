"use client"

import { Spinner } from '@/src/components/Spinner'
import dynamic from 'next/dynamic'
import { SkillsCategoryDropdown } from './SkillsCategoryDropdown'
import { SkillLastUpdated } from './SkillLastUpdated'
import { ShrinkSkills } from './ShrinkSkills'
import { useEffect, useState } from 'react'

const Content = dynamic(
  () => import('./SkillsContent').then((m) => m.SkillsContent),
  {
    loading: () => (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    ),
  },
)

export const Skills = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col p-2">
        <h2>My experiences</h2>
        <p className="xxs:max-w-[25rem] md:max-w-[26rem] lg:max-w-[30rem]">
          You might think I've listed all technologies that I've only used for a few
          minutes, but...
          <span className="font-bold"> actually no :P</span> I used at least 20 hours of
          each technology. There are even so many things I don't wanna put in
          this list and I want to learn even more things. And yes, I love learning.
        </p>
        <p className="xxs:max-w-[25rem] md:max-w-[26rem] lg:max-w-[30rem]">
          Hover or click on the icons to see more information about them. Each
          border color represents its type. You can see how much I know about
          each technology by the workability level and its opacity.
        </p>
      </div>
      <div className="flex flex-col items-center gap-7 md:gap-2">
        <div className="flex w-full flex-col justify-between gap-4 rounded-md bg-[#ffffff24] p-2  md:flex-row md:items-end">
          <div className="flex flex-row flex-wrap justify-between h-full items-center gap-3">
            <SkillsCategoryDropdown />
            <ShrinkSkills />
          </div>
          <SkillLastUpdated />
        </div>
        {mounted && <Content />}  
      </div>
    </div>
  )
}
