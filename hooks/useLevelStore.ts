import { create } from 'zustand'

interface LevelState {
  currentLevel: number
  setLevel: (level: number) => void
}

export const useLevelStore = create<LevelState>((set) => ({
  currentLevel: 1,
  setLevel: (level) => set(() => ({ currentLevel: level })),
}))
