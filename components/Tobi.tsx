import { useEffect } from 'react'

import { useAssets } from 'expo-asset'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
} from 'react-native-reanimated'

export const Tobi = () => {
  const [assets] = useAssets([require('../assets/images/tobi.png')])

  // const translateY = useSharedValue(0)

  // const bounceAnimation = withSpring(translateY, {
  //   damping: 2,
  //   stiffness: 100,
  //   restSpeedThreshold: 0.1,
  //   restDisplacementThreshold: 0.1,
  // })

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ translateY: bounceAnimation }],
  //   }
  // })

  // useEffect(() => {
  //   translateY.value = withSequence(withSpring(0, { damping: 2, stiffness: 100, overshootClamping: true }))
  // }, [])

  return (
    <Animated.Image
      style={[
        {
          width: 50,
          height: 50,
        },
        // animatedStyle,
      ]}
      source={assets && assets[0]}
    />
  )
}
