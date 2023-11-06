import { Button, Platform, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import ConfettiCannon from "react-native-confetti-cannon";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ModalScreen() {
  const params: any = useLocalSearchParams();
  const router = useRouter();


  const handleNextLevel = async () => {
    await AsyncStorage.setItem('current-level', "2")
    router.push("/home")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Level {params.level} complete </Text>
      <View style={styles.separator} />
      <ConfettiCannon
        count={200}
        origin={{ x: 50, y: 100 }}
      />
      <Button title={`Jump to level ${Number(params.level) + 1}`} onPress={handleNextLevel} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
});
