import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexAlingSelf = () => {
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
    flexDirection: 'row'
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: '#F0A23B',
    alignSelf: 'center'
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: '#5856D6',
    alignSelf: 'flex-start'
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: 'green',
    alignSelf: 'flex-end'
  },
});
