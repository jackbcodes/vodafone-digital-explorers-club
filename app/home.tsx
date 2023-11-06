import { Image, StyleSheet, Text, View } from 'react-native'

import { useAssets } from 'expo-asset'
import { Link } from 'expo-router'

export default function HomeScreen() {
  const [assets, error] = useAssets([require('../assets/images/world-level.png')])

  if (!assets) return

  console.log(assets)

  return (
    <View style={styles.container}>
      <Link href='/level-1'>Go To Level 1</Link>
      <Image
        style={{ width: 385.41, height: 610.22 }}
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
