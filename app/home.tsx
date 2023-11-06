import { StyleSheet, Text, View } from 'react-native'

import { Link } from 'expo-router'

import { WorldMap } from '../components/WorldMap'
import { useLevel } from '../utils/storage'

export default function HomeScreen() {
  const level = useLevel()

  return (
    <View style={styles.container}>
      <Text>Level: {level}</Text>
      <Link
        href='/level-6'
        style={{
          width: 120,
          height: 120,
          position: 'absolute',
          top: 150,
          left: 100,
          zIndex: 1,
        }}
      />
      <Link
        href='/level-5'
        style={{
          width: 120,
          height: 100,
          position: 'absolute',
          top: 220,
          left: 250,
          zIndex: 1,
        }}
      />
      <Link
        href='/level-4'
        style={{
          width: 120,
          height: 100,
          position: 'absolute',
          top: 320,
          left: 20,
          zIndex: 1,
        }}
      />
      <Link
        href='/level-3'
        style={{
          width: 120,
          height: 100,
          position: 'absolute',
          top: 470,
          left: 100,
          zIndex: 1,
        }}
      />
      <Link
        href='/level-2'
        style={{
          width: 120,
          height: 100,
          position: 'absolute',
          top: 610,
          left: 110,
          zIndex: 1,
        }}
      />
      <Link
        href='/level-1'
        style={{
          width: 90,
          height: 80,
          position: 'absolute',
          top: 610,
          left: 260,
          zIndex: 1,
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
