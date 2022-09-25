import { writable } from 'svelte/store'

export const currentPage = writable('')
export const lineStartHeight = writable<number>(0)
export const colWidth = writable<number>(0)
export const colNormalised = writable<number>(0)
export const ds = writable<number>(0)
export const dsOpacity = writable<string[]>(["0","0","0","0"])
export const timerPercentage = writable<number>(0)
export const pathPercentage = writable<number>(0)
