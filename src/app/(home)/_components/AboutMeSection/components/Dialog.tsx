'use client'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { dialogInfoAtom } from './atoms'

const DIALOG_WIDTH = 240
const PADDING = 16

const dialogBaseStyle = {
  backgroundColor: '#000000b9',
}

const getDialogPosition = (x: number, y: number) => {
  if (typeof window === 'undefined') return {}

  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  const isRightHalf = x > viewportWidth / 2
  const isBottomHalf = y > viewportHeight / 2

  let left: number
  let top: number
  let transform = ''

  if (isRightHalf) {
    left = Math.max(PADDING, x - DIALOG_WIDTH - PADDING)
  } else {
    left = Math.min(x + PADDING, viewportWidth - DIALOG_WIDTH - PADDING)
  }

  if (isBottomHalf) {
    transform = 'translateY(-100%)'
    top = y - 10
  } else {
    transform = 'translateY(20px)'
    top = y
  }

  return {
    left: `${left}px`,
    top: `${top}px`,
    transform,
  }
}

export const Dialog = () => {
  const info = useAtomValue(dialogInfoAtom)
  const setDialogInfo = useSetAtom(dialogInfoAtom)

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container')
    if (!scrollContainer) return

    const onScrollCloseDialog = () => setDialogInfo(null)
    scrollContainer.addEventListener('scroll', onScrollCloseDialog)
    return () =>
      scrollContainer.removeEventListener('scroll', onScrollCloseDialog)
  }, [setDialogInfo])

  useEffect(() => {
    if (!info || info.isHovering) return

    const closeTimeout = setTimeout(() => setDialogInfo(null), 300)
    return () => clearTimeout(closeTimeout)
  }, [info?.isHovering, setDialogInfo])

  if (!info) return null

  const {
    title,
    description,
    x,
    y,
    skillLevel,
    learning,
    imageFound,
    reachedSkillLevel,
    skillType,
    forgotButCanRelearnIn
  } = info
  const position = getDialogPosition(x, y)

  return (
    <div className="pointer-events-none absolute inset-0 z-50 ">
      <div
        style={{
          position: 'absolute',
          ...position,
        }}
        className="pointer-events-none transition-transform xxs:duration-0 md:duration-150"
      >
        <div
          style={dialogBaseStyle}
          className="flex w-[15rem] flex-col gap-3 rounded-md p-3 text-white shadow-[0_0px_10px_1px_rgba(0,0,0,0.5)] backdrop-blur-lg"
        >
          {learning && (
            <div className=" items-center rounded-md bg-gradient-to-r from-[#ff0edf] via-[#ff8cf0]  to-[#ff0edf] text-center text-[0.8rem] font-bold">
              I'm currently learning
            </div>
          )}

          {forgotButCanRelearnIn && (
            <div className="items-center rounded-md bg-gradient-to-r from-[#33ff99] via-[#26bcb2]  to-[#33ff99] text-center text-[0.8rem] font-bold">
            I can relearn in {' '}
              {forgotButCanRelearnIn}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <div className="text-sm font-bold">{title}</div>
            {description && <div className="text-[0.7rem]">{description}</div>}
          </div>

          {typeof skillLevel === 'number' && (
            <div className="flex flex-col gap-2">
              <div className='w-full h-[0.1rem] bg-[#ffffff45]'></div>
              <div className='flex flex-col'>
                <div className="text-[0.9rem]"><span className='text-[#ffffffd0]'>Skill level:</span> {skillLevel}/100</div>
                {reachedSkillLevel &&  <div className="text-[0.9rem]">
                  <span className='text-[#ffffffd0]'>Reached skill level:</span> {reachedSkillLevel}/100
                </div>}
              </div>

              <div className="text-[0.55rem] leading-3 text-gray-400">
                Note: Skill level is calculated based on my guess, experience
                and the amount of time I've spent using the technology.{' '}
                <span className="font-medium italic text-gray-300">
                  Doesn't mean I know every little thing about it. Just
                  describes my workability with it.
                </span> {reachedSkillLevel && <span>The reached skill level represents the max level I've reached with that skill.</span>}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-1">
            {skillType && <div className="text-[0.7rem]">{skillType}</div>}
            {!imageFound && (
              <div className="text-[0.7rem]">No image found for that.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
