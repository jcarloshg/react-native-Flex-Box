import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 2,
    padding: 0,
    fontSize: 50,
    width: 150,
    borderWidth: 5,
    backgroundColor: 'red',
  },
});
