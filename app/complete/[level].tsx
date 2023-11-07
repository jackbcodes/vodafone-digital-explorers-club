import React from 'react'
import { Button, Image, Platform, StyleSheet, Text, View } from 'react-native'

import { useAssets } from 'expo-asset'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import ConfettiCannon from 'react-native-confetti-cannon'

import { useLevelStore } from '../../hooks/useLevelStore'

export default function ModalScreen() {
  const params: any = useLocalSearchParams()
  const router = useRouter()
  const setLevel = useLevelStore((state) => state.setLevel)
  const [assets] = useAssets([require('../../assets/images/3d-tobi.png')])


  if (!assets) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleNextLevel = async () => {
    setLevel(2)
    router.push('/home')
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={assets[0]}
      />
      <Text style={styles.title}>Level {params.level} complete </Text>
      <View style={styles.separator} />
      <ConfettiCannon
        count={200}
        origin={{ x: 50, y: 100 }}
      />
      <Button
        title={`Jump to level ${Number(params.level) + 1}`}
        onPress={handleNextLevel}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 300,
    height: 300,
  },
})
