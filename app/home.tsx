import { StyleSheet, View } from 'react-native'

import LevelLink, { ILevelLink } from '../components/LevelLink'
import { WorldMap } from '../components/WorldMap'
import { useLevel } from '../utils/storage'

const levels: ILevelLink[] = [
  {
    level: 1,
    linkOptions: {
      width: 90,
      height: 80,
      top: 610,
      left: 260,
    },
  },
  {
    level: 2,
    linkOptions: {
      width: 120,
      height: 100,
      top: 610,
      left: 110,
    },
  },
  {
    level: 3,
    linkOptions: {
      width: 120,
      height: 100,
      top: 470,
      left: 100,
    },
  },
  {
    level: 4,
    linkOptions: {
      width: 120,
      height: 100,
      top: 320,
      left: 20,
    },
  },
  {
    level: 5,
    linkOptions: {
      width: 120,
      height: 100,
      top: 220,
      left: 250,
    },
  },
  {
    level: 6,
    linkOptions: {
      width: 120,
      height: 120,
      top: 150,
      left: 100,
    },
  },
]

export default function HomeScreen() {
  const level = useLevel()

  return (
    <View style={styles.container}>
      {levels &&
        levels.map((level) => (
          <LevelLink
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
