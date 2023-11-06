import { Image, StyleSheet, Text, View } from 'react-native'

import { useAssets } from 'expo-asset'

export default function HomeScreen() {
  const [assets, error] = useAssets([require('../assets/images/world-level.png')])

  if (!assets) return

  console.log(assets)

  return (
    <View style={styles.container}>
      <Text>Screen</Text>
      <Image
        style={{ width: 375, height:  }}
        source={assets[0]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#91E8FC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
