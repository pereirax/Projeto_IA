import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#006400" barStyle="light-content" />
      <Text style={styles.title}>Football App</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondScreen')}>
        <Text style={styles.buttonText}>Go to Second Screen</Text>
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
    fontSize: 28,
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

export default HomeScreen;










