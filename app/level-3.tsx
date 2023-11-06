import {Image, StyleSheet, Text, View} from 'react-native'
import React from "react";
import {useAssets} from "expo-asset";

export default function LevelThreeScreen() {
  const [assets] = useAssets([require('../assets/images/chirpychick1.png')]);

  return (<View style={styles.container}>
    <Text style={styles.header}>Chirpy Chick</Text>
    <Image
        style={styles.image}
        source={assets[0]}
    />
  </View>);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 500
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
})
