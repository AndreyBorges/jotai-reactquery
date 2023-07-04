import { atom } from 'jotai'

const countValueAtom = atom(5)

export const countAtom = atom(
  get => get(countValueAtom),
  (_, set, update: number) => set(countValueAtom, update < 0 ? 0 : update)
)
