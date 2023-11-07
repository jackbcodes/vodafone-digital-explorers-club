import type { ILevelLink } from '../components/LevelLink'

export const levels: Omit<ILevelLink, 'currentLevel'>[] = [
  {
    level: 1,
    linkOptions: {
      width: 95,
      height: 100,
      top: 595,
      left: 260,
    },
  },
  {
    level: 2,
    linkOptions: {
      width: 120,
      height: 110,
      top: 600,
      left: 110,
    },
  },
  {
    level: 3,
    linkOptions: {
      width: 120,
      height: 110,
      top: 460,
      left: 100,
    },
  },
  {
    level: 4,
    linkOptions: {
      width: 120,
      height: 115,
      top: 315,
      left: 20,
    },
  },
  {
    level: 5,
    linkOptions: {
      width: 120,
      height: 120,
      top: 210,
      left: 250,
    },
  },
  {
    level: 6,
    linkOptions: {
      width: 120,
      height: 110,
      top: 155,
      left: 100,
    },
  },
]
