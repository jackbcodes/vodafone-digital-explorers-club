import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useAssets } from 'expo-asset';

//Level 1 Understanding the Internet

const questions = [
  { text: "If you see something online that makes you feel uncomfortable, you should keep it to yourself.", isTrue: false },
  { text: "If something online makes you feel uncomfortable, clicking on it might be fun.", isTrue: false },
  { text: "When you see something online that makes you uncomfortable, you should tell a trusted adult right away.", isTrue: true },
  { text: "It is safe to share your home address and phone number online.", isTrue: false },
  { text: "Sharing your favorite color and the name of your pet online is safe.", isTrue: true },
  { text: "Online, it's safe to share your passwords and school name.", isTrue: false },
  { text: "A password is used to lock your door.", isTrue: false },
  { text: "Passwords are used to protect your accounts and keep them private.", isTrue: true },
  { text: "Passwords are used to play video games.", isTrue: false },
  { text: "Passwords can change the weather.", isTrue: false },
];


export default function Level1() {
  const [assets] = useAssets([require('../assets/images/level-1-background')]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  if (!assets) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].isTrue) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert(`Game Over! Your score is ${score}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <View style={styles.container}>
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
  image: {
    width: 385.41,
    height: 610.22,
    marginBottom: 20,
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