'use client'
import { useAtomValue, useSetAtom } from 'jotai'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { dialogInfoAtom, skillsCategoryAtom, skillsShrinkedAtom } from './atoms'
import { Svg } from '@/src/components/Svg'
import useIsDarkTheme from '@/src/store/isDarkTheme'
import type { SkillType } from './types'
import { cn } from '@/src/utils'

export const SkillIcon = ({
  icon,
  title,
  description,
  skillLevel,
  learning,
  type,
  reachedSkillLevel,
  forgotButCanRelearnIn,
  hideWhenShrinked = false,
  useReachedSkillLevelAsOpacityFactorFirst = true,
}: Props) => {
  const iconRef = useRef<HTMLDivElement>(null)
  const setDialogInfo = useSetAtom(dialogInfoAtom)
  const isDarkTheme = useIsDarkTheme((state) => state.value)
  const selectedCategory = useAtomValue(skillsCategoryAtom)
  const isShrinked = useAtomValue(skillsShrinkedAtom)

  if (selectedCategory === 'All' && hideWhenShrinked && isShrinked) return null

  const handleMouseEnter = (e: React.MouseEvent) => {
    setDialogInfo({
      title,
      description,
      skillLevel,
      x: e.clientX,
      y: e.clientY,
      reachedSkillLevel,
      learning,
      lastHoverTime: Date.now(),
      isHovering: true,
      imageFound: !!icon,
      skillType: type,
      forgotButCanRelearnIn
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setDialogInfo((prev) =>
      prev
        ? {
            ...prev,
            x: e.clientX,
            y: e.clientY,
            lastHoverTime: performance.now(),
          }
        : null,
    )
  }

  const handleMouseLeave = () => {
    setDialogInfo((prev) =>
      prev
        ? {
            ...prev,
            isHovering: false,
            lastHoverTime: performance.now(),
          }
        : null,
    )
  }

  if (selectedCategory !== 'All' && selectedCategory !== type) return null

  const opacityFactor = useReachedSkillLevelAsOpacityFactorFirst ? reachedSkillLevel ?? skillLevel : skillLevel ?? reachedSkillLevel

  return (
    <div
      style={{
        opacity:
          typeof opacityFactor === 'number'
            ? opacityFactor / 100 > 0.1
              ? opacityFactor / 100
              : 0.1
            : 1,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={iconRef}
      className={cn(
        `group relative flex h-[3rem] w-[3rem] flex-col items-center justify-center  rounded-lg border-[0.15rem] bg-[#ffffffa3] p-[0.15rem] duration-200 hover:scale-110 hover:!opacity-100 hover:shadow-[0_0px_30px_3px_#ffffff9b]`,
        {
          'bg-[#ffffffac]': isDarkTheme,
          'border-[#fff67e]': type === 'Language',
          'border-[#8975ff]': type === 'Service',
          'border-[#1184ff]': type === 'Tool',
          'border-[#42fba5]/[0.74]': type === 'Database',
          'border-[#ffbe4d]/[0.74]': type === 'API',
        },
      )}
    >
      {icon ? icon : <Svg src="ban" className="h-9 w-9" alt="no image" />}
      {learning && (
        <div className="absolute bottom-[-3px] right-[-3px] h-2 w-2 animate-pulse rounded-full bg-[#ff7dee] shadow-[0_0px_10px_1px_rgba(0,0,0,0.4)]"></div>
      )}
      {forgotButCanRelearnIn && (
        <div className="absolute bottom-[-3px] left-[-3px] h-[0.3rem] w-4 rounded-full bg-[#33ff99] shadow-[0_0px_10px_1px_rgba(0,0,0,0.3)]"></div>
      )}
    </div>
  )
}
type Props = {
  hideWhenShrinked?: boolean
  icon?: ReactNode
  title: string
  description?: string,
  reachedSkillLevel?: number | null
  skillLevel?: number | null
  learning?: boolean
  type: SkillType | null
  forgotButCanRelearnIn?: string,
  useReachedSkillLevelAsOpacityFactorFirst?: boolean
}
