import { atom } from 'jotai';

export const dialogInfoAtom = atom<{
    x: number,
    y: number
    title: string,
    description?: string
} | null>(
    null
)