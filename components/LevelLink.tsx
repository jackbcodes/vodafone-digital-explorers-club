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

const LevelLink = ({ id, href, callback, linkOptions }: ILevelLink) => {
  return (
    <Pressable onPress={callback}>
      <Link
        id={id}
        href={`http${href}`}
        style={{
          width: linkOptions.width,
          height: linkOptions.height,
          position: 'absolute',
          top: linkOptions.top,
          left: linkOptions.left,
          zIndex: 1,
        }}
      />
    </Pressable>
  )
}

export default LevelLink
