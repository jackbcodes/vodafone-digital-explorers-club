import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAssets } from 'expo-asset';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import ConfettiCannon from 'react-native-confetti-cannon';

import { useLevelStore } from '../../hooks/useLevelStore';

export default function ModalScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const setLevel = useLevelStore((state) => state.setLevel);
  const [assets] = useAssets([require('../../assets/images/3d-tobi.png')]);

  if (!assets) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleNextLevel = async () => {
    setLevel(Number(params.level) + 1);
    router.push('/home');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={assets[0]} />
      <Text style={styles.title}>Level {params.level} complete</Text>
      <View style={styles.separator} />
      <ConfettiCannon count={200} origin={{ x: 50, y: 100 }} />
      <TouchableOpacity style={styles.roundButton} onPress={handleNextLevel}>
        <Text style={styles.roundButtonText}>
          {`Jump to level ${Number(params.level) + 1}`}
        </Text>
      </TouchableOpacity>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
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
    marginBottom: 30,
  },
  roundButton: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 70,
    backgroundColor: '#007bff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  roundButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
