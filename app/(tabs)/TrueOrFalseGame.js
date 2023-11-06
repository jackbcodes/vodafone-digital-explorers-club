import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
];


export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].isTrue) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Game Over! Your score is ${score}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

   return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Understanding the Internet</Text>
        <View style={styles.content}>
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
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
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