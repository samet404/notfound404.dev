import { atom } from 'jotai';

export const dialogInfoAtom = atom<{
    x: number,
    y: number
    title: string,
    description?: string,
    skillLevel: number | null
    learning?: boolean,
    lastHoverTime: number,
    isHovering: boolean
} | null>(null)