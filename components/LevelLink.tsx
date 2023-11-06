import { Image, View } from 'react-native'

import { useAssets } from 'expo-asset'
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
  const [assets] = useAssets([require('../assets/images/tobi.png')])

  const isCurrentLevel = currentLevel === level

  return (
    <Link
      disabled={!isCurrentLevel}
      href={`/level-${level}`}
      style={{
        width: linkOptions.width,
        height: linkOptions.height,
        // borderWidth: 2,
        // borderColor: 'black',
        position: 'absolute',
        top: linkOptions.top,
        left: linkOptions.left,
        zIndex: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: linkOptions.width,
          alignItems: 'center',
        }}
      >
        {isCurrentLevel && (
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={assets && assets[0]}
          />
        )}
      </View>
    </Link>
  )
}

export default LevelLink
