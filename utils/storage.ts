import { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

const LEVEL_KEY = 'level'

export const useLevel = () => {
  const [level, setLevel] = useState(0)

  useEffect(() => {
    const getLevel = async () => {
      const storedLevel = Number(await AsyncStorage.getItem(LEVEL_KEY))
      setLevel(storedLevel)
    }

    getLevel()
  }, [])

  return [level, setLevel]
}

export const setLevel = async (level: number) => await AsyncStorage.setItem(LEVEL_KEY, String(level))
