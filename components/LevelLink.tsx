import { Link } from 'expo-router'

interface ILinkOptions {
  width: number
  height: number
  top: number
  left: number
}

export interface ILevelLink {
  level: 1 | 2 | 3 | 4 | 5 | 6
  linkOptions: ILinkOptions
}

const LevelLink = ({ level, linkOptions }: ILevelLink) => {
  return (
    <Link
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
