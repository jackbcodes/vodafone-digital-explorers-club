import { useEffect } from 'react'

import { useAssets } from 'expo-asset'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

const duration = 2000
const easing = Easing.bezier(0.25, -0.5, 0.25, 1)

export const Tobi = () => {
  const [assets] = useAssets([require('../assets/images/tobi.png')])

  const sv = useSharedValue(0)

  useEffect(() => {
    sv.value = withRepeat(withSequence(withTiming(0, { duration: 1000 }), withTiming(1, { duration, easing })), -1)
  }, [])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }))

  return (
    <>
      <Animated.Image
        style={[
          {
            width: 50,
            height: 50,
          },
          animatedStyle,
        ]}
        source={assets && assets[0]}
      />
    </>
  )
}
