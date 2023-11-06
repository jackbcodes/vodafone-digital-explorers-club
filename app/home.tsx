import { StyleSheet, View } from 'react-native'

import LevelLink from '../components/LevelLink'
import { WorldMap } from '../components/WorldMap'
import { useLevelStore } from '../hooks/useLevelStore'

import { levels } from './constants/levels'

export default function HomeScreen() {
  const currentLevel = useLevelStore((state) => state.currentLevel)

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
