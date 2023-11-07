import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useAssets} from "expo-asset";
import React, {useState} from "react";
import {useRouter} from "expo-router";

export default function LevelTwoScreen() {
  const [assets] = useAssets([require('../assets/images/chirpychick1.png'),require('../assets/images/chirpychick2.png'), require('../assets/images/chirpychick3.png'), require('../assets/images/chirpychick4.png'), require('../assets/images/chirpychick5.png'), require('../assets/images/chirpychick6.png')]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const passingScore: number = 2;
  const questions = [
    {
      text: 'The chick should have told her grown up where she was going.',
      isTrue: true,
    },
    { text: 'It was a good idea for her to meet her new friend in real life.', isTrue: false },
    {
      text: 'People don\'t always use their real photo and give their real age.',
      isTrue: true,
    },
  ]

  const router = useRouter();

  if (!assets) {
    return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
    );
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 2);
  }

  const previousPage = () => {
    setCurrentPage(currentPage - 2);
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
      alert(`Game Over! Your score is ${score} ${passed ? 'You passed!' : 'Try again!'}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  function showImagesOrQuestions() {
    if (currentPage > 4) {
      return (<View style={styles.container}>
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
      </View>);
    } else {
      return (<View style={styles.container}>
        <Image
            style={styles.image}
            source={assets[currentPage]}
        />
        <Image
            style={styles.image}
            source={assets[currentPage + 1]}
        />
      </View>);
    }
  }

  return (<View style={styles.container}>
    <Text style={styles.header}>Chirpy Chick</Text>
    {showImagesOrQuestions()}
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => previousPage()}
      >
        <Text style={styles.buttonText}>Previous Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.button}
          onPress={() => nextPage()}
      >
        <Text style={styles.buttonText}>Next Page</Text>
      </TouchableOpacity>
    </View>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#91E8FC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
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
  question: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  confettiView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,

  },
})
