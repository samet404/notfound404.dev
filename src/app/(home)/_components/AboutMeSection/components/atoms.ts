import { atom } from 'jotai';
import type { SkillType } from './types';

export const dialogInfoAtom = atom<{
    x: number,
    y: number
    title: string,
    description?: string,
    skillLevel?: number | null
    skillType: string | null,
    learning?: boolean,
    lastHoverTime: number,
    isHovering: boolean,
    imageFound?: boolean
} | null>(null)

export const skillsCategoryAtom = atom<SkillType>('All')