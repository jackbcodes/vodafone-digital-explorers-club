import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { useAssets } from 'expo-asset'
import { StatusBar } from 'expo-status-bar'

export default function LevelSixScreen() {
  const [assets] = useAssets([require('../assets/images/qr-codes/reward-qr-code.png')])

  if (!assets) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Well Done!</Text>
      <Text style={styles.completed}>You've completed the Vodafone Digital Explorers Club!</Text>
      <Text style={styles.reward}>Please scan the QR code below to claim your free reward.</Text>
      <Image
        style={styles.qrCode}
        source={assets[0]}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style='light' />
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
  header: {
    fontSize: 28,
    color: '#666666',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  completed: {
    fontSize: 28,
    color: '#666666',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  reward: {
    fontSize: 20,
    color: '#666666',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  qrCode: {
    width: 300,
    height: 300,
  },
})
