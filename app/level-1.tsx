import { StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Level 1</Text>
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
