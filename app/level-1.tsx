import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useAssets } from 'expo-asset';
import ConfettiCannon from 'react-native-confetti-cannon';

//Level 1 Understanding the Internet

const questions = [
  { text: 'It is safe to share your home address and phone number online.', isTrue: false },
  { text: 'Passwords are used to protect your accounts and keep them private.', isTrue: true },
  { text: 'Sharing your favorite color and the name of your pet online is safe.', isTrue: false },
]

export default function Level1() {
  const [assets] = useAssets([require('../assets/images/level-1-background.png')]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const [score, setScore] = useState(0);
  const passingScore = (questions.length / 100) * 80;

  if (!assets) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].isTrue) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      const passed = score >= passingScore;
      setIsComplete(passed);
      alert(`Game Over! Your score is ${score} ${passed ? 'You passed!' : 'Try again!'}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <View style={styles.container}>
      {isComplete && <View style={styles.confettiView}>
         <ConfettiCannon
          count={200}
          origin={{ x: 50, y: 100 }}
        />
      </View>}
      <Image
        style={styles.image}
        source={assets[0]}
      />
      <Text style={styles.header}>Understanding the Internet</Text>
      <Text style={styles.question}>{questions[currentQuestionIndex].text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAnswer(true)}
        >
          <Text style={styles.buttonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAnswer(false)}
        >
          <Text style={styles.buttonText}>False</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#91E8FC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  confettiView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,

  },
  image: {
    width: 400,
    height: 800,
    marginBottom: 20,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  question: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  score: {
    fontSize: 18,
  },
});