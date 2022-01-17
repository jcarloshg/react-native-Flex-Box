import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexAlingItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: '#F0A23B',
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: '#5856D6',
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: 'green',
  },
});
