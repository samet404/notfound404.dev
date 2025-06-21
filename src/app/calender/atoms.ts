import { atom } from 'jotai';

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
export const currentDayAtom = atom<Date>(yesterday)
