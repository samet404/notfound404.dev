import { atom } from 'jotai';

export const dialogInfoAtom = atom<{
    x: number,
    y: number
    title: string,
    description?: string,
    skillLevel?: number | null
    skillType: string,
    learning?: boolean,
    lastHoverTime: number,
    isHovering: boolean,
    imageFound?: boolean
} | null>(null)