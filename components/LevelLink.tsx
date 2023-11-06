import { Link } from 'expo-router'

interface ILinkOptions {
  width: number
  height: number
  top: number
  left: number
}

export interface ILevelLink {
  level: 1 | 2 | 3 | 4 | 5 | 6
  currentLevel: number
  linkOptions: ILinkOptions
}

const LevelLink = ({ level, currentLevel, linkOptions }: ILevelLink) => {
  return (
    <Link
      disabled={currentLevel !== level}
      href={`/level-${level}`}
      style={{
        width: linkOptions.width,
        height: linkOptions.height,
        borderWidth: 2,
        borderColor: 'black',
        position: 'absolute',
        top: linkOptions.top,
        left: linkOptions.left,
        zIndex: 1,
      }}
    />
  )
}

export default LevelLink
