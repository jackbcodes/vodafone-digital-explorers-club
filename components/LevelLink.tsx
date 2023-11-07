import { View } from 'react-native'

import { Link } from 'expo-router'

import { useLevelStore } from '../hooks/useLevelStore'

import { Tobi } from './Tobi'

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
  const isCurrentLevel = useLevelStore((state) => state.currentLevel === level)

  return (
    <Link
      disabled={level !== 6 && !isCurrentLevel}
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
      {isCurrentLevel && (
        <View
          style={{
            width: linkOptions.width,
            alignItems: 'center',
          }}
        >
          <Tobi />
        </View>
      )}
    </Link>
  )
}

export default LevelLink
