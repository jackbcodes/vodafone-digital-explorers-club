import { Pressable } from 'react-native'

import { Link } from 'expo-router'

interface ILinkOptions {
  width: number
  height: number
  top: number
  left: number
}

export interface ILevelLink {
  id: string
  href: string
  callback: () => any
  linkOptions: ILinkOptions
}

const LevelLink = ({ id, href, linkOptions }: ILevelLink) => {
  return (
    <Link
      id={id}
      href={href}
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
