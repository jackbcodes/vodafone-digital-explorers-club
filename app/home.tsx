import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Link } from 'expo-router'

import LevelLink, { ILevelLink } from './components/LevelLink'
import { WorldMap } from './components/WorldMap'

const levels: ILevelLink[] = [
  {
    id: 'level-1',
    href: '/level-1',
    callback: () => {
      console.log('hi')
    },
    linkOptions: {
      width: 90,
      height: 80,
      top: 610,
      left: 260,
    },
  },
  {
    id: 'level-2',
    href: '/level-2',
    callback: () => {
      console.log('hi')
    },
    linkOptions: {
      width: 120,
      height: 100,
      top: 610,
      left: 110,
    },
  },
  {
    id: 'level-3',
    href: '/level-3',
    callback: () => {
      console.log('hi')
    },
    linkOptions: {
      width: 120,
      height: 100,
      top: 470,
      left: 100,
    },
  },
  {
    id: 'level-4',
    href: '/level-4',
    callback: () => {
      console.log('hi')
    },
    linkOptions: {
      width: 120,
      height: 100,
      top: 320,
      left: 20,
    },
  },
  {
    id: 'level-5',
    href: '/level-5',
    callback: () => {
      console.log('hi')
    },
    linkOptions: {
      width: 120,
      height: 100,
      top: 220,
      left: 250,
    },
  },
  {
    id: 'level-6',
    href: '/level-6',
    callback: () => {
      console.log('hi')
    },
    linkOptions: {
      width: 120,
      height: 120,
      top: 150,
      left: 100,
    },
  },
]

export default function HomeScreen() {
  const [level, setLevel] = useState(0)

  const getLevelFromStorage = async () => {
    const storedLevel = await AsyncStorage.getItem('current-level')
    setLevel(Number(storedLevel))
  }

  useEffect(() => {
    getLevelFromStorage()
  }, [])

  return (
    <View style={styles.container}>
      {levels &&
        levels.map((level) => (
          <LevelLink
            callback={level.callback}
            id={level.id}
            href={level.href}
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
