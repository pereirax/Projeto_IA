import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Second Screen!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#006400',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#228B22',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default SecondScreen;
