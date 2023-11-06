import { StyleSheet, View } from 'react-native'

import { Link } from 'expo-router'

import { WorldMap } from './components/WorldMap'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href='/level-1'>Go To Level 1</Link>
      <View
        style={{
          width: 120,
          height: 120,
          borderWidth: 2,
          borderColor: 'black',
          position: 'absolute',
          top: 150,
          left: 100,
          zIndex: 1000,
        }}
      />
      <View
        style={{
          width: 120,
          height: 100,
          borderWidth: 2,
          borderColor: 'black',
          position: 'absolute',
          top: 220,
          left: 250,
          zIndex: 1000,
        }}
      />
      <View
        style={{
          width: 120,
          height: 100,
          borderWidth: 2,
          borderColor: 'black',
          position: 'absolute',
          top: 320,
          left: 20,
          zIndex: 1000,
        }}
      />
      <View
        style={{
          width: 120,
          height: 100,
          borderWidth: 2,
          borderColor: 'black',
          position: 'absolute',
          top: 470,
          left: 100,
          zIndex: 1000,
        }}
      />
      <View
        style={{
          width: 120,
          height: 100,
          borderWidth: 2,
          borderColor: 'black',
          position: 'absolute',
          top: 610,
          left: 110,
          zIndex: 1000,
        }}
      />
      <View
        style={{
          width: 90,
          height: 80,
          borderWidth: 2,
          borderColor: 'black',
          position: 'absolute',
          top: 610,
          left: 260,
          zIndex: 1000,
        }}
      />
      <WorldMap />
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
