import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import LevelLink from '../components/LevelLink'
import { WorldMap } from '../components/WorldMap'

import { levels } from './constants/levels'

export default function HomeScreen() {
  const [currentLevel, setCurrentLevel] = useState(0)

  const getCurrentLevel = async () => {
    const item = await AsyncStorage.getItem('current-level')
    setCurrentLevel(item ? Number(item) : 1)
  }

  useEffect(() => {
    getCurrentLevel()
  }, [])

  return (
    <View style={styles.container}>
      {levels.map((level) => (
        <LevelLink
          currentLevel={currentLevel}
          key={level.level}
          level={level.level}
          linkOptions={level.linkOptions}
        />
      ))}
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
